import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  createContext,
  useContext,
  ReactNode,
  ChangeEventHandler
} from 'react';
import {
  allGenerators,
  JSONTypeDefSchema,
  JSONTypeDefEnum,
  JSONTypeDefElements,
  JSONTypeDefProperties,
  JSONTypeDefDiscriminator,
  JSONTypeDef,
  Surface,
  Vec2,
  SettingsTypeDef,
  IDrawCommand,
  exportDocument,
  expandPathByKerf
} from '@velipso/boxburner';
import AutoAnimate from './AutoAnimate';

interface IAppContext {
  units: string;
  kerf: number;
  debug: boolean;
}

const AppContext = createContext<IAppContext | null>(null);

const colorPalette: { [color: string]: string } = {
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
  'purple'
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
  setValue
}: {
  className?: string;
  title?: string;
  options: { label: string, value: T }[];
  value: T;
  setValue(v: T | ((prevValue: T) => T)): void;
}) {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const i = parseFloat(event.target.value);
      setValue(options[i].value);
    },
    [options, setValue]
  );
  return <>
    {title && <div className="input-title">{title}:</div>}
    <select
      className={className}
      value={options.findIndex(({value: v}) => v === value)}
      onChange={onChange}
    >
      {options.map(
        ({ label }, i) => (
          <option key={i} value={`${i}`}>
            {label}
          </option>
        )
      )}
    </select>
  </>;
}

function InputNumber({
  value,
  setValue,
  integer
}: {
  value: number;
  setValue(v: number | ((prevValue: number) => number)): void;
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
    [setText, setValue]
  );
  const v = parseFloat(text);
  const error = isNaN(v) || (integer && Math.round(v) !== v);
  return (
    <input
      className={error ? 'number error' : 'number'}
      type='text'
      value={text}
      onChange={onChange}
    />
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
  setValue(v: any | ((prevValue: any) => any)): void;
}) {
  return (
    <>
      <MetaTitle metadata={typedef.metadata}>
        <Select
          className='enum'
          options={typedef.enum.map(e => ({ label: e, value: e }))}
          value={value}
          setValue={setValue}
        />
      </MetaTitle>
    </>
  );
}

function newJTD(typedef: JSONTypeDef): any {
  if (
    'type' in typedef ||
    'enum' in typedef
  ) {
    return typedef.metadata.default;
  } else if ('elements' in typedef) {
    const d = typedef.metadata.default;
    return d === null ? null : Array
      .from({ length: d })
      .map((_) => newJTD(typedef.elements));
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
  setValue
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDefElements;
  value: any[];
  setValue(v: any[] | ((prevValue: any[]) => any[])): void;
}) {
  const [keys, setKeys] = useState(() => values.map((_, i) => i));
  const onAdd = useCallback(
    () => {
      setValue(
        (p: any[]) => {
          const n = [...p];
          n.push(newJTD(typedef.elements));
          return n;
        }
      );
      setKeys(
        (p: number[]) => {
          const nextKey = p.reduce((a, b) => Math.max(a, b), 0) + 1;
          const n = [...p];
          n.push(nextKey);
          return n;
        }
      );
    },
    [setValue, typedef]
  );
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
    [setValue, setKeys]
  );
  const onDuplicate = useCallback(
    (index: number) => {
      setValue(
        (p: any[]) => {
          const n = [...p];
          n.splice(index, 0, JSON.parse(JSON.stringify(n[index])));
          return n;
        }
      );
      setKeys(
        (p: number[]) => {
          const nextKey = p.reduce((a, b) => Math.max(a, b), 0) + 1;
          const n = [...p];
          n.splice(index, 0, nextKey);
          return n;
        }
      );
    },
    [setValue, setKeys]
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
    [setValue, setKeys]
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
                  onClick={() => onMove(i, -1)}
                >
                  ↑
                </button>
                <button
                  title="Move Down"
                  disabled={i >= values.length - 1}
                  className="elements-move"
                  onClick={() => onMove(i, 1)}
                >
                  ↓
                </button>
                <button
                  title="Duplicate"
                  className="elements-duplicate"
                  onClick={() => onDuplicate(i)}
                >
                  ⊕
                </button>
                <button
                  title="Remove"
                  className="elements-remove"
                  onClick={() => onRemove(i)}
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
                setValue(
                  (p: any[]) => {
                    const n = [...p];
                    n[i] = typeof v === 'function' ? v(n[i]) : v;
                    return n;
                  }
                );
              }}
            />
          </div>
        ))}
      </AutoAnimate>
      {values.length <= 0 && (
        <div className="tab" style={styleHide(hide)}>
          <p><em>Empty</em></p>
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
  setValue(v: any | ((prevValue: any) => any)): void;
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
      {typedef.metadata.order.map((k) => (
        <div
          key={k}
          className={typedef.metadata.untabParams && k === 'params' ? undefined : 'tab'}
          style={styleHide(hide || innerHide)}
        >
          <JTDEditValue
            schema={schema}
            typedef={typedef.properties[k]}
            value={value[k]}
            setValue={(v) => {
              setValue(
                (p: any) => ({
                  ...p,
                  [k]: typeof v === 'function' ? v(p[k]) : v
                })
              );
            }}
          />
        </div>
      ))}
    </>
  );
}

