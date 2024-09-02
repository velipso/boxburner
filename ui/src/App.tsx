import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  createContext,
  useContext,
  type ReactNode,
  type ChangeEventHandler,
} from 'react';
import {
  allGenerators,
  type JSONTypeDefSchema,
  type JSONTypeDefEnum,
  type JSONTypeDefElements,
  type JSONTypeDefProperties,
  type JSONTypeDefDiscriminator,
  type JSONTypeDef,
  type Surface,
  type Vec2,
  SettingsTypeDef,
  exportDocument,
} from '@velipso/boxburner';
import AutoAnimate from './AutoAnimate';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface IAppContext {
  units: string;
  defaultKerf: number;
  debug: boolean;
}

const AppContext = createContext<IAppContext | null>(null);

const colorPalette: Record<string, string> = {
  black: '#000000',
  gray: '#666666',
  red: '#ff0000',
  orange: '#ff7700',
  yellow: '#ffff00',
  green: '#00ff00',
  teal: '#00ffff',
  blue: '#0000ff',
  purple: '#ff00ff',
};

const availableColors: string[] = [
  'black',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
];

function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('Missing AppContext');
  }
  return ctx;
}

function styleHide(hide?: boolean) {
  return hide ? { display: 'none' } : undefined;
}

function Select<T>({
  className,
  title,
  options,
  value,
  setValue,
}: {
  className?: string;
  title?: string;
  options: Array<{ label: string; value: T }>;
  value: T;
  setValue: (v: T | ((prevValue: T) => T)) => void;
}) {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const i = parseFloat(event.target.value);
      setValue(options[i].value);
    },
    [options, setValue],
  );
  return (
    <>
      {title && <div className="input-title">{title}:</div>}
      <select
        className={className}
        value={options.findIndex(({ value: v }) => v === value)}
        onChange={onChange}
      >
        {options.map(({ label }, i) => (
          <option key={i} value={`${i}`}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}

function InputNumber({
  value,
  setValue,
  integer,
}: {
  value: number;
  setValue: (v: number | ((prevValue: number) => number)) => void;
  integer: boolean;
}) {
  const [text, setText] = useState(`${value}`);
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
      const v = parseFloat(event.target.value);
      if (!isNaN(v)) {
        setValue(v);
      }
    },
    [setText, setValue],
  );
  const v = parseFloat(text);
  const error = isNaN(v) || (integer && Math.round(v) !== v);
  return (
    <input
      className={error ? 'number error' : 'number'}
      type="text"
      value={text}
      onChange={onChange}
    />
  );
}

function InputString({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string | ((prevValue: string) => string)) => void;
}) {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue],
  );
  return (
    <input className="string" type="text" value={value} onChange={onChange} />
  );
}

function InputEnum({
  typedef,
  value,
  setValue,
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDefEnum;
  value: any;
  setValue: (v: any | ((prevValue: any) => any)) => void;
}) {
  return (
    <>
      <MetaTitle metadata={typedef.metadata}>
        <Select
          className="enum"
          options={typedef.enum.map((e) => ({ label: e, value: e }))}
          value={value}
          setValue={setValue}
        />
      </MetaTitle>
    </>
  );
}

function newJTD(typedef: JSONTypeDef): any {
  if ('type' in typedef || 'enum' in typedef) {
    return typedef.metadata.default;
  } else if ('elements' in typedef) {
    const d = typedef.metadata.default;
    return d === null
      ? null
      : Array.from({ length: d }).map((_) => newJTD(typedef.elements));
  } else if ('properties' in typedef) {
    const result: any = {};
    for (const k of Object.keys(typedef.properties)) {
      result[k] = newJTD(typedef.properties[k]);
    }
    return result;
  } else if ('discriminator' in typedef) {
    const d = typedef.metadata.default;
    return d === null ? null : newJTD(typedef.mapping[d]);
  } else if ('ref' in typedef) {
    throw new Error('TODO: implement ref');
  }
  console.error(typedef);
  throw new Error('Unknown typedef');
}

