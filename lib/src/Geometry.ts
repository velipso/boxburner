//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type IntersectionResult } from './types';
import { GeometryEpsilon, PolyBool } from '@velipso/polybool';
export { Shape, type Segment } from '@velipso/polybool';

class GeometryExt extends GeometryEpsilon {
  atan2Deg(dy: number, dx: number) {
    if (Math.abs(dy) < this.epsilon) {
      return dx > 0 || Math.abs(dx) < this.epsilon ? 0 : 180;
    } else if (Math.abs(dx) < this.epsilon) {
      return dy < 0 ? 270 : 90;
    } else if (Math.abs(dx - dy) < this.epsilon) {
      return dx < 0 ? 225 : 45;
    } else if (Math.abs(dx + dy) < this.epsilon) {
      return dx < 0 ? 135 : 315;
    }
    return ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
  }

  sinDeg(degrees: number) {
    const ang = ((degrees % 360) + 360) % 360;
    switch (ang) {
      case 0:
      case 180:
        return 0;
      case 30:
      case 150:
        return 0.5;
      case 45:
      case 135:
        return Math.SQRT1_2;
      case 60:
      case 120:
        return Math.sqrt(3) / 2;
      case 90:
        return 1;
      case 210:
      case 330:
        return -0.5;
      case 225:
      case 315:
        return -Math.SQRT1_2;
      case 240:
      case 300:
        return -Math.sqrt(3) / 2;
      case 270:
        return -1;
      default:
        return Math.sin((ang * Math.PI) / 180);
    }
  }

  cosDeg(degrees: number) {
    const ang = ((degrees % 360) + 360) % 360;
    switch (ang) {
      case 0:
        return 1;
      case 30:
      case 330:
        return Math.sqrt(3) / 2;
      case 45:
      case 315:
        return Math.SQRT1_2;
      case 60:
      case 300:
        return 0.5;
      case 90:
      case 270:
        return 0;
      case 120:
      case 240:
        return -0.5;
      case 135:
      case 225:
        return -Math.SQRT1_2;
      case 150:
      case 210:
        return -Math.sqrt(3) / 2;
      case 180:
        return -1;
      default:
        return Math.cos((ang * Math.PI) / 180);
    }
  }

  linesIntersect(
    a1x: number,
    a1y: number,
    a2x: number,
    a2y: number,
    b1x: number,
    b1y: number,
    b2x: number,
    b2y: number,
  ): IntersectionResult | null {
    // returns null if the lines are coincident (e.g., parallel or on top of
    // each other)
    const adx = a2x - a1x;
    const ady = a2y - a1y;
    const bdx = b2x - b1x;
    const bdy = b2y - b1y;

    const axb = adx * bdy - ady * bdx;
    if (this.snap0(axb) === 0) {
      return null; // lines are coincident
    }

    const dx = a1x - b1x;
    const dy = a1y - b1y;

    const A = this.snap01((bdx * dy - bdy * dx) / axb);
    const B = this.snap01((adx * dy - ady * dx) / axb);

    return {
      p: [a1x + A * adx, a1y + A * ady],
      alongA: A,
      alongB: B,
    };
  }
}

export const geo = new GeometryExt();
export const polybool = new PolyBool(geo);
