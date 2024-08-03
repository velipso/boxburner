//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type DocumentBase } from './DocumentBase';
import { DocumentSVG } from './DocumentSVG';
import { type IGeneratorSettings } from '../types';
export * from './DocumentBase';
export * from './DocumentSVG';

export function exportDocument(settings: IGeneratorSettings): DocumentBase {
  const { fileFormat } = settings;
  switch (fileFormat) {
    case 'svg':
      return new DocumentSVG(settings);
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unknown export file format: ${fileFormat}`);
  }
}
