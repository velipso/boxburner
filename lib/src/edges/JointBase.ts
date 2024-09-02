//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { type Surface } from '../Surface';

export abstract class JointBase extends EdgeBase {
  abstract jointThickness(
    invert: boolean,
    thickness: number,
    params: any,
  ): number;
  abstract jointDraw(
    surface: Surface,
    length: number,
    invert: boolean,
    thickness: number,
    params: any,
  ): Surface;

  thickness(thickness: number, params: any) {
    return this.jointThickness(false, thickness, params);
  }

  draw(surface: Surface, length: number, thickness: number, params: any) {
    return this.jointDraw(surface, length, false, thickness, params);
  }
}
