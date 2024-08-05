//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import {
  type Vec2,
  type IDrawCommand,
  AlongIntersection,
  type IntersectionResult,
} from './types';

export const eps = 0.0000001;

export function copyVec2(p: Vec2): Vec2 {
  return [p[0], p[1]];
}

export function forwardVec2(p: Vec2, angle: number, dist: number) {
  angle = ((angle % 360) + 360) % 360;
  if (dist !== 0) {
    if (angle === 0) {
      p[0] += dist;
    } else if (angle === 90) {
      p[1] += dist;
    } else if (angle === 180) {
      p[0] -= dist;
    } else if (angle === 270) {
      p[1] -= dist;
    } else {
      p[0] += dist * Math.cos((angle * Math.PI) / 180);
      p[1] += dist * Math.sin((angle * Math.PI) / 180);
    }
  }
  return p;
}

export function linesIntersect(
  aStart: Vec2,
  aEnd: Vec2,
  bStart: Vec2,
  bEnd: Vec2,
): IntersectionResult | null {
  // returns null if the lines are coincident (e.g., parallel or on top of
  // each other)
  //
  // returns an object if the lines intersect:
  //   {
  //     p: [x, y],    where the intersection point is at
  //     alongA: where intersection point is along A,
  //     alongB: where intersection point is along B
  //   }
  //
  // alongA and alongB will each be one of AlongIntersection, depending on
  // where the intersection point is along the A and B lines
  //
  const adx = aEnd[0] - aStart[0];
  const ady = aEnd[1] - aStart[1];
  const bdx = bEnd[0] - bStart[0];
  const bdy = bEnd[1] - bStart[1];

  const axb = adx * bdy - ady * bdx;
  if (Math.abs(axb) < eps) {
    return null; // lines are coincident
  }

  const dx = aStart[0] - bStart[0];
  const dy = aStart[1] - bStart[1];

  const A = (bdx * dy - bdy * dx) / axb;
  const B = (adx * dy - ady * dx) / axb;

  // categorizes where along the line the intersection point is at
  const categorize = (v: number): AlongIntersection =>
    v <= -eps
      ? AlongIntersection.BeforeStart
      : v < eps
        ? AlongIntersection.EqualStart
        : v - 1 <= -eps
          ? AlongIntersection.BetweenStartAndEnd
          : v - 1 < eps
            ? AlongIntersection.EqualEnd
            : AlongIntersection.AfterEnd;

  const p: Vec2 = [aStart[0] + A * adx, aStart[1] + A * ady];
  return {
    alongA: categorize(A),
    alongB: categorize(B),
    p,
  };
}

export function expandPathByKerf(
  offset: Vec2,
  commands: IDrawCommand[],
  kerf: number,
): { offset: Vec2; commands: IDrawCommand[] } {
  if (kerf <= 0) {
    return { offset, commands };
  }
  const halfKerf = kerf / 2;
  const newOffset = copyVec2(offset);
  const newCommands: IDrawCommand[] = [];
  const offsetAt = (
    i: number,
  ): {
    angle: number;
    offset: Vec2;
  } => {
    const cmd = commands[i];
    let angle = 0;
    switch (cmd.kind) {
      case 'L': {
        const last = commands[i === 0 ? commands.length - 1 : i - 1];
        angle = Math.atan2(last.to[1] - cmd.to[1], last.to[0] - cmd.to[0]);
        break;
      }
      case 'C':
        angle = Math.atan2(cmd.c2[1] - cmd.to[1], cmd.c2[0] - cmd.to[0]);
        break;
    }
    const normal = angle + Math.PI / 2;
    const sx = halfKerf * Math.cos(normal);
    const sy = halfKerf * Math.sin(normal);
    return { angle, offset: [sx, sy] };
  };
  const roundedCommands: number[] = [];
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    const last = commands[(i + commands.length - 1) % commands.length];
    const {
      angle: a1,
      offset: [sx, sy],
    } = offsetAt(i);
    const {
      angle: a2,
      offset: [lx, ly],
    } = offsetAt((i + commands.length - 1) % commands.length);
    if (Math.abs(a1 - a2) >= eps) {
      const dang = Math.min(
        Math.abs(a1 - a2),
        Math.abs(a1 + Math.PI * 2 - a2),
        Math.abs(a1 - (a2 + Math.PI * 2)),
      );
      const cdist = (halfKerf * 4 * Math.tan(dang / 4)) / 3;
      roundedCommands.push(newCommands.length);
      newCommands.push({
        kind: 'C',
        c1: [
          last.to[0] + lx - cdist * Math.cos(a2),
          last.to[1] + ly - cdist * Math.sin(a2),
        ],
        c2: [
          last.to[0] + sx + cdist * Math.cos(a1),
          last.to[1] + sy + cdist * Math.sin(a1),
        ],
        to: [last.to[0] + sx, last.to[1] + sy],
      });
    }
    switch (cmd.kind) {
      case 'L': {
        newCommands.push({
          kind: 'L',
          to: [cmd.to[0] + sx, cmd.to[1] + sy],
        });
        break;
      }
      case 'C': {
        const a1 = Math.atan2(last.to[1] - cmd.c1[1], last.to[0] - cmd.c1[0]);
        const normal1 = a1 + Math.PI / 2;
        const s1x = halfKerf * Math.cos(normal1);
        const s1y = halfKerf * Math.sin(normal1);
        const a2 = Math.atan2(cmd.c2[1] - cmd.to[1], cmd.c2[0] - cmd.to[0]);
        const normal2 = a2 + Math.PI / 2;
        const s2x = halfKerf * Math.cos(normal2);
        const s2y = halfKerf * Math.sin(normal2);
        newCommands.push({
          kind: 'C',
          c1: [cmd.c1[0] + s1x, cmd.c1[1] + s1y],
          c2: [cmd.c2[0] + s2x, cmd.c2[1] + s2y],
          to: [cmd.to[0] + s2x, cmd.to[1] + s2y],
        });
        break;
      }
    }
  }
  // create loops from inner rounded corners
  for (const i of roundedCommands) {
    const prev = newCommands[(i + newCommands.length - 1) % newCommands.length];
    const here = newCommands[i];
    const next = newCommands[(i + 1) % newCommands.length];
    if (here.kind === 'C') {
      // check if next/prev intersect, and if so, turn here into a loop
      const res = linesIntersect(
        prev.kind === 'L'
          ? newCommands[(i + newCommands.length - 2) % newCommands.length].to
          : prev.c2,
        prev.to,
        here.to,
        next.kind === 'L' ? next.to : next.c1,
      );
      if (
        res &&
        res.alongA === AlongIntersection.BetweenStartAndEnd &&
        res.alongB === AlongIntersection.BetweenStartAndEnd
      ) {
        here.c1 = prev.to;
        here.c2 = here.to;
        prev.to = copyVec2(res.p);
        here.to = copyVec2(res.p);
      }
    }
  }
  // recalculate offset based on last point ending at [0, 0]
  const [ox, oy] = newCommands[newCommands.length - 1].to;
  newOffset[0] += ox;
  newOffset[1] += oy;
  for (const cmd of newCommands) {
    switch (cmd.kind) {
      case 'L':
        cmd.to[0] -= ox;
        cmd.to[1] -= oy;
        break;
      case 'C':
        cmd.c1[0] -= ox;
        cmd.c1[1] -= oy;
        cmd.c2[0] -= ox;
        cmd.c2[1] -= oy;
        cmd.to[0] -= ox;
        cmd.to[1] -= oy;
        break;
    }
  }
  return {
    offset: newOffset,
    commands: newCommands,
  };
}
