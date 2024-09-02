//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { type Surface } from '../Surface';

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

  thickness(_thickness: number, { height }: any) {
    return Math.max(0, height);
  }

  draw(
    surface: Surface,
    length: number,
    thickness: number,
    { flatWidth, curveWidth, curveAmount, height }: any,
  ): Surface {
    if (height <= 0) {
      return surface;
    }
    return surface.subtractBorder(
      surface
        .newShape()
        .beginPath()
        .moveTo(flatWidth * length, 0)
        .bezierCurveTo(
          (flatWidth + curveAmount) * length,
          0,
          (flatWidth + curveWidth - curveAmount) * length,
          height,
          (flatWidth + curveWidth) * length,
          height,
        )
        .lineTo((1 - flatWidth - curveWidth) * length, height)
        .bezierCurveTo(
          (1 - flatWidth - curveWidth + curveAmount) * length,
          height,
          (1 - flatWidth - curveAmount) * length,
          0,
          (1 - flatWidth) * length,
          0,
        )
        .closePath(),
    );
  }
}
