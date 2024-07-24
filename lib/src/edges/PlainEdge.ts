//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { SurfaceBuilder } from '../SurfaceBuilder';
import { IGeneratorSettings } from '../types';

export class PlainEdge extends EdgeBase {
  name() {
    return 'PlainEdge';
  }

  schema() {
    return {
      properties: {},
      metadata: { order: [] }
    };
  }

  thickness(
    _length: number,
    _invert: boolean,
    _settings: IGeneratorSettings,
    _params: any
  ) {
    return 0;
  }

  draw(
    sb: SurfaceBuilder,
    length: number,
    _invert: boolean,
    _settings: IGeneratorSettings,
    _params: any
  ): void {
    sb.border.forward(length);
  }
}