function InputElements({
  schema,
  typedef,
  value: values,
  setValue,
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDefElements;
  value: any[];
  setValue: (v: any[] | ((prevValue: any[]) => any[])) => void;
}) {
  const [keys, setKeys] = useState(() => values.map((_, i) => i));
  const onAdd = useCallback(() => {
    setValue((p: any[]) => {
      const n = [...p];
      n.push(newJTD(typedef.elements));
      return n;
    });
    setKeys((p: number[]) => {
      const nextKey = p.reduce((a, b) => Math.max(a, b), 0) + 1;
      const n = [...p];
      n.push(nextKey);
      return n;
    });
  }, [setValue, typedef]);
  const onRemove = useCallback(
    (index: number) => {
      const update = (p: any[]) => {
        const n = [...p];
        n.splice(index, 1);
        return n;
      };
      setValue(update);
      setKeys(update);
    },
    [setValue, setKeys],
  );
  const onDuplicate = useCallback(
    (index: number) => {
      setValue((p: any[]) => {
        const n = [...p];
        n.splice(index, 0, JSON.parse(JSON.stringify(n[index])));
        return n;
      });
      setKeys((p: number[]) => {
        const nextKey = p.reduce((a, b) => Math.max(a, b), 0) + 1;
        const n = [...p];
        n.splice(index, 0, nextKey);
        return n;
      });
    },
    [setValue, setKeys],
  );
  const onMove = useCallback(
    (index: number, dir: number) => {
      const update = (p: any[]) => {
        const n = [...p];
        const i = n.splice(index, 1)[0];
        n.splice(index + dir, 0, i);
        return n;
      };
      setValue(update);
      setKeys(update);
    },
    [setValue, setKeys],
  );
  const [hide, setHide] = useState(false);
  const template = typedef.metadata?.itemTitle || '{}';
  return (
    <>
      <MetaTitle
        metadata={typedef.metadata}
        postfix={`(${values.length})`}
        hide={hide}
        setHide={setHide}
      />
      <AutoAnimate>
        {values.map((value, i) => (
          <div
            className="tab elements-item"
            style={styleHide(hide)}
            key={keys[i]}
          >
            <div className="input-title">
              {template.replace(/\{\}/g, `${i + 1}`)}:
              <div style={{ float: 'right' }}>
                <button
                  title="Move Up"
                  disabled={i <= 0}
                  className="elements-move"
                  onClick={() => {
                    onMove(i, -1);
                  }}
                >
                  ↑
                </button>
                <button
                  title="Move Down"
                  disabled={i >= values.length - 1}
                  className="elements-move"
                  onClick={() => {
                    onMove(i, 1);
                  }}
                >
                  ↓
                </button>
                <button
                  title="Duplicate"
                  className="elements-duplicate"
                  onClick={() => {
                    onDuplicate(i);
                  }}
                >
                  ⊕
                </button>
                <button
                  title="Remove"
                  className="elements-remove"
                  onClick={() => {
                    onRemove(i);
                  }}
                >
                  &times;
                </button>
              </div>
            </div>
            <JTDEditValue
              schema={schema}
              typedef={typedef.elements}
              value={value}
              setValue={(v) => {
                setValue((p: any[]) => {
                  const n = [...p];
                  n[i] = typeof v === 'function' ? v(n[i]) : v;
                  return n;
                });
              }}
            />
          </div>
        ))}
      </AutoAnimate>
      {values.length <= 0 && (
        <div className="tab" style={styleHide(hide)}>
          <p>
            <em>Empty</em>
          </p>
        </div>
      )}
      <div className="tab" style={styleHide(hide)}>
        <button onClick={onAdd}>
          {`Add ${template.replace(/\{\}/g, `${values.length + 1}`)}`}
        </button>
      </div>
    </>
  );
}

function InputProperties({
  schema,
  typedef,
  value,
  setValue,
  skipTitle,
  hide,
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDefProperties;
  value: any;
  setValue: (v: any | ((prevValue: any) => any)) => void;
  skipTitle?: boolean;
  hide?: boolean;
}) {
  const [innerHide, setInnerHide] = useState(!!typedef.metadata.startHidden);
  return (
    <>
      {!skipTitle && (
        <MetaTitle
          metadata={typedef.metadata}
          hide={innerHide}
          setHide={setInnerHide}
        />
      )}
      {typedef.metadata.order.map((k) => {
        const td = typedef.properties[k];
        if (!td) {
          return <p>ERROR: Missing typedef for {k}</p>;
        }
        return (
          <div
            key={k}
            className={
              typedef.metadata.untabParams && k === 'params' ? undefined : 'tab'
            }
            style={styleHide(hide || innerHide)}
          >
            <JTDEditValue
              schema={schema}
              typedef={td}
              value={value[k]}
              setValue={(v) => {
                setValue((p: any) => ({
                  ...p,
                  [k]: typeof v === 'function' ? v(p[k]) : v,
                }));
              }}
            />
          </div>
        );
      })}
    </>
  );
}

function InputDiscriminator({
  schema,
  typedef,
  value,
  setValue,
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDefDiscriminator;
  value: any;
  setValue: (v: any | ((prevValue: any) => any)) => void;
}) {
  const [hide, setHide] = useState(true);
  const discVal = value?.[typedef.discriminator] ?? null;
  const [objects, setObjects] = useState(() => {
    const objects = new Map<string, any>();
    for (const k of typedef.metadata.order) {
      if (discVal === k) {
        objects.set(k, value);
      } else {
        objects.set(k, newJTD(typedef.mapping[k]));
      }
    }
    return objects;
  });
  const setDiscVal = useCallback(
    (disc: string | null | ((p: string | null) => string | null)) => {
      const v = typeof disc === 'function' ? disc(discVal) : disc;
      setValue(v === null ? null : objects.get(v));
    },
    [discVal, objects, setValue],
  );
  const setProperties = useCallback(
    (v: any | ((prevValue: any) => any)) => {
      const newValue = typeof v === 'function' ? v(value) : v;
      const newObjects = new Map(objects);
      newObjects.set(discVal, newValue);
      setObjects(newObjects);
      setValue(newValue);
    },
    [objects, value, setValue, discVal, setObjects],
  );
  return (
    <>
      <MetaTitle metadata={typedef.metadata} />
      <div className="hide-wrap">
        <HideButton
          disabled={discVal === null}
          hide={discVal === null ? true : hide}
          setHide={discVal === null ? () => {} : setHide}
        />
        <Select
          options={[
            ...(typedef.nullable
              ? [{ label: typedef.metadata.nullHint || '<none>', value: null }]
              : []),
            ...typedef.metadata.order.map((k) => ({
              label: typedef.mapping[k].metadata.title || k,
              value: k,
            })),
          ]}
          value={discVal}
          setValue={setDiscVal}
        />
      </div>
      {discVal !== null && (
        <InputProperties
          hide={hide}
          key={discVal}
          skipTitle={true}
          schema={schema}
          typedef={typedef.mapping[discVal]}
          value={value}
          setValue={setProperties}
        />
      )}
    </>
  );
}

function HideButton({
  disabled,
  hide,
  setHide,
}: {
  disabled?: boolean;
  hide?: boolean;
  setHide?: (hide: boolean | ((prevValue: boolean) => boolean)) => void;
}) {
  const toggleHidden = useCallback(() => {
    setHide?.((v) => !v);
  }, [setHide]);
  return (
    <>
      {setHide && (
        <button
          className="hide-button"
          style={disabled ? { opacity: 0.5 } : undefined}
          onClick={toggleHidden}
        >
          {hide ? '▶' : '▼'}
        </button>
      )}
    </>
  );
}

