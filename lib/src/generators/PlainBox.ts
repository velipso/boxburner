//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { Surface } from '../Surface';
import { DrawBuilder } from '../DrawBuilder';

export interface IPlainBoxParams {
  thickness: number;
  width: number;
  height: number;
}

export class PlainBox extends GeneratorBase {
  name() {
    return 'PlainBox';
  }

  defaultParams() {
    return {
      thickness: 3,
      width: 100,
      height: 100
    };
  }

  schema() {
    return {
      properties: {
        thickness: { type: 'float64' },
        width: { type: 'float64' },
        height: { type: 'float64' },
      },
      metadata: {
        keyOrder: ['thickness', 'width', 'height'],
        titles: {
          thickness: 'Material Thickness (mm)',
          width: 'Outer Width (mm)',
          height: 'Outer Height (mm)'
        }
      }
    } as const;
  }

  generate({ thickness, width, height }: any) {
    return new Surface(
      thickness,
      new DrawBuilder()
        .lineTo([width, 0])
        .lineTo([width, height])
        .lineTo([0, height])
        .lineTo([0, 0])
        .build()
    );
  }
}
