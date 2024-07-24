//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { Vec2 } from './types';

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
      p[0] += dist * Math.cos(angle * Math.PI / 180);
      p[1] += dist * Math.sin(angle * Math.PI / 180);
    }
  }
  return p;
}