function MetaTitle({
  metadata: { title: titleOrig, description: descriptionOrig },
  postfix,
  hide,
  setHide,
  children,
}: {
  metadata: {
    title?: string;
    description?: string;
  };
  postfix?: string;
  hide?: boolean;
  setHide?: (hide: boolean | ((p: boolean) => boolean)) => void;
  children?: ReactNode;
}) {
  const { units } = useAppContext();
  const title = titleOrig?.replace(/\(units\)/g, `(${units})`);
  const description = descriptionOrig?.replace(/\(units\)/g, `(${units})`);
  return (
    <>
      {title && (
        <div className={setHide ? 'input-title hide-wrap' : 'input-title'}>
          {setHide && <HideButton hide={hide} setHide={setHide} />}
          <div className="title">
            <span
              style={
                setHide ? { cursor: 'pointer', userSelect: 'none' } : undefined
              }
              onClick={
                setHide
                  ? () => {
                      setHide(!hide);
                    }
                  : undefined
              }
            >
              {postfix ? `${title} ${postfix}` : title}
            </span>
            {description && (
              <>
                {' '}
                <span
                  className="description"
                  onClick={() => {
                    alert(description);
                  }}
                  title={description}
                >
                  ⓘ
                </span>
              </>
            )}
            :{children && <> {children}</>}
          </div>
        </div>
      )}
    </>
  );
}

function JTDEditValue({
  schema,
  typedef,
  value,
  setValue,
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDef;
  value: any;
  setValue: (v: any | ((prevValue: any) => any)) => void;
}) {
  if ('type' in typedef) {
    switch (typedef.type) {
      case 'float64':
      case 'int32':
        return (
          <MetaTitle metadata={typedef.metadata}>
            {typedef.nullable ? (
              <>
                {value === null ? (
                  <input
                    className="number"
                    type="text"
                    disabled={true}
                    value={typedef.metadata.nullHint || 'null'}
                  />
                ) : (
                  <InputNumber
                    value={value}
                    setValue={setValue}
                    integer={typedef.type === 'int32'}
                  />
                )}
                <input
                  className="nullable"
                  type="checkbox"
                  checked={value !== null}
                  onChange={() => {
                    if (value === null) {
                      setValue(typedef.metadata.defaultNotNull ?? 0);
                    } else {
                      setValue(null);
                    }
                  }}
                />
              </>
            ) : (
              <InputNumber
                value={value}
                setValue={setValue}
                integer={typedef.type === 'int32'}
              />
            )}
          </MetaTitle>
        );
      case 'string':
        return (
          <MetaTitle metadata={typedef.metadata}>
            {typedef.nullable ? (
              <>
                {value === null ? (
                  <input
                    className="number"
                    type="text"
                    disabled={true}
                    value={typedef.metadata.nullHint || 'null'}
                  />
                ) : (
                  <InputString value={value} setValue={setValue} />
                )}
                <input
                  className="nullable"
                  type="checkbox"
                  checked={value !== null}
                  onChange={() => {
                    if (value === null) {
                      setValue(typedef.metadata.defaultNotNull ?? '');
                    } else {
                      setValue(null);
                    }
                  }}
                />
              </>
            ) : (
              <InputString value={value} setValue={setValue} />
            )}
          </MetaTitle>
        );
      case 'boolean':
        return (
          <>
            <MetaTitle metadata={typedef.metadata}>
              <div className="boolean">
                <button
                  className={value ? 'selected' : undefined}
                  onClick={() => {
                    setValue(true);
                  }}
                >
                  Yes
                </button>{' '}
                <button
                  className={!value ? 'selected' : undefined}
                  onClick={() => {
                    setValue(false);
                  }}
                >
                  No
                </button>
              </div>
            </MetaTitle>
          </>
        );
    }
  } else if ('enum' in typedef) {
    return (
      <InputEnum
        schema={schema}
        typedef={typedef}
        value={value}
        setValue={setValue}
      />
    );
  } else if ('elements' in typedef) {
    return (
      <InputElements
        schema={schema}
        typedef={typedef}
        value={value}
        setValue={setValue}
      />
    );
  } else if ('properties' in typedef) {
    return (
      <InputProperties
        schema={schema}
        typedef={typedef}
        value={value}
        setValue={setValue}
      />
    );
  } else if ('discriminator' in typedef) {
    return (
      <InputDiscriminator
        schema={schema}
        typedef={typedef}
        value={value}
        setValue={setValue}
      />
    );
  } else if ('ref' in typedef) {
    console.error('TODO: implement ref');
  }
  return (
    <p>
      ERROR: Unknown JSON type def! <pre>{JSON.stringify(typedef)}</pre>
    </p>
  );
}

function JTDEditor({
  schema,
  value,
  setValue,
}: {
  schema: JSONTypeDefSchema;
  value: any;
  setValue: (v: any | ((prevValue: any) => any)) => void;
}) {
  return (
    <JTDEditValue
      schema={schema}
      typedef={schema}
      value={value}
      setValue={setValue}
    />
  );
}

class Transform {
  m: [number, number, number, number, number, number];

  constructor(matrix?: Transform) {
    if (matrix) {
      this.m = [
        matrix.m[0],
        matrix.m[1],
        matrix.m[2],
        matrix.m[3],
        matrix.m[4],
        matrix.m[5],
      ];
    } else {
      this.m = [1, 0, 0, 1, 0, 0];
    }
  }

  reset() {
    this.m[0] = 1;
    this.m[1] = 0;
    this.m[2] = 0;
    this.m[3] = 1;
    this.m[4] = 0;
    this.m[5] = 0;
  }

  copy(matrix: Transform) {
    this.m[0] = matrix.m[0];
    this.m[1] = matrix.m[1];
    this.m[2] = matrix.m[2];
    this.m[3] = matrix.m[3];
    this.m[4] = matrix.m[4];
    this.m[5] = matrix.m[5];
  }

