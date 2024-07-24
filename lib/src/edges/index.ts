//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { EdgeBase } from './EdgeBase';
import { PlainEdge } from './PlainEdge';
import { BoxJointEdge } from './BoxJointEdge';
import { MortiseAndTenonEdge } from './MortiseAndTenonEdge';
import { JSONTypeDefDiscriminator, JSONTypeDefProperties } from '../types';
export * from './EdgeBase';
export * from './PlainEdge';
export * from './BoxJointEdge';
export * from './MortiseAndTenonEdge';

export const allEdges: EdgeBase[] = [
  new PlainEdge(),
  new BoxJointEdge(),
  new MortiseAndTenonEdge(),
];

export function allEdgesTypeDef(metadata: any = {}): JSONTypeDefDiscriminator {
  return {
    discriminator: 'kind',
    mapping:
      allEdges.map((e): { [name: string]: JSONTypeDefProperties } => ({
        [e.name()]: {
          properties: {
            kind: {
              type: 'string' as const,
              metadata: {
                default: e.name(),
                title: e.name(),
              },
            },
            params: e.schema()
          },
          metadata: {
            order: ['params'],
            untabParams: true,
          },
        }
      }))
      .reduce((a, b) => ({ ...a, ...b }), {}),
    metadata: {
      default: allEdges[0].name(),
      order: allEdges.map(e => e.name()),
      ...metadata,
    },
  };
}
