//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { type IGeneratorSettings } from '../types';
import { SurfaceBuilder } from '../SurfaceBuilder';

export class BoxCardstock extends GeneratorBase {
  name() {
    return 'BoxCardstock';
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
            title: 'Interior Width (units)',
          },
        },
        depth: {
          type: 'float64' as const,
          metadata: {
            default: 100,
            title: 'Interior Depth (units)',
          },
        },
        height: {
          type: 'float64' as const,
          metadata: {
            default: 20,
            title: 'Interior Height (units)',
          },
        },
        foot: {
          type: 'float64' as const,
          metadata: {
            default: 10,
            title: 'Foot size (units)',
          },
        },
      },
      metadata: {
        order: ['thickness', 'kerf', 'width', 'depth', 'height', 'foot'],
      },
    };
  }

  generate(
    settings: IGeneratorSettings,
    { thickness, kerf, width, depth, height, foot }: any,
  ) {
    const th =
      typeof thickness === 'number' ? thickness : settings.defaultThickness;
    const sb = new SurfaceBuilder();
    const s1h = height + th;
    const s2h = height;
    const gap = th * 2;
    const ext = 6;

    const drawTab = (length: number) => {
      const dy = 0.8 * length;
      const dx = 0.25 * length;
      const a = (Math.atan2(dy, dx) * 180) / Math.PI;
      sb.border
        .turn(-a)
        .forward(Math.sqrt(dx * dx + dy * dy))
        .turn(a)
        .forward(0.5 * length)
        .turn(a)
        .forward(Math.sqrt(dx * dx + dy * dy))
        .turn(-a);
    };
    const drawFoot = (length: number) => {
      sb.border
        .turn(-45)
        .forward(Math.sqrt(2) * foot)
        .turn(45)
        .forward(length - 2 * foot)
        .turn(45)
        .forward(Math.sqrt(2) * foot)
        .turn(-45);
    };
    const drawE1 = () => {
      sb.border.turn(-90);
      drawTab(s1h);
      sb.score(sb.border.cursor(), sb.border.angle)
        .turn(180)
        .forward(s1h)
        .turn(-90)
        .forward(width + th * ext)
        .turn(-90)
        .forward(s1h);
      sb.border.turn(90).forward(gap);
      sb.score(sb.border.cursor(), sb.border.angle).forward(
        width + th * ext - gap * 2,
      );
      sb.border.turn(-90).forward(s2h).turn(90);
      sb.score(sb.border.cursor(), sb.border.angle).forward(
        width + th * ext - gap * 2,
      );
      drawFoot(width + th * ext - gap * 2);
      sb.border.turn(90).forward(s2h).turn(-90).forward(gap).turn(90);
      drawTab(s1h);
    };
    const drawE2 = () => {
      sb.border.forward(gap);
      sb.score(sb.border.cursor(), sb.border.angle).forward(
        depth + th * ext - 2 * gap,
      );
      sb.border.turn(-90).forward(s1h).turn(-90);
      sb.score(sb.border.cursor(), sb.border.angle)
        .turn(180)
        .forward(depth + th * ext - 2 * gap);
      sb.border.forward(gap).turn(90);
      sb.score(sb.border.cursor(), sb.border.angle)
        .forward(s2h)
        .turn(90)
        .forward(depth + th * ext)
        .turn(90)
        .forward(s2h);
      drawTab(s2h);
      sb.border.turn(90);
      drawFoot(depth + th * ext);
      sb.border.turn(90);
      drawTab(s2h);
      sb.border
        .turn(90)
        .forward(gap)
        .turn(-90)
        .forward(s1h)
        .turn(-90)
        .forward(gap)
        .turn(90);
    };

    drawE1();
    drawE2();
    drawE1();
    drawE2();

    const surface = sb.build(settings);
    if (typeof thickness === 'number') {
      surface.setThickness(thickness);
    }
    if (typeof kerf === 'number') {
      surface.setKerf(kerf);
    }

    const rsb = new SurfaceBuilder();
    rsb.border
      .forward(width)
      .turn(90)
      .forward(depth)
      .turn(90)
      .forward(width)
      .turn(90)
      .forward(depth)
      .turn(90);
    const rsurface = rsb.build(settings);
    if (typeof thickness === 'number') {
      rsurface.setThickness(thickness);
    }
    if (typeof kerf === 'number') {
      rsurface.setKerf(kerf);
    }

    return [surface, rsurface];
  }
}
