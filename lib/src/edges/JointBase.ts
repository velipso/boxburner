//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { type SurfaceBuilder } from '../SurfaceBuilder';

export abstract class JointBase extends EdgeBase {
  abstract jointThickness(
    length: number,
    invert: boolean,
    thickness: number,
    params: any,
  ): number;
  abstract jointDraw(
    sb: SurfaceBuilder,
    length: number,
    invert: boolean,
    thickness: number,
    params: any,
  ): void;

  thickness(length: number, thickness: number, params: any) {
    return this.jointThickness(length, false, thickness, params);
  }

  draw(sb: SurfaceBuilder, length: number, thickness: number, params: any) {
    this.jointDraw(sb, length, false, thickness, params);
  }
}
