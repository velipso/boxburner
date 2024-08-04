//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { type IGeneratorSettings } from '../types';
import { Rectangle } from './Rectangle';
import { type Surface } from '../Surface';

export class KerfTester extends GeneratorBase {
  name() {
    return 'KerfTester';
  }

  schema() {
    return {
      properties: {
        labels: {
          type: 'boolean' as const,
          metadata: {
            default: true,
            title: 'Labels',
          },
        },
        width: {
          type: 'float64' as const,
          metadata: {
            default: 30,
            title: 'Outer Width (units)',
          },
        },
        height: {
          type: 'float64' as const,
          metadata: {
            default: 15,
            title: 'Outer Height (units)',
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
        testCount: {
          type: 'int32' as const,
          metadata: {
            default: 8,
            title: 'Number of tests',
          },
        },
        kerfStart: {
          type: 'float64' as const,
          metadata: {
            default: 0.08,
            title: 'Kerf start value (units)',
          },
        },
        kerfIncrement: {
          type: 'float64' as const,
          metadata: {
            default: 0.02,
            title: 'Kerf increment value (per test)',
          },
        },
      },
      metadata: {
        order: [
          'labels',
          'width',
          'height',
          'play',
          'testCount',
          'kerfStart',
          'kerfIncrement',
        ],
      },
    };
  }

  generate(
    settings: IGeneratorSettings,
    { labels, width, height, play, testCount, kerfStart, kerfIncrement }: any,
  ) {
    const { defaultThickness: thickness } = settings;
    const rect = new Rectangle();
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
    const result: Surface[] = [];
    for (let i = 0; i < testCount; i++) {
      const kerf = kerfStart + i * kerfIncrement;
      result.push(
        ...rect.generate(settings, {
          width,
          height,
          kerf,
          edge1: bx(false),
          edge2: bt(),
          edge3: bt(),
          edge4: bt(),
          ...(labels ? { label: kerf.toFixed(3) } : {}),
        }),
        ...rect.generate(settings, {
          width,
          height,
          kerf,
          edge1: bt(),
          edge2: bt(),
          edge3: bx(true),
          edge4: bt(),
          ...(labels ? { label: kerf.toFixed(3) } : {}),
        }),
      );
    }
    return result;
  }
}
