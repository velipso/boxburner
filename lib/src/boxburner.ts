//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

export * from './generators';
export * from './Surface';
export * from './DrawBuilder';
export * from './types';
import { PlainBox } from './generators';

export function test() {
  const p = new PlainBox();
  console.log(p.schema());
  console.log(p.generate({ thickness: 3, width: 50, height: 30 }));
}
