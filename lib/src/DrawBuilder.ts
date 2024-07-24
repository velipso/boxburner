//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { IDrawCommand, Vec2 } from './types';
import { forwardVec2 } from './util';

const eps = 0.0000001;

export class DrawBuilder {
  commands: IDrawCommand[] = [];
  angle = 0;

  cursor(): Vec2 {
    if (this.commands.length <= 0) {
      return [0, 0];
    }
    return this.commands[this.commands.length - 1].to;
  }

  lineTo(to: Vec2) {
    const last = this.commands[this.commands.length - 1];
    if (last && last.kind === 'L') {
      // combine colliner segments
      const p1: Vec2 = this.commands[this.commands.length - 2]?.to ?? [0, 0];
      const p2 = last.to;
      const p3 = to;

      if (
        Math.abs(p1[0] - p3[0]) < eps &&
        Math.abs(p1[1] - p3[1]) < eps
      ) {
        // this line is undo'ing previous line, so remove it
        this.commands.pop();
        return this;
      }

      const dx1 = p1[0] - p2[0];
      const dy1 = p1[1] - p2[1];
      const dx2 = p2[0] - p3[0];
      const dy2 = p2[1] - p3[1];
      if (Math.abs(dx1 * dy2 - dx2 * dy1) < eps) {
        // points are collinear, so update last line instead of drawing an additional line
        last.to = to;
        return this;
      }
    }
    this.commands.push({ kind: 'L', to });
    return this;
  }

  lineToRelative(delta: Vec2) {
    const here = this.cursor();
    return this.lineTo([here[0] + delta[0], here[1] + delta[1]]);
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

  turn(dangle: number) {
    this.angle = (((this.angle + dangle) % 360) + 360) % 360;
    return this;
  }

  forward(dist: number) {
    if (dist !== 0) {
      this.lineToRelative(forwardVec2([0, 0], this.angle, dist));
    }
    return this;
  }

  close() {
    this.lineTo([0, 0]);
    const first = this.commands[0];
    const last = this.commands[this.commands.length - 1];
    if (last?.kind === 'L' && first?.kind === 'L') {
      // combine colliner segments
      const p1: Vec2 = this.commands[this.commands.length - 2]?.to ?? [0, 0];
      const p2 = last.to; // should be [0, 0]
      const p3 = first.to;
      const dx1 = p1[0] - p2[0];
      const dy1 = p1[1] - p2[1];
      const dx2 = p2[0] - p3[0];
      const dy2 = p2[1] - p3[1];
      if (
        Math.abs(p1[0] - p3[0]) < eps &&
        Math.abs(p1[1] - p3[1]) < eps
      ) {
        this.commands.shift();
      } else if (Math.abs(dx1 * dy2 - dx2 * dy1) >= eps) {
        // points aren't collinear, so bail
        return this;
      }
      this.commands.pop();
      for (const cmd of this.commands) {
        cmd.to[0] -= p1[0];
        cmd.to[1] -= p1[1];
        if (cmd.kind === 'C') {
          cmd.c1[0] -= p1[0];
          cmd.c1[1] -= p1[1];
          cmd.c2[0] -= p1[0];
          cmd.c2[1] -= p1[1];
        }
      }
    }
    return this;
  }

  build() {
    return this.commands;
  }
}
