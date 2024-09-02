//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { JointBase } from './JointBase';
import { type EdgeBase } from './EdgeBase';
import { type Surface } from '../Surface';
import { BoxJoint, boxJointFingerSpacer } from './BoxJoint';
import { ButtJoint } from './ButtJoint';
import { LegEdge } from './LegEdge';
import { edgeListTypeDef } from './typedef';

const otherEdges: EdgeBase[] = [new BoxJoint(), new ButtJoint(), new LegEdge()];

export class MortiseAndTenonJoint extends JointBase {
  name() {
    return 'MortiseAndTenonJoint';
  }

  schema() {
    return {
      properties: {
        invert: {
          type: 'boolean' as const,
          metadata: {
            default: false,
            title: 'Invert',
            description: 'Swap settings for receiving side',
          },
        },
        width1: {
          type: 'float64' as const,
          metadata: {
            default: 6,
            title: 'Width 1',
            description: 'Width of tenon (units)',
          },
        },
        tenonLength: {
          type: 'float64' as const,
          metadata: {
            default: 1,
            title: 'Tenon Length',
            description: 'Length of tenon (multiples of material thickness)',
          },
        },
        width2: {
          type: 'float64' as const,
          metadata: {
            default: 6,
            title: 'Width 2',
            description: 'Width between tenons (units)',
          },
        },
        holeDistance: {
          type: 'float64' as const,
          metadata: {
            default: 3,
            title: 'Hole Distance',
            description: 'Distance of mortises from edge (units)',
          },
        },
        play: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Play',
            description: 'Extra space between mortise and tenons (units)',
          },
        },
        thicknessPlay: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Thickness Play',
            description: 'Extra thickness added to mortise holes (units)',
          },
        },
        cornerDistance: {
          type: 'float64' as const,
          metadata: {
            default: 12,
            title: 'Corner Distance',
            description:
              'Reserved space near corners to exclude joints (units)',
          },
        },
        cornerDistance1Delta: {
          type: 'float64' as const,
          nullable: true as const,
          metadata: {
            default: null,
            defaultNotNull: 0,
            title: 'Corner Distance 1 Delta',
            description: 'Additional corner distance',
          },
        },
        cornerDistance2Delta: {
          type: 'float64' as const,
          nullable: true as const,
          metadata: {
            default: null,
            defaultNotNull: 0,
            title: 'Corner Distance 2 Delta',
            description: 'Additional corner distance',
          },
        },
        centerDistance: {
          type: 'float64' as const,
          metadata: {
            default: 0,
            title: 'Center Distance',
            description: 'Reserved space near center to exclude joints (units)',
          },
        },
        mortiseEdge: edgeListTypeDef(
          otherEdges,
          {
            default: null,
            defaultNotNull: 'LegEdge',
            title: 'Mortise Edge',
          },
          true,
        ),
      },
      metadata: {
        order: [
          'invert',
          'width1',
          'tenonLength',
          'width2',
          'holeDistance',
          'play',
          'thicknessPlay',
          'cornerDistance',
          'centerDistance',
          'mortiseEdge',
        ],
      },
    };
  }

  jointThickness(
    callerInvert: boolean,
    thickness: number,
    { tenonLength, invert: userInvert, mortiseEdge }: any,
  ) {
    const invert = callerInvert !== userInvert;
    if (invert) {
      if (mortiseEdge) {
        const edge = otherEdges.find((e) => e.name() === mortiseEdge.kind);
        if (!edge) {
          throw new Error('Invalid mortise edge');
        }
        return edge.thickness(thickness, mortiseEdge.params);
      }
      return 0;
    }
    return tenonLength * thickness;
  }

  jointDraw(
    surface: Surface,
    length: number,
    callerInvert: boolean,
    thickness: number,
    {
      invert: userInvert,
      width1,
      tenonLength,
      width2,
      holeDistance,
      play,
      thicknessPlay,
      cornerDistance,
      cornerDistance1Delta,
      cornerDistance2Delta,
      centerDistance,
      mortiseEdge,
    }: any,
  ): Surface {
    const invert = callerInvert !== userInvert;
    let eth = 0;
    if (invert) {
      if (mortiseEdge) {
        const edge = otherEdges.find((e) => e.name() === mortiseEdge.kind);
        if (!edge) {
          throw new Error('Invalid mortise edge');
        }
        eth = edge.thickness(thickness, mortiseEdge.params);
        surface = edge.draw(surface, length, thickness, mortiseEdge.params);
      }
    }
    boxJointFingerSpacer(
      {
        length,
        width1,
        width2,
        cornerDistance1: cornerDistance + (cornerDistance1Delta ?? 0),
        cornerDistance2: cornerDistance + (cornerDistance2Delta ?? 0),
        centerDistance,
      },
      (x: number, d: number, finger: boolean) => {
        if (invert && finger) {
          const th = thickness;
          const y = holeDistance + eth;
          surface = surface.subtractBorder(
            surface
              .newShape()
              .beginPath()
              .rect(
                x - play / 2,
                y - thicknessPlay,
                d + play,
                th + thicknessPlay * 2,
              )
              .closePath(),
          );
        } else if (!invert && !finger) {
          const th = tenonLength * thickness;
          surface = surface.subtractBorder(
            surface
              .newShape()
              .beginPath()
              .rect(x - play / 2, 0, d + play, th)
              .closePath(),
          );
        }
      },
    );
    return surface;
  }
}
