//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { type IGeneratorSettings } from '../types';
import { Rectangle } from './Rectangle';

export class PlainBox extends GeneratorBase {
  name() {
    return 'PlainBox';
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
            title: 'Outer Width (units)',
          },
        },
        depth: {
          type: 'float64' as const,
          metadata: {
            default: 100,
            title: 'Outer Depth (units)',
          },
        },
        height: {
          type: 'float64' as const,
          metadata: {
            default: 100,
            title: 'Outer Height (units)',
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
    const mt = (invert: boolean) => ({
      kind: 'MortiseAndTenonJoint',
      params: {
        invert,
        width1: 2 * thickness,
        tenonLength: 1,
        width2: 2 * thickness,
        holeDistance,
        play,
        thicknessPlay,
        cornerDistance: 2 * thickness,
        centerDistance: 0,
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
    const bx = (invert: boolean) => ({
      kind: 'BoxJoint',
      params: {
        invert,
        width1: 2 * thickness,
        length1: 1,
        width2: 2 * thickness,
        length2: 1,
        play,
        cornerDistance: 2 * thickness,
        centerDistance: 0,
      },
    });
    return [
      ...rect.generate(settings, {
        width,
        height: depth,
        edge1: mt(false),
        edge2: mt(false),
        edge3: mt(false),
        edge4: mt(false),
        ...(labels ? { label: 'Bottom' } : {}),
      }),
      ...rect.generate(settings, {
        width: depth,
        height,
        edge1: bt(),
        edge2: bx(false),
        edge3: mt(true),
        edge4: bx(false),
        ...(labels ? { label: 'Left' } : {}),
      }),
      ...rect.generate(settings, {
        width: depth,
        height,
        edge1: bt(),
        edge2: bx(false),
        edge3: mt(true),
        edge4: bx(false),
        ...(labels ? { label: 'Right' } : {}),
      }),
      ...rect.generate(settings, {
        width,
        height,
        edge1: bt(),
        edge2: bx(true),
        edge3: mt(true),
        edge4: bx(true),
        ...(labels ? { label: 'Front' } : {}),
      }),
      ...rect.generate(settings, {
        width,
        height,
        edge1: bt(),
        edge2: bx(true),
        edge3: mt(true),
        edge4: bx(true),
        ...(labels ? { label: 'Back' } : {}),
      }),
    ];
  }
}