  multiply(matrix: Transform) {
    const m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
    const m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
    const m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
    const m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
    const dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
    const dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
    this.m[4] = dx;
    this.m[5] = dy;
  }

  invert() {
    const d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
    const m0 = this.m[3] * d;
    const m1 = -this.m[1] * d;
    const m2 = -this.m[2] * d;
    const m3 = this.m[0] * d;
    const m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
    const m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    this.m[0] = m0;
    this.m[1] = m1;
    this.m[2] = m2;
    this.m[3] = m3;
    this.m[4] = m4;
    this.m[5] = m5;
  }

  rotate(rad: number) {
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    const m11 = this.m[0] * c + this.m[2] * s;
    const m12 = this.m[1] * c + this.m[3] * s;
    const m21 = this.m[0] * -s + this.m[2] * c;
    const m22 = this.m[1] * -s + this.m[3] * c;
    this.m[0] = m11;
    this.m[1] = m12;
    this.m[2] = m21;
    this.m[3] = m22;
  }

  translate(d: Vec2) {
    this.m[4] += this.m[0] * d[0] + this.m[2] * d[1];
    this.m[5] += this.m[1] * d[0] + this.m[3] * d[1];
  }

  translateXY(x: number, y: number) {
    this.m[4] += this.m[0] * x + this.m[2] * y;
    this.m[5] += this.m[1] * x + this.m[3] * y;
  }

  scale(s: number) {
    this.m[0] *= s;
    this.m[1] *= s;
    this.m[2] *= s;
    this.m[3] *= s;
  }

  transformPoint(p: Vec2): Vec2 {
    return [
      p[0] * this.m[0] + p[1] * this.m[2] + this.m[4],
      p[0] * this.m[1] + p[1] * this.m[3] + this.m[5],
    ];
  }
}

class Camera {
  center: Vec2 = [0, 0];
  zoom = 0;
  transform = new Transform();
  transformInvert = new Transform();

  zoomFactor() {
    return Math.pow(2, this.zoom);
  }

  calc(width: number, height: number) {
    this.transform.reset();
    this.transform.translateXY(width / 2, height / 2);
    this.transform.scale(this.zoomFactor());
    this.transform.translateXY(-this.center[0], -this.center[1]);
    this.transformInvert.copy(this.transform);
    this.transformInvert.invert();
    return this;
  }

  screenToPoint(p: Vec2) {
    return this.transformInvert.transformPoint(p);
  }

  pointToScreen(p: Vec2) {
    return this.transform.transformPoint(p);
  }

  copyToContext(ctx: CanvasRenderingContext2D) {
    ctx.setTransform(
      this.transform.m[0],
      this.transform.m[1],
      this.transform.m[2],
      this.transform.m[3],
      this.transform.m[4],
      this.transform.m[5],
    );
    return this;
  }
}

function wrapFillText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) {
  const renderLine = (line: string) => {
    ctx.fillText(line, x, y);
    y += lineHeight;
  };
  for (const wline of text.split('\n')) {
    if (ctx.measureText(wline).width < maxWidth) {
      renderLine(wline);
    } else {
      const words = wline.split(' ');

      // break long words
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let insertWord = '';
        while (word.length > 1 && ctx.measureText(word).width >= maxWidth) {
          const ch = word.substr(-1);
          word = word.substr(0, word.length - 1);
          insertWord = ch + insertWord;
        }
        if (insertWord) {
          words[i] = word;
          words.splice(i + 1, 0, insertWord);
        }
      }

      let line = '';
      for (;;) {
        const word = words.shift();
        if (typeof word === 'undefined') {
          break;
        }
        if (line) {
          if (ctx.measureText(`${line} ${word}`).width < maxWidth) {
            line += ` ${word}`;
          } else {
            renderLine(line);
            line = word;
          }
        } else {
          line = word;
        }
      }
      renderLine(line);
    }
  }
}

interface ISurfaceDetails {
  surface: Surface;
  cutColor: string;
  scoreColor: string;
}

interface ISurfaceItem {
  surface: Surface;
  boundingBox: [Vec2, Vec2];
  boundingBoxSize: Vec2;
  area: number;
  offset: Vec2;
  cutColor: string;
  scoreColor: string;
}

