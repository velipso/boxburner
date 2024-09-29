//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type GeneratorBase } from './GeneratorBase';
import { BoxPlain } from './BoxPlain';
import { BoxNested } from './BoxNested';
import { BoxCardstock } from './BoxCardstock';
import { KerfTester } from './KerfTester';
import { Rectangle } from './Rectangle';
export * from './BoxPlain';
export * from './BoxNested';
export * from './BoxCardstock';
export * from './KerfTester';
export * from './GeneratorBase';
export * from './Rectangle';

export const allGenerators: GeneratorBase[] = [
  new BoxNested(),
  new BoxPlain(),
  new BoxCardstock(),
  new KerfTester(),
  new Rectangle(),
];
