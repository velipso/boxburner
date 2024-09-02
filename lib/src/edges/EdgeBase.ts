//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type Surface } from '../Surface';
import { type JSONTypeDef } from '../types';

export abstract class EdgeBase {
  abstract name(): string;
  abstract schema(): JSONTypeDef;
  abstract thickness(thickness: number, params: any): number;
  abstract draw(
    surface: Surface,
    length: number,
    thickness: number,
    params: any,
  ): Surface;
}
