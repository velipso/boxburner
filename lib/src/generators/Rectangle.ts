//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { Surface } from '../Surface';
import { type IGeneratorSettings } from '../types';
import { allEdges, allEdgesTypeDef } from '../edges';
import { polybool } from '../Geometry';
import { ApplyText } from '../ApplyText';

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
            title: 'Inner Width (units)',
          },
        },
        height: {
          type: 'float64' as const,
          metadata: {
            default: 100,
            title: 'Inner Height (units)',
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
    const th =
      typeof thickness === 'number' ? thickness : settings.defaultThickness;
    const kr = typeof kerf === 'number' ? kerf : settings.defaultKerf;

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

    const e1t = e1.thickness(th, edge1.params);
    const e2t = e2.thickness(th, edge2.params);
    const e3t = e3.thickness(th, edge3.params);
    const e4t = e4.thickness(th, edge4.params);

    const w = width + e2t + e4t;
    const h = height + e1t + e3t;

    const border = polybool
      .shape()
      .beginPath()
      .moveTo(0, 0)
      .lineTo(w, 0)
      .lineTo(w, h)
      .lineTo(0, h)
      .closePath();
    const cuts = polybool.shape();
    const scores = label
      ? ApplyText(label, e4t, e1t, width, height, labelFontSize)
      : polybool.shape();
    let surface = new Surface(th, kr, border, cuts, scores);

    surface = e1.draw(surface.setHome([0, 0], 0), w, th, {
      ...edge1.params,
      cornerDistance1Delta: e4t,
      cornerDistance2Delta: e2t,
    });
    surface = e2.draw(surface.setHome([w, 0], 90), h, th, {
      ...edge2.params,
      cornerDistance1Delta: e1t,
      cornerDistance2Delta: e3t,
    });
    surface = e3.draw(surface.setHome([w, h], 180), w, th, {
      ...edge3.params,
      cornerDistance1Delta: e2t,
      cornerDistance2Delta: e4t,
    });
    surface = e4.draw(surface.setHome([0, h], 270), h, th, {
      ...edge4.params,
      cornerDistance1Delta: e3t,
      cornerDistance2Delta: e1t,
    });

    return [surface];
  }
}
