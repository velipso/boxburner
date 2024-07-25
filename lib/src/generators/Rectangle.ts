//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { Surface } from '../Surface';
import { SurfaceBuilder } from '../SurfaceBuilder';
import { IGeneratorSettings } from '../types';
import { allEdges, allEdgesTypeDef } from '../edges';

export class Rectangle extends GeneratorBase {
  name() {
    return 'Rectangle';
  }

  schema() {
    return {
      properties: {
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
        order: ['width', 'height', 'edge1', 'edge2', 'edge3', 'edge4'],
      }
    };
  }

  generate(settings: IGeneratorSettings, { width, height, edge1, edge2, edge3, edge4 }: any) {
    const { thickness } = settings;
    const sb = new SurfaceBuilder();
    const e1 = allEdges.find(e => e.name() === edge1.kind);
    if (!e1) {
      throw new Error('Bad top edge');
    }
    const e2 = allEdges.find(e => e.name() === edge2.kind);
    if (!e2) {
      throw new Error('Bad right edge');
    }
    const e3 = allEdges.find(e => e.name() === edge3.kind);
    if (!e3) {
      throw new Error('Bad bottom edge');
    }
    const e4 = allEdges.find(e => e.name() === edge4.kind);
    if (!e4) {
      throw new Error('Bad left edge');
    }

    const e1t = e1.thickness(width, false, settings, edge1.params);
    const e2t = e2.thickness(height, false, settings, edge2.params);
    const e3t = e3.thickness(width, false, settings, edge3.params);
    const e4t = e4.thickness(height, false, settings, edge4.params);

    width -= Math.abs(e2t) + Math.abs(e4t);
    height -= Math.abs(e1t) + Math.abs(e3t);

    // top edge
    if (e4t < 0) {
      sb.border.forward(-e4t);
    }
    e1.draw(sb, width, false, settings, edge1.params);
    if (e2t < 0) {
      sb.border.forward(-e2t);
    }

    sb.border.turn(90);

    // right edge
    if (e1t < 0) {
      sb.border.forward(-e1t);
    }
    e2.draw(sb, height, false, settings, edge2.params);
    if (e3t < 0) {
      sb.border.forward(-e3t);
    }

    sb.border.turn(90);

    // bottom edge
    if (e2t < 0) {
      sb.border.forward(-e2t);
    }
    e3.draw(sb, width, false, settings, edge3.params);
    if (e4t < 0) {
      sb.border.forward(-e4t);
    }

    sb.border.turn(90);

    // left edge
    if (e3t < 0) {
      sb.border.forward(-e3t);
    }
    e4.draw(sb, height, false, settings, edge4.params);
    if (e1t < 0) {
      sb.border.forward(-e1t);
    }

    sb.border.turn(90);

    return [sb.build(thickness)];
  }
}
