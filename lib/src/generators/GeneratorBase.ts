//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type Surface } from '../Surface';
import { type JSONTypeDef, type IGeneratorSettings } from '../types';

export abstract class GeneratorBase {
  abstract name(): string;
  abstract schema(): JSONTypeDef;
  abstract generate(settings: IGeneratorSettings, params: any): Surface[];
}
