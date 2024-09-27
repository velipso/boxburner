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

export class BoxTuck extends GeneratorBase {
  name() {
    return 'BoxTuck';
  }

  schema() {
    return {
      properties: {
        thickness: {
          type: 'float64' as const,
          nullable: true as const,
          metadata: {
            default: null,
            defaultNotNull: 3,
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
        notchWidth: {
          type: 'float64' as const,
          metadata: {
            default: 7,
            title: 'Notch Width (units)',
          },
        },
        notchHeight: {
          type: 'float64' as const,
          metadata: {
            default: 2,
            title: 'Notch Height (units)',
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
          'notchWidth',
          'notchHeight',
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
      notchWidth,
      notchHeight,
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

    // top/bottom depth
    const td = depth + th;

    // main shape
    surface = surface.unionBorder(
      polybool
        .shape()
        .rect(r1x, r1y, r1w, r1h)
        .rect(r2x, r2y, r2w, r2h)
        .rect(r3x, r3y, r3w, r3h)
        .rect(r4x, r4y, r4w, r4h)
        .rect(r1x, r1y, r1w, -td)
        .rect(r1x, r1y + r1h, r1w, td),
    );

    // left tab
    surface = surface.unionBorder(
      polybool
        .shape()
        .moveTo(0, 0)
        .bezierCurveTo(
          -depth * 0.75,
          0,
          -depth * 0.75,
          0,
          -depth * 0.75,
          depth * 0.75,
        )
        .lineTo(-depth * 0.75, height - depth * 0.75)
        .bezierCurveTo(-depth * 0.75, height, -depth * 0.75, height, 0, height)
        .closePath(),
    );

    // top tab
    surface = surface.unionBorder(
      polybool
        .shape()
        .moveTo(r1x, r1y - td)
        .bezierCurveTo(
          r1x,
          r1y - td - depth * 0.9,
          r1x,
          r1y - td - depth * 0.9,
          r1x + depth * 0.9,
          r1y - td - depth * 0.9,
        )
        .lineTo(r1x + r1w - depth * 0.9, r1y - td - depth * 0.9)
        .bezierCurveTo(
          r1x + r1w,
          r1y - td - depth * 0.9,
          r1x + r1w,
          r1y - td - depth * 0.9,
          r1x + r1w,
          r1y - td,
        )
        .closePath(),
    );

    // bottom tab
    surface = surface.unionBorder(
      polybool
        .shape()
        .moveTo(r1x, r1y + r1h + td)
        .bezierCurveTo(
          r1x,
          r1y + r1h + td + depth * 0.9,
          r1x,
          r1y + r1h + td + depth * 0.9,
          r1x + depth * 0.9,
          r1y + r1h + td + depth * 0.9,
        )
        .lineTo(r1x + r1w - depth * 0.9, r1y + r1h + td + depth * 0.9)
        .bezierCurveTo(
          r1x + r1w,
          r1y + r1h + td + depth * 0.9,
          r1x + r1w,
          r1y + r1h + td + depth * 0.9,
          r1x + r1w,
          r1y + r1h + td,
        )
        .closePath(),
    );

    // top mid tab
    surface = surface.unionBorder(
      polybool
        .shape()
        .rect(r2x, r2y, r2w - th, -depth)
        .combine(
          polybool
            .shape()
            .moveTo(r2x, r2y)
            .lineTo(r2x + r2w * 0.05, r2y - depth)
            .lineTo(r2x, r2y - depth)
            .closePath(),
        )
        .difference()
        .combine(
          polybool
            .shape()
            .moveTo(r2x + r2w - th, r2y)
            .lineTo(r2x + r2w - th - notchWidth * 0.1, r2y - notchWidth)
            .lineTo(r2x + r2w - th - notchWidth * 0.2, r2y - notchWidth)
            .lineTo(
              r2x + r2w - th - notchWidth * 0.2 - (depth - notchWidth) * 0.1,
              r2y - depth,
            )
            .lineTo(r2x + r2w - th, r2y - depth)
            .closePath(),
        )
        .difference(),
    );

    // bottom mid tab
    surface = surface.unionBorder(
      polybool
        .shape()
        .rect(r2x, r2y + r2h, r2w - th, depth)
        .combine(
          polybool
            .shape()
            .moveTo(r2x, r2y + r2h)
            .lineTo(r2x + depth * 0.05, r2y + r2h + depth)
            .lineTo(r2x, r2y + r2h + depth)
            .closePath(),
        )
        .difference()
        .combine(
          polybool
            .shape()
            .moveTo(r2x + r2w - th, r2y + r2h)
            .lineTo(r2x + r2w - th - notchWidth * 0.1, r2y + r2h + notchWidth)
            .lineTo(r2x + r2w - th - notchWidth * 0.2, r2y + r2h + notchWidth)
            .lineTo(
              r2x + r2w - th - notchWidth * 0.2 - (depth - notchWidth) * 0.1,
              r2y + r2h + depth,
            )
            .lineTo(r2x + r2w - th, r2y + r2h + depth)
            .closePath(),
        )
        .difference(),
    );

    // top right tab
    surface = surface.unionBorder(
      polybool
        .shape()
        .rect(r4x + th, r4y, r4w - th, -depth)
        .combine(
          polybool
            .shape()
            .moveTo(r4x + th, r4y)
            .lineTo(r4x + th + notchWidth * 0.1, r4y - notchWidth)
            .lineTo(r4x + th + notchWidth * 0.2, r4y - notchWidth)
            .lineTo(
              r4x + th + notchWidth * 0.2 + (depth - notchWidth) * 0.1,
              r4y - depth,
            )
            .lineTo(r4x + th, r4y - depth)
            .closePath(),
        )
        .difference()
        .combine(
          polybool
            .shape()
            .moveTo(r4x + r4w, r4y)
            .lineTo(r4x + r4w - depth * 0.05, r4y - depth)
            .lineTo(r4x + r4w, r4y - depth)
            .closePath(),
        )
        .difference(),
    );

    // bottom right tab
    surface = surface.unionBorder(
      polybool
        .shape()
        .rect(r4x + th, r4y + r4h, r4w - th, depth)
        .combine(
          polybool
            .shape()
            .moveTo(r4x + th, r4y + r4h)
            .lineTo(r4x + th + notchWidth * 0.1, r4y + r4h + notchWidth)
            .lineTo(r4x + th + notchWidth * 0.2, r4y + r4h + notchWidth)
            .lineTo(
              r4x + th + notchWidth * 0.2 + (depth - notchWidth) * 0.1,
              r4y + r4h + depth,
            )
            .lineTo(r4x + th, r4y + r4h + depth)
            .closePath(),
        )
        .difference()
        .combine(
          polybool
            .shape()
            .moveTo(r4x + r4w, r4y + r4h)
            .lineTo(r4x + r4w - depth * 0.05, r4y + r4h + depth)
            .lineTo(r4x + r4w, r4y + r4h + depth)
            .closePath(),
        )
        .difference(),
    );

    {
      const pad = scorePadding;
      surface = surface.replace({
        cuts: polybool
          .shape()
          // top left
          .moveTo(r1x, r1y - td)
          .lineTo(r1x + notchWidth - 1, r1y - td)
          .bezierCurveTo(
            r1x + notchWidth,
            r1y - td,
            r1x + notchWidth,
            r1y - td,
            r1x + notchWidth,
            r1y - td + 1,
          )
          .lineTo(r1x + notchWidth, r1y - td + notchHeight)
          // top right
          .moveTo(r1x + r1w, r1y - td)
          .lineTo(r1x + r1w - notchWidth + 1, r1y - td)
          .bezierCurveTo(
            r1x + r1w - notchWidth,
            r1y - td,
            r1x + r1w - notchWidth,
            r1y - td,
            r1x + r1w - notchWidth,
            r1y - td + 1,
          )
          .lineTo(r1x + r1w - notchWidth, r1y - td + notchHeight)
          // bottom left
          .moveTo(r1x, r1y + r1h + td)
          .lineTo(r1x + notchWidth - 1, r1y + r1h + td)
          .bezierCurveTo(
            r1x + notchWidth,
            r1y + r1h + td,
            r1x + notchWidth,
            r1y + r1h + td,
            r1x + notchWidth,
            r1y + r1h + td - 1,
          )
          .lineTo(r1x + notchWidth, r1y + r1h + td - notchHeight)
          // bottom right
          .moveTo(r1x + r1w, r1y + r1h + td)
          .lineTo(r1x + r1w - notchWidth + 1, r1y + r1h + td)
          .bezierCurveTo(
            r1x + r1w - notchWidth,
            r1y + r1h + td,
            r1x + r1w - notchWidth,
            r1y + r1h + td,
            r1x + r1w - notchWidth,
            r1y + r1h + td - 1,
          )
          .lineTo(r1x + r1w - notchWidth, r1y + r1h + td - notchHeight),
        scores: polybool
          .shape()
          // back
          .moveTo(r1x + pad, r1y - th)
          .lineTo(r1x + r1w - pad, r1y - th)
          .moveTo(r1x + r1w, r1y + pad)
          .lineTo(r1x + r1w, r1y + r1h - pad)
          .moveTo(r1x, r1y + pad)
          .lineTo(r1x, r1y + r1h - pad)
          .moveTo(r1x + pad, r1y + r1h + th)
          .lineTo(r1x + r1w - pad, r1y + r1h + th)
          // top tab
          .moveTo(r1x + pad + notchWidth, r1y - td)
          .lineTo(r1x + r1w - pad - notchWidth, r1y - td)
          // bottom tab
          .moveTo(r1x + pad + notchWidth, r1y + r1h + td)
          .lineTo(r1x + r1w - pad - notchWidth, r1y + r1h + td)
          // first depth under tabs
          .moveTo(r2x + pad, r2y)
          .lineTo(r2x + r2w - th - pad, r2y)
          .moveTo(r2x + pad, r2y + r2h)
          .lineTo(r2x + r2w - th - pad, r2y + r2h)
          // first depth right side
          .moveTo(r2x + r2w, r2y + pad)
          .lineTo(r2x + r2w, r2y + r2h - pad)
          // second depth under tabs
          .moveTo(r4x + th + pad, r4y)
          .lineTo(r4x + r4w - pad, r4y)
          .moveTo(r4x + th + pad, r4y + r4h)
          .lineTo(r4x + r4w - pad, r4y + r4h)
          // second depth left side
          .moveTo(r4x, r4y + pad)
          .lineTo(r4x, r4y + r4h - pad),
      });
    }

    return [Surface.union(surface, surface)];
  }
}
