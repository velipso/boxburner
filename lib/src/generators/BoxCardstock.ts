//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import {
  type IGeneratorSettings,
  type JSONTypeDefDiscriminator,
} from '../types';
import { Surface } from '../Surface';
import { polybool } from '../Geometry';

export class BoxCardstock extends GeneratorBase {
  name() {
    return 'BoxCardstock';
  }

  schema() {
    const covers = (metadata: any = {}): JSONTypeDefDiscriminator => ({
      discriminator: 'kind',
      mapping: {
        none: {
          properties: {
            kind: {
              type: 'string' as const,
              metadata: {
                default: 'none',
                title: 'none',
              },
            },
            params: {
              properties: {},
              metadata: {
                order: [],
              },
            },
          },
          metadata: {
            order: ['params'],
            untabParams: true,
          },
        },
        tuck: {
          properties: {
            kind: {
              type: 'string' as const,
              metadata: {
                default: 'tuck',
                title: 'tuck',
              },
            },
            params: {
              properties: {
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
                order: ['notchWidth', 'notchHeight'],
              },
            },
          },
          metadata: {
            order: ['params'],
            untabParams: true,
          },
        },
      },
      metadata: {
        default: 'tuck',
        order: ['none', 'tuck'],
        ...metadata,
      },
    });
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
        wrapConnection: {
          discriminator: 'kind',
          mapping: {
            none: {
              properties: {
                kind: {
                  type: 'string' as const,
                  metadata: {
                    default: 'none',
                    title: 'none',
                  },
                },
                params: {
                  properties: {
                    receiverWidth: {
                      type: 'float64' as const,
                      metadata: {
                        default: 20,
                        title: 'Receiver Width (units)',
                      },
                    },
                  },
                  metadata: {
                    order: ['receiverWidth'],
                  },
                },
              },
              metadata: {
                order: ['params'],
                untabParams: true,
              },
            },
            tabs: {
              properties: {
                kind: {
                  type: 'string' as const,
                  metadata: {
                    default: 'tabs',
                    title: 'tabs',
                  },
                },
                params: {
                  properties: {
                    receiverWidth: {
                      type: 'float64' as const,
                      metadata: {
                        default: 10,
                        title: 'Receiver Width (units)',
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
                  },
                  metadata: {
                    order: [
                      'receiverWidth',
                      'tabWidth',
                      'tabHeight',
                      'tabInnerCut',
                      'tabCount',
                    ],
                  },
                },
              },
              metadata: {
                order: ['params'],
                untabParams: true,
              },
            },
          },
          metadata: {
            default: 'none',
            order: ['none', 'tabs'],
            title: 'Wrap Connection',
          },
        },
        topCover: covers({ title: 'Top Cover' }),
        bottomCover: covers({ title: 'Bottom Cover' }),
      },
      metadata: {
        order: [
          'thickness',
          'kerf',
          'width',
          'depth',
          'height',
          'scorePadding',
          'wrapConnection',
          'topCover',
          'bottomCover',
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
      wrapConnection,
      topCover,
      bottomCover,
    }: any,
  ) {
    const th =
      typeof thickness === 'number' ? thickness : settings.defaultThickness;
    const kr = typeof kerf === 'number' ? kerf : settings.defaultKerf;

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
    const pad = scorePadding;

    // main shape
    let border = polybool
      .shape()
      .rect(r1x, r1y, r1w, r1h)
      .rect(r2x, r2y, r2w, r2h)
      .rect(r3x, r3y, r3w, r3h)
      .rect(r4x, r4y, r4w, r4h);
    let cuts = polybool.shape();
    let scores = polybool
      .shape()
      // right
      .moveTo(r1x + r1w, r1y + pad)
      .lineTo(r1x + r1w, r1y + r1h - pad)
      // first depth right side
      .moveTo(r2x + r2w, r2y + pad)
      .lineTo(r2x + r2w, r2y + r2h - pad)
      // second depth left side
      .moveTo(r4x, r4y + pad)
      .lineTo(r4x, r4y + r4h - pad);

    const addTuck = (
      isTop: boolean,
      {
        notchWidth,
        notchHeight,
      }: {
        notchWidth: number;
        notchHeight: number;
      },
    ) => {
      const shape = () =>
        isTop
          ? polybool.shape()
          : polybool.shape().translate(0, r1h).scale(1, -1);
      border = border.combine(shape().rect(r1x, r1y, r1w, -td)).union();

      // top tab
      border = border
        .combine(
          shape()
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
        )
        .union();

      // top mid tab
      border = border
        .combine(
          shape()
            .rect(r2x, r2y, r2w - th, -depth)
            .combine(
              shape()
                .moveTo(r2x, r2y)
                .lineTo(r2x + r2w * 0.05, r2y - depth)
                .lineTo(r2x, r2y - depth)
                .closePath(),
            )
            .difference()
            .combine(
              shape()
                .moveTo(r2x + r2w - th, r2y)
                .lineTo(r2x + r2w - th - notchWidth * 0.1, r2y - notchWidth)
                .lineTo(r2x + r2w - th - notchWidth * 0.2, r2y - notchWidth)
                .lineTo(
                  r2x +
                    r2w -
                    th -
                    notchWidth * 0.2 -
                    (depth - notchWidth) * 0.1,
                  r2y - depth,
                )
                .lineTo(r2x + r2w - th, r2y - depth)
                .closePath(),
            )
            .difference(),
        )
        .union();

      // top right tab
      border = border
        .combine(
          shape()
            .rect(r4x + th, r4y, r4w - th, -depth)
            .combine(
              shape()
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
              shape()
                .moveTo(r4x + r4w, r4y)
                .lineTo(r4x + r4w - depth * 0.05, r4y - depth)
                .lineTo(r4x + r4w, r4y - depth)
                .closePath(),
            )
            .difference(),
        )
        .union();

      cuts = cuts
        .combine(
          shape()
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
            .lineTo(r1x + r1w - notchWidth, r1y - td + notchHeight),
        )
        .union();

      scores = scores
        .combine(
          shape()
            // top
            .moveTo(r1x + pad, r1y - th)
            .lineTo(r1x + r1w - pad, r1y - th)
            // top tab
            .moveTo(r1x + pad + notchWidth, r1y - td)
            .lineTo(r1x + r1w - pad - notchWidth, r1y - td)
            // first depth under tabs
            .moveTo(r2x + pad, r2y)
            .lineTo(r2x + r2w - th - pad, r2y)
            // second depth under tabs
            .moveTo(r4x + th + pad, r4y)
            .lineTo(r4x + r4w - pad, r4y),
        )
        .union();
    };

    switch (topCover.kind) {
      case 'none':
        break;
      case 'tuck':
        addTuck(true, topCover.params);
        break;
      default:
        throw new Error(`Unknown top cover: ${topCover.kind}`);
    }

    switch (bottomCover.kind) {
      case 'none':
        break;
      case 'tuck':
        addTuck(false, bottomCover.params);
        break;
      default:
        throw new Error(`Unknown bottom cover: ${bottomCover.kind}`);
    }

    const addLeftTab = (receiverWidth: number) => {
      border = border
        .combine(
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
        )
        .union();
    };

    switch (wrapConnection.kind) {
      case 'none': {
        const { receiverWidth } = wrapConnection.params;
        if (receiverWidth > 0) {
          addLeftTab(receiverWidth);
          scores = scores
            .combine(
              polybool
                .shape()
                // left
                .moveTo(r1x, r1y + pad)
                .lineTo(r1x, r1y + r1h - pad),
            )
            .union();
        }
        break;
      }
      case 'tabs': {
        const { receiverWidth, tabWidth, tabHeight, tabInnerCut, tabCount } =
          wrapConnection.params;
        if (receiverWidth > 0) {
          addLeftTab(receiverWidth);
        }
        for (let i = 0; i < tabCount; i++) {
          const top = (height * i) / tabCount;
          const bottom = (height * (i + 1)) / tabCount;
          const h = Math.min(bottom - top, tabHeight);
          const y = (top + bottom - h) / 2;

          // right tab
          const ty = h / 5;
          const cx = tabWidth * 0.1;
          const cy = ty * 0.1;
          border = border
            .combine(
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
                    .lineTo(r4x + r4w + th + tabWidth - cx, y + ty - cy)
                    .bezierCurveTo(
                      r4x + r4w + th + tabWidth,
                      y + ty,
                      r4x + r4w + th + tabWidth,
                      y + ty,
                      r4x + r4w + th + tabWidth,
                      y + ty + cy,
                    )
                    .lineTo(r4x + r4w + th + tabWidth, y)
                    .closePath(),
                )
                .difference()
                .combine(
                  polybool
                    .shape()
                    .moveTo(r4x + r4w + th, y + h)
                    .lineTo(r4x + r4w + th + tabWidth - cx, y + h - ty + cy)
                    .bezierCurveTo(
                      r4x + r4w + th + tabWidth,
                      y + h - ty,
                      r4x + r4w + th + tabWidth,
                      y + h - ty,
                      r4x + r4w + th + tabWidth,
                      y + h - ty - cy,
                    )
                    .lineTo(r4x + r4w + th + tabWidth, y + h)
                    .closePath(),
                )
                .difference(),
            )
            .union();

          if (receiverWidth > 0) {
            scores = scores
              .combine(
                polybool
                  .shape()
                  // left side
                  .moveTo(r1x, top === 0 ? pad : top)
                  .lineTo(r1x, y - pad)
                  .moveTo(r1x, y + h + pad)
                  .lineTo(r1x, bottom === height ? bottom - pad : bottom)
                  // right side
                  .moveTo(r4x + r4w, y + tabInnerCut + pad)
                  .lineTo(r4x + r4w, y + h - tabInnerCut - pad),
              )
              .union();
            cuts = cuts
              .combine(
                polybool
                  .shape()
                  .moveTo(r1x, y)
                  .bezierCurveTo(r1x - th, y, r1x - th, y, r1x - th, y + th)
                  .lineTo(r1x - th, y + h - th)
                  .bezierCurveTo(r1x - th, y + h, r1x - th, y + h, r1x, y + h),
              )
              .union();
          }
        }
        break;
      }
      default:
        throw new Error(`Unknown wrap connection: ${wrapConnection.kind}`);
    }

    const surface = new Surface(th, kr, border, cuts, scores);
    return [Surface.union(surface, surface)];
  }
}