function Canvas3D({
  grid,
  units,
  items,
  error,
  onView,
  onGrid,
}: {
  grid: boolean;
  units: string;
  items: ISurfaceItem[];
  error: string;
  onView: () => void;
  onGrid: () => void;
}) {
  const [cnv, setCnv] = useState<HTMLCanvasElement | null>(null);
  const canvasRef = useCallback(
    (cnv: HTMLCanvasElement | null) => {
      setCnv(cnv);
    },
    [setCnv],
  );
  const scene3d = useMemo(() => {
    if (!cnv) {
      return null;
    }
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe3e6ed);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color(0xddbe9d),
      side: THREE.DoubleSide,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.rotation.x += 0.4;
    cube.rotation.y += 0.4;
    scene.add(cube);

    scene.add(new THREE.AmbientLight(0xf0f0f0, 1));

    const light = new THREE.SpotLight(0xffffff, 2);
    light.position.set(0, 150, 0);
    light.angle = Math.PI * 0.2;
    light.decay = 0;
    scene.add(light);

    const dlight = new THREE.DirectionalLight(0xffffff, 2);
    scene.add(dlight);

    const grid = new THREE.GridHelper(
      2000,
      100,
      new THREE.Color(0x888888),
      new THREE.Color(0xcccccc),
    );
    grid.position.y = -9;
    scene.add(grid);

    camera.position.set(0, 0, 2);
    const controls = new OrbitControls(camera, cnv);
    return { scene, camera, renderer, light, dlight, controls };
  }, [cnv]);

  const ctx = useMemo(() => cnv?.getContext('2d'), [cnv]);
  const dpr = window.devicePixelRatio || 1;
  const { debug } = useAppContext();
  const redraw = useCallback(() => {
    if (!cnv || !ctx || !scene3d) {
      return;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    scene3d.dlight.position.set(
      scene3d.camera.position.x + 0.32,
      scene3d.camera.position.y + 0.39,
      scene3d.camera.position.z - 1.3,
    );
    scene3d.renderer.render(scene3d.scene, scene3d.camera);
    ctx.drawImage(scene3d.renderer.domElement, 0, 0, cnv.width, cnv.height);
  }, [cnv, ctx, items, grid, dpr, error, units, debug, scene3d]);
  useEffect(() => {
    redraw();
  }, [redraw]);

  const onCenter = useCallback(() => {
    if (!cnv) {
      return;
    }
    redraw();
  }, [cnv, redraw]);

  const firstResize = useRef(true);
  useEffect(() => {
    if (!cnv || !ctx || !scene3d) {
      return;
    }
    const onResize = () => {
      const parent = cnv.parentElement;
      if (parent) {
        const width = Math.floor(parent.clientWidth);
        const height = Math.floor(parent.clientHeight);
        cnv.width = width * dpr;
        cnv.height = height * dpr;
        scene3d.renderer.setPixelRatio(dpr);
        scene3d.renderer.setSize(width, height);
        scene3d.camera.aspect = width / height;
        scene3d.camera.updateProjectionMatrix();
        cnv.style.width = `${width}px`;
        cnv.style.height = `${height}px`;
        if (firstResize.current) {
          firstResize.current = false;
          onCenter();
        } else {
          redraw();
        }
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    scene3d.controls.addEventListener('change', redraw);

    return () => {
      scene3d.controls.dispose();
      window.removeEventListener('resize', onResize);
    };
  }, [cnv, onCenter, firstResize, dpr, redraw, scene3d]);

  return (
    <>
      <canvas ref={canvasRef} />
      <div className="status">
        <button onClick={onView}>View: 3D (WIP)</button>
        <button onClick={onGrid}>Grid: {grid ? 'On' : 'Off'}</button>
        <button onClick={onCenter}>Center</button>
      </div>
    </>
  );
}

function Canvas2D({
  grid,
  units,
  items,
  error,
  onView,
  onGrid,
}: {
  grid: boolean;
  units: string;
  items: ISurfaceItem[];
  error: string;
  onView: () => void;
  onGrid: () => void;
}) {
  const [cnv, setCnv] = useState<HTMLCanvasElement | null>(null);
  const canvasRef = useCallback(
    (cnv: HTMLCanvasElement | null) => {
      setCnv(cnv);
    },
    [setCnv],
  );
  const ctx = useMemo(() => cnv?.getContext('2d'), [cnv]);
  const dpr = window.devicePixelRatio || 1;
  const camera = useMemo(() => new Camera(), []);
  const { debug } = useAppContext();
  const redraw = useCallback(() => {
    if (!cnv || !ctx) {
      return;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    camera.calc(cnv.width, cnv.height).copyToContext(ctx);

    if (grid) {
      const min = camera.screenToPoint([0, 0]);
      const max = camera.screenToPoint([cnv.width, cnv.height]);
      const pixelsPerUnit = cnv.width / (max[0] - min[0]);
      const pixelsPerLine = 15 * dpr;
      const unitsPerLineIdeal = pixelsPerLine / pixelsPerUnit;
      // round to nearest power of 10
      const unitsPerLine = Math.pow(
        10,
        Math.round(Math.log10(unitsPerLineIdeal)),
      );
      ctx.lineWidth = dpr / camera.zoomFactor();
      const minX = Math.round(min[0] / unitsPerLine) - 1;
      const maxX = Math.round(max[0] / unitsPerLine) + 1;
      const minY = Math.round(min[1] / unitsPerLine) - 1;
      const maxY = Math.round(max[1] / unitsPerLine) + 1;
      ctx.beginPath();
      for (let x = minX; x <= maxX; x++) {
        if (x % 10 !== 0) {
          ctx.moveTo(x * unitsPerLine, min[1]);
          ctx.lineTo(x * unitsPerLine, max[1]);
        }
      }
      for (let y = minY; y <= maxY; y++) {
        if (y % 10 !== 0) {
          ctx.moveTo(min[0], y * unitsPerLine);
          ctx.lineTo(max[0], y * unitsPerLine);
        }
      }
      ctx.strokeStyle = '#ccc';
      ctx.stroke();
      ctx.beginPath();
      for (let x = minX; x <= maxX; x++) {
        if (x % 10 === 0) {
          ctx.moveTo(x * unitsPerLine, min[1]);
          ctx.lineTo(x * unitsPerLine, max[1]);
        }
      }
      for (let y = minY; y <= maxY; y++) {
        if (y % 10 === 0) {
          ctx.moveTo(min[0], y * unitsPerLine);
          ctx.lineTo(max[0], y * unitsPerLine);
        }
      }
      ctx.strokeStyle = '#888';
      ctx.stroke();

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = '18px/18px sans-serif';
      ctx.fillStyle = '#000';
      ctx.fillText(
        `Grid size: ${unitsPerLine}${units}`,
        10,
        cnv.height / dpr - 17,
      );
      ctx.restore();
    }

    if (debug) {
      // draw kerf
      for (const { surface, offset } of items) {
        const ns = surface.applyKerf();
        if (ns !== surface) {
          ns.border.output(ctx, [1, 0, 0, 1, offset[0], offset[1]]);
          ctx.lineWidth = (4 * dpr) / camera.zoomFactor();
          ctx.strokeStyle = '#44007777';
          ctx.stroke();
        }
      }
      // draw bounding box
      for (const { offset, boundingBox } of items) {
        ctx.beginPath();
        ctx.rect(
          offset[0] + boundingBox[0][0],
          offset[1] + boundingBox[0][1],
          boundingBox[1][0] - boundingBox[0][0],
          boundingBox[1][1] - boundingBox[0][1],
        );
        ctx.lineWidth = (6 * dpr) / camera.zoomFactor();
        ctx.strokeStyle = '#0cc';
        ctx.stroke();
      }
    }

    for (const it of items) {
      const { surface, offset } = it;
      surface.border.output(ctx, [1, 0, 0, 1, offset[0], offset[1]]);
      ctx.fillStyle = colorPalette[it.cutColor];
      ctx.save();
      ctx.globalAlpha = 0.125;
      ctx.fill();
      ctx.restore();
      ctx.lineWidth = (3 * dpr) / camera.zoomFactor();
      ctx.strokeStyle = colorPalette[it.cutColor];
      ctx.stroke();
      surface.cuts.output(ctx, [1, 0, 0, 1, offset[0], offset[1]]);
      ctx.lineWidth = (3 * dpr) / camera.zoomFactor();
      ctx.strokeStyle = colorPalette[it.cutColor];
      ctx.stroke();
      surface.scores.output(ctx, [1, 0, 0, 1, offset[0], offset[1]]);
      ctx.lineWidth = (3 * dpr) / camera.zoomFactor();
      ctx.strokeStyle = colorPalette[it.scoreColor];
      ctx.stroke();
    }

    if (debug) {
      for (const it of items) {
        const { surface, offset } = it;

        class ReceiverPoint {
          color: string;
          ctx: CanvasRenderingContext2D;

          constructor(color: string, ctx: CanvasRenderingContext2D) {
            this.color = color;
            this.ctx = ctx;
          }

          point(x: number, y: number) {
            this.ctx.beginPath();
            this.ctx.arc(x, y, (3 * dpr) / camera.zoomFactor(), 0, Math.PI * 2);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
          }

          beginPath() {}

          moveTo() {}

          lineTo(x: number, y: number) {
            this.point(x, y);
          }

          bezierCurveTo(
            c1x: number,
            c1y: number,
            c2x: number,
            c2y: number,
            x: number,
            y: number,
          ) {
            this.point(c1x, c1y);
            this.point(c2x, c2y);
            this.point(x, y);
          }

          closePath() {}
        }

        const ns = surface.applyKerf();
        if (ns !== surface) {
          ns.border.output(new ReceiverPoint('#93f', ctx), [
            1,
            0,
            0,
            1,
            offset[0],
            offset[1],
          ]);
        }
        surface.border.output(new ReceiverPoint('#07f', ctx), [
          1,
          0,
          0,
          1,
          offset[0],
          offset[1],
        ]);
      }
    }

    if (error) {
      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = 'bold 22px/22px sans-serif';
      ctx.fillStyle = '#f00';
      wrapFillText(ctx, error, 10, 32, cnv.width / dpr - 20, 26);
      ctx.restore();
    }
  }, [cnv, ctx, camera, items, grid, dpr, error, units, debug]);
  useEffect(() => {
    redraw();
  }, [redraw]);

  const onCenter = useCallback(() => {
    if (!cnv) {
      return;
    }
    const box: [Vec2, Vec2] = [
      [0, 0],
      [0, 0],
    ];
    for (const it of items) {
      const sx = it.offset[0] + it.boundingBox[0][0];
      const sy = it.offset[1] + it.boundingBox[0][1];
      box[0][0] = Math.min(box[0][0], sx);
      box[0][1] = Math.min(box[0][1], sy);
      box[1][0] = Math.max(box[1][0], sx + it.boundingBoxSize[0]);
      box[1][1] = Math.max(box[1][1], sy + it.boundingBoxSize[1]);
    }
    camera.center[0] = (box[0][0] + box[1][0]) / 2;
    camera.center[1] = (box[0][1] + box[1][1]) / 2;
    const padding = 20;
    const mulx = cnv.width / (box[1][0] - box[0][0] + 2 * padding);
    const muly = cnv.height / (box[1][1] - box[0][1] + 2 * padding);
    const mul = Math.min(mulx, muly);
    camera.zoom = Math.log2(mul);
    redraw();
  }, [cnv, camera, redraw, items]);

  const firstResize = useRef(true);
  useEffect(() => {
    if (!cnv || !ctx) {
      return;
    }
    const onResize = () => {
      const parent = cnv.parentElement;
      if (parent) {
        const width = Math.floor(parent.clientWidth);
        const height = Math.floor(parent.clientHeight);
        cnv.width = width * dpr;
        cnv.height = height * dpr;
        cnv.style.width = `${width}px`;
        cnv.style.height = `${height}px`;
        if (firstResize.current) {
          firstResize.current = false;
          onCenter();
        } else {
          redraw();
        }
      }
    };
    let mousedown: null | {
      buttons: number;
      pos: Vec2;
    } = null;
    const mousePos = (e: MouseEvent): Vec2 => {
      const rect = cnv.getBoundingClientRect();
      return [dpr * (e.clientX - rect.left), dpr * (e.clientY - rect.top)];
    };
    const mouseMove = (pos: Vec2) => {
      if (mousedown) {
        const c1 = camera.screenToPoint(pos);
        const c2 = camera.screenToPoint(mousedown.pos);
        mousedown.pos = pos;
        camera.center[0] += c2[0] - c1[0];
        camera.center[1] += c2[1] - c1[1];
        redraw();
      }
    };
    const mouseUp = (_pos: Vec2) => {
      mousedown = null;
    };
    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      const pos = mousePos(e);
      mousedown = { buttons: e.buttons, pos };
      mouseMove(pos);
    };
    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      mouseMove(mousePos(e));
    };
    const onMouseOut = (e: MouseEvent) => {
      e.preventDefault();
      if (mousedown) {
        mouseUp(mousePos(e));
      }
    };
    const onMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      if (mousedown) {
        mouseUp(mousePos(e));
      }
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const pos = mousePos(e);
      const p1 = camera.screenToPoint(pos);
      camera.zoom -= e.deltaY * 0.003;
      camera.calc(cnv.width, cnv.height);
      const p2 = camera.screenToPoint(pos);
      camera.center[0] -= p2[0] - p1[0];
      camera.center[1] -= p2[1] - p1[1];
      redraw();
    };

    cnv.addEventListener('mousedown', onMouseDown);
    cnv.addEventListener('mousemove', onMouseMove);
    cnv.addEventListener('mouseout', onMouseOut);
    cnv.addEventListener('mouseup', onMouseUp);
    cnv.addEventListener('wheel', onWheel);
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      cnv.removeEventListener('mousedown', onMouseDown);
      cnv.removeEventListener('mousemove', onMouseMove);
      cnv.removeEventListener('mouseout', onMouseOut);
      cnv.removeEventListener('mouseup', onMouseUp);
      cnv.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', onResize);
    };
  }, [cnv, camera, onCenter, firstResize, dpr, redraw]);

  return (
    <>
      <canvas ref={canvasRef} />
      <div className="status">
        <button onClick={onView}>View: 2D</button>
        <button onClick={onGrid}>Grid: {grid ? 'On' : 'Off'}</button>
        <button onClick={onCenter}>Center</button>
      </div>
    </>
  );
}

