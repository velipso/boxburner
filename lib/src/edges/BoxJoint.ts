//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { type SurfaceBuilder } from '../SurfaceBuilder';

export class BoxJoint extends EdgeBase {
  name() {
    return 'BoxJoint';
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
            description: 'Width of finger 1 (units)',
          },
        },
        length1: {
          type: 'float64' as const,
          metadata: {
            default: 1,
            title: 'Length 1',
            description: 'Length of finger 1 (multiples of material thickness)',
          },
        },
        width2: {
          type: 'float64' as const,
          metadata: {
            default: 6,
            title: 'Width 2',
            description: 'Width of finger 2 (units)',
          },
        },
        length2: {
          type: 'float64' as const,
          metadata: {
            default: 1,
            title: 'Length 2',
            description: 'Length of finger 2 (multiples of material thickness)',
          },
        },
        play: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Play',
            description: 'Extra space around fingers (units)',
          },
        },
        cornerDistance: {
          type: 'float64' as const,
          metadata: {
            default: 12,
            title: 'Corner Distance',
            description:
              'Reserved space near corners to exclude fingers (units)',
          },
        },
        centerDistance: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Center Distance',
            description:
              'Reserved space near center to exclude fingers (units)',
          },
        },
      },
      metadata: {
        order: [
          'invert',
          'width1',
          'length1',
          'width2',
          'length2',
          'play',
          'cornerDistance',
          'centerDistance',
        ],
      },
    };
  }

  thickness(
    _length: number,
    callerInvert: boolean,
    thickness: number,
    { length1, length2, invert: userInvert }: any,
  ) {
    const invert = callerInvert !== userInvert;
    return (invert ? -length2 : length1) * thickness;
  }

  draw(
    sb: SurfaceBuilder,
    length: number,
    callerInvert: boolean,
    thickness: number,
    {
      invert: userInvert,
      width1,
      length1,
      width2,
      length2,
      play,
      cornerDistance,
      centerDistance,
    }: any,
  ): void {
    const db = sb.border;
    const invert = callerInvert !== userInvert;
    const t = (invert ? length2 : length1) * thickness;
    const iplay = invert ? -play : play;
    const a = invert ? -90 : 90;
    const finger = () =>
      db
        .forward(iplay / 2)
        .turn(-a)
        .forward(t)
        .turn(a)
        .forward(width1 - iplay)
        .turn(a)
        .forward(t)
        .turn(-a)
        .forward(iplay / 2);
    const space = () => db.forward(width2);
    const fingers = (count: number) => {
      finger();
      for (let i = 0; i < count; i++) {
        space();
        finger();
      }
    };
    const left = length - cornerDistance * 2;
    if (centerDistance > 0) {
      const half = (left - centerDistance) / 2;
      const fingerCount = Math.floor((half - width1) / (width1 + width2));
      const fingerLen = width1 + fingerCount * (width1 + width2);
      db.forward(cornerDistance + (half - fingerLen) / 2);
      fingers(fingerCount);
      db.forward(centerDistance + half - fingerLen);
      fingers(fingerCount);
      db.forward(cornerDistance + (half - fingerLen) / 2);
    } else {
      const fingerCount = Math.floor((left - width1) / (width1 + width2));
      const fingerLen = width1 + fingerCount * (width1 + width2);
      db.forward(cornerDistance + (left - fingerLen) / 2);
      fingers(fingerCount);
      db.forward(cornerDistance + (left - fingerLen) / 2);
    }
  }
}
