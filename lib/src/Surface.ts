//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { IDrawCommand, IOffsetDrawCommands, ITextCommand, Vec2 } from './types';

function validateClosedPath(hint: string, commands: IDrawCommand[]) {
  if (commands.length <= 0) {
    throw new Error(`${hint}: Cannot have empty list of commands for closed path`);
  }
  const lastPt = commands[commands.length - 1].to;
  if (lastPt[0] !== 0 || lastPt[1] !== 0) {
    throw new Error(`${hint}: Closed path must end on [0, 0]`);
  }
}

function isClockwise(commands: IDrawCommand[]) {
  let sum = 0;
  for (let i = 0; i < commands.length; i++) {
    const p1 = commands[i].to;
    const p2 = commands[(i + 1) % commands.length].to;
    sum += (p2[0] - p1[0]) * (p2[1] + p1[1]);
  }
  return sum < 0;
}

function curveBoundingBox(
  from: Vec2,
  c1: Vec2,
  c2: Vec2,
  to: Vec2
): [Vec2, Vec2] {
  const evalAt = (i: number, t: number) =>
    from[i] * (1 - t) * (1 - t) * (1 - t) +
    3 * c1[i] * t * (1 - t) * (1 - t) +
    3 * c2[i] * t * t * (1 - t) +
    to[i] * t * t * t;

  const bounds = (i: number): Vec2 => {
    const a = 3 * to[i] - 9 * c2[i] + 9 * c1[i] - 3 * from[i];
    const b = 6 * from[i] - 12 * c1[i] + 6 * c2[i];
    const c = 3 * c1[i] - 3 * from[i];
    let min = Math.min(from[i], to[i]);
    let max = Math.max(from[i], to[i]);
    if (Math.abs(a) <= 0.00000001) {
      // a is zero
      const t1 = -c / b;
      if (t1 > 0 && t1 < 1) {
        const p = evalAt(i, t1);
        min = Math.min(min, p);
        max = Math.max(max, p);
      }
    } else {
      const disc = b * b - 4 * a * c;
      if (disc >= 0) {
        const sq = Math.sqrt(disc);
        const t1 = (-b + sq) / (2 * a);
        if (t1 > 0 && t1 < 1) {
          const p = evalAt(i, t1);
          min = Math.min(min, p);
          max = Math.max(max, p);
        }
        const t2 = (-b - sq) / (2 * a);
        if (t2 > 0 && t2 < 1) {
          const p = evalAt(i, t2);
          min = Math.min(min, p);
          max = Math.max(max, p);
        }
      }
    }
    return [min, max];
  };

  const bx = bounds(0);
  const by = bounds(1);
  return [
    [bx[0], by[0]],
    [bx[1], by[1]]
  ];
}

function drawCommandsBoundingBox(commands: IDrawCommand[]): [Vec2, Vec2] {
  let min: Vec2 = [0, 0];
  let max: Vec2 = [0, 0];
  let from: Vec2 = [0, 0];
  for (const cmd of commands) {
    switch (cmd.kind) {
      case 'L':
        min[0] = Math.min(min[0], cmd.to[0]);
        min[1] = Math.min(min[1], cmd.to[1]);
        max[0] = Math.max(max[0], cmd.to[0]);
        max[1] = Math.max(max[1], cmd.to[1]);
        break;
      case 'C': {
        const box = curveBoundingBox(
          from,
          cmd.c1,
          cmd.c2,
          cmd.to
        );
        min[0] = Math.min(min[0], box[0][0]);
        min[1] = Math.min(min[1], box[0][1]);
        max[0] = Math.max(max[0], box[1][0]);
        max[1] = Math.max(max[1], box[1][1]);
        break;
      }
    }
    from = cmd.to;
  }
  return [min, max];
}

export class Surface {
  thickness: number;
  border: IDrawCommand[];
  holes: IOffsetDrawCommands[];
  cuts: IOffsetDrawCommands[];
  scores: IOffsetDrawCommands[];
  text: ITextCommand[];

  constructor(
    thickness: number,
    border: IDrawCommand[],
    holes: IOffsetDrawCommands[] = [],
    cuts: IOffsetDrawCommands[] = [],
    scores: IOffsetDrawCommands[] = [],
    text: ITextCommand[] = []
  ) {
    validateClosedPath('Surface border', border);
    if (!isClockwise(border)) {
      throw new Error(`Surface border: Points must be in counter-clockwise order for border`);
    }
    for (let i = 0; i < holes.length; i++) {
      const hint = `Surface hole ${i}`;
      validateClosedPath(hint, holes[i].commands);
      if (isClockwise(holes[i].commands)) {
        throw new Error(`${hint}: Points must be in clockwise order for holes`);
      }
    }
    this.thickness = thickness;
    this.border = border;
    this.holes = holes;
    this.cuts = cuts;
    this.scores = scores;
    this.text = text;
  }

  borderBoundingBox() {
    return drawCommandsBoundingBox(this.border);
  }
}
