//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { Rectangle } from './Rectangle';
import { PlainBox } from './PlainBox';
export * from './GeneratorBase';
export * from './Rectangle';
export * from './PlainBox';

export const allGenerators: GeneratorBase[] = [
	new Rectangle(),
	new PlainBox(),
];
