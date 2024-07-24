//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { Surface } from '../Surface';
import { IExportFile, Vec2, IGeneratorSettings } from '../types';

export abstract class DocumentBase {
  constructor(settings: IGeneratorSettings){}
  abstract addSurface(
    offset: Vec2,
    surface: Surface,
    cutColor: string,
    holeColor: string,
    scoreColor: string
  ): void;
  abstract toFile(): IExportFile;
}
