//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type EdgeBase } from './EdgeBase';
import {
  type JSONTypeDefDiscriminator,
  type JSONTypeDefProperties,
} from '../types';

export function edgeListTypeDef(
  edges: EdgeBase[],
  metadata: any = {},
  nullable?: boolean,
): JSONTypeDefDiscriminator {
  return {
    discriminator: 'kind',
    mapping: edges
      .map(
        (e): Record<string, JSONTypeDefProperties> => ({
          [e.name()]: {
            properties: {
              kind: {
                type: 'string' as const,
                metadata: {
                  default: e.name(),
                  title: e.name(),
                },
              },
              params: e.schema(),
            },
            metadata: {
              order: ['params'],
              untabParams: true,
            },
          },
        }),
      )
      .reduce((a, b) => ({ ...a, ...b }), {}),
    nullable,
    metadata: {
      default: edges[0].name(),
      order: edges.map((e) => e.name()),
      ...metadata,
    },
  };
}
