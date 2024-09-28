//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { type IGeneratorSettings } from '../types';
import { Surface } from '../Surface';
import { polybool } from '../Geometry';

export class TubeTab extends GeneratorBase {
  name() {
    return 'TubeTab';
  }

  schema() {
    return {
      properties: {
        thickness: {
          type: 'float64' as const,
          nullable: true as const,
          metadata: {
            default: 0.3,
            nullHint: 'default',
            title: 'Material Thickness (units)',
          },
        },
        kerf: {
          type: 'float64' as const,
          nullable: true as const,
          metadata: {
            default: null,
            defaultNotNull: 0.1,
            nullHint: 'default',
            title: 'Kerf (units)',
            description: 'Thickness of material removed by cutting tool',
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
            default: 20,
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
        scorePadding: {
          type: 'float64' as const,
          metadata: {
            default: 1,
            title: 'Score Padding (units)',
          },
        },
        tabWidth: {
          type: 'float64' as const,
          metadata: {
            default: 10,
            title: 'Tab Width (units)',
          },
        },
        tabHeight: {
          type: 'float64' as const,
          metadata: {
            default: 20,
            title: 'Tab Height (units)',
          },
        },
        tabInnerCut: {
          type: 'float64' as const,
          metadata: {
            default: 1,
            title: 'Tab Inner Cut (units)',
          },
        },
        tabCount: {
          type: 'float64' as const,
          metadata: {
            default: 2,
            title: 'Tab Count',
          },
        },
        receiverWidth: {
          type: 'float64' as const,
          metadata: {
            default: 10,
            title: 'Receiver Width (units)',
          },
        },
      },
      metadata: {
        order: [
          'thickness',
          'kerf',
          'width',
          'depth',
          'height',
          'scorePadding',
          'tabWidth',
          'tabHeight',
          'tabInnerCut',
          'tabCount',
          'receiverWidth',
        ],
      },
    };
  }

  generate(
    settings: IGeneratorSettings,
    {
      thickness,
      kerf,
      width,
      depth,
      height,
      scorePadding,
      tabWidth,
      tabHeight,
      tabInnerCut,
      tabCount,
      receiverWidth,
    }: any,
  ) {
    const th =
      typeof thickness === 'number' ? thickness : settings.defaultThickness;
    const kr = typeof kerf === 'number' ? kerf : settings.defaultKerf;

    let surface = new Surface(th, kr);

    const r1x = 0;
    const r1y = 0;
    const r1w = width;
    const r1h = height;

    const r2x = r1x + r1w;
    const r2y = 0;
    const r2w = depth + th;
    const r2h = height;

    const r3x = r2x + r2w;
    const r3y = 0;
    const r3w = width + th;
    const r3h = height;

    const r4x = r3x + r3w;
    const r4y = 0;
    const r4w = depth + th;
    const r4h = height;

    const tabs: Array<{ top: number; y: number; h: number; bottom: number }> =
      [];
    for (let i = 0; i < tabCount; i++) {
      const top = (height * i) / tabCount;
      const bottom = (height * (i + 1)) / tabCount;
      const h = Math.min(bottom - top, tabHeight);
      const y = (top + bottom - h) / 2;
      tabs.push({ top, y, h, bottom });
    }

    // main shape
    surface = surface.unionBorder(
      polybool
        .shape()
        .rect(r1x, r1y, r1w, r1h)
        .rect(r2x, r2y, r2w, r2h)
        .rect(r3x, r3y, r3w, r3h)
        .rect(r4x, r4y, r4w, r4h),
    );

    // left tab
    surface = surface.unionBorder(
      polybool
        .shape()
        .moveTo(0, 0)
        .bezierCurveTo(
          -receiverWidth,
          0,
          -receiverWidth,
          0,
          -receiverWidth,
          receiverWidth,
        )
        .lineTo(-receiverWidth, height - receiverWidth)
        .bezierCurveTo(
          -receiverWidth,
          height,
          -receiverWidth,
          height,
          0,
          height,
        )
        .closePath(),
    );

    // right tab(s)
    for (const { y, h } of tabs) {
      surface = surface.unionBorder(
        polybool
          .shape()
          .moveTo(r4x + r4w, y + tabInnerCut)
          .lineTo(r4x + r4w + th, y + tabInnerCut)
          .lineTo(r4x + r4w + th, y)
          .lineTo(r4x + r4w + th + tabWidth, y)
          .lineTo(r4x + r4w + th + tabWidth, y + h)
          .lineTo(r4x + r4w + th, y + h)
          .lineTo(r4x + r4w + th, y + h - tabInnerCut)
          .lineTo(r4x + r4w, y + h - tabInnerCut)
          .closePath()
          .combine(
            polybool
              .shape()
              .moveTo(r4x + r4w + th, y)
              .lineTo(r4x + r4w + th + tabWidth, y + h / 3)
              .lineTo(r4x + r4w + th + tabWidth, y)
              .closePath(),
          )
          .difference()
          .combine(
            polybool
              .shape()
              .moveTo(r4x + r4w + th, y + h)
              .lineTo(r4x + r4w + th + tabWidth, y + (h * 2) / 3)
              .lineTo(r4x + r4w + th + tabWidth, y + h)
              .closePath(),
          )
          .difference(),
      );
    }

    {
      const pad = scorePadding;
      const cuts = polybool.shape();
      const scores = polybool
        .shape()
        // back
        .moveTo(r1x + r1w, r1y + pad)
        .lineTo(r1x + r1w, r1y + r1h - pad)
        // first depth right side
        .moveTo(r2x + r2w, r2y + pad)
        .lineTo(r2x + r2w, r2y + r2h - pad)
        // second depth left side
        .moveTo(r4x, r4y + pad)
        .lineTo(r4x, r4y + r4h - pad);
      for (const { top, y, h, bottom } of tabs) {
        scores
          // left side
          .moveTo(r1x, top === 0 ? pad : top)
          .lineTo(r1x, y - pad)
          .moveTo(r1x, y + h + pad)
          .lineTo(r1x, bottom === height ? bottom - pad : bottom)
          // right side
          .moveTo(r4x + r4w, y + tabInnerCut + pad)
          .lineTo(r4x + r4w, y + h - tabInnerCut - pad);
        cuts
          .moveTo(r1x, y)
          .bezierCurveTo(r1x - th, y, r1x - th, y, r1x - th, y + th)
          .lineTo(r1x - th, y + h - th)
          .bezierCurveTo(r1x - th, y + h, r1x - th, y + h, r1x, y + h);
      }
      surface = surface.replace({ cuts, scores });
    }

    return [Surface.union(surface, surface)];
  }
}
