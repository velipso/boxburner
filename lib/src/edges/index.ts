//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type EdgeBase } from './EdgeBase';
import { ButtJoint } from './ButtJoint';
import { BoxJoint } from './BoxJoint';
import { MortiseAndTenonJoint } from './MortiseAndTenonJoint';
import {
  type JSONTypeDefDiscriminator,
  type JSONTypeDefProperties,
} from '../types';
export * from './EdgeBase';
export * from './ButtJoint';
export * from './BoxJoint';
export * from './MortiseAndTenonJoint';

export const allEdges: EdgeBase[] = [
  new ButtJoint(),
  new BoxJoint(),
  new MortiseAndTenonJoint(),
];

export function allEdgesTypeDef(metadata: any = {}): JSONTypeDefDiscriminator {
  return {
    discriminator: 'kind',
    mapping: allEdges
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
    metadata: {
      default: allEdges[0].name(),
      order: allEdges.map((e) => e.name()),
      ...metadata,
    },
  };
}