function InputDiscriminator({
  schema,
  typedef,
  value,
  setValue
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDefDiscriminator;
  value: any;
  setValue(v: any | ((prevValue: any) => any)): void;
}) {
  const [hide, setHide] = useState(true);
  const discVal = value[typedef.discriminator];
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
    (disc: string) => {
      setValue(objects.get(disc));
    },
    [objects, setValue]
  );
  const setProperties = useCallback(
    (v: any | ((prevValue: any) => any)) => {
      const newValue = typeof v === 'function' ? v(value) : v;
      const newObjects = new Map(objects);
      newObjects.set(discVal, newValue);
      setObjects(newObjects);
      setValue(newValue);
    },
    [objects, value, setValue, discVal, setObjects]
  );
  return (
    <>
      <MetaTitle metadata={typedef.metadata} />
      <div className="hide-wrap">
        <HideButton hide={hide} setHide={setHide} />
        <Select
          options={typedef.metadata.order.map(k => ({
            label: typedef.mapping[k].metadata.title || k,
            value: k
          }))}
          value={discVal}
          setValue={setDiscVal}
        />
      </div>
      <InputProperties
        hide={hide}
        key={discVal}
        skipTitle={true}
        schema={schema}
        typedef={typedef.mapping[discVal]}
        value={value}
        setValue={setProperties}
      />
    </>
  );
}

function HideButton({
  hide,
  setHide
}: {
  hide?: boolean;
  setHide?(hide: boolean | ((prevValue: boolean) => void)): void;
}) {
  const toggleHidden = useCallback(
    () => {
      setHide?.(v => !v);
    },
    [setHide]
  );
  return (
    <>
      {setHide && (
        <button
          className="hide-button"
          onClick={toggleHidden}
        >
          {hide ? '▶' : '▼'}
        </button>
      )}
    </>
  );
}

