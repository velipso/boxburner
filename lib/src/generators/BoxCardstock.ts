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
import { polybool, type Shape } from '../Geometry';

export class BoxCardstock extends GeneratorBase {
  name() {
    return 'BoxCardstock';
  }

  schema() {
    const tabsProperties = (allowFlip: boolean) => ({
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
            ...(allowFlip
              ? {
                  flip: {
                    type: 'boolean' as const,
                    metadata: {
                      default: false,
                      title: 'Flip',
                    },
                  },
                }
              : {}),
            receiverWidth: {
              type: 'float64' as const,
              metadata: {
                default: 10,
                title: 'Receiver Width (units)',
              },
            },
            insertPadding: {
              type: 'float64' as const,
              metadata: {
                default: 0.5,
                title: 'Insert Padding (units)',
                description:
                  'How tight the fit around the tabs are after insertion',
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
            tabExtension: {
              type: 'float64' as const,
              metadata: {
                default: 2,
                title: 'Tab Extension',
                description:
                  'How much the tab sticks out (multiples of material thickness)',
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
              ...(allowFlip ? ['flip'] : []),
              'receiverWidth',
              'insertPadding',
              'tabWidth',
              'tabHeight',
              'tabInnerCut',
              'tabExtension',
              'tabCount',
            ],
          },
        },
      },
      metadata: {
        order: ['params'],
        untabParams: true,
      },
    });
    const tuckProperties = () => ({
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
    });
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
        tabs: tabsProperties(true),
        tuck: tuckProperties(),
      },
      metadata: {
        default: 'tuck',
        order: ['none', 'tabs', 'tuck'],
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
            tabs: tabsProperties(false),
            tuck: tuckProperties(),
          },
          metadata: {
            default: 'none',
            order: ['none', 'tabs', 'tuck'],
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

    const depthPad =
      topCover.kind === 'tuck' || bottomCover.kind === 'tuck' ? th : 0;

    const r2x = r1x + r1w;
    const r2y = 0;
    const r2w = depth + depthPad;
    const r2h = height;

    const r3x = r2x + r2w;
    const r3y = 0;
    const r3w = width + th;
    const r3h = height;

    const r4x = r3x + r3w;
    const r4y = 0;
    const r4w = depth + depthPad;
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

    const addTuckTab = (
      shape: () => Shape,
      notchWidth: number,
      x: number,
      y: number,
      w: number,
      d: number,
    ) => {
      border = border
        .combine(
          shape()
            .rect(x, y, w, -d)
            .combine(
              shape()
                .moveTo(x, y)
                .lineTo(x + w * 0.05, y - d)
                .lineTo(x, y - d)
                .closePath(),
            )
            .difference()
            .combine(
              shape()
                .moveTo(x + w, y)
                .lineTo(x + w - notchWidth * 0.1, y - notchWidth)
                .lineTo(x + w - notchWidth * 0.2, y - notchWidth)
                .lineTo(
                  x + w - notchWidth * 0.2 - (d - notchWidth) * 0.1,
                  y - d,
                )
                .lineTo(x + w, y - d)
                .closePath(),
            )
            .difference(),
        )
        .union();
      scores = scores
        .combine(
          shape()
            .moveTo(x + pad, y)
            .lineTo(x + w - pad, y),
        )
        .union();
    };

    const addTuckFlap = (
      shape: () => Shape,
      notchWidth: number,
      notchHeight: number,
      x: number,
      y: number,
      w: number,
      d: number,
    ) => {
      const cx = Math.min(w / 3, d * 0.9);
      border = border
        .combine(
          shape()
            .moveTo(x, y)
            .bezierCurveTo(x, y - d * 0.9, x, y - d * 0.9, x + cx, y - d * 0.9)
            .lineTo(x + w - cx, y - d * 0.9)
            .bezierCurveTo(x + w, y - d * 0.9, x + w, y - d * 0.9, x + w, y)
            .closePath(),
        )
        .union();

      const ny = Math.min(notchHeight, 1);
      if (ny <= 0) {
        cuts = cuts
          .combine(
            shape()
              // top left
              .moveTo(x, y)
              .lineTo(x + notchWidth, y)
              // top right
              .moveTo(x + w, y)
              .lineTo(x + w - notchWidth, y),
          )
          .union();
      } else {
        cuts = cuts
          .combine(
            shape()
              // top left
              .moveTo(x, y)
              .lineTo(x + notchWidth - ny, y)
              .bezierCurveTo(
                x + notchWidth,
                y,
                x + notchWidth,
                y,
                x + notchWidth,
                y + ny,
              )
              .lineTo(x + notchWidth, y + notchHeight)
              // top right
              .moveTo(x + w, y)
              .lineTo(x + w - notchWidth + ny, y)
              .bezierCurveTo(
                x + w - notchWidth,
                y,
                x + w - notchWidth,
                y,
                x + w - notchWidth,
                y + ny,
              )
              .lineTo(x + w - notchWidth, y + notchHeight),
          )
          .union();
      }

      scores = scores
        .combine(
          shape()
            .moveTo(x + pad + notchWidth, y)
            .lineTo(x + w - pad - notchWidth, y),
        )
        .union();
    };

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
      addTuckFlap(shape, notchWidth, notchHeight, r1x, r1y - td, r1w, depth);

      // top mid tab
      addTuckTab(shape, notchWidth, r2x, r2y, r2w - th, depth);

      addTuckTab(
        () => shape().scale(-1, 1),
        notchWidth,
        -r4x - r4w,
        r4y,
        r4w - th,
        depth,
      );

      scores = scores
        .combine(
          shape()
            .moveTo(r1x + pad, r1y - th)
            .lineTo(r1x + r1w - pad, r1y - th),
        )
        .union();
    };

