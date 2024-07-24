//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { DocumentBase } from './DocumentBase';
import { DocumentSVG } from './DocumentSVG';
import { IGeneratorSettings } from '../types';
export * from './DocumentBase';
export * from './DocumentSVG';

export function exportDocument(settings: IGeneratorSettings): DocumentBase {
  switch (settings.fileFormat) {
    case 'svg':
      return new DocumentSVG(settings);
  }
  throw new Error(`Unknown export file format: ${settings.fileFormat}`);
}
