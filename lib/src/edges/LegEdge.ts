//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { type SurfaceBuilder } from '../SurfaceBuilder';

export class LegEdge extends EdgeBase {
  name() {
    return 'LegEdge';
  }

  schema() {
    return {
      properties: {
        flatWidth: {
          type: 'float64' as const,
          metadata: {
            default: 0.1,
            title: 'Flat Width',
            description: 'Flat part of leg (fraction of overall length)',
          },
        },
        curveWidth: {
          type: 'float64' as const,
          metadata: {
            default: 0.15,
            title: 'Curve Width',
            description: 'Curve part of leg (fraction of overall length)',
          },
        },
        curveAmount: {
          type: 'float64' as const,
          metadata: {
            default: 0.05,
            title: 'Curve Amount',
            description: 'How extreme to curve (fraction of overall length)',
          },
        },
        height: {
          type: 'float64' as const,
          metadata: {
            default: 10,
            title: 'Height (units)',
          },
        },
      },
      metadata: { order: ['flatWidth', 'curveWidth', 'curveAmount', 'height'] },
    };
  }

  thickness(_length: number, _thickness: number, { height }: any) {
    return -height;
  }

  draw(
    sb: SurfaceBuilder,
    length: number,
    thickness: number,
    { flatWidth, curveWidth, curveAmount, height }: any,
  ): void {
    const d = curveAmount * length;
    let a = 90;
    let aheight = height;
    if (d !== 0) {
      a = 180 - (Math.atan2(height / 2, d) * 180) / Math.PI;
      aheight = 2 * Math.sqrt((height * height) / 4 + d * d);
    }
    sb.border
      .turn(-90)
      .forward(height)
      .turn(90)
      .forward(flatWidth * length)
      .forwardCurve(
        curveWidth * length * 0.5 + d,
        a,
        aheight,
        -a,
        curveWidth * length * 0.5 + d,
      )
      .forward((1 - (flatWidth + curveWidth) * 2) * length)
      .forwardCurve(
        curveWidth * length * 0.5 + d,
        -a,
        aheight,
        a,
        curveWidth * length * 0.5 + d,
      )
      .forward(flatWidth * length)
      .turn(90)
      .forward(height)
      .turn(-90);
  }
}