    const addReceiverTab = (
      w: number,
      h: number,
      tx: number,
      ty: number,
      ang: number,
    ) => {
      border = border
        .combine(
          polybool
            .shape()
            .translate(tx, ty)
            .rotateDeg(ang)
            .moveTo(0, 0)
            .bezierCurveTo(-w, 0, -w, 0, -w, Math.min(w, h / 2 - 0.5))
            .lineTo(-w, Math.max(h - w, h / 2 + 0.5))
            .bezierCurveTo(-w, h, -w, h, 0, h)
            .closePath(),
        )
        .union();
    };

    const addInsertTabs = (
      {
        receiverWidth,
        insertPadding,
        tabWidth,
        tabHeight,
        tabInnerCut,
        tabCount,
        tabExtension,
      }: {
        receiverWidth: number;
        insertPadding: number;
        tabWidth: number;
        tabHeight: number;
        tabInnerCut: number;
        tabCount: number;
        tabExtension: number;
      },
      height: number,
      t1x: number,
      t1y: number,
      ang1: number,
      t2x: number,
      t2y: number,
      ang2: number,
      additionalSpace: boolean,
    ) => {
      if (additionalSpace) {
        border = border
          .combine(
            polybool
              .shape()
              .translate(t1x, t1y)
              .rotateDeg(ang1)
              .rect(0, 0, th, height),
          )
          .union()
          .combine(
            polybool
              .shape()
              .translate(t2x, t2y)
              .rotateDeg(ang2)
              .rect(0, 0, -r4w - th * 2, height),
          )
          .union();
        scores = scores
          .combine(
            polybool
              .shape()
              .translate(t2x, t2y)
              .rotateDeg(ang2)
              .moveTo(-r4w, pad)
              .lineTo(-r4w, height - pad),
          )
          .union();
      }
      if (receiverWidth > 0) {
        addReceiverTab(receiverWidth, height, t1x, t1y, ang1);
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
        const ext = th * tabExtension;
        border = border
          .combine(
            polybool
              .shape()
              .translate(t2x, t2y)
              .rotateDeg(ang2)
              .moveTo(0, y + tabInnerCut)
              .lineTo(ext, y + tabInnerCut)
              .lineTo(ext, y)
              .lineTo(ext + tabWidth, y)
              .lineTo(ext + tabWidth, y + h)
              .lineTo(ext, y + h)
              .lineTo(ext, y + h - tabInnerCut)
              .lineTo(0, y + h - tabInnerCut)
              .closePath()
              .combine(
                polybool
                  .shape()
                  .translate(t2x, t2y)
                  .rotateDeg(ang2)
                  .moveTo(ext, y)
                  .lineTo(ext + tabWidth - cx, y + ty - cy)
                  .bezierCurveTo(
                    ext + tabWidth,
                    y + ty,
                    ext + tabWidth,
                    y + ty,
                    ext + tabWidth,
                    y + ty + cy,
                  )
                  .lineTo(ext + tabWidth, y)
                  .closePath(),
              )
              .difference()
              .combine(
                polybool
                  .shape()
                  .translate(t2x, t2y)
                  .rotateDeg(ang2)
                  .moveTo(ext, y + h)
                  .lineTo(ext + tabWidth - cx, y + h - ty + cy)
                  .bezierCurveTo(
                    ext + tabWidth,
                    y + h - ty,
                    ext + tabWidth,
                    y + h - ty,
                    ext + tabWidth,
                    y + h - ty - cy,
                  )
                  .lineTo(ext + tabWidth, y + h)
                  .closePath(),
              )
              .difference(),
          )
          .union();

        if (receiverWidth > 0) {
          const tic = insertPadding;
          scores = scores
            .combine(
              polybool
                .shape()
                .translate(t2x, t2y)
                .rotateDeg(ang2)
                // right side
                .moveTo(0, y + tabInnerCut + pad)
                .lineTo(0, y + h - tabInnerCut - pad),
            )
            .union()
            .combine(
              polybool
                .shape()
                .translate(t1x, t1y)
                .rotateDeg(ang1)
                // left side
                .moveTo(0, top === 0 ? pad : top)
                .lineTo(0, y + tic - pad)
                .moveTo(0, y + h - tic + pad)
                .lineTo(0, bottom === height ? bottom - pad : bottom),
            )
            .union();
          cuts = cuts
            .combine(
              polybool
                .shape()
                .translate(t1x, t1y)
                .rotateDeg(ang1)
                .moveTo(0, y + tic)
                .bezierCurveTo(-th, y + tic, -th, y + tic, -th, y + tic + th)
                .lineTo(-th, y + h - tic - th)
                .bezierCurveTo(
                  -th,
                  y + h - tic,
                  -th,
                  y + h - tic,
                  0,
                  y + h - tic,
                ),
            )
            .union();
        }
      }
    };

