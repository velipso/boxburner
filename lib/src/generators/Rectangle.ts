//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { SurfaceBuilder } from '../SurfaceBuilder';
import { type IGeneratorSettings } from '../types';
import { allEdges, allEdgesTypeDef } from '../edges';

export class Rectangle extends GeneratorBase {
  name() {
    return 'Rectangle';
  }

  schema() {
    return {
      properties: {
        label: {
          type: 'string' as const,
          nullable: true as const,
          metadata: {
            default: null,
            defaultNotNull: '',
            nullHint: 'none',
            title: 'Label',
          },
        },
        labelFontSize: {
          type: 'float64' as const,
          nullable: true as const,
          metadata: {
            default: null,
            defaultNotNull: 10,
            nullHint: 'auto',
            title: 'Label Font Size (units)',
          },
        },
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
            title: 'Outer Width (units)',
          },
        },
        height: {
          type: 'float64' as const,
          metadata: {
            default: 100,
            title: 'Outer Height (units)',
          },
        },
        edge1: allEdgesTypeDef({ title: 'Top' }),
        edge2: allEdgesTypeDef({ title: 'Right' }),
        edge3: allEdgesTypeDef({ title: 'Bottom' }),
        edge4: allEdgesTypeDef({ title: 'Left' }),
      },
      metadata: {
        order: [
          'label',
          'labelFontSize',
          'thickness',
          'kerf',
          'width',
          'height',
          'edge1',
          'edge2',
          'edge3',
          'edge4',
        ],
      },
    };
  }

  generate(
    settings: IGeneratorSettings,
    {
      label,
      labelFontSize,
      thickness,
      kerf,
      width,
      height,
      edge1,
      edge2,
      edge3,
      edge4,
    }: any,
  ) {
    const sb = new SurfaceBuilder();
    const e1 = allEdges.find((e) => e.name() === edge1.kind);
    if (!e1) {
      throw new Error('Bad top edge');
    }
    const e2 = allEdges.find((e) => e.name() === edge2.kind);
    if (!e2) {
      throw new Error('Bad right edge');
    }
    const e3 = allEdges.find((e) => e.name() === edge3.kind);
    if (!e3) {
      throw new Error('Bad bottom edge');
    }
    const e4 = allEdges.find((e) => e.name() === edge4.kind);
    if (!e4) {
      throw new Error('Bad left edge');
    }

    const th =
      typeof thickness === 'number' ? thickness : settings.defaultThickness;
    const e1t = e1.thickness(width, false, th, edge1.params);
    const e2t = e2.thickness(height, false, th, edge2.params);
    const e3t = e3.thickness(width, false, th, edge3.params);
    const e4t = e4.thickness(height, false, th, edge4.params);

    width -= Math.abs(e2t) + Math.abs(e4t);
    height -= Math.abs(e1t) + Math.abs(e3t);

    // top edge
    if (e4t < 0) {
      sb.border.forward(-e4t);
    }
    e1.draw(sb, width, false, th, edge1.params);
    if (e2t < 0) {
      sb.border.forward(-e2t);
    }

    sb.border.turn(90);

    // right edge
    if (e1t < 0) {
      sb.border.forward(-e1t);
    }
    e2.draw(sb, height, false, th, edge2.params);
    if (e3t < 0) {
      sb.border.forward(-e3t);
    }

    sb.border.turn(90);

    // bottom edge
    if (e2t < 0) {
      sb.border.forward(-e2t);
    }
    e3.draw(sb, width, false, th, edge3.params);
    if (e4t < 0) {
      sb.border.forward(-e4t);
    }

    sb.border.turn(90);

    // left edge
    if (e3t < 0) {
      sb.border.forward(-e3t);
    }
    e4.draw(sb, height, false, th, edge4.params);
    if (e1t < 0) {
      sb.border.forward(-e1t);
    }

    sb.border.turn(90);

    if (label) {
      const lines = label.trim().split('\n');
      const maxChars = lines.reduce(
        (a: number, b: string) => Math.max(a, b.length),
        0,
      );
      let chh = 0;
      if (typeof labelFontSize === 'number') {
        chh = labelFontSize;
      } else {
        // auto font size
        chh = Math.min(
          ((width - 5 - Math.abs(e2t) - Math.abs(e4t)) / maxChars) * 2,
          (height - 5 - Math.abs(e1t) - Math.abs(e3t)) / lines.length,
        );
      }
      const chw = chh / 2;
      const sx = (width - chw * maxChars) / 2;
      const sy = (height - chh * lines.length) / 2;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let j = 0; j < line.length; j++) {
          sb.scoreChar(
            [sx + chw * j + chw * 0.15, sy + chh * i + chh * 0.15],
            chw * 0.7,
            chh * 0.7,
            line.charAt(j),
          );
        }
      }
    }

    const surface = sb.build(settings);
    if (typeof thickness === 'number') {
      surface.setThickness(thickness);
    }
    if (typeof kerf === 'number') {
      surface.setKerf(kerf);
    }
    return [surface];
  }
}
