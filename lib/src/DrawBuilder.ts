//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { IDrawCommand, Vec2 } from './types';

export class DrawBuilder {
  commands: IDrawCommand[] = [];

  cursor(): Vec2 {
    if (this.commands.length <= 0) {
      return [0, 0];
    }
    return this.commands[this.commands.length - 1].to;
  }

  lineTo(to: Vec2) {
    this.commands.push({ kind: 'L', to });
    return this;
  }

  quadCurveTo(c1: Vec2, to: Vec2) {
    // convert quadratic curve to cubic
    const p0 = this.cursor();
    return this.curveTo(
      [p0[0] + 2 * (c1[0] - p0[0]) / 3, p0[1] + 2 * (c1[1] - p0[1]) / 3],
      [to[0] + 2 * (c1[0] - to[0]) / 3, to[1] + 2 * (c1[1] - to[1]) / 3],
      to
    );
  }

  curveTo(c1: Vec2, c2: Vec2, to: Vec2) {
    this.commands.push({ kind: 'C', c1, c2, to });
    return this;
  }

  build() {
    return this.commands;
  }
}
