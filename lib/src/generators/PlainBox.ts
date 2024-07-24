//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { GeneratorBase } from './GeneratorBase';
import { Surface } from '../Surface';
import { DrawBuilder } from '../DrawBuilder';

export interface IPlainBoxParams {
  thickness: number;
  width: number;
  height: number;
}

export class PlainBox extends GeneratorBase {
  name() {
    return 'PlainBox';
  }

  defaultParams() {
    return {
      thickness: 3,
      edges: [{
        kind: 'boxJoint',
        length: 100,
        angle: 90,
        surroundingSpaces: 2,
        edgeWidth: 1,
        extraLength: 0,
        finger: 2,
        play: 0,
        space: 2,
        width: 1
      }, {
        kind: 'plain',
        length: 50
      }, {
        kind: 'boxJoint',
        length: 100,
        angle: 90,
        surroundingSpaces: 2,
        edgeWidth: 1,
        extraLength: 0,
        finger: 2,
        play: 0,
        space: 2,
        width: 1
      }, {
        kind: 'plain',
        length: 50
      }]
    };
  }

  schema() {
    return {
      properties: {
        thickness: {
          type: 'float64' as const,
          metadata: {
            default: 3,
            title: 'Thickness',
          },
        },
        edges: {
          elements: {
            discriminator: 'kind',
            mapping: {
              plain: {
                properties: {
                  kind: {
                    type: 'string' as const,
                    metadata: {
                      default: 'plain',
                      title: 'Plain',
                    },
                  },
                  length: {
                    type: 'float64' as const,
                    metadata: {
                      default: 100,
                      title: 'Length',
                    },
                  },
                },
                metadata: {
                  title: 'Plain',
                  order: ['length'],
                }
              },
              boxJoint: {
                properties: {
                  kind: {
                    type: 'string' as const,
                    metadata: {
                      default: 'boxJoint',
                      title: 'Box Joint',
                    },
                  },
                  length: {
                    type: 'float64' as const,
                    metadata: {
                      default: 100,
                      title: 'Length',
                    },
                  },
                  angle: {
                    type: 'float64' as const,
                    metadata: {
                      default: 90,
                      title: 'Angle',
                    },
                  },
                  surroundingSpaces: {
                    type: 'float64' as const,
                    metadata: {
                      default: 2,
                      title: 'Surrounding Space',
                      description: 'Minimal space at the start and end in multiple of normal spaces',
                    },
                  },
                  edgeWidth: {
                    type: 'float64' as const,
                    metadata: {
                      default: 1,
                      title: 'Edge Width',
                      description: 'Space below holes (multiples of thickness)',
                    },
                  },
                  extraLength: {
                    type: 'float64' as const,
                    metadata: {
                      default: 0,
                      title: 'Extra Length',
                      description: 'Extra material on finger (multiples of thickness)'
                    },
                  },
                  finger: {
                    type: 'float64' as const,
                    metadata: {
                      default: 2,
                      title: 'Finger',
                      description: 'Width of the fingers (multiples of thickness)',
                    },
                  },
                  play: {
                    type: 'float64' as const,
                    metadata: {
                      default: 0,
                      title: 'Play',
                      description: 'Extra space to allow finger move in and out (multiples of thickness)',
                    },
                  },
                  space: {
                    type: 'float64' as const,
                    metadata: {
                      default: 2,
                      title: 'Space',
                      description: 'Space between fingers (multiples of thickness)',
                    },
                  },
                  width: {
                    type: 'float64' as const,
                    metadata: {
                      default: 1,
                      title: 'Width',
                      description: 'Width of finger holes (multiples of thickness)',
                    },
                  },
                },
                metadata: {
                  title: 'Box Joint',
                  order: [
                    'length', 'angle', 'surroundingSpaces', 'edgeWidth', 'extraLength', 'finger',
                    'play', 'space', 'width'
                  ],
                }
              }
            },
            metadata: {
              default: 'plain',
              order: ['plain', 'boxJoint'],
            }
          },
          metadata: {
            default: 4,
            title: 'Edges',
            itemTitle: 'Edge {}',
          }
        }
      },
      metadata: {
        order: ['thickness', 'edges'],
      }
    };
  }

  generate({ thickness, edges }: any) {
    if (edges.length < 3) {
      throw new Error('Need at least 3 edges');
    }
    const db = new DrawBuilder();
    const dang = -360 / edges.length;
    for (const edge of edges) {
      switch (edge.kind) {
        case 'plain':
          db.forward(0, edge.length);
          break;
        case 'boxJoint':
          db.forward(0, edge.length);
          break;
      }
      db.forward(dang, 0);
    }
    return [new Surface(thickness, db.close().build())];
  }
}
