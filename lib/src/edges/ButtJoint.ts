//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { SurfaceBuilder } from '../SurfaceBuilder';
import { IGeneratorSettings } from '../types';

export class ButtJoint extends EdgeBase {
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
      metadata: { order: ['invert', 'length1', 'length2'] }
    };
  }

  thickness(
    _length: number,
    callerInvert: boolean,
    { thickness }: IGeneratorSettings,
    { length1, length2, invert: userInvert }: any
  ) {
    const invert = callerInvert !== userInvert;
    return (invert ? -length2 : length1) * thickness;
  }

  draw(
    sb: SurfaceBuilder,
    length: number,
    callerInvert: boolean,
    { thickness }: IGeneratorSettings,
    {
      invert: userInvert,
      length1,
      length2,
    }: any
  ): void {
    const invert = callerInvert !== userInvert;
    const t = (invert ? length2 : length1) * thickness;
    const a = invert ? -90 : 90;
    sb.border.turn(-a).forward(t).turn(a).forward(length).turn(a).forward(t).turn(-a);
  }
}
