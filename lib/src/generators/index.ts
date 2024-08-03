//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type GeneratorBase } from './GeneratorBase';
import { Rectangle } from './Rectangle';
import { PlainBox } from './PlainBox';
import { KerfTester } from './KerfTester';
export * from './GeneratorBase';
export * from './Rectangle';
export * from './PlainBox';
export * from './KerfTester';

export const allGenerators: GeneratorBase[] = [
  new KerfTester(),
  new PlainBox(),
  new Rectangle(),
];
