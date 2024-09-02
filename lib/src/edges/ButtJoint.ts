//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { JointBase } from './JointBase';
import { type Surface } from '../Surface';

export class ButtJoint extends JointBase {
  name() {
    return 'ButtJoint';
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
        length1: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Length 1',
            description: 'Length of butt 1 (multiples of material thickness)',
          },
        },
        length2: {
          type: 'float64' as const,
          metadata: {
            default: 1,
            title: 'Length 2',
            description: 'Length of butt 2 (multiples of material thickness)',
          },
        },
      },
      metadata: { order: ['invert', 'length1', 'length2'] },
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
    _length: number,
    _callerInvert: boolean,
    _thickness: number,
    _params: any,
  ): Surface {
    return surface;
  }
}
