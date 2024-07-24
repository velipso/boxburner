//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class GeneratorBase {
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
function validateClosedPath(hint, commands) {
    if (commands.length <= 0) {
        throw new Error(`${hint}: Cannot have empty list of commands for closed path`);
    }
    const lastPt = commands[commands.length - 1].to;
    if (lastPt[0] !== 0 || lastPt[1] !== 0) {
        throw new Error(`${hint}: Closed path must end on [0, 0]`);
    }
}
function isClockwise(commands) {
    let sum = 0;
    for (let i = 0; i < commands.length; i++) {
        const p1 = commands[i].to;
        const p2 = commands[(i + 1) % commands.length].to;
        sum += (p2[0] - p1[0]) * (p2[1] + p1[1]);
    }
    return sum < 0;
}
function curveBoundingBox(from, c1, c2, to) {
    const evalAt = (i, t) => from[i] * (1 - t) * (1 - t) * (1 - t) +
        3 * c1[i] * t * (1 - t) * (1 - t) +
        3 * c2[i] * t * t * (1 - t) +
        to[i] * t * t * t;
    const bounds = (i) => {
        const a = 3 * to[i] - 9 * c2[i] + 9 * c1[i] - 3 * from[i];
        const b = 6 * from[i] - 12 * c1[i] + 6 * c2[i];
        const c = 3 * c1[i] - 3 * from[i];
        let min = Math.min(from[i], to[i]);
        let max = Math.max(from[i], to[i]);
        if (Math.abs(a) <= 0.00000001) {
            // a is zero
            const t1 = -c / b;
            if (t1 > 0 && t1 < 1) {
                const p = evalAt(i, t1);
                min = Math.min(min, p);
                max = Math.max(max, p);
            }
        }
        else {
            const disc = b * b - 4 * a * c;
            if (disc >= 0) {
                const sq = Math.sqrt(disc);
                const t1 = (-b + sq) / (2 * a);
                if (t1 > 0 && t1 < 1) {
                    const p = evalAt(i, t1);
                    min = Math.min(min, p);
                    max = Math.max(max, p);
                }
                const t2 = (-b - sq) / (2 * a);
                if (t2 > 0 && t2 < 1) {
                    const p = evalAt(i, t2);
                    min = Math.min(min, p);
                    max = Math.max(max, p);
                }
            }
        }
        return [min, max];
    };
    const bx = bounds(0);
    const by = bounds(1);
    return [
        [bx[0], by[0]],
        [bx[1], by[1]]
    ];
}
function drawCommandsBoundingBox(commands) {
    let min = [0, 0];
    let max = [0, 0];
    let from = [0, 0];
    for (const cmd of commands) {
        switch (cmd.kind) {
            case 'L':
                min[0] = Math.min(min[0], cmd.to[0]);
                min[1] = Math.min(min[1], cmd.to[1]);
                max[0] = Math.max(max[0], cmd.to[0]);
                max[1] = Math.max(max[1], cmd.to[1]);
                break;
            case 'C': {
                const box = curveBoundingBox(from, cmd.c1, cmd.c2, cmd.to);
                min[0] = Math.min(min[0], box[0][0]);
                min[1] = Math.min(min[1], box[0][1]);
                max[0] = Math.max(max[0], box[1][0]);
                max[1] = Math.max(max[1], box[1][1]);
                break;
            }
        }
        from = cmd.to;
    }
    return [min, max];
}
class Surface {
    constructor(thickness, border, holes = [], cuts = [], text = []) {
        validateClosedPath('Surface border', border);
        if (!isClockwise(border)) {
            throw new Error(`Surface border: Points must be in counter-clockwise order for border`);
        }
        for (let i = 0; i < holes.length; i++) {
            const hint = `Surface hole ${i}`;
            validateClosedPath(hint, holes[i]);
            if (isClockwise(holes[i])) {
                throw new Error(`${hint}: Points must be in clockwise order for holes`);
            }
        }
        this.thickness = thickness;
        this.border = border;
        this.holes = holes;
        this.cuts = cuts;
        this.text = text;
    }
    borderBoundingBox() {
        return drawCommandsBoundingBox(this.border);
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class DrawBuilder {
    constructor() {
        this.commands = [];
        this.angle = 0;
    }
    cursor() {
        if (this.commands.length <= 0) {
            return [0, 0];
        }
        return this.commands[this.commands.length - 1].to;
    }
    lineTo(to) {
        this.commands.push({ kind: 'L', to });
        return this;
    }
    lineToRelative(delta) {
        const here = this.cursor();
        return this.lineTo([here[0] + delta[0], here[1] + delta[1]]);
    }
    quadCurveTo(c1, to) {
        // convert quadratic curve to cubic
        const p0 = this.cursor();
        return this.curveTo([p0[0] + 2 * (c1[0] - p0[0]) / 3, p0[1] + 2 * (c1[1] - p0[1]) / 3], [to[0] + 2 * (c1[0] - to[0]) / 3, to[1] + 2 * (c1[1] - to[1]) / 3], to);
    }
    curveTo(c1, c2, to) {
        this.commands.push({ kind: 'C', c1, c2, to });
        return this;
    }
    forward(dangle, dist = 0) {
        this.angle += dangle;
        const a = this.angle * Math.PI / 180;
        if (dist !== 0) {
            this.lineToRelative([dist * Math.sin(a), dist * Math.cos(a)]);
        }
        return this;
    }
    close() {
        const here = this.cursor();
        if (here[0] !== 0 || here[1] !== 0) {
            this.lineTo([0, 0]);
        }
        return this;
    }
    build() {
        return this.commands;
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class PlainBox extends GeneratorBase {
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
                    type: 'float64',
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
                                        type: 'string',
                                        metadata: {
                                            default: 'plain',
                                            title: 'Plain',
                                        },
                                    },
                                    length: {
                                        type: 'float64',
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
                                        type: 'string',
                                        metadata: {
                                            default: 'boxJoint',
                                            title: 'Box Joint',
                                        },
                                    },
                                    length: {
                                        type: 'float64',
                                        metadata: {
                                            default: 100,
                                            title: 'Length',
                                        },
                                    },
                                    angle: {
                                        type: 'float64',
                                        metadata: {
                                            default: 90,
                                            title: 'Angle',
                                        },
                                    },
                                    surroundingSpaces: {
                                        type: 'float64',
                                        metadata: {
                                            default: 2,
                                            title: 'Surrounding Space',
                                            description: 'Minimal space at the start and end in multiple of normal spaces',
                                        },
                                    },
                                    edgeWidth: {
                                        type: 'float64',
                                        metadata: {
                                            default: 1,
                                            title: 'Edge Width',
                                            description: 'Space below holes (multiples of thickness)',
                                        },
                                    },
                                    extraLength: {
                                        type: 'float64',
                                        metadata: {
                                            default: 0,
                                            title: 'Extra Length',
                                            description: 'Extra material on finger (multiples of thickness)'
                                        },
                                    },
                                    finger: {
                                        type: 'float64',
                                        metadata: {
                                            default: 2,
                                            title: 'Finger',
                                            description: 'Width of the fingers (multiples of thickness)',
                                        },
                                    },
                                    play: {
                                        type: 'float64',
                                        metadata: {
                                            default: 0,
                                            title: 'Play',
                                            description: 'Extra space to allow finger move in and out (multiples of thickness)',
                                        },
                                    },
                                    space: {
                                        type: 'float64',
                                        metadata: {
                                            default: 2,
                                            title: 'Space',
                                            description: 'Space between fingers (multiples of thickness)',
                                        },
                                    },
                                    width: {
                                        type: 'float64',
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
    generate({ thickness, edges }) {
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

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
function test() {
    const p = new PlainBox();
    console.log(p.schema());
    console.log(p.generate({ thickness: 3, width: 50, height: 30 }));
}

export { DrawBuilder, GeneratorBase, PlainBox, Surface, test };
