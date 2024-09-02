//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type Shape, polybool } from './Geometry';
import { type Vec2 } from './types';

const ascii17: Record<string, number> = {
  ' ': 0x00000,
  '!': 0x12200,
  '"': 0x00204,
  '#': 0x0aa3c,
  $: 0x0aabb,
  '%': 0x0ee99,
  '&': 0x09371,
  "'": 0x00200,
  '(': 0x01400,
  ')': 0x04100,
  '*': 0x0ff00,
  '+': 0x0aa00,
  ',': 0x04000,
  '-': 0x08800,
  '.': 0x10000,
  '/': 0x04400,
  '0': 0x044ff,
  '1': 0x0040c,
  '2': 0x08877,
  '3': 0x0083f,
  '4': 0x0888c,
  '5': 0x088bb,
  '6': 0x088fb,
  '7': 0x0000f,
  '8': 0x088ff,
  '9': 0x088bf,
  ':': 0x02200,
  ';': 0x04200,
  '<': 0x09400,
  '=': 0x08830,
  '>': 0x04900,
  '?': 0x12807,
  '@': 0x00af7,
  A: 0x088cf,
  B: 0x02a3f,
  C: 0x000f3,
  D: 0x0223f,
  E: 0x080f3,
  F: 0x080c3,
  G: 0x008fb,
  H: 0x088cc,
  I: 0x02233,
  J: 0x0007c,
  K: 0x094c0,
  L: 0x000f0,
  M: 0x005cc,
  N: 0x011cc,
  O: 0x000ff,
  P: 0x088c7,
  Q: 0x010ff,
  R: 0x098c7,
  S: 0x088bb,
  T: 0x02203,
  U: 0x000fc,
  V: 0x044c0,
  W: 0x050cc,
  X: 0x05500,
  Y: 0x088bc,
  Z: 0x04433,
  '[': 0x02212,
  '\\': 0x01100,
  ']': 0x02221,
  '^': 0x05000,
  _: 0x00030,
  '`': 0x00100,
  '{': 0x0a212,
  '|': 0x02200,
  '}': 0x02a21,
  '~': 0x0cc00,
};

const scoreChar = (
  shape: Shape,
  offset: Vec2,
  width: number,
  height: number,
  char: string,
) => {
  const flags = ascii17[char.toUpperCase()] ?? ascii17['?'];
  const line = (x1: number, y1: number, x2: number, y2: number) => {
    shape
      .moveTo(offset[0] + x1 * width, offset[1] + y1 * height)
      .lineTo(offset[0] + x2 * width, offset[1] + y2 * height);
  };
  const gap = 0.025;
  if (flags & 1) line(gap, 0, 0.5 - gap, 0);
  if (flags & 2) line(0.5 + gap, 0, 1 - gap, 0);
  if (flags & 4) line(1, gap, 1, 0.5 - gap);
  if (flags & 8) line(1, 0.5 + gap, 1, 1 - gap);
  if (flags & 16) line(1 - gap, 1, 0.5 + gap, 1);
  if (flags & 32) line(0.5 - gap, 1, gap, 1);
  if (flags & 64) line(0, 1 - gap, 0, 0.5 + gap);
  if (flags & 128) line(0, 0.5 - gap, 0, gap);
  if (flags & 256) line(gap, gap, 0.5 - gap, 0.5 - gap);
  if (flags & 512) line(0.5, gap, 0.5, 0.5 - gap);
  if (flags & 1024) line(1 - gap, gap, 0.5 + gap, 0.5 - gap);
  if (flags & 2048) line(0.5 + gap, 0.5, 1 - gap, 0.5);
  if (flags & 4096) line(0.5 + gap, 0.5 + gap, 1 - gap, 1 - gap);
  if (flags & 8192) {
    if (flags & 65536) {
      line(0.5, 0.5 + gap, 0.5, 0.8 - gap);
    } else {
      line(0.5, 0.5 + gap, 0.5, 1 - gap);
    }
  }
  if (flags & 16384) line(0.5 - gap, 0.5 + gap, gap, 1 - gap);
  if (flags & 32768) line(0.5 - gap, 0.5, gap, 0.5);
  if (flags & 65536) line(0.5, 0.8 + gap, 0.5, 1 - gap);
};

export function ApplyText(
  text: string,
  x: number,
  y: number,
  width: number,
  height: number,
  fontSize?: number | null,
): Shape {
  const lines = text.split('\n');
  const maxChars = lines.reduce(
    (a: number, b: string) => Math.max(a, b.length),
    0,
  );
  const chh =
    typeof fontSize === 'number'
      ? fontSize
      : Math.min(
          // auto font size
          ((width - 5) / maxChars) * 2,
          (height - 5) / lines.length,
        );
  const chw = chh / 2;
  const sx = x + (width - chw * maxChars) / 2;
  const sy = y + (height - chh * lines.length) / 2;

  const result = polybool.shape();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      scoreChar(
        result,
        [sx + chw * j + chw * 0.15, sy + chh * i + chh * 0.15],
        chw * 0.7,
        chh * 0.7,
        line.charAt(j),
      );
    }
  }

  return result;
}
