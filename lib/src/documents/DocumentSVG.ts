//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { DocumentBase } from './DocumentBase';
import { type Surface } from '../Surface';
import { type Vec2, type IGeneratorSettings } from '../types';
import { type Shape } from '../Geometry';

function inspect(v: unknown, tab = 0): string {
  switch (typeof v) {
    case 'string':
      return JSON.stringify(v).replace(/--/g, '\\u002d-');
    case 'boolean':
    case 'number':
      return JSON.stringify(v);
    case 'object':
      if (v === null) {
        return 'null';
      } else if (Array.isArray(v)) {
        if (v.every((vv) => typeof vv === 'object' && vv !== null)) {
          const out: string[] = [];
          for (let i = 0; i < v.length; i++) {
            const s = inspect(v[i], tab);
            if (s) {
              out.push(s);
            }
          }
          return `[${out.join(', ')}]`;
        } else {
          let out: string[] = [];
          for (let i = 0; i < v.length; i++) {
            const s = inspect(v[i]);
            if (s) {
              out.push(s);
            }
          }
          const s = `[${out.join(',')}]`;
          if (s.length < 60 && !s.includes('\n')) {
            return s;
          }
          out = [];
          for (let i = 0; i < v.length; i++) {
            const s = inspect(v[i], tab + 1);
            if (s) {
              out.push(s);
            }
          }
          return `[\n${'  '.repeat(tab + 1)}${out.join(',\n')}\n${'  '.repeat(tab)}]`;
        }
      } else {
        const out: string[] = [];
        for (const [k, u] of Object.entries(v)) {
          const ks = inspect(k);
          const us = inspect(u, tab + 1);
          if (us) {
            out.push(`${'  '.repeat(tab + 1)}${ks}: ${us}`);
          }
        }
        return `{\n${out.join(',\n')}\n${'  '.repeat(tab)}}`;
      }
  }
  return '';
}

export class DocumentSVG extends DocumentBase {
  settings: IGeneratorSettings;
  surfaces: Array<{
    offset: Vec2;
    surface: Surface;
    cutColor: string;
    scoreColor: string;
  }> = [];

  comments: unknown[] = [];

  constructor(settings: IGeneratorSettings) {
    super(settings);
    this.settings = settings;
  }

  addSurface(
    offset: Vec2,
    surface: Surface,
    cutColor: string,
    scoreColor: string,
  ) {
    this.surfaces.push({
      offset,
      surface: surface.applyKerf(),
      cutColor,
      scoreColor,
    });
  }

  addComment(comment: unknown) {
    this.comments.push(comment);
  }

  toFile() {
    const num = (n: number) => `${Math.round(n * 1000) / 1000}`;

    const data: string[] = [];
    let originX = 0;
    let originY = 0;
    let width = 100;
    let height = 100;

    if (this.surfaces.length > 0) {
      const border: [Vec2, Vec2] = [
        [Infinity, Infinity],
        [-Infinity, -Infinity],
      ];
      for (const { offset, surface } of this.surfaces) {
        const bb = surface.boundingBox();
        border[0][0] = Math.min(border[0][0], offset[0] + bb[0][0] - 10);
        border[0][1] = Math.min(border[0][1], offset[1] + bb[0][1] - 10);
        border[1][0] = Math.max(border[1][0], offset[0] + bb[1][0] + 10);
        border[1][1] = Math.max(border[1][1], offset[1] + bb[1][1] + 10);
      }
      originX = border[0][0];
      originY = border[0][1];
      width = border[1][0] - border[0][0];
      height = border[1][1] - border[0][1];

      let gid = 0;
      const outputGroupOpen = () => {
        data.push(
          `<g id="p-${gid++}" style="fill:none;stroke-linecap:round;stroke-linejoin:round;">`,
        );
      };
      const outputGroupClose = () => {
        data.push(`</g>`);
      };
      const outputPath = (offset: Vec2, shape: Shape, color: string) => {
        const d: string[] = [];
        shape.output(
          {
            beginPath: () => {},
            moveTo: (x: number, y: number) => {
              d.push(`M${num(x)} ${num(y)}`);
            },
            lineTo: (x: number, y: number) => {
              d.push(`L${num(x)} ${num(y)}`);
            },
            bezierCurveTo: (
              c1x: number,
              c1y: number,
              c2x: number,
              c2y: number,
              x: number,
              y: number,
            ) => {
              d.push(
                `C${num(c1x)} ${num(c1y)} ${num(c2x)} ${num(c2y)} ${num(x)} ${num(y)}`,
              );
            },
            closePath: () => {
              d.push('Z');
            },
          },
          [1, 0, 0, 1, offset[0], offset[1]],
        );
        data.push(
          `<path stroke="${color}" stroke-width="1" d="${d.join('')}" />`,
        );
      };

      for (const { offset, surface, cutColor, scoreColor } of this.surfaces) {
        outputGroupOpen();

        outputGroupOpen();
        outputPath(offset, surface.scores, scoreColor);
        outputGroupClose();

        outputGroupOpen();
        outputPath(offset, surface.border, cutColor);
        outputPath(offset, surface.cuts, cutColor);
        outputGroupClose();

        outputGroupClose();
      }
    }

    const { units } = this.settings;
    return {
      mimeType: 'image/svg+xml',
      extension: '.svg',
      data: new TextEncoder().encode(
        `<?xml version='1.0' encoding='utf-8'?>
<svg
  width="${num(width)}${units}"
  height="${num(height)}${units}"
  viewBox="${num(originX)} ${num(originY)} ${num(width)} ${num(height)}"
  xmlns="http://www.w3.org/2000/svg">
<!--
Generated by boxburner
by Sean Connelly (@velipso), https://sean.fun
Project Home: https://github.com/velipso/boxburner
SPDX-License-Identifier: 0BSD

Exported on: ${new Date().toString()}
-->
${this.comments.map((comment) => `<!--\n${inspect(comment)}\n-->`).join('\n')}
${data.join('\n')}
</svg>`,
      ),
    };
  }
}
