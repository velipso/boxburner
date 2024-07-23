import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react'
//import assetLogo from './assets/asset.svg'
import {
  GeneratorBase,
  PlainBox,
  JSONTypeDefSchema,
  JSONTypeDefEnum,
  JSONTypeDefElements,
  JSONTypeDefProperties,
  JSONTypeDefDiscriminator,
  JSONTypeDef,
  Surface,
  Vec2
} from '@velipso/boxburner';

const generators: GeneratorBase[] = [
  new PlainBox()
];

const generatorOptions = generators.map(g => ({ label: g.name(), value: g }));

let debug = false;

function Select<T>({
  title,
  options,
  value,
  setValue
}: {
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
    [setText]
  );
  const v = parseFloat(text);
  const error = isNaN(v) || (integer && Math.round(v) !== v);
  return (
    <input
      className={error ? 'error' : ''}
      type='text'
      value={text}
      onChange={onChange}
    />
  );
}

function InputEnum({
  typedef,
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDefEnum;
  value: any;
  setValue(v: any | ((prevValue: any) => any)): void;
}) {
  return (
    <>
      <MetaTitle metadata={typedef.metadata} />
      <p>enum</p>
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
  const onAdd = useCallback(
    () => {
      setValue(
        (p: any[]) => {
          const n = [...p];
          n.push(newJTD(typedef.elements));
          return n;
        }
      );
    },
    [setValue, typedef]
  );
  const onRemove = useCallback(
    (index: number) => {
      setValue(
        (p: any[]) => {
          const n = [...p];
          n.splice(index, 1);
          return n;
        }
      );
    },
    [setValue]
  );
  const template = typedef.metadata?.itemTitle || '{}';
  return (
    <>
      <MetaTitle metadata={typedef.metadata} />
      {values.map((value, i) => (
        <div className="tab elements-item" key={i}>
          <div className="input-title">
            <button className="elements-remove" onClick={() => onRemove(i)}>&times;</button>
            {' '}
            {template.replace(/\{\}/g, `${i + 1}`)}:
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
      {values.length <= 0 && <div className="tab"><p><em>Empty</em></p></div>}
      <div className="tab">
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
}: {
  schema: JSONTypeDefSchema;
  typedef: JSONTypeDefProperties;
  value: any;
  setValue(v: any | ((prevValue: any) => any)): void;
  skipTitle?: boolean;
}) {
  return typedef.metadata.order.map((k) => (
    <React.Fragment key={k}>
      {!skipTitle && <MetaTitle metadata={typedef.metadata} />}
      <div className="tab">
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
    </React.Fragment>
  ));
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
  const setDiscriminator = useCallback(
    (disc: string) => {
      setValue(newJTD(typedef.mapping[disc]));
    },
    [setValue]
  );
  return (
    <>
      <MetaTitle metadata={typedef.metadata} />
      <Select
        options={typedef.metadata.order.map(k => ({
          label: typedef.mapping[k].metadata.title || k,
          value: k
        }))}
        value={value[typedef.discriminator]}
        setValue={setDiscriminator}
      />
      <InputProperties
        skipTitle={true}
        schema={schema}
        typedef={typedef.mapping[value[typedef.discriminator]]}
        value={value}
        setValue={setValue}
      />
    </>
  );
}

function MetaTitle({
  metadata: {
    title
  },
  index
}: {
  metadata: {
    title?: string;
  };
  index?: number;
}) {
  return (
    <>
      {title && (
        <div className="input-title">
          {typeof index === 'number' ? title.replace(/\{\}/g, `${index}`) : title}:
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
          <>
            <MetaTitle metadata={typedef.metadata} />
            <InputNumber
              value={value}
              setValue={setValue}
              integer={typedef.type === 'int32'}
            />
          </>
        );
      case 'string':
      case 'boolean':
        console.error('TODO: implement type', typedef.type);
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
  if (ctx.measureText(text).width < maxWidth) {
    renderLine(text);
  } else {
    const words = text.split(' ');

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

function Canvas({
  surfaces,
  error
}: {
  surfaces: Surface[];
  error: string;
}) {
  const [cnv, setCnv] = useState<HTMLCanvasElement | null>(null);
  const items = useMemo(
    () => {
      const items: {
        surface: Surface;
        boundingBox: [Vec2, Vec2];
        boundingBoxSize: Vec2;
        area: number;
        offset: Vec2;
      }[] = [];
      let totalArea = 0;
      for (const surface of surfaces) {
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
          offset: [0, 0]
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
        ctx.fillText(`Grid size: ${unitsPerLine}mm`, 10, cnv.height / dpr - 17);
        ctx.restore();
      }

      for (const it of items) {
        const { surface, boundingBox, offset } = it;

        if (debug) { // draw bounding box
          ctx.beginPath();
          ctx.rect(
            offset[0] + boundingBox[0][0],
            offset[1] + boundingBox[0][1],
            boundingBox[1][0] - boundingBox[0][0],
            boundingBox[1][1] - boundingBox[0][1]
          );
          ctx.lineWidth = 6 / camera.zoomFactor();
          ctx.strokeStyle = '#0cc';
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.moveTo(offset[0], offset[1]);
        for (const cmd of surface.border) {
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
        ctx.lineWidth = 3 * dpr / camera.zoomFactor();
        ctx.strokeStyle = '#000';
        ctx.stroke();
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
    [cnv, ctx, camera, items, grid, dpr, error]
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

function App() {
  const [generator, setGenerator] = useState(generators[0]);
  const schema = useMemo(() => generator.schema(), [generator]);
  const [allParams, setAllParams] = useState<Map<GeneratorBase, any>>(() =>
    new Map<GeneratorBase, any>(
      generators.map(g => [g, g.defaultParams()])
    )
  );
  const params = allParams.get(generator);
  const setParams = useCallback(
    (v: any) => {
      setAllParams(
        (m) => {
          const map = new Map(m);
          map.set(generator, typeof v === 'function' ? v(map.get(generator)) : v);
          return map;
        }
      );
    },
    [setAllParams, generator]
  );
  const [surfaces, setSurfaces] = useState<Surface[] | null>(null)
  const [generateError, setGenerateError] = useState('');
  useEffect(
    () => {
      try {
        setSurfaces(generator.generate(params));
        setGenerateError('');
      } catch (err) {
        console.error(err);
        setGenerateError(`${err}`);
      }
    },
    [params, generator, setSurfaces, setGenerateError]
  );

  return (
    <>
      <nav>
        <h2><a href="https://github.com/velipso/boxburner" target="_blank">boxburner</a></h2>
        <Select
          title="Generator"
          options={generatorOptions}
          value={generator}
          setValue={setGenerator}
        />
        <JTDEditor
          schema={schema}
          value={params}
          setValue={setParams}
        />
      </nav>
      <main>
        {surfaces && <Canvas surfaces={surfaces} error={generateError} />}
      </main>
    </>
  )
}

export default App