function MetaTitle({
  metadata: {
    title: titleOrig,
    description: descriptionOrig
  },
  postfix,
  hide,
  setHide,
  children
}: {
  metadata: {
    title?: string;
    description?: string;
  };
  postfix?: string;
  hide?: boolean;
  setHide?(hide: boolean): void;
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
              style={setHide ? { cursor: 'pointer', userSelect: 'none' } : undefined}
              onClick={setHide ? () => {
                setHide(!hide);
              } : undefined}
            >
              {postfix ? `${title} ${postfix}` : title}
            </span>
            {description && (
              <>
                {' '}
                <span
                  className="description"
                  onClick={() => { alert(description); } }
                  title={description}
                >
                  ⓘ
                </span>
              </>
            )}:
            {children && <>{' '}{children}</>}
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
  setValue
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDef;
  value: any;
  setValue(v: any | ((prevValue: any) => any)): void;
}) {
  if ('type' in typedef) {
    switch (typedef.type) {
      case 'float64':
      case 'int32':
        return (
          <MetaTitle metadata={typedef.metadata}>
            <InputNumber
              value={value}
              setValue={setValue}
              integer={typedef.type === 'int32'}
            />
          </MetaTitle>
        );
      case 'string':
        return (
          <>
            <MetaTitle metadata={typedef.metadata} />
            <p>TODO: string</p>
          </>
        );
      case 'boolean':
        return (
          <>
            <MetaTitle metadata={typedef.metadata}>
              <div className="boolean">
                <button
                  className={value ? 'selected' : undefined}
                  onClick={() => { setValue(true); }}
                >
                  Yes
                </button>
                {' '}
                <button
                  className={!value ? 'selected' : undefined}
                  onClick={() => { setValue(false); }}
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
  return <p>ERROR: Unknown JSON type def! <pre>{JSON.stringify(typedef)}</pre></p>;
}

function JTDEditor({
  schema,
  value,
  setValue
}: {
  schema: JSONTypeDefSchema;
  value: any;
  setValue(v: any | ((prevValue: any) => any)): void;
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
        matrix.m[5]
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
      p[0] * this.m[1] + p[1] * this.m[3] + this.m[5]
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
      this.transform.m[5]
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
  lineHeight: number
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

function drawPathFromCommands(
  ctx: CanvasRenderingContext2D,
  { offset, commands }: { offset: Vec2; commands: IDrawCommand[] }
) {
  ctx.beginPath();
  ctx.moveTo(offset[0], offset[1]);
  for (const cmd of commands) {
    switch (cmd.kind) {
      case 'L':
        ctx.lineTo(offset[0] + cmd.to[0], offset[1] + cmd.to[1]);
        break;
      case 'C':
        ctx.bezierCurveTo(
          offset[0] + cmd.c1[0], offset[1] + cmd.c1[1],
          offset[0] + cmd.c2[0], offset[1] + cmd.c2[1],
          offset[0] + cmd.to[0], offset[1] + cmd.to[1]
        );
        break;
    }
  }
  ctx.closePath();
}

interface ISurfaceDetails {
  surface: Surface;
  cutColor: string;
  holeColor: string;
  scoreColor: string;
}

interface ISurfaceItem {
  surface: Surface;
  boundingBox: [Vec2, Vec2];
  boundingBoxSize: Vec2;
  area: number;
  offset: Vec2;
  cutColor: string;
  holeColor: string;
  scoreColor: string;
};

function Canvas({
  units,
  items,
  error
}: {
  units: string;
  items: ISurfaceItem[];
  error: string;
}) {
  const [cnv, setCnv] = useState<HTMLCanvasElement | null>(null);
  const canvasRef = useCallback(
    (cnv: HTMLCanvasElement | null) => {
      setCnv(cnv);
    },
    [setCnv]
  );
  const [grid, setGrid] = useState(true);
  const [view2D, setView2D] = useState(true);
  const onGrid = useCallback(
    () => {
      setGrid(g => !g);
    },
    [setGrid]
  );
  const onView2D = useCallback(
    () => {
      setView2D(v => !v);
    },
    [setView2D]
  );

  const ctx = useMemo(() => cnv?.getContext('2d'), [cnv]);
  const dpr = window.devicePixelRatio || 1;
  const camera = useMemo(() => new Camera(), []);
  const { debug, kerf } = useAppContext();
  const redraw = useCallback(
    () => {
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
        const unitsPerLine = Math.pow(10, Math.round(Math.log10(unitsPerLineIdeal)));
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
        ctx.fillText(`Grid size: ${unitsPerLine}${units}`, 10, cnv.height / dpr - 17);
        ctx.restore();
      }

      if (debug) {
        // draw kerf
        if (kerf > 0) {
          for (const { surface, offset } of items) {
            drawPathFromCommands(ctx, expandPathByKerf(offset, surface.border, kerf));
            ctx.lineWidth = 4 * dpr / camera.zoomFactor();
            ctx.strokeStyle = '#77440077';
            ctx.stroke();
            for (const hole of surface.holes) {
              drawPathFromCommands(ctx, expandPathByKerf(
                [offset[0] + hole.offset[0], offset[1] + hole.offset[1]],
                hole.commands,
                kerf
              ));
              ctx.lineWidth = 4 * dpr / camera.zoomFactor();
              ctx.strokeStyle = '#44007777';
              ctx.stroke();
            }
          }
        }
        // draw bounding box
        for (const { offset, boundingBox } of items) {
          ctx.beginPath();
          ctx.rect(
            offset[0] + boundingBox[0][0],
            offset[1] + boundingBox[0][1],
            boundingBox[1][0] - boundingBox[0][0],
            boundingBox[1][1] - boundingBox[0][1]
          );
          ctx.lineWidth = 6 * dpr / camera.zoomFactor();
          ctx.strokeStyle = '#0cc';
          ctx.stroke();
        }
      }

      for (const it of items) {
        const { surface, offset } = it;
        drawPathFromCommands(ctx, { offset, commands: surface.border });
        ctx.lineWidth = 3 * dpr / camera.zoomFactor();
        ctx.strokeStyle = colorPalette[it.cutColor];
        ctx.stroke();

        for (const hole of surface.holes) {
          drawPathFromCommands(ctx, {
            offset: [offset[0] + hole.offset[0], offset[1] + hole.offset[1]],
            commands: hole.commands,
          });
          ctx.lineWidth = 3 * dpr / camera.zoomFactor();
          ctx.strokeStyle = colorPalette[it.holeColor];
          ctx.stroke();
        }
      }

      if (debug) {
        for (const it of items) {
          const { surface, offset } = it;
          const point = (x: number, y: number, color: string) => {
            ctx.beginPath();
            ctx.arc(x, y, 2 * dpr / camera.zoomFactor(), 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
          };
          const pointCommands = (offset: Vec2, commands: IDrawCommand[], color: string) => {
            for (const cmd of commands) {
              switch (cmd.kind) {
                case 'L':
                  point(offset[0] + cmd.to[0], offset[1] + cmd.to[1], color);
                  break;
                case 'C':
                  point(offset[0] + cmd.c1[0], offset[1] + cmd.c1[1], color);
                  point(offset[0] + cmd.c2[0], offset[1] + cmd.c2[1], color);
                  point(offset[0] + cmd.to[0], offset[1] + cmd.to[1], color);
                  break;
              }
            }
          };
          pointCommands(offset, surface.border, '#07f');
          if (kerf > 0) {
            for (const { surface, offset } of items) {
              const b = expandPathByKerf(offset, surface.border, kerf);
              pointCommands(b.offset, b.commands, '#07f');
              for (const hole of surface.holes) {
                const h = expandPathByKerf(
                  [offset[0] + hole.offset[0], offset[1] + hole.offset[1]],
                  hole.commands,
                  kerf
                );
                pointCommands(h.offset, h.commands, '#0f7');
              }
            }
          }
          for (const hole of surface.holes) {
            pointCommands(
              [offset[0] + hole.offset[0], offset[1] + hole.offset[1]],
              hole.commands,
              '#0f7'
            );
          }
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
    },
    [cnv, ctx, camera, items, grid, dpr, error, units, debug, kerf]
  );
  useEffect(
    () => {
      redraw();
    },
    [redraw]
  );

  const onCenter = useCallback(
    () => {
      if (!cnv) {
        return;
      }
      let box: [Vec2, Vec2] = [[0, 0], [0, 0]];
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
    },
    [cnv, camera, redraw, items]
  );

  const firstResize = useRef(true);
  useEffect(
    () => {
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
      const mousePos = (e: MouseEvent): Vec2 =>
        [dpr * e.layerX, dpr * e.layerY];
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
    },
    [cnv, camera, onCenter, firstResize, dpr]
  );

  return (
    <>
      <canvas ref={canvasRef} />
      <div className="status">
        <button onClick={onGrid}>
          Grid: {grid ? 'On' : 'Off'}
        </button>
        <button onClick={onView2D}>
          View: {view2D ? '2D' : '3D'}
        </button>
        <button onClick={onCenter}>
          Center
        </button>
      </div>
    </>
  );
}

function ImportExportModal({
  value,
  onCancel,
  onImport
}: {
  value: string;
  onCancel(): void;
  onImport?(data: any): void;
}) {
  const [text, setText] = useState(value);
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      setText(e.currentTarget.value);
    },
    [setText]
  );
  const stopPropagation = useCallback((e: { stopPropagation(): void }) => {
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
          {onImport
            ? <p>Paste your settings below:</p>
            : <p>Copy your settings below:</p>
          }
          <textarea value={text} onChange={onChange} readOnly={!onImport} spellCheck={false} />
          {onImport &&
            <button
              className="import"
              onClick={
                () => {
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
          }
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
        settings: SettingsTypeDef,
        generators: {
          elements: {
            discriminator: 'kind',
            mapping:
              allGenerators.map((g): { [name: string]: JSONTypeDefProperties } => ({
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
                            default: 'black',
                            title: 'Cut Color',
                          },
                        },
                        holeColor: {
                          enum: availableColors,
                          metadata: {
                            default: 'blue',
                            title: 'Hole Color',
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
                        order: ['cutColor', 'holeColor', 'scoreColor'],
                        startHidden: true,
                      },
                    },
                    params: g.schema()
                  },
                  metadata: {
                    order: ['colors', 'params'],
                    untabParams: true,
                  },
                }
              }))
              .reduce((a, b) => ({ ...a, ...b }), {}),
            metadata: {
              default: allGenerators[0].name(),
              order: allGenerators.map(g => g.name()),
            },
          },
          metadata: {
            default: 1,
            title: 'Generators',
            itemTitle: 'Generator {}'
          },
        },
      },
      metadata: {
        order: ['settings', 'generators'],
      }
    }),
    []
  );
  const [params, setParams] = useState(() => newJTD(schema));
  const [jtdKey, setJtdKey] = useState(1);
  const [surfaces, setSurfaces] = useState<ISurfaceDetails[] | null>(null)
  const [generateError, setGenerateError] = useState('');
  useEffect(
    () => {
      const surfaces: ISurfaceDetails[] = [];
      const errors: string[] = [];
      let i = 1;
      for (const p of params.generators) {
        const generator = allGenerators.find(g => g.name() === p.kind);
        if (generator) {
          try {
            const ss = generator.generate(params.settings, p.params);
            for (const surface of ss) {
              surfaces.push({
                surface,
                cutColor: p.colors.cutColor,
                holeColor: p.colors.holeColor,
                scoreColor: p.colors.scoreColor
              });
            }
          } catch (err) {
            console.error(err);
            errors.push(`Generator ${i}: ${err}`);
          }
        }
        i++;
      }
      setSurfaces(surfaces);
      setGenerateError(errors.join('\n'));
    },
    [params, setSurfaces, setGenerateError]
  );
  const surfaceItems: ISurfaceItem[] | null = useMemo(
    () => {
      if (!surfaces) {
        return null;
      }
      const items: ISurfaceItem[] = [];
      let totalArea = 0;
      for (const { surface, cutColor, holeColor, scoreColor } of surfaces) {
        const boundingBox = surface.borderBoundingBox();
        const area =
          (boundingBox[1][0] - boundingBox[0][0]) *
          (boundingBox[1][1] - boundingBox[0][1]);
        totalArea += area;
        items.push({
          surface,
          boundingBox,
          boundingBoxSize: [
            boundingBox[1][0] - boundingBox[0][0],
            boundingBox[1][1] - boundingBox[0][1]
          ],
          area,
          offset: [0, 0],
          cutColor,
          holeColor,
          scoreColor,
        });
      }

      // layout parts in roughly a square
      const targetWidth = Math.sqrt(totalArea);
      let rowHeight = 0;
      let nextOffset: Vec2 = [0, 0];
      let spacing = 10;
      for (const it of items) {
        it.offset[0] = nextOffset[0] - it.boundingBox[0][0];
        it.offset[1] = nextOffset[1] - it.boundingBox[0][1];
        rowHeight = Math.max(rowHeight, it.boundingBoxSize[1]);
        if (nextOffset[0] + spacing + it.boundingBoxSize[0] <= targetWidth) {
          nextOffset[0] += spacing + it.boundingBoxSize[0];
        } else {
          nextOffset[0] = 0;
          nextOffset[1] += spacing + rowHeight;
          rowHeight = 0;
        }
      }
      return items;
    },
    [surfaces]
  );
  const onDownload = useCallback(
    () => {
      if (!surfaceItems || surfaceItems.length <= 0) {
        alert('Nothing to export!');
        return;
      }
      const doc = exportDocument(params.settings);
      for (const { offset, surface, cutColor, holeColor, scoreColor } of surfaceItems) {
        doc.addSurface(
          offset,
          surface,
          colorPalette[cutColor],
          colorPalette[holeColor],
          colorPalette[scoreColor]
        );
      }
      const { mimeType, extension, data } = doc.toFile();
      const blob = new Blob([data], { type: mimeType });
      const url = window.URL.createObjectURL(blob);
      setTimeout(() => { window.URL.revokeObjectURL(url); }, 30000);
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
    },
    [params, surfaceItems]
  );
  const [importModal, setImportModal] = useState(false);
  const onImport = useCallback(
    () => {
      setImportModal(true);
    },
    []
  );
  const onImportData = useCallback(
    (params: any) => {
      setParams(params);
      setImportModal(false);
      setSurfaces(null);
      setJtdKey(v => v + 1);
    },
    [setParams]
  );
  const [exportModal, setExportModal] = useState('');
  const onExport = useCallback(
    () => {
      setExportModal(JSON.stringify(params, null, 2));
    },
    [params, setExportModal]
  );
  const appContext = useMemo(
    (): IAppContext => ({
      units: params.settings.units,
      kerf: params.settings.kerf,
      debug: params.settings.debug,
    }),
    [params]
  );
  return (
    <AppContext.Provider value={appContext}>
      {exportModal && (
        <ImportExportModal value={exportModal} onCancel={() => { setExportModal(''); }} />
      )}
      {importModal && (
        <ImportExportModal
          value=''
          onCancel={() => { setImportModal(false); }}
          onImport={onImportData}
        />
      )}
      <nav>
        <h2><a href="https://github.com/velipso/boxburner" target="_blank">boxburner</a></h2>
        <div className="nav-main">
          <JTDEditor
            key={jtdKey}
            schema={schema}
            value={params}
            setValue={setParams}
          />
        </div>
        <div className="output-buttons">
          <button onClick={onDownload}>
            ↓ Download
          </button>
          <button onClick={onImport}>
            ⍈ Import
          </button>
          <button onClick={onExport}>
            ⍇ Export
          </button>
        </div>
      </nav>
      <main key={jtdKey}>
        {surfaceItems && (
          <Canvas
            items={surfaceItems}
            error={generateError}
            units={params.settings.units}
          />
        )}
      </main>
    </AppContext.Provider>
  )
}

export default App
