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
    constructor(thickness, border, holes = [], cuts = [], scores = [], text = []) {
        validateClosedPath('Surface border', border);
        if (!isClockwise(border)) {
            throw new Error(`Surface border: Points must be in counter-clockwise order for border`);
        }
        for (let i = 0; i < holes.length; i++) {
            const hint = `Surface hole ${i}`;
            validateClosedPath(hint, holes[i].commands);
            if (isClockwise(holes[i].commands)) {
                throw new Error(`${hint}: Points must be in clockwise order for holes`);
            }
        }
        this.thickness = thickness;
        this.border = border;
        this.holes = holes;
        this.cuts = cuts;
        this.scores = scores;
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
function copyVec2(p) {
    return [p[0], p[1]];
}
function forwardVec2(p, angle, dist) {
    angle = ((angle % 360) + 360) % 360;
    if (dist !== 0) {
        if (angle === 0) {
            p[0] += dist;
        }
        else if (angle === 90) {
            p[1] += dist;
        }
        else if (angle === 180) {
            p[0] -= dist;
        }
        else if (angle === 270) {
            p[1] -= dist;
        }
        else {
            p[0] += dist * Math.cos(angle * Math.PI / 180);
            p[1] += dist * Math.sin(angle * Math.PI / 180);
        }
    }
    return p;
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
const eps = 0.0000001;
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
        var _a, _b;
        const last = this.commands[this.commands.length - 1];
        if (last && last.kind === 'L') {
            // combine colliner segments
            const p1 = (_b = (_a = this.commands[this.commands.length - 2]) === null || _a === void 0 ? void 0 : _a.to) !== null && _b !== void 0 ? _b : [0, 0];
            const p2 = last.to;
            const p3 = to;
            if (Math.abs(p1[0] - p3[0]) < eps &&
                Math.abs(p1[1] - p3[1]) < eps) {
                // this line is undo'ing previous line, so remove it
                this.commands.pop();
                return this;
            }
            const dx1 = p1[0] - p2[0];
            const dy1 = p1[1] - p2[1];
            const dx2 = p2[0] - p3[0];
            const dy2 = p2[1] - p3[1];
            if (Math.abs(dx1 * dy2 - dx2 * dy1) < eps) {
                // points are collinear, so update last line instead of drawing an additional line
                last.to = to;
                return this;
            }
        }
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
    turn(dangle) {
        this.angle = (((this.angle + dangle) % 360) + 360) % 360;
        return this;
    }
    forward(dist) {
        if (dist !== 0) {
            this.lineToRelative(forwardVec2([0, 0], this.angle, dist));
        }
        return this;
    }
    close() {
        var _a, _b;
        this.lineTo([0, 0]);
        const first = this.commands[0];
        const last = this.commands[this.commands.length - 1];
        if ((last === null || last === void 0 ? void 0 : last.kind) === 'L' && (first === null || first === void 0 ? void 0 : first.kind) === 'L') {
            // combine colliner segments
            const p1 = (_b = (_a = this.commands[this.commands.length - 2]) === null || _a === void 0 ? void 0 : _a.to) !== null && _b !== void 0 ? _b : [0, 0];
            const p2 = last.to; // should be [0, 0]
            const p3 = first.to;
            const dx1 = p1[0] - p2[0];
            const dy1 = p1[1] - p2[1];
            const dx2 = p2[0] - p3[0];
            const dy2 = p2[1] - p3[1];
            if (Math.abs(p1[0] - p3[0]) < eps &&
                Math.abs(p1[1] - p3[1]) < eps) {
                this.commands.shift();
            }
            else if (Math.abs(dx1 * dy2 - dx2 * dy1) >= eps) {
                // points aren't collinear, so bail
                return this;
            }
            this.commands.pop();
            for (const cmd of this.commands) {
                cmd.to[0] -= p1[0];
                cmd.to[1] -= p1[1];
                if (cmd.kind === 'C') {
                    cmd.c1[0] -= p1[0];
                    cmd.c1[1] -= p1[1];
                    cmd.c2[0] -= p1[0];
                    cmd.c2[1] -= p1[1];
                }
            }
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
class SurfaceBuilder {
    constructor() {
        this.border = new DrawBuilder();
        this.holes = [];
        this.cuts = [];
        this.scores = [];
        this.text = [];
    }
    hole(offset, angle = 0) {
        const db = new DrawBuilder();
        db.turn(angle);
        this.holes.push({ offset, db });
        return db;
    }
    cut(offset, angle = 0) {
        const db = new DrawBuilder();
        db.turn(angle);
        this.cuts.push({ offset, db });
        return db;
    }
    score(offset, angle = 0) {
        const db = new DrawBuilder();
        db.turn(angle);
        this.scores.push({ offset, db });
        return db;
    }
    build(thickness) {
        return new Surface(thickness, this.border.close().build(), this.holes.map(({ offset, db }) => ({ offset, commands: db.close().build() })), this.cuts.map(({ offset, db }) => ({ offset, commands: db.close().build() })), this.scores.map(({ offset, db }) => ({ offset, commands: db.close().build() })), this.text);
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class EdgeBase {
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class PlainEdge extends EdgeBase {
    name() {
        return 'PlainEdge';
    }
    schema() {
        return {
            properties: {},
            metadata: { order: [] }
        };
    }
    thickness(_length, _invert, _settings, _params) {
        return 0;
    }
    draw(sb, length, _invert, _settings, _params) {
        sb.border.forward(length);
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class BoxJointEdge extends EdgeBase {
    name() {
        return 'BoxJointEdge';
    }
    schema() {
        return {
            properties: {
                invert: {
                    type: 'boolean',
                    metadata: {
                        default: false,
                        title: 'Invert',
                        description: 'Swap settings for receiving side',
                    },
                },
                width1: {
                    type: 'float64',
                    metadata: {
                        default: 6,
                        title: 'Width 1',
                        description: 'Width of finger 1 (units)',
                    },
                },
                length1: {
                    type: 'float64',
                    metadata: {
                        default: 1,
                        title: 'Length 1',
                        description: 'Length of finger 1 (multiples of material thickness)',
                    },
                },
                width2: {
                    type: 'float64',
                    metadata: {
                        default: 6,
                        title: 'Width 2',
                        description: 'Width of finger 2 (units)',
                    },
                },
                length2: {
                    type: 'float64',
                    metadata: {
                        default: 1,
                        title: 'Length 2',
                        description: 'Length of finger 2 (multiples of material thickness)',
                    },
                },
                play: {
                    type: 'float64',
                    metadata: {
                        default: 0,
                        title: 'Play',
                        description: 'Extra space around fingers (units)',
                    },
                },
                cornerDistance: {
                    type: 'float64',
                    metadata: {
                        default: 12,
                        title: 'Corner Distance',
                        description: 'Reserved space near corners to exclude fingers (units)',
                    },
                },
                centerDistance: {
                    type: 'float64',
                    metadata: {
                        default: 0,
                        title: 'Center Distance',
                        description: 'Reserved space near center to exclude fingers (units)',
                    },
                },
            },
            metadata: {
                order: ['invert', 'width1', 'length1', 'width2', 'length2', 'play', 'cornerDistance',
                    'centerDistance'],
            }
        };
    }
    thickness(_length, callerInvert, { thickness }, { length1, length2, invert: userInvert }) {
        const invert = callerInvert !== userInvert;
        return (invert ? -length2 : length1) * thickness;
    }
    draw(sb, length, callerInvert, { thickness }, { width1, length1, width2, length2, invert: userInvert, play, cornerDistance, centerDistance }) {
        const db = sb.border;
        const invert = callerInvert !== userInvert;
        const t = (invert ? length2 : length1) * thickness;
        const w1 = invert ? width1 + play : width1 - play;
        const w2 = invert ? width2 - play : width2 + play;
        const a = invert ? -90 : 90;
        const finger = () => db.turn(-a).forward(t).turn(a).forward(w1).turn(a).forward(t).turn(-a);
        const space = () => db.forward(w2);
        const fingers = (count) => {
            finger();
            for (let i = 0; i < count; i++) {
                space();
                finger();
            }
        };
        const left = length - cornerDistance * 2;
        if (centerDistance > 0) {
            const half = (left - centerDistance) / 2;
            const fingerCount = Math.floor((half - width1) / (width1 + width2));
            const fingerLen = width1 + fingerCount * (width1 + width2);
            db.forward(cornerDistance + (half - fingerLen) / 2);
            fingers(fingerCount);
            db.forward(centerDistance + half - fingerLen);
            fingers(fingerCount);
            db.forward(cornerDistance + (half - fingerLen) / 2);
        }
        else {
            const fingerCount = Math.floor((left - width1) / (width1 + width2));
            const fingerLen = width1 + fingerCount * (width1 + width2);
            db.forward(cornerDistance + (left - fingerLen) / 2);
            fingers(fingerCount);
            db.forward(cornerDistance + (left - fingerLen) / 2);
        }
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class MortiseAndTenonEdge extends EdgeBase {
    name() {
        return 'MortiseAndTenonEdge';
    }
    schema() {
        return {
            properties: {
                invert: {
                    type: 'boolean',
                    metadata: {
                        default: false,
                        title: 'Invert',
                        description: 'Swap settings for receiving side',
                    },
                },
                width1: {
                    type: 'float64',
                    metadata: {
                        default: 6,
                        title: 'Width 1',
                        description: 'Width of tenon (units)',
                    },
                },
                tenonLength: {
                    type: 'float64',
                    metadata: {
                        default: 1,
                        title: 'Tenon Length',
                        description: 'Length of tenon (multiples of material thickness)',
                    },
                },
                width2: {
                    type: 'float64',
                    metadata: {
                        default: 6,
                        title: 'Width 2',
                        description: 'Width between tenons (units)',
                    },
                },
                holeDistance: {
                    type: 'float64',
                    metadata: {
                        default: 3,
                        title: 'Hole Distance',
                        description: 'Distance of mortises from edge (units)',
                    },
                },
                play: {
                    type: 'float64',
                    metadata: {
                        default: 0,
                        title: 'Play',
                        description: 'Extra space between mortise and tenons (units)',
                    },
                },
                thicknessPlay: {
                    type: 'float64',
                    metadata: {
                        default: 0,
                        title: 'Thickness Play',
                        description: 'Extra thickness added to mortise holes (units)',
                    },
                },
                cornerDistance: {
                    type: 'float64',
                    metadata: {
                        default: 12,
                        title: 'Corner Distance',
                        description: 'Reserved space near corners to exclude joints (units)',
                    },
                },
                centerDistance: {
                    type: 'float64',
                    metadata: {
                        default: 0,
                        title: 'Center Distance',
                        description: 'Reserved space near center to exclude joints (units)',
                    },
                },
            },
            metadata: {
                order: ['invert', 'width1', 'tenonLength', 'width2', 'holeDistance', 'play',
                    'thicknessPlay', 'cornerDistance', 'centerDistance'],
            }
        };
    }
    thickness(_length, callerInvert, { thickness }, { tenonLength, invert: userInvert }) {
        const invert = callerInvert !== userInvert;
        return invert ? 0 : tenonLength * thickness;
    }
    draw(sb, length, callerInvert, { thickness }, { width1, tenonLength, width2, holeDistance, invert: userInvert, play, thicknessPlay, cornerDistance, centerDistance }) {
        const invert = callerInvert !== userInvert;
        const w1 = invert ? width1 + play : width1 - play;
        const w2 = invert ? width2 - play : width2 + play;
        let forward = (_length) => { };
        let finger = () => { };
        let space = () => { };
        const fingers = (count) => {
            finger();
            for (let i = 0; i < count; i++) {
                space();
                finger();
            }
        };
        if (invert) {
            const t = thickness + thicknessPlay * 2;
            const start = copyVec2(sb.border.cursor());
            const ang = sb.border.angle;
            forwardVec2(start, ang + 90, holeDistance + t - thicknessPlay);
            sb.border.forward(length);
            forward = (length) => {
                forwardVec2(start, ang, length);
            };
            finger = () => {
                sb.hole(copyVec2(start), ang)
                    .forward(w1)
                    .turn(-90)
                    .forward(t)
                    .turn(-90)
                    .forward(w1)
                    .turn(-90)
                    .forward(t)
                    .turn(-90);
                forward(w1);
            };
            space = () => forward(w2);
        }
        else {
            const t = tenonLength * thickness;
            const a = 90;
            forward = (length) => sb.border.forward(length);
            finger = () => sb.border.turn(-a).forward(t).turn(a).forward(w1).turn(a).forward(t).turn(-a);
            space = () => sb.border.forward(w2);
        }
        const left = length - cornerDistance * 2;
        if (centerDistance > 0) {
            const half = (left - centerDistance) / 2;
            const fingerCount = Math.floor((half - width1) / (width1 + width2));
            const fingerLen = width1 + fingerCount * (width1 + width2);
            forward(cornerDistance + (half - fingerLen) / 2);
            fingers(fingerCount);
            forward(centerDistance + half - fingerLen);
            fingers(fingerCount);
            forward(cornerDistance + (half - fingerLen) / 2);
        }
        else {
            const fingerCount = Math.floor((left - width1) / (width1 + width2));
            const fingerLen = width1 + fingerCount * (width1 + width2);
            forward(cornerDistance + (left - fingerLen) / 2);
            fingers(fingerCount);
            forward(cornerDistance + (left - fingerLen) / 2);
        }
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
const allEdges = [
    new PlainEdge(),
    new BoxJointEdge(),
    new MortiseAndTenonEdge(),
];
function allEdgesTypeDef(metadata = {}) {
    return {
        discriminator: 'kind',
        mapping: allEdges.map((e) => ({
            [e.name()]: {
                properties: {
                    kind: {
                        type: 'string',
                        metadata: {
                            default: e.name(),
                            title: e.name(),
                        },
                    },
                    params: e.schema()
                },
                metadata: {
                    order: ['params'],
                    untabParams: true,
                },
            }
        }))
            .reduce((a, b) => ({ ...a, ...b }), {}),
        metadata: {
            default: allEdges[0].name(),
            order: allEdges.map(e => e.name()),
            ...metadata,
        },
    };
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class PlainRectangle extends GeneratorBase {
    name() {
        return 'PlainRectangle';
    }
    schema() {
        return {
            properties: {
                width: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Outer Width (units)',
                    },
                },
                height: {
                    type: 'float64',
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
    generate(settings, { width, height, edge1, edge2, edge3, edge4 }) {
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

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
const allGenerators = [
    new PlainRectangle(),
];

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class DocumentBase {
    constructor(settings) { }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class DocumentSVG extends DocumentBase {
    constructor(settings) {
        super(settings);
        this.surfaces = [];
        this.settings = settings;
    }
    addSurface(offset, surface, cutColor, holeColor, scoreColor) {
        this.surfaces.push({ offset, surface, cutColor, holeColor, scoreColor });
    }
    toFile() {
        const { kerf, units } = this.settings;
        const border = [[0, 0], [0, 0]];
        for (const { offset, surface } of this.surfaces) {
            const bb = surface.borderBoundingBox();
            border[0][0] = Math.min(border[0][0], offset[0] + bb[0][0] - kerf - 10);
            border[0][1] = Math.min(border[0][1], offset[1] + bb[0][1] - kerf - 10);
            border[1][0] = Math.max(border[1][0], offset[0] + bb[1][0] + kerf + 10);
            border[1][1] = Math.max(border[1][1], offset[1] + bb[1][1] + kerf + 10);
        }
        const data = [];
        const num = (n) => `${Math.round(n * 1000) / 1000}`;
        let gid = 0;
        const outputGroupOpen = () => {
            data.push(`<g id="p-${gid++}" style="fill:none;stroke-linecap:round;stroke-linejoin:round;">`);
        };
        const outputGroupClose = () => {
            data.push(`</g>`);
        };
        const outputPath = (offset, commands, closed, color) => {
            const d = [`M${num(offset[0])} ${num(offset[1])}`];
            for (const cmd of commands) {
                switch (cmd.kind) {
                    case 'L':
                        d.push(`L${num(offset[0] + cmd.to[0])} ${num(offset[1] + cmd.to[1])}`);
                        break;
                    case 'C':
                        d.push(`C${num(offset[0] + cmd.c1[0])} ${num(offset[1] + cmd.c1[1])}`, ` ${num(offset[0] + cmd.c2[0])} ${num(offset[1] + cmd.c2[1])}`, ` ${num(offset[0] + cmd.to[0])} ${num(offset[1] + cmd.to[1])}`);
                        break;
                }
            }
            if (closed) {
                d.push('Z');
            }
            data.push(`<path stroke="${color}" stroke-width="${kerf}" d="${d.join('')}" />`);
        };
        for (const { offset, surface, cutColor, holeColor, scoreColor } of this.surfaces) {
            if (surface.scores.length > 0 || surface.holes.length > 0) {
                outputGroupOpen();
            }
            if (surface.scores.length > 0) {
                outputGroupOpen();
                for (const score of surface.scores) {
                    outputPath([offset[0] + score.offset[0], offset[1] + score.offset[1]], score.commands, false, scoreColor);
                }
                outputGroupClose();
            }
            outputGroupOpen();
            outputPath(offset, surface.border, true, cutColor);
            for (const cut of surface.cuts) {
                outputPath([offset[0] + cut.offset[0], offset[1] + cut.offset[1]], cut.commands, false, cutColor);
            }
            outputGroupClose();
            if (surface.holes.length > 0) {
                outputGroupOpen();
                for (const hole of surface.holes) {
                    outputPath([offset[0] + hole.offset[0], offset[1] + hole.offset[1]], hole.commands, true, holeColor);
                }
                outputGroupClose();
            }
            if (surface.scores.length > 0 || surface.holes.length > 0) {
                outputGroupClose();
            }
        }
        const width = border[1][0] - border[0][0];
        const height = border[1][1] - border[0][1];
        return {
            mimeType: 'image/svg+xml',
            extension: '.svg',
            data: new TextEncoder().encode(`<?xml version='1.0' encoding='utf-8'?>
<svg
  width="${num(width)}${units}"
  height="${num(height)}${units}"
  viewBox="${num(border[0][0])} ${num(border[0][1])} ${num(width)} ${num(height)}"
  xmlns="http://www.w3.org/2000/svg">
<!--
Generated by boxburner
by Sean Connelly (@velipso), https://sean.fun
Project Home: https://github.com/velipso/boxburner
SPDX-License-Identifier: 0BSD
-->
${data.join('')}
</svg>`)
        };
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
function exportDocument(settings) {
    switch (settings.fileFormat) {
        case 'svg':
            return new DocumentSVG(settings);
    }
    throw new Error(`Unknown export file format: ${settings.fileFormat}`);
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
const SettingsTypeDef = {
    properties: {
        thickness: {
            type: 'float64',
            metadata: {
                default: 3,
                title: 'Material Thickness (units)',
            },
        },
        kerf: {
            type: 'float64',
            metadata: {
                default: 0.1,
                title: 'Kerf',
                description: 'Thickness of material removed by cutting tool (units)',
            },
        },
        units: {
            enum: ['mm', 'in'],
            metadata: {
                default: 'mm',
                title: 'Units',
            },
        },
        fileFormat: {
            enum: ['svg'],
            metadata: {
                default: 'svg',
                title: 'File Format',
            },
        },
        debug: {
            type: 'boolean',
            metadata: {
                default: false,
                title: 'Debug',
            },
        },
    },
    metadata: {
        title: 'Settings',
        order: ['thickness', 'kerf', 'units', 'fileFormat', 'debug'],
        startHidden: true,
    },
};

export { BoxJointEdge, DocumentBase, DocumentSVG, DrawBuilder, EdgeBase, GeneratorBase, MortiseAndTenonEdge, PlainEdge, PlainRectangle, SettingsTypeDef, Surface, SurfaceBuilder, allEdges, allEdgesTypeDef, allGenerators, copyVec2, exportDocument, forwardVec2 };