    switch (topCover.kind) {
      case 'none':
        break;
      case 'tabs':
        border = border
          .combine(
            polybool
              .shape()
              .moveTo(r2x, r2y)
              .lineTo(r2x + depth * 0.1, r2y - depth)
              .lineTo(r2x + depth * 0.9, r2y - depth)
              .lineTo(r2x + depth, r2y)
              .closePath(),
          )
          .union();
        scores = scores
          .combine(
            polybool
              .shape()
              .moveTo(r2x + pad, r2y)
              .lineTo(r2x + depth - pad, r2y),
          )
          .union();
        addInsertTabs(
          topCover.params,
          r1w,
          topCover.params.flip ? r1x + r1w + r2x + r2w : r1x + r1w,
          -th,
          90,
          topCover.params.flip ? 0 : r3x,
          -r4w - th * 2,
          270,
          true,
        );
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
      case 'tabs':
        border = border
          .combine(
            polybool
              .shape()
              .moveTo(r2x, r2y + r2h)
              .lineTo(r2x + depth * 0.1, r2y + r2h + depth)
              .lineTo(r2x + depth * 0.9, r2y + r2h + depth)
              .lineTo(r2x + depth, r2y + r2h)
              .closePath(),
          )
          .union();
        scores = scores
          .combine(
            polybool
              .shape()
              .moveTo(r2x + pad, r2y + r2h)
              .lineTo(r2x + depth - pad, r2y + r2h),
          )
          .union();
        addInsertTabs(
          bottomCover.params,
          r1w,
          bottomCover.params.flip ? r3x : 0,
          height + th,
          270,
          bottomCover.params.flip ? r1w : r4x - th,
          height + r4w + th * 2,
          90,
          true,
        );
        break;
      case 'tuck':
        addTuck(false, bottomCover.params);
        break;
      default:
        throw new Error(`Unknown bottom cover: ${bottomCover.kind}`);
    }

    switch (wrapConnection.kind) {
      case 'none': {
        const { receiverWidth } = wrapConnection.params;
        if (receiverWidth > 0) {
          addReceiverTab(receiverWidth, height, 0, 0, 0);
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
      case 'tabs':
        addInsertTabs(
          wrapConnection.params,
          height,
          r1x,
          0,
          0,
          r4x + r4w,
          0,
          0,
          false,
        );
        break;
      case 'tuck':
        if (topCover.kind !== 'tabs' || bottomCover.kind !== 'tabs') {
          throw new Error('Top and bottom must be tabs');
        }
        addTuckTab(
          topCover.params.flip
            ? () =>
                polybool
                  .shape()
                  .translate(0, -depth - th * 2)
                  .rotateDeg(90)
                  .scale(1, -1)
            : () =>
                polybool
                  .shape()
                  .translate(r3x + r1w, -th * 2)
                  .rotateDeg(90)
                  .scale(-1, 1),
          wrapConnection.params.notchWidth,
          0,
          0,
          depth,
          depth,
        );
        addTuckTab(
          bottomCover.params.flip
            ? () =>
                polybool
                  .shape()
                  .translate(0, r3h + th * 2 + depth)
                  .rotateDeg(90)
                  .scale(-1, -1)
            : () =>
                polybool
                  .shape()
                  .translate(r3x + r1w, r3h + th * 2)
                  .rotateDeg(90),
          wrapConnection.params.notchWidth,
          0,
          0,
          depth,
          depth,
        );
        addTuckFlap(
          () =>
            polybool
              .shape()
              .translate(r4x + r4w, 0)
              .rotateDeg(90),
          wrapConnection.params.notchWidth,
          wrapConnection.params.notchHeight,
          0,
          0,
          height,
          depth,
        );
        break;
      default:
        throw new Error(`Unknown wrap connection: ${wrapConnection.kind}`);
    }

    const surface = new Surface(th, kr, border, cuts, scores);
    return [Surface.union(surface, surface)];
  }
}
