//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { SurfaceBuilder } from '../SurfaceBuilder';
import { IGeneratorSettings, Vec2 } from '../types';
import { copyVec2, forwardVec2 } from '../util';

export class MortiseAndTenonEdge extends EdgeBase {
  name() {
    return 'MortiseAndTenonEdge';
  }

  schema() {
    return {
      properties: {
        invert: {
          type: 'boolean' as const,
          metadata: {
            default: false,
            title: 'Invert',
            description: 'Swap settings for receiving side',
          },
        },
        width1: {
          type: 'float64' as const,
          metadata: {
            default: 6,
            title: 'Width 1',
            description: 'Width of tenon (units)',
          },
        },
        tenonLength: {
          type: 'float64' as const,
          metadata: {
            default: 1,
            title: 'Tenon Length',
            description: 'Length of tenon (multiples of material thickness)',
          },
        },
        width2: {
          type: 'float64' as const,
          metadata: {
            default: 6,
            title: 'Width 2',
            description: 'Width between tenons (units)',
          },
        },
        holeDistance: {
          type: 'float64' as const,
          metadata: {
            default: 3,
            title: 'Hole Distance',
            description: 'Distance of mortises from edge (units)',
          },
        },
        play: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Play',
            description: 'Extra space between mortise and tenons (units)',
          },
        },
        thicknessPlay: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Thickness Play',
            description: 'Extra thickness added to mortise holes (units)',
          },
        },
        cornerDistance: {
          type: 'float64' as const,
          metadata: {
            default: 12,
            title: 'Corner Distance',
            description: 'Reserved space near corners to exclude joints (units)',
          },
        },
        centerDistance: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Center Distance',
            description: 'Reserved space near center to exclude joints (units)',
          },
        },
      },
      metadata: {
        order: ['invert', 'width1', 'tenonLength', 'width2', 'holeDistance', 'play',
          'thicknessPlay', 'cornerDistance', 'centerDistance'],
      }
    };
  }

  thickness(
    _length: number,
    callerInvert: boolean,
    { thickness }: IGeneratorSettings,
    { tenonLength, invert: userInvert }: any
  ) {
    const invert = callerInvert !== userInvert;
    return invert ? 0 : tenonLength * thickness;
  }

  draw(
    sb: SurfaceBuilder,
    length: number,
    callerInvert: boolean,
    { thickness }: IGeneratorSettings,
    {
      width1,
      tenonLength,
      width2,
      holeDistance,
      invert: userInvert,
      play,
      thicknessPlay,
      cornerDistance,
      centerDistance
    }: any
  ): void {
    const invert = callerInvert !== userInvert;
    const w1 = invert ? width1 + play : width1 - play;
    const w2 = invert ? width2 - play : width2 + play;
    let forward = (_length: number) => {};
    let finger = () => {};
    let space = () => {};
    const fingers = (count: number) => {
      finger();
      for (let i = 0; i < count; i++) {
        space();
        finger();
      }
    };
    if (invert) {
      const t = thickness + thicknessPlay * 2;
      const start = copyVec2(sb.border.cursor());
      const ang = sb.border.angle;
      forwardVec2(start, ang + 90, holeDistance + t - thicknessPlay);
      sb.border.forward(length);
      forward = (length: number) => {
        forwardVec2(start, ang, length);
      }
      finger = () => {
        sb.hole(copyVec2(start), ang)
          .forward(w1)
          .turn(-90)
          .forward(t)
          .turn(-90)
          .forward(w1)
          .turn(-90)
          .forward(t)
          .turn(-90);
        forward(w1);
      };
      space = () => forward(w2);
    } else {
      const t = tenonLength * thickness;
      const a = 90;
      forward = (length: number) =>
        sb.border.forward(length);
      finger = () =>
        sb.border.turn(-a).forward(t).turn(a).forward(w1).turn(a).forward(t).turn(-a);
      space = () =>
        sb.border.forward(w2);
    }

    const left = length - cornerDistance * 2;
    if (centerDistance > 0) {
      const half = (left - centerDistance) / 2;
      const fingerCount = Math.floor((half - width1) / (width1 + width2));
      const fingerLen = width1 + fingerCount * (width1 + width2);
      forward(cornerDistance + (half - fingerLen) / 2);
      fingers(fingerCount);
      forward(centerDistance + half - fingerLen);
      fingers(fingerCount);
      forward(cornerDistance + (half - fingerLen) / 2);
    } else {
      const fingerCount = Math.floor((left - width1) / (width1 + width2));
      const fingerLen = width1 + fingerCount * (width1 + width2);
      forward(cornerDistance + (left - fingerLen) / 2);
      fingers(fingerCount);
      forward(cornerDistance + (left - fingerLen) / 2);
    }
  }
}