function ImportExportModal({
  value,
  onCancel,
  onImport,
}: {
  value: string;
  onCancel: () => void;
  onImport?: (data: any) => void;
}) {
  const [text, setText] = useState(value);
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      setText(e.currentTarget.value);
    },
    [setText],
  );
  const stopPropagation = useCallback((e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  }, []);
  return (
    <>
      <div className="modal-background" onClick={onCancel} />
      <div className="modal-foreground" onClick={onCancel}>
        <div className="inner" onClick={stopPropagation}>
          <button className="close" type="button" onClick={onCancel}>
            &times;
          </button>
          {onImport ? (
            <p>Paste your settings below:</p>
          ) : (
            <p>Copy your settings below:</p>
          )}
          <textarea
            value={text}
            onChange={onChange}
            readOnly={!onImport}
            spellCheck={false}
          />
          {onImport && (
            <button
              className="import"
              onClick={() => {
                try {
                  onImport(JSON.parse(text));
                } catch (err) {
                  console.error(err);
                  alert('Invalid settings');
                }
              }}
            >
              ⍈ Import
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function App() {
  const schema = useMemo(
    (): JSONTypeDefSchema => ({
      definitions: {
        // TODO: this
      },
      properties: {
        version: {
          type: 'int32' as const,
          metadata: {
            default: 1,
          },
        },
        settings: {
          ...SettingsTypeDef,
          properties: {
            ...SettingsTypeDef.properties,
            itemSpacing: {
              type: 'float64' as const,
              metadata: {
                default: 10,
                title: 'Item Spacing (units)',
              },
            },
          },
          metadata: {
            ...SettingsTypeDef.metadata,
            order: ['itemSpacing', ...SettingsTypeDef.metadata.order],
          },
        },
        generators: {
          elements: {
            discriminator: 'kind',
            mapping: allGenerators
              .map(
                (g): Record<string, JSONTypeDefProperties> => ({
                  [g.name()]: {
                    properties: {
                      kind: {
                        type: 'string',
                        metadata: {
                          default: g.name(),
                          title: g.name(),
                        },
                      },
                      colors: {
                        properties: {
                          cutColor: {
                            enum: availableColors,
                            metadata: {
                              default: 'blue',
                              title: 'Cut Color',
                            },
                          },
                          scoreColor: {
                            enum: availableColors,
                            metadata: {
                              default: 'red',
                              title: 'Score Color',
                            },
                          },
                        },
                        metadata: {
                          title: 'Colors',
                          order: ['cutColor', 'scoreColor'],
                          startHidden: true,
                        },
                      },
                      params: g.schema(),
                    },
                    metadata: {
                      order: ['colors', 'params'],
                      untabParams: true,
                    },
                  },
                }),
              )
              .reduce((a, b) => ({ ...a, ...b }), {}),
            metadata: {
              default: 'BoxPlain',
              order: allGenerators.map((g) => g.name()),
            },
          },
          metadata: {
            default: 1,
            title: 'Generators',
            itemTitle: 'Generator {}',
          },
        },
      },
      metadata: {
        order: ['settings', 'generators'],
      },
    }),
    [],
  );
  const [params, setParams] = useState(() => newJTD(schema));
  const [jtdKey, setJtdKey] = useState(1);
  const [surfaces, setSurfaces] = useState<ISurfaceDetails[] | null>(null);
  const [generateError, setGenerateError] = useState('');
  const itemSpacing = params.settings.itemSpacing;
  useEffect(() => {
    const surfaces: ISurfaceDetails[] = [];
    const errors: string[] = [];
    let i = 1;
    for (const p of params.generators) {
      const generator = allGenerators.find((g) => g.name() === p.kind);
      if (generator) {
        try {
          const ss = generator.generate(params.settings, p.params);
          for (const surface of ss) {
            surfaces.push({
              surface,
              cutColor: p.colors.cutColor,
              scoreColor: p.colors.scoreColor,
            });
          }
        } catch (err) {
          console.error(err);
          errors.push(`Generator ${i}: ${err as any}`);
        }
      }
      i++;
    }
    setSurfaces(surfaces);
    setGenerateError(errors.join('\n'));
  }, [params, setSurfaces, setGenerateError]);
  const surfaceItems: ISurfaceItem[] | null = useMemo(() => {
    if (!surfaces) {
      return null;
    }
    const items: ISurfaceItem[] = [];
    let totalArea = 0;
    for (const { surface, cutColor, scoreColor } of surfaces) {
      const boundingBox = surface.boundingBox();
      const area =
        (boundingBox[1][0] - boundingBox[0][0] + itemSpacing) *
        (boundingBox[1][1] - boundingBox[0][1] + itemSpacing);
      totalArea += area;
      items.push({
        surface,
        boundingBox,
        boundingBoxSize: [
          boundingBox[1][0] - boundingBox[0][0],
          boundingBox[1][1] - boundingBox[0][1],
        ],
        area,
        offset: [0, 0],
        cutColor,
        scoreColor,
      });
    }

    // layout parts in roughly a square
    const targetWidth = Math.sqrt(totalArea);
    let rowHeight = 0;
    const nextOffset: Vec2 = [0, 0];
    for (const it of items) {
      it.offset[0] = nextOffset[0] - it.boundingBox[0][0];
      it.offset[1] = nextOffset[1] - it.boundingBox[0][1];
      rowHeight = Math.max(rowHeight, it.boundingBoxSize[1]);
      if (nextOffset[0] + itemSpacing + it.boundingBoxSize[0] <= targetWidth) {
        nextOffset[0] += itemSpacing + it.boundingBoxSize[0];
      } else {
        nextOffset[0] = 0;
        nextOffset[1] += itemSpacing + rowHeight;
        rowHeight = 0;
      }
    }
    return items;
  }, [surfaces, itemSpacing]);
  const onDownload = useCallback(() => {
    if (!surfaceItems || surfaceItems.length <= 0) {
      alert('Nothing to export!');
      return;
    }
    const doc = exportDocument(params.settings);
    for (const { offset, surface, cutColor, scoreColor } of surfaceItems) {
      doc.addSurface(
        offset,
        surface,
        colorPalette[cutColor],
        colorPalette[scoreColor],
      );
    }
    doc.addComment(params);
    const { mimeType, extension, data } = doc.toFile();
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 30000);
    const a = document.createElement('a');
    a.href = url;
    const now = new Date();
    const dig2 = (n: number) => `${n < 10 ? '0' : ''}${n}`;
    const date = `${now.getFullYear()}${dig2(now.getMonth() + 1)}${dig2(now.getDate())}`;
    const time = `${dig2(now.getHours())}${dig2(now.getMinutes())}${dig2(now.getSeconds())}`;
    a.download = `${params.generators[0].kind}-${date}-${time}${extension}`;
    document.body.appendChild(a);
    a.style.display = 'none';
    a.click();
    a.remove();
  }, [params, surfaceItems]);
  const [importModal, setImportModal] = useState(false);
  const onImport = useCallback(() => {
    setImportModal(true);
  }, []);
  const onImportData = useCallback(
    (params: any) => {
      setParams(params);
      setImportModal(false);
      setSurfaces(null);
      setJtdKey((v) => v + 1);
    },
    [setParams],
  );
  useEffect(() => {
    try {
      const kvs = window.location.search.substr(1).split('&');
      for (const kv of kvs) {
        const eq = kv.split('=');
        if (eq.length === 2) {
          const k = decodeURIComponent(eq[0]);
          const v = decodeURIComponent(eq[1]);
          if (k === 'p') {
            const data = JSON.parse(v);
            onImportData(data);
            return;
          }
        }
      }
    } catch (_) {
      // do nothing
    }
  }, []);
  const [exportModal, setExportModal] = useState('');
  const onExport = useCallback(() => {
    setExportModal(JSON.stringify(params, null, 2));
  }, [params, setExportModal]);
  const onURL = useCallback(() => {
    const base = window.location.href.replace(/\?.*$/, '');
    window.open(
      `${base}?p=${encodeURIComponent(JSON.stringify(params))}`,
      '_blank',
    );
  }, [params]);
  const [view, setView] = useState('2D');
  const onView = useCallback(() => {
    setView((v) => (v === '2D' ? '3D' : '2D'));
  }, [setView]);
  const [grid, setGrid] = useState(true);
  const onGrid = useCallback(() => {
    setGrid((g) => !g);
  }, [setGrid]);
  const appContext = useMemo(
    (): IAppContext => ({
      units: params.settings.units,
      defaultKerf: params.settings.defaultKerf,
      debug: params.settings.debug,
    }),
    [params],
  );
  return (
    <AppContext.Provider value={appContext}>
      {exportModal && (
        <ImportExportModal
          value={exportModal}
          onCancel={() => {
            setExportModal('');
          }}
        />
      )}
      {importModal && (
        <ImportExportModal
          value=""
          onCancel={() => {
            setImportModal(false);
          }}
          onImport={onImportData}
        />
      )}
      <nav>
        <h2>
          <a href="https://github.com/velipso/boxburner" target="_blank">
            boxburner
          </a>
          <span className="version">v0.1-alpha</span>
        </h2>
        <div className="nav-main">
          <JTDEditor
            key={jtdKey}
            schema={schema}
            value={params}
            setValue={setParams}
          />
        </div>
        <div className="output-buttons">
          <button onClick={onDownload}>↓ Download</button>
          <button onClick={onImport}>⍈ Import</button>
          <button onClick={onExport}>⍇ Export</button>
          <button onClick={onURL}>⤷ URL</button>
        </div>
      </nav>
      <main key={jtdKey}>
        {surfaceItems &&
          (view === '2D' ? (
            <Canvas2D
              grid={grid}
              items={surfaceItems}
              error={generateError}
              units={params.settings.units}
              onView={onView}
              onGrid={onGrid}
            />
          ) : (
            <Canvas3D
              grid={grid}
              items={surfaceItems}
              error={generateError}
              units={params.settings.units}
              onView={onView}
              onGrid={onGrid}
            />
          ))}
      </main>
    </AppContext.Provider>
  );
}

export default App;
