//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { IDrawCommand, ITextCommand } from './types';

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

export class Surface {
  thickness: number;
  border: IDrawCommand[];
  holes: IDrawCommand[][];
  cuts: IDrawCommand[][];
  text: ITextCommand[];

  constructor(
    thickness: number,
    border: IDrawCommand[],
    holes: IDrawCommand[][] = [],
    cuts: IDrawCommand[][] = [],
    text: ITextCommand[] = []
  ) {
    validateClosedPath('Surface border', border);
    if (!isClockwise(border)) {
      throw new Error(`Surface border: Points must be in counter-clockwise order for border`);
    }
    for (let i = 0; i < holes.length; i++) {
      const hint = `Surface hole ${i}`;
      validateClosedPath(hint, holes[i]);
      if (isClockwise(holes[i])) {
        throw new Error(`${hint}: Points must be in clockwise order for holes`);
      }
    }
    this.thickness = thickness;
    this.border = border;
    this.holes = holes;
    this.cuts = cuts;
    this.text = text;
  }
}
