//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type EdgeBase } from './EdgeBase';
import { type JointBase } from './JointBase';
import { BoxJoint } from './BoxJoint';
import { ButtJoint } from './ButtJoint';
import { LegEdge } from './LegEdge';
import { MortiseAndTenonJoint } from './MortiseAndTenonJoint';
import { type JSONTypeDefDiscriminator } from '../types';
import { edgeListTypeDef } from './typedef';
export * from './EdgeBase';
export * from './JointBase';
export * from './BoxJoint';
export * from './ButtJoint';
export * from './MortiseAndTenonJoint';
export * from './typedef';

export const allEdges: EdgeBase[] = [
  new BoxJoint(),
  new ButtJoint(),
  new LegEdge(),
  new MortiseAndTenonJoint(),
];

export const allJoints: JointBase[] = [
  new BoxJoint(),
  new ButtJoint(),
  new MortiseAndTenonJoint(),
];

export function allEdgesTypeDef(
  metadata: any = {},
  nullable?: boolean,
): JSONTypeDefDiscriminator {
  return edgeListTypeDef(allEdges, metadata, nullable);
}
