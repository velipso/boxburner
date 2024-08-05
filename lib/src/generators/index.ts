//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type GeneratorBase } from './GeneratorBase';
import { BoxCardstock } from './BoxCardstock';
import { BoxNested } from './BoxNested';
import { BoxPlain } from './BoxPlain';
import { KerfTester } from './KerfTester';
import { Rectangle } from './Rectangle';
export * from './GeneratorBase';
export * from './BoxCardstock';
export * from './BoxNested';
export * from './BoxPlain';
export * from './KerfTester';
export * from './Rectangle';

export const allGenerators: GeneratorBase[] = [
  new BoxCardstock(),
  new BoxNested(),
  new BoxPlain(),
  new KerfTester(),
  new Rectangle(),
];
