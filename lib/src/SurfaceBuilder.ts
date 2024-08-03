//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { Surface } from './Surface';
import { DrawBuilder } from './DrawBuilder';
import { type ITextCommand, type Vec2 } from './types';
import { copyVec2 } from './util';

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

export class SurfaceBuilder {
  border = new DrawBuilder();
  holes: Array<{ offset: Vec2; db: DrawBuilder }> = [];
  cuts: Array<{ offset: Vec2; db: DrawBuilder }> = [];
  scores: Array<{ offset: Vec2; db: DrawBuilder }> = [];
  text: ITextCommand[] = [];

  hole(offset: Vec2, angle = 0) {
    const db = new DrawBuilder();
    db.turn(angle);
    this.holes.push({ offset, db });
    return db;
  }

  cut(offset: Vec2, angle = 0) {
    const db = new DrawBuilder();
    db.turn(angle);
    this.cuts.push({ offset, db });
    return db;
  }

  score(offset: Vec2, angle = 0) {
    const db = new DrawBuilder();
    db.turn(angle);
    this.scores.push({ offset, db });
    return db;
  }

  scoreChar(offset: Vec2, width: number, height: number, char: string) {
    const flags = ascii17[char.toUpperCase()] ?? ascii17['?'];
    const line = (x1: number, y1: number, x2: number, y2: number) => {
      const start = copyVec2(offset);
      start[0] += x1 * width;
      start[1] += y1 * height;
      this.score(start).lineToRelative([(x2 - x1) * width, (y2 - y1) * height]);
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
    return this;
  }

  build(defaultValues: { defaultThickness: number; defaultKerf: number }) {
    return new Surface(
      defaultValues,
      this.border.close().build(),
      this.holes.map(({ offset, db }) => ({
        offset,
        commands: db.close().build(),
      })),
      this.cuts.map(({ offset, db }) => ({
        offset,
        commands: db.build(),
      })),
      this.scores.map(({ offset, db }) => ({
        offset,
        commands: db.build(),
      })),
      this.text,
    );
  }
}
