'use strict';

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
    quadCurveTo(c1, to) {
        // convert quadratic curve to cubic
        const p0 = this.cursor();
        return this.curveTo([p0[0] + 2 * (c1[0] - p0[0]) / 3, p0[1] + 2 * (c1[1] - p0[1]) / 3], [to[0] + 2 * (c1[0] - to[0]) / 3, to[1] + 2 * (c1[1] - to[1]) / 3], to);
    }
    curveTo(c1, c2, to) {
        this.commands.push({ kind: 'C', c1, c2, to });
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
            width: 100,
            height: 100
        };
    }
    schema() {
        return {
            properties: {
                thickness: { type: 'float64' },
                width: { type: 'float64' },
                height: { type: 'float64' },
            },
            metadata: {
                keyOrder: ['thickness', 'width', 'height'],
                titles: {
                    thickness: 'Material Thickness (mm)',
                    width: 'Outer Width (mm)',
                    height: 'Outer Height (mm)'
                }
            }
        };
    }
    generate({ thickness, width, height }) {
        return new Surface(thickness, new DrawBuilder()
            .lineTo([width, 0])
            .lineTo([width, height])
            .lineTo([0, height])
            .lineTo([0, 0])
            .build());
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

exports.DrawBuilder = DrawBuilder;
exports.GeneratorBase = GeneratorBase;
exports.PlainBox = PlainBox;
exports.Surface = Surface;
exports.test = test;
