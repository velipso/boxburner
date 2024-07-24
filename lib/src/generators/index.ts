//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { PlainRectangle } from './PlainRectangle';
export * from './GeneratorBase';
export * from './PlainRectangle';

export const allGenerators: GeneratorBase[] = [
	new PlainRectangle(),
];
