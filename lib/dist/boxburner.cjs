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
        [bx[1], by[1]],
    ];
}
function drawCommandsBoundingBox(commands) {
    const min = [0, 0];
    const max = [0, 0];
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
    constructor({ defaultThickness, defaultKerf, }, border, holes = [], cuts = [], scores = [], text = []) {
        this.thicknessValue = null;
        this.kerfValue = null;
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
        this.defaultThickness = defaultThickness;
        this.defaultKerf = defaultKerf;
        this.border = border;
        this.holes = holes;
        this.cuts = cuts;
        this.scores = scores;
        this.text = text;
    }
    setThickness(thickness) {
        this.thicknessValue = thickness;
    }
    setKerf(kerf) {
        this.kerfValue = kerf;
    }
    thickness() {
        return typeof this.thicknessValue === 'number'
            ? this.thicknessValue
            : this.defaultThickness;
    }
    kerf() {
        return typeof this.kerfValue === 'number'
            ? this.kerfValue
            : this.defaultKerf;
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
const SettingsTypeDef = {
    properties: {
        defaultThickness: {
            type: 'float64',
            metadata: {
                default: 3,
                title: 'Default Material Thickness (units)',
            },
        },
        defaultKerf: {
            type: 'float64',
            metadata: {
                default: 0.1,
                title: 'Default Kerf (units)',
                description: 'Thickness of material removed by cutting tool',
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
        order: ['defaultThickness', 'defaultKerf', 'units', 'fileFormat', 'debug'],
        startHidden: true,
    },
};
exports.AlongIntersection = void 0;
(function (AlongIntersection) {
    AlongIntersection[AlongIntersection["BeforeStart"] = 0] = "BeforeStart";
    AlongIntersection[AlongIntersection["EqualStart"] = 1] = "EqualStart";
    AlongIntersection[AlongIntersection["BetweenStartAndEnd"] = 2] = "BetweenStartAndEnd";
    AlongIntersection[AlongIntersection["EqualEnd"] = 3] = "EqualEnd";
    AlongIntersection[AlongIntersection["AfterEnd"] = 4] = "AfterEnd";
})(exports.AlongIntersection || (exports.AlongIntersection = {}));

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
const eps = 0.0000001;
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
            p[0] += dist * Math.cos((angle * Math.PI) / 180);
            p[1] += dist * Math.sin((angle * Math.PI) / 180);
        }
    }
    return p;
}
function linesIntersect(aStart, aEnd, bStart, bEnd) {
    // returns null if the lines are coincident (e.g., parallel or on top of
    // each other)
    //
    // returns an object if the lines intersect:
    //   {
    //     p: [x, y],    where the intersection point is at
    //     alongA: where intersection point is along A,
    //     alongB: where intersection point is along B
    //   }
    //
    // alongA and alongB will each be one of AlongIntersection, depending on
    // where the intersection point is along the A and B lines
    //
    const adx = aEnd[0] - aStart[0];
    const ady = aEnd[1] - aStart[1];
    const bdx = bEnd[0] - bStart[0];
    const bdy = bEnd[1] - bStart[1];
    const axb = adx * bdy - ady * bdx;
    if (Math.abs(axb) < eps) {
        return null; // lines are coincident
    }
    const dx = aStart[0] - bStart[0];
    const dy = aStart[1] - bStart[1];
    const A = (bdx * dy - bdy * dx) / axb;
    const B = (adx * dy - ady * dx) / axb;
    // categorizes where along the line the intersection point is at
    const categorize = (v) => v <= -eps
        ? exports.AlongIntersection.BeforeStart
        : v < eps
            ? exports.AlongIntersection.EqualStart
            : v - 1 <= -eps
                ? exports.AlongIntersection.BetweenStartAndEnd
                : v - 1 < eps
                    ? exports.AlongIntersection.EqualEnd
                    : exports.AlongIntersection.AfterEnd;
    const p = [aStart[0] + A * adx, aStart[1] + A * ady];
    return {
        alongA: categorize(A),
        alongB: categorize(B),
        p,
    };
}
function expandPathByKerf(offset, commands, kerf) {
    if (kerf <= 0) {
        return { offset, commands };
    }
    const halfKerf = kerf / 2;
    const newOffset = copyVec2(offset);
    const newCommands = [];
    const offsetAt = (i) => {
        const cmd = commands[i];
        let angle = 0;
        switch (cmd.kind) {
            case 'L': {
                const last = commands[i === 0 ? commands.length - 1 : i - 1];
                angle = Math.atan2(last.to[1] - cmd.to[1], last.to[0] - cmd.to[0]);
                break;
            }
            case 'C':
                angle = Math.atan2(cmd.c2[1] - cmd.to[1], cmd.c2[0] - cmd.to[0]);
                break;
        }
        const normal = angle + Math.PI / 2;
        const sx = halfKerf * Math.cos(normal);
        const sy = halfKerf * Math.sin(normal);
        return { angle, offset: [sx, sy] };
    };
    const roundedCommands = [];
    for (let i = 0; i < commands.length; i++) {
        const cmd = commands[i];
        const last = commands[(i + commands.length - 1) % commands.length];
        const { angle: a1, offset: [sx, sy], } = offsetAt(i);
        const { angle: a2, offset: [lx, ly], } = offsetAt((i + commands.length - 1) % commands.length);
        if (Math.abs(a1 - a2) >= eps) {
            const dang = Math.min(Math.abs(a1 - a2), Math.abs(a1 + Math.PI * 2 - a2), Math.abs(a1 - (a2 + Math.PI * 2)));
            const cdist = (halfKerf * 4 * Math.tan(dang / 4)) / 3;
            roundedCommands.push(newCommands.length);
            newCommands.push({
                kind: 'C',
                c1: [
                    last.to[0] + lx - cdist * Math.cos(a2),
                    last.to[1] + ly - cdist * Math.sin(a2),
                ],
                c2: [
                    last.to[0] + sx + cdist * Math.cos(a1),
                    last.to[1] + sy + cdist * Math.sin(a1),
                ],
                to: [last.to[0] + sx, last.to[1] + sy],
            });
        }
        switch (cmd.kind) {
            case 'L': {
                newCommands.push({
                    kind: 'L',
                    to: [cmd.to[0] + sx, cmd.to[1] + sy],
                });
                break;
            }
            case 'C': {
                const a1 = Math.atan2(last.to[1] - cmd.c1[1], last.to[0] - cmd.c1[0]);
                const normal1 = a1 + Math.PI / 2;
                const s1x = halfKerf * Math.cos(normal1);
                const s1y = halfKerf * Math.sin(normal1);
                const a2 = Math.atan2(cmd.c2[1] - cmd.to[1], cmd.c2[0] - cmd.to[0]);
                const normal2 = a2 + Math.PI / 2;
                const s2x = halfKerf * Math.cos(normal2);
                const s2y = halfKerf * Math.sin(normal2);
                newCommands.push({
                    kind: 'C',
                    c1: [cmd.c1[0] + s1x, cmd.c1[1] + s1y],
                    c2: [cmd.c2[0] + s2x, cmd.c2[1] + s2y],
                    to: [cmd.to[0] + s2x, cmd.to[1] + s2y],
                });
                break;
            }
        }
    }
    // create loops from inner rounded corners
    for (const i of roundedCommands) {
        const prev = newCommands[(i + newCommands.length - 1) % newCommands.length];
        const here = newCommands[i];
        const next = newCommands[(i + 1) % newCommands.length];
        if (here.kind === 'C') {
            // check if next/prev intersect, and if so, turn here into a loop
            const res = linesIntersect(prev.kind === 'L'
                ? newCommands[(i + newCommands.length - 2) % newCommands.length].to
                : prev.c2, prev.to, here.to, next.kind === 'L' ? next.to : next.c1);
            if (res &&
                res.alongA === exports.AlongIntersection.BetweenStartAndEnd &&
                res.alongB === exports.AlongIntersection.BetweenStartAndEnd) {
                here.c1 = prev.to;
                here.c2 = here.to;
                prev.to = copyVec2(res.p);
                here.to = copyVec2(res.p);
            }
        }
    }
    // recalculate offset based on last point ending at [0, 0]
    const [ox, oy] = newCommands[newCommands.length - 1].to;
    newOffset[0] += ox;
    newOffset[1] += oy;
    for (const cmd of newCommands) {
        switch (cmd.kind) {
            case 'L':
                cmd.to[0] -= ox;
                cmd.to[1] -= oy;
                break;
            case 'C':
                cmd.c1[0] -= ox;
                cmd.c1[1] -= oy;
                cmd.c2[0] -= ox;
                cmd.c2[1] -= oy;
                cmd.to[0] -= ox;
                cmd.to[1] -= oy;
                break;
        }
    }
    return {
        offset: newOffset,
        commands: newCommands,
    };
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
        var _a, _b;
        const last = this.commands[this.commands.length - 1];
        if (last && last.kind === 'L') {
            // combine colliner segments
            const p1 = (_b = (_a = this.commands[this.commands.length - 2]) === null || _a === void 0 ? void 0 : _a.to) !== null && _b !== void 0 ? _b : [0, 0];
            const p2 = last.to;
            const p3 = to;
            if (Math.abs(p1[0] - p3[0]) < eps && Math.abs(p1[1] - p3[1]) < eps) {
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
        return this.curveTo([p0[0] + (2 * (c1[0] - p0[0])) / 3, p0[1] + (2 * (c1[1] - p0[1])) / 3], [to[0] + (2 * (c1[0] - to[0])) / 3, to[1] + (2 * (c1[1] - to[1])) / 3], to);
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
    forwardCurve(c1Dist, turn1, c2Dist, turn2, toDist) {
        const c1 = forwardVec2(copyVec2(this.cursor()), this.angle, c1Dist);
        this.turn(turn1);
        const c2 = forwardVec2(copyVec2(c1), this.angle, c2Dist);
        this.turn(turn2);
        const to = forwardVec2(copyVec2(c2), this.angle, toDist);
        this.curveTo(c1, c2, to);
        return this;
    }
    // closing a shape can cause it to move in relation to [0, 0], so when you close, it will return
    // the offset that the entire shape has moved
    close() {
        var _a, _b;
        this.lineTo([0, 0]);
        const first = this.commands[0];
        const last = this.commands[this.commands.length - 1];
        if ((last === null || last === void 0 ? void 0 : last.kind) === 'L' && (first === null || first === void 0 ? void 0 : first.kind) === 'L') {
            // combine colliner segments
            const p1 = copyVec2((_b = (_a = this.commands[this.commands.length - 2]) === null || _a === void 0 ? void 0 : _a.to) !== null && _b !== void 0 ? _b : [0, 0]);
            const p2 = last.to; // should be [0, 0]
            const p3 = first.to;
            const dx1 = p1[0] - p2[0];
            const dy1 = p1[1] - p2[1];
            const dx2 = p2[0] - p3[0];
            const dy2 = p2[1] - p3[1];
            if (Math.abs(p1[0] - p3[0]) < eps && Math.abs(p1[1] - p3[1]) < eps) {
                this.commands.shift();
            }
            else if (Math.abs(dx1 * dy2 - dx2 * dy1) >= eps) {
                // points aren't collinear, so bail
                return [0, 0];
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
            return [-p1[0], -p1[1]];
        }
        return [0, 0];
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
const ascii17 = {
    ' ': 0x00000,
    '!': 0x12200,
    '"': 0x00204,
    '#': 0x0aa3c,
    $: 0x0aabb,
    '%': 0x0ee99,
    '&': 0x09371,
    "'": 0x00200,
    '(': 0x01400,
    ')': 0x04100,
    '*': 0x0ff00,
    '+': 0x0aa00,
    ',': 0x04000,
    '-': 0x08800,
    '.': 0x10000,
    '/': 0x04400,
    '0': 0x044ff,
    '1': 0x0040c,
    '2': 0x08877,
    '3': 0x0083f,
    '4': 0x0888c,
    '5': 0x088bb,
    '6': 0x088fb,
    '7': 0x0000f,
    '8': 0x088ff,
    '9': 0x088bf,
    ':': 0x02200,
    ';': 0x04200,
    '<': 0x09400,
    '=': 0x08830,
    '>': 0x04900,
    '?': 0x12807,
    '@': 0x00af7,
    A: 0x088cf,
    B: 0x02a3f,
    C: 0x000f3,
    D: 0x0223f,
    E: 0x080f3,
    F: 0x080c3,
    G: 0x008fb,
    H: 0x088cc,
    I: 0x02233,
    J: 0x0007c,
    K: 0x094c0,
    L: 0x000f0,
    M: 0x005cc,
    N: 0x011cc,
    O: 0x000ff,
    P: 0x088c7,
    Q: 0x010ff,
    R: 0x098c7,
    S: 0x088bb,
    T: 0x02203,
    U: 0x000fc,
    V: 0x044c0,
    W: 0x050cc,
    X: 0x05500,
    Y: 0x088bc,
    Z: 0x04433,
    '[': 0x02212,
    '\\': 0x01100,
    ']': 0x02221,
    '^': 0x05000,
    _: 0x00030,
    '`': 0x00100,
    '{': 0x0a212,
    '|': 0x02200,
    '}': 0x02a21,
    '~': 0x0cc00,
};
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
        this.cuts.push({ offset: copyVec2(offset), db });
        return db;
    }
    score(offset, angle = 0) {
        const db = new DrawBuilder();
        db.turn(angle);
        this.scores.push({ offset: copyVec2(offset), db });
        return db;
    }
    scoreChar(offset, width, height, char) {
        var _a;
        const flags = (_a = ascii17[char.toUpperCase()]) !== null && _a !== void 0 ? _a : ascii17['?'];
        const line = (x1, y1, x2, y2) => {
            const start = copyVec2(offset);
            start[0] += x1 * width;
            start[1] += y1 * height;
            this.score(start).lineToRelative([(x2 - x1) * width, (y2 - y1) * height]);
        };
        const gap = 0.025;
        if (flags & 1)
            line(gap, 0, 0.5 - gap, 0);
        if (flags & 2)
            line(0.5 + gap, 0, 1 - gap, 0);
        if (flags & 4)
            line(1, gap, 1, 0.5 - gap);
        if (flags & 8)
            line(1, 0.5 + gap, 1, 1 - gap);
        if (flags & 16)
            line(1 - gap, 1, 0.5 + gap, 1);
        if (flags & 32)
            line(0.5 - gap, 1, gap, 1);
        if (flags & 64)
            line(0, 1 - gap, 0, 0.5 + gap);
        if (flags & 128)
            line(0, 0.5 - gap, 0, gap);
        if (flags & 256)
            line(gap, gap, 0.5 - gap, 0.5 - gap);
        if (flags & 512)
            line(0.5, gap, 0.5, 0.5 - gap);
        if (flags & 1024)
            line(1 - gap, gap, 0.5 + gap, 0.5 - gap);
        if (flags & 2048)
            line(0.5 + gap, 0.5, 1 - gap, 0.5);
        if (flags & 4096)
            line(0.5 + gap, 0.5 + gap, 1 - gap, 1 - gap);
        if (flags & 8192) {
            if (flags & 65536) {
                line(0.5, 0.5 + gap, 0.5, 0.8 - gap);
            }
            else {
                line(0.5, 0.5 + gap, 0.5, 1 - gap);
            }
        }
        if (flags & 16384)
            line(0.5 - gap, 0.5 + gap, gap, 1 - gap);
        if (flags & 32768)
            line(0.5 - gap, 0.5, gap, 0.5);
        if (flags & 65536)
            line(0.5, 0.8 + gap, 0.5, 1 - gap);
        return this;
    }
    build(defaultValues) {
        const borderOffset = this.border.close();
        return new Surface(defaultValues, this.border.build(), this.holes.map(({ offset, db }) => {
            const holeOffset = db.close();
            return {
                offset: [
                    offset[0] + borderOffset[0] + holeOffset[0],
                    offset[1] + borderOffset[1] + holeOffset[1],
                ],
                commands: db.build(),
            };
        }), this.cuts.map(({ offset, db }) => ({
            offset: [offset[0] + borderOffset[0], offset[1] + borderOffset[1]],
            commands: db.build(),
        })), this.scores.map(({ offset, db }) => ({
            offset: [offset[0] + borderOffset[0], offset[1] + borderOffset[1]],
            commands: db.build(),
        })), this.text);
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class BoxCardstock extends GeneratorBase {
    name() {
        return 'BoxCardstock';
    }
    schema() {
        return {
            properties: {
                thickness: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 3,
                        nullHint: 'default',
                        title: 'Material Thickness (units)',
                    },
                },
                kerf: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 0.1,
                        nullHint: 'default',
                        title: 'Kerf (units)',
                        description: 'Thickness of material removed by cutting tool',
                    },
                },
                width: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Interior Width (units)',
                    },
                },
                depth: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Interior Depth (units)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 20,
                        title: 'Interior Height (units)',
                    },
                },
                foot: {
                    type: 'float64',
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
    generate(settings, { thickness, kerf, width, depth, height, foot }) {
        const th = typeof thickness === 'number' ? thickness : settings.defaultThickness;
        const sb = new SurfaceBuilder();
        const s1h = height + th;
        const s2h = height;
        const gap = th * 2;
        const ext = 6;
        const drawTab = (length) => {
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
        const drawFoot = (length) => {
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
            sb.score(sb.border.cursor(), sb.border.angle).forward(width + th * ext - gap * 2);
            sb.border.turn(-90).forward(s2h).turn(90);
            sb.score(sb.border.cursor(), sb.border.angle).forward(width + th * ext - gap * 2);
            drawFoot(width + th * ext - gap * 2);
            sb.border.turn(90).forward(s2h).turn(-90).forward(gap).turn(90);
            drawTab(s1h);
        };
        const drawE2 = () => {
            sb.border.forward(gap);
            sb.score(sb.border.cursor(), sb.border.angle).forward(depth + th * ext - 2 * gap);
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
class JointBase extends EdgeBase {
    thickness(length, thickness, params) {
        return this.jointThickness(length, false, thickness, params);
    }
    draw(sb, length, thickness, params) {
        this.jointDraw(sb, length, false, thickness, params);
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class BoxJoint extends JointBase {
    name() {
        return 'BoxJoint';
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
                order: [
                    'invert',
                    'width1',
                    'length1',
                    'width2',
                    'length2',
                    'play',
                    'cornerDistance',
                    'centerDistance',
                ],
            },
        };
    }
    jointThickness(_length, callerInvert, thickness, { length1, length2, invert: userInvert }) {
        const invert = callerInvert !== userInvert;
        return (invert ? -length2 : length1) * thickness;
    }
    jointDraw(sb, length, callerInvert, thickness, { invert: userInvert, width1, length1, width2, length2, play, cornerDistance, centerDistance, }) {
        const db = sb.border;
        const invert = callerInvert !== userInvert;
        const t = (invert ? length2 : length1) * thickness;
        const iplay = invert ? -play : play;
        const a = invert ? -90 : 90;
        const finger = () => db
            .forward(iplay / 2)
            .turn(-a)
            .forward(t)
            .turn(a)
            .forward(width1 - iplay)
            .turn(a)
            .forward(t)
            .turn(-a)
            .forward(iplay / 2);
        const space = () => db.forward(width2);
        const fingers = (count) => {
            if (count > 10000) {
                throw new Error('Too many fingers');
            }
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
class ButtJoint extends JointBase {
    name() {
        return 'ButtJoint';
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
                length1: {
                    type: 'float64',
                    metadata: {
                        default: 0,
                        title: 'Length 1',
                        description: 'Length of butt 1 (multiples of material thickness)',
                    },
                },
                length2: {
                    type: 'float64',
                    metadata: {
                        default: 1,
                        title: 'Length 2',
                        description: 'Length of butt 2 (multiples of material thickness)',
                    },
                },
            },
            metadata: { order: ['invert', 'length1', 'length2'] },
        };
    }
    jointThickness(_length, callerInvert, thickness, { length1, length2, invert: userInvert }) {
        const invert = callerInvert !== userInvert;
        return (invert ? -length2 : length1) * thickness;
    }
    jointDraw(sb, length, callerInvert, thickness, { invert: userInvert, length1, length2 }) {
        const invert = callerInvert !== userInvert;
        const t = (invert ? length2 : length1) * thickness;
        const a = invert ? -90 : 90;
        sb.border
            .turn(-a)
            .forward(t)
            .turn(a)
            .forward(length)
            .turn(a)
            .forward(t)
            .turn(-a);
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class LegEdge extends EdgeBase {
    name() {
        return 'LegEdge';
    }
    schema() {
        return {
            properties: {
                flatWidth: {
                    type: 'float64',
                    metadata: {
                        default: 0.1,
                        title: 'Flat Width',
                        description: 'Flat part of leg (fraction of overall length)',
                    },
                },
                curveWidth: {
                    type: 'float64',
                    metadata: {
                        default: 0.15,
                        title: 'Curve Width',
                        description: 'Curve part of leg (fraction of overall length)',
                    },
                },
                curveAmount: {
                    type: 'float64',
                    metadata: {
                        default: 0.05,
                        title: 'Curve Amount',
                        description: 'How extreme to curve (fraction of overall length)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 10,
                        title: 'Height (units)',
                    },
                },
            },
            metadata: { order: ['flatWidth', 'curveWidth', 'curveAmount', 'height'] },
        };
    }
    thickness(_length, _thickness, { height }) {
        return -height;
    }
    draw(sb, length, thickness, { flatWidth, curveWidth, curveAmount, height }) {
        const d = curveAmount * length;
        let a = 90;
        let aheight = height;
        if (d !== 0) {
            a = 180 - (Math.atan2(height / 2, d) * 180) / Math.PI;
            aheight = 2 * Math.sqrt((height * height) / 4 + d * d);
        }
        sb.border
            .turn(-90)
            .forward(height)
            .turn(90)
            .forward(flatWidth * length)
            .forwardCurve(curveWidth * length * 0.5 + d, a, aheight, -a, curveWidth * length * 0.5 + d)
            .forward((1 - (flatWidth + curveWidth) * 2) * length)
            .forwardCurve(curveWidth * length * 0.5 + d, -a, aheight, a, curveWidth * length * 0.5 + d)
            .forward(flatWidth * length)
            .turn(90)
            .forward(height)
            .turn(-90);
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
function edgeListTypeDef(edges, metadata = {}, nullable) {
    return {
        discriminator: 'kind',
        mapping: edges
            .map((e) => ({
            [e.name()]: {
                properties: {
                    kind: {
                        type: 'string',
                        metadata: {
                            default: e.name(),
                            title: e.name(),
                        },
                    },
                    params: e.schema(),
                },
                metadata: {
                    order: ['params'],
                    untabParams: true,
                },
            },
        }))
            .reduce((a, b) => ({ ...a, ...b }), {}),
        nullable,
        metadata: {
            default: edges[0].name(),
            order: edges.map((e) => e.name()),
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
const otherEdges = [new BoxJoint(), new ButtJoint(), new LegEdge()];
class MortiseAndTenonJoint extends JointBase {
    name() {
        return 'MortiseAndTenonJoint';
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
                mortiseEdge: edgeListTypeDef(otherEdges, {
                    default: null,
                    defaultNotNull: 'LegEdge',
                    title: 'Mortise Edge',
                }, true),
            },
            metadata: {
                order: [
                    'invert',
                    'width1',
                    'tenonLength',
                    'width2',
                    'holeDistance',
                    'play',
                    'thicknessPlay',
                    'cornerDistance',
                    'centerDistance',
                    'mortiseEdge',
                ],
            },
        };
    }
    jointThickness(length, callerInvert, thickness, { tenonLength, invert: userInvert, mortiseEdge }) {
        const invert = callerInvert !== userInvert;
        if (invert) {
            if (mortiseEdge) {
                const edge = otherEdges.find((e) => e.name() === mortiseEdge.kind);
                if (!edge) {
                    throw new Error('Invalid mortise edge');
                }
                return edge.thickness(length, thickness, mortiseEdge.params);
            }
            return 0;
        }
        return tenonLength * thickness;
    }
    jointDraw(sb, length, callerInvert, thickness, { invert: userInvert, width1, tenonLength, width2, holeDistance, play, thicknessPlay, cornerDistance, centerDistance, mortiseEdge, }) {
        const invert = callerInvert !== userInvert;
        const iplay = invert ? -play : play;
        let forward = (_length) => { };
        let finger = () => { };
        let space = () => { };
        const fingers = (count) => {
            if (count > 10000) {
                throw new Error('Too many fingers');
            }
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
            if (mortiseEdge) {
                const edge = otherEdges.find((e) => e.name() === mortiseEdge.kind);
                if (!edge) {
                    throw new Error('Invalid mortise edge');
                }
                edge.draw(sb, length, thickness, mortiseEdge.params);
            }
            else {
                sb.border.forward(length);
            }
            forward = (length) => {
                forwardVec2(start, ang, length);
            };
            finger = () => {
                forward(iplay / 2);
                sb.hole(copyVec2(start), ang)
                    .forward(width1 - iplay)
                    .turn(-90)
                    .forward(t)
                    .turn(-90)
                    .forward(width1 - iplay)
                    .turn(-90)
                    .forward(t)
                    .turn(-90);
                forward(-iplay / 2);
                forward(width1);
            };
            space = () => {
                forward(width2);
            };
        }
        else {
            const t = tenonLength * thickness;
            const a = 90;
            forward = (length) => sb.border.forward(length);
            finger = () => sb.border
                .forward(iplay / 2)
                .turn(-a)
                .forward(t)
                .turn(a)
                .forward(width1 - iplay)
                .turn(a)
                .forward(t)
                .turn(-a)
                .forward(iplay / 2);
            space = () => sb.border.forward(width2);
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
    new BoxJoint(),
    new ButtJoint(),
    new LegEdge(),
    new MortiseAndTenonJoint(),
];
const allJoints = [
    new BoxJoint(),
    new ButtJoint(),
    new MortiseAndTenonJoint(),
];
function allEdgesTypeDef(metadata = {}, nullable) {
    return edgeListTypeDef(allEdges, metadata, nullable);
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class Rectangle extends GeneratorBase {
    name() {
        return 'Rectangle';
    }
    schema() {
        return {
            properties: {
                label: {
                    type: 'string',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: '',
                        nullHint: 'none',
                        title: 'Label',
                    },
                },
                labelFontSize: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 10,
                        nullHint: 'auto',
                        title: 'Label Font Size (units)',
                    },
                },
                thickness: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 3,
                        nullHint: 'default',
                        title: 'Material Thickness (units)',
                    },
                },
                kerf: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 0.1,
                        nullHint: 'default',
                        title: 'Kerf (units)',
                        description: 'Thickness of material removed by cutting tool',
                    },
                },
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
    generate(settings, { label, labelFontSize, thickness, kerf, width, height, edge1, edge2, edge3, edge4, }) {
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
        const th = typeof thickness === 'number' ? thickness : settings.defaultThickness;
        const e1t = e1.thickness(width, th, edge1.params);
        const e2t = e2.thickness(height, th, edge2.params);
        const e3t = e3.thickness(width, th, edge3.params);
        const e4t = e4.thickness(height, th, edge4.params);
        width -= Math.max(0, e2t) + Math.max(0, e4t);
        height -= Math.max(0, e1t) + Math.max(0, e3t);
        // top edge
        if (e4t < 0) {
            sb.border.forward(-e4t);
        }
        e1.draw(sb, width, th, edge1.params);
        if (e2t < 0) {
            sb.border.forward(-e2t);
        }
        sb.border.turn(90);
        // right edge
        if (e1t < 0) {
            sb.border.forward(-e1t);
        }
        e2.draw(sb, height, th, edge2.params);
        if (e3t < 0) {
            sb.border.forward(-e3t);
        }
        sb.border.turn(90);
        // bottom edge
        if (e2t < 0) {
            sb.border.forward(-e2t);
        }
        e3.draw(sb, width, th, edge3.params);
        if (e4t < 0) {
            sb.border.forward(-e4t);
        }
        sb.border.turn(90);
        // left edge
        if (e3t < 0) {
            sb.border.forward(-e3t);
        }
        e4.draw(sb, height, th, edge4.params);
        if (e1t < 0) {
            sb.border.forward(-e1t);
        }
        sb.border.turn(90);
        if (label) {
            const lines = label.trim().split('\n');
            const maxChars = lines.reduce((a, b) => Math.max(a, b.length), 0);
            let chh = 0;
            if (typeof labelFontSize === 'number') {
                chh = labelFontSize;
            }
            else {
                // auto font size
                chh = Math.min(((width - 5 - Math.abs(e2t) - Math.abs(e4t)) / maxChars) * 2, (height - 5 - Math.abs(e1t) - Math.abs(e3t)) / lines.length);
            }
            const chw = chh / 2;
            const sx = (width - chw * maxChars) / 2;
            const sy = (height - chh * lines.length) / 2;
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                for (let j = 0; j < line.length; j++) {
                    sb.scoreChar([sx + chw * j + chw * 0.15, sy + chh * i + chh * 0.15], chw * 0.7, chh * 0.7, line.charAt(j));
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

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class BoxNested extends GeneratorBase {
    name() {
        return 'BoxNested (WIP)';
    }
    schema() {
        return {
            properties: {
                labels: {
                    type: 'boolean',
                    metadata: {
                        default: false,
                        title: 'Labels',
                    },
                },
                width: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Outer Width (units)',
                    },
                },
                depth: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Outer Depth (units)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Outer Height (units)',
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
                        description: 'Extra space between fingers (units)',
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
            },
            metadata: {
                order: [
                    'labels',
                    'width',
                    'depth',
                    'height',
                    'holeDistance',
                    'play',
                    'thicknessPlay',
                ],
            },
        };
    }
    generate(settings, { labels, width, depth, height, holeDistance, play, thicknessPlay }) {
        const { defaultThickness: thickness } = settings;
        const rect = new Rectangle();
        const mt = (invert, tenonLength, mortiseEdge) => ({
            kind: 'MortiseAndTenonJoint',
            params: {
                invert,
                width1: 2 * thickness,
                tenonLength,
                width2: 2 * thickness,
                holeDistance,
                play,
                thicknessPlay,
                cornerDistance: 2 * thickness,
                centerDistance: 0,
                mortiseEdge,
            },
        });
        const bt = () => ({
            kind: 'ButtJoint',
            params: {
                invert: false,
                length1: 0,
                length2: 1,
            },
        });
        const bx = (invert, tenonLength) => ({
            kind: 'BoxJoint',
            params: {
                invert,
                width1: 2 * thickness,
                length1: tenonLength,
                width2: 2 * thickness,
                length2: tenonLength,
                play,
                cornerDistance: 2 * thickness,
                centerDistance: 0,
            },
        });
        const lg = () => ({
            kind: 'LegEdge',
            params: {
                flatWidth: 0.1,
                curveWidth: 0.15,
                curveAmount: 0.05,
                height: 10,
            },
        });
        return [
            ...rect.generate(settings, {
                width,
                height: depth,
                edge1: mt(false, 2),
                edge2: mt(false, 1),
                edge3: mt(false, 2),
                edge4: mt(false, 1),
                ...(labels ? { label: 'Bottom' } : {}),
            }),
            ...rect.generate(settings, {
                width: depth,
                height,
                edge1: bt(),
                edge2: bx(false, 2),
                edge3: mt(true, 1),
                edge4: bx(false, 2),
                ...(labels ? { label: 'Left' } : {}),
            }),
            ...rect.generate(settings, {
                width: depth,
                height,
                edge1: bt(),
                edge2: bx(false, 2),
                edge3: mt(true, 1),
                edge4: bx(false, 2),
                ...(labels ? { label: 'Right' } : {}),
            }),
            ...rect.generate(settings, {
                width,
                height,
                edge1: bt(),
                edge2: bx(true, 1),
                edge3: mt(true, 1),
                edge4: bx(true, 1),
                ...(labels ? { label: 'Front' } : {}),
            }),
            ...rect.generate(settings, {
                width,
                height,
                edge1: bt(),
                edge2: bx(true, 1),
                edge3: mt(true, 1, lg()),
                edge4: bx(true, 1),
                ...(labels ? { label: 'Inner Front' } : {}),
            }),
            ...rect.generate(settings, {
                width,
                height,
                edge1: bt(),
                edge2: bx(true, 1),
                edge3: mt(true, 1),
                edge4: bx(true, 1),
                ...(labels ? { label: 'Back' } : {}),
            }),
            ...rect.generate(settings, {
                width,
                height,
                edge1: bt(),
                edge2: bx(true, 1),
                edge3: mt(true, 1, lg()),
                edge4: bx(true, 1),
                ...(labels ? { label: 'Inner Back' } : {}),
            }),
        ];
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class BoxPlain extends GeneratorBase {
    name() {
        return 'BoxPlain';
    }
    schema() {
        return {
            properties: {
                labels: {
                    type: 'boolean',
                    metadata: {
                        default: false,
                        title: 'Labels',
                    },
                },
                width: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Outer Width (units)',
                    },
                },
                depth: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Outer Depth (units)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Outer Height (units)',
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
                        description: 'Extra space between fingers (units)',
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
            },
            metadata: {
                order: [
                    'labels',
                    'width',
                    'depth',
                    'height',
                    'holeDistance',
                    'play',
                    'thicknessPlay',
                ],
            },
        };
    }
    generate(settings, { labels, width, depth, height, holeDistance, play, thicknessPlay }) {
        const { defaultThickness: thickness } = settings;
        const rect = new Rectangle();
        const mt = (invert) => ({
            kind: 'MortiseAndTenonJoint',
            params: {
                invert,
                width1: 2 * thickness,
                tenonLength: 1,
                width2: 2 * thickness,
                holeDistance,
                play,
                thicknessPlay,
                cornerDistance: 2 * thickness,
                centerDistance: 0,
            },
        });
        const bt = () => ({
            kind: 'ButtJoint',
            params: {
                invert: false,
                length1: 0,
                length2: 1,
            },
        });
        const bx = (invert) => ({
            kind: 'BoxJoint',
            params: {
                invert,
                width1: 2 * thickness,
                length1: 1,
                width2: 2 * thickness,
                length2: 1,
                play,
                cornerDistance: 2 * thickness,
                centerDistance: 0,
            },
        });
        return [
            ...rect.generate(settings, {
                width,
                height: depth,
                edge1: mt(false),
                edge2: mt(false),
                edge3: mt(false),
                edge4: mt(false),
                ...(labels ? { label: 'Bottom' } : {}),
            }),
            ...rect.generate(settings, {
                width: depth,
                height,
                edge1: bt(),
                edge2: bx(false),
                edge3: mt(true),
                edge4: bx(false),
                ...(labels ? { label: 'Left' } : {}),
            }),
            ...rect.generate(settings, {
                width: depth,
                height,
                edge1: bt(),
                edge2: bx(false),
                edge3: mt(true),
                edge4: bx(false),
                ...(labels ? { label: 'Right' } : {}),
            }),
            ...rect.generate(settings, {
                width,
                height,
                edge1: bt(),
                edge2: bx(true),
                edge3: mt(true),
                edge4: bx(true),
                ...(labels ? { label: 'Front' } : {}),
            }),
            ...rect.generate(settings, {
                width,
                height,
                edge1: bt(),
                edge2: bx(true),
                edge3: mt(true),
                edge4: bx(true),
                ...(labels ? { label: 'Back' } : {}),
            }),
        ];
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class KerfTester extends GeneratorBase {
    name() {
        return 'KerfTester';
    }
    schema() {
        return {
            properties: {
                labels: {
                    type: 'boolean',
                    metadata: {
                        default: true,
                        title: 'Labels',
                    },
                },
                width: {
                    type: 'float64',
                    metadata: {
                        default: 30,
                        title: 'Outer Width (units)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 15,
                        title: 'Outer Height (units)',
                    },
                },
                play: {
                    type: 'float64',
                    metadata: {
                        default: 0,
                        title: 'Play',
                        description: 'Extra space between fingers (units)',
                    },
                },
                testCount: {
                    type: 'int32',
                    metadata: {
                        default: 8,
                        title: 'Number of tests',
                    },
                },
                kerfStart: {
                    type: 'float64',
                    metadata: {
                        default: 0.08,
                        title: 'Kerf start value (units)',
                    },
                },
                kerfIncrement: {
                    type: 'float64',
                    metadata: {
                        default: 0.02,
                        title: 'Kerf increment value (per test)',
                    },
                },
            },
            metadata: {
                order: [
                    'labels',
                    'width',
                    'height',
                    'play',
                    'testCount',
                    'kerfStart',
                    'kerfIncrement',
                ],
            },
        };
    }
    generate(settings, { labels, width, height, play, testCount, kerfStart, kerfIncrement }) {
        const { defaultThickness: thickness } = settings;
        const rect = new Rectangle();
        const bt = () => ({
            kind: 'ButtJoint',
            params: {
                invert: false,
                length1: 0,
                length2: 1,
            },
        });
        const bx = (invert) => ({
            kind: 'BoxJoint',
            params: {
                invert,
                width1: 2 * thickness,
                length1: 1,
                width2: 2 * thickness,
                length2: 1,
                play,
                cornerDistance: 2 * thickness,
                centerDistance: 0,
            },
        });
        const result = [];
        for (let i = 0; i < testCount; i++) {
            const kerf = kerfStart + i * kerfIncrement;
            result.push(...rect.generate(settings, {
                width,
                height,
                kerf,
                edge1: bx(false),
                edge2: bt(),
                edge3: bt(),
                edge4: bt(),
                ...(labels ? { label: kerf.toFixed(3) } : {}),
            }), ...rect.generate(settings, {
                width,
                height,
                kerf,
                edge1: bt(),
                edge2: bt(),
                edge3: bx(true),
                edge4: bt(),
                ...(labels ? { label: kerf.toFixed(3) } : {}),
            }));
        }
        return result;
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
const allGenerators = [
    new BoxCardstock(),
    new BoxNested(),
    new BoxPlain(),
    new KerfTester(),
    new Rectangle(),
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
        this.surfaces.push({
            offset,
            surface,
            cutColor,
            holeColor,
            scoreColor,
        });
    }
    toFile() {
        const { units } = this.settings;
        const border = [
            [0, 0],
            [0, 0],
        ];
        for (const { offset, surface } of this.surfaces) {
            const bb = surface.borderBoundingBox();
            const kerf = surface.kerf();
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
        const outputPath = (kerf, offset, commands, closed, color) => {
            if (closed && kerf > 0) {
                ({ offset, commands } = expandPathByKerf(offset, commands, kerf));
            }
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
            data.push(`<path stroke="${color}" stroke-width="${kerf <= 0 ? 0.1 : kerf}" d="${d.join('')}" />`);
        };
        for (const { offset, surface, cutColor, holeColor, scoreColor } of this
            .surfaces) {
            const kerf = surface.kerf();
            if (surface.scores.length > 0 || surface.holes.length > 0) {
                outputGroupOpen();
            }
            if (surface.scores.length > 0) {
                outputGroupOpen();
                for (const score of surface.scores) {
                    outputPath(kerf, [offset[0] + score.offset[0], offset[1] + score.offset[1]], score.commands, false, scoreColor);
                }
                outputGroupClose();
            }
            outputGroupOpen();
            outputPath(kerf, offset, surface.border, true, cutColor);
            for (const cut of surface.cuts) {
                outputPath(kerf, [offset[0] + cut.offset[0], offset[1] + cut.offset[1]], cut.commands, false, cutColor);
            }
            outputGroupClose();
            if (surface.holes.length > 0) {
                outputGroupOpen();
                for (const hole of surface.holes) {
                    outputPath(kerf, [offset[0] + hole.offset[0], offset[1] + hole.offset[1]], hole.commands, true, holeColor);
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
</svg>`),
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
    const { fileFormat } = settings;
    switch (fileFormat) {
        case 'svg':
            return new DocumentSVG(settings);
        default:
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            throw new Error(`Unknown export file format: ${fileFormat}`);
    }
}

exports.BoxCardstock = BoxCardstock;
exports.BoxJoint = BoxJoint;
exports.BoxNested = BoxNested;
exports.BoxPlain = BoxPlain;
exports.ButtJoint = ButtJoint;
exports.DocumentBase = DocumentBase;
exports.DocumentSVG = DocumentSVG;
exports.DrawBuilder = DrawBuilder;
exports.EdgeBase = EdgeBase;
exports.GeneratorBase = GeneratorBase;
exports.JointBase = JointBase;
exports.KerfTester = KerfTester;
exports.MortiseAndTenonJoint = MortiseAndTenonJoint;
exports.Rectangle = Rectangle;
exports.SettingsTypeDef = SettingsTypeDef;
exports.Surface = Surface;
exports.SurfaceBuilder = SurfaceBuilder;
exports.allEdges = allEdges;
exports.allEdgesTypeDef = allEdgesTypeDef;
exports.allGenerators = allGenerators;
exports.allJoints = allJoints;
exports.copyVec2 = copyVec2;
exports.edgeListTypeDef = edgeListTypeDef;
exports.eps = eps;
exports.expandPathByKerf = expandPathByKerf;
exports.exportDocument = exportDocument;
exports.forwardVec2 = forwardVec2;
exports.linesIntersect = linesIntersect;
