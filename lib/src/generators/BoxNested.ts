//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { type IGeneratorSettings } from '../types';
import { Rectangle } from './Rectangle';

export class BoxNested extends GeneratorBase {
  name() {
    return 'BoxNested';
  }

  schema() {
    return {
      properties: {
        labels: {
          type: 'boolean' as const,
          metadata: {
            default: false,
            title: 'Labels',
          },
        },
        width: {
          type: 'float64' as const,
          metadata: {
            default: 100,
            title: 'Inner Width (units)',
          },
        },
        depth: {
          type: 'float64' as const,
          metadata: {
            default: 100,
            title: 'Inner Depth (units)',
          },
        },
        height: {
          type: 'float64' as const,
          metadata: {
            default: 100,
            title: 'Inner Height (units)',
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
            description: 'Extra space between fingers (units)',
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
      },
      metadata: {
        order: [
          'labels',
          'width',
          'depth',
          'height',
          'holeDistance',
          'play',
          'thicknessPlay',
        ],
      },
    };
  }

  generate(
    settings: IGeneratorSettings,
    { labels, width, depth, height, holeDistance, play, thicknessPlay }: any,
  ) {
    const { defaultThickness: thickness } = settings;
    const rect = new Rectangle();
    const mt = (invert: boolean, tenonLength: number, mortiseEdge?: any) => ({
      kind: 'MortiseAndTenonJoint',
      params: {
        invert,
        width1: 2 * thickness,
        tenonLength,
        width2: 2 * thickness,
        holeDistance,
        play,
        thicknessPlay,
        cornerDistance: 2 * thickness,
        centerDistance: 0,
        mortiseEdge,
      },
    });
    const bt = () => ({
      kind: 'ButtJoint',
      params: {
        invert: false,
        length1: 0,
        length2: 1,
      },
    });
    const bx = (invert: boolean, tenonLength: number) => ({
      kind: 'BoxJoint',
      params: {
        invert,
        width1: 2 * thickness,
        length1: tenonLength,
        width2: 2 * thickness,
        length2: tenonLength,
        play,
        cornerDistance: 2 * thickness,
        centerDistance: 0,
      },
    });
    const lg = () => ({
      kind: 'LegEdge',
      params: {
        flatWidth: 0.1,
        curveWidth: 0.15,
        curveAmount: 0.05,
        height: 10,
      },
    });
    return [
      ...rect.generate(settings, {
        width,
        height: depth,
        edge1: mt(false, 2),
        edge2: mt(false, 1),
        edge3: mt(false, 2),
        edge4: mt(false, 1),
        ...(labels ? { label: 'Bottom' } : {}),
      }),
      ...rect.generate(settings, {
        width: depth,
        height,
        edge1: bt(),
        edge2: bx(false, 2),
        edge3: mt(true, 1),
        edge4: bx(false, 2),
        ...(labels ? { label: 'Left' } : {}),
      }),
      ...rect.generate(settings, {
        width: depth,
        height,
        edge1: bt(),
        edge2: bx(false, 2),
        edge3: mt(true, 1),
        edge4: bx(false, 2),
        ...(labels ? { label: 'Right' } : {}),
      }),
      ...rect.generate(settings, {
        width,
        height,
        edge1: bt(),
        edge2: bx(true, 1),
        edge3: mt(true, 1),
        edge4: bx(true, 1),
        ...(labels ? { label: 'Front' } : {}),
      }),
      ...rect.generate(settings, {
        width,
        height,
        edge1: bt(),
        edge2: bx(true, 1),
        edge3: mt(true, 1, lg()),
        edge4: bx(true, 1),
        ...(labels ? { label: 'Inner Front' } : {}),
      }),
      ...rect.generate(settings, {
        width,
        height,
        edge1: bt(),
        edge2: bx(true, 1),
        edge3: mt(true, 1),
        edge4: bx(true, 1),
        ...(labels ? { label: 'Back' } : {}),
      }),
      ...rect.generate(settings, {
        width,
        height,
        edge1: bt(),
        edge2: bx(true, 1),
        edge3: mt(true, 1, lg()),
        edge4: bx(true, 1),
        ...(labels ? { label: 'Inner Back' } : {}),
      }),
    ];
  }
}
