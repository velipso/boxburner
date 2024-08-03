//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type SurfaceBuilder } from '../SurfaceBuilder';
import { type JSONTypeDef, type IGeneratorSettings } from '../types';

export abstract class EdgeBase {
  abstract name(): string;
  abstract schema(): JSONTypeDef;
  abstract thickness(
    length: number,
    invert: boolean,
    settings: IGeneratorSettings,
    params: any,
  ): number;
  abstract draw(
    sb: SurfaceBuilder,
    length: number,
    invert: boolean,
    settings: IGeneratorSettings,
    params: any,
  ): void;
}
