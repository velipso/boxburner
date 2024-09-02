//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { JointBase } from './JointBase';
import { type Surface } from '../Surface';

export function boxJointFingerSpacer(
  {
    length,
    width1,
    width2,
    cornerDistance1,
    cornerDistance2,
    centerDistance,
  }: {
    length: number;
    width1: number;
    width2: number;
    cornerDistance1: number;
    cornerDistance2: number;
    centerDistance: number;
  },
  forward: (x: number, d: number, finger: boolean) => void,
) {
  let x = 0;
  const fwd = (d: number, finger: boolean) => {
    forward(x, d, finger);
    x += d;
  };
  const fingers = (count: number) => {
    if (count > 10000) {
      throw new Error('Too many fingers');
    }
    fwd(width1, true);
    for (let i = 0; i < count; i++) {
      fwd(width2, false);
      fwd(width1, true);
    }
  };
  const left = length - cornerDistance1 - cornerDistance2;
  if (centerDistance > 0) {
    const half = (left - centerDistance) / 2;
    const fingerCount = Math.floor((half - width1) / (width1 + width2));
    const fingerLen = width1 + fingerCount * (width1 + width2);
    fwd(cornerDistance1 + (half - fingerLen) / 2, false);
    fingers(fingerCount);
    fwd(centerDistance + half - fingerLen, false);
    fingers(fingerCount);
    fwd(cornerDistance2 + (half - fingerLen) / 2, false);
  } else {
    const fingerCount = Math.floor((left - width1) / (width1 + width2));
    const fingerLen = width1 + fingerCount * (width1 + width2);
    fwd(cornerDistance1 + (left - fingerLen) / 2, false);
    fingers(fingerCount);
    fwd(cornerDistance2 + (left - fingerLen) / 2, false);
  }
}

export class BoxJoint extends JointBase {
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
        cornerDistance1Delta: {
          type: 'float64' as const,
          nullable: true as const,
          metadata: {
            default: null,
            defaultNotNull: 0,
            title: 'Corner Distance 1 Delta',
            description: 'Additional corner distance',
          },
        },
        cornerDistance2Delta: {
          type: 'float64' as const,
          nullable: true as const,
          metadata: {
            default: null,
            defaultNotNull: 0,
            title: 'Corner Distance 2 Delta',
            description: 'Additional corner distance',
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

  jointThickness(
    callerInvert: boolean,
    thickness: number,
    { length1, length2, invert: userInvert }: any,
  ) {
    const invert = callerInvert !== userInvert;
    return (invert ? length2 : length1) * thickness;
  }

  jointDraw(
    surface: Surface,
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
      cornerDistance1Delta,
      cornerDistance2Delta,
      centerDistance,
    }: any,
  ): Surface {
    const invert = callerInvert !== userInvert;
    const th = (invert ? length2 : length1) * thickness;
    boxJointFingerSpacer(
      {
        length,
        width1,
        width2,
        cornerDistance1: cornerDistance + (cornerDistance1Delta ?? 0),
        cornerDistance2: cornerDistance + (cornerDistance2Delta ?? 0),
        centerDistance,
      },
      (x: number, d: number, finger: boolean) => {
        if (finger === invert) {
          surface = surface.subtractBorder(
            surface
              .newShape()
              .beginPath()
              .rect(x - play / 2, 0, d + play, th)
              .closePath(),
          );
        }
      },
    );
    return surface;
  }
}
