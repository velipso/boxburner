//
// polybool - Boolean operations on polygons (union, intersection, etc)
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/polybool
// SPDX-License-Identifier: 0BSD
//
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function lerpVec2(a, b, t) {
    return [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
}
function boundingBoxesIntersect(bbox1, bbox2) {
    const [b1min, b1max] = bbox1;
    const [b2min, b2max] = bbox2;
    return !(b1min[0] > b2max[0] ||
        b1max[0] < b2min[0] ||
        b1min[1] > b2max[1] ||
        b1max[1] < b2min[1]);
}
class Geometry {
}
class GeometryEpsilon extends Geometry {
    constructor(epsilon = 0.0000000001) {
        super();
        this.epsilon = epsilon;
    }
    snap0(v) {
        if (Math.abs(v) < this.epsilon) {
            return 0;
        }
        return v;
    }
    snap01(v) {
        if (Math.abs(v) < this.epsilon) {
            return 0;
        }
        if (Math.abs(1 - v) < this.epsilon) {
            return 1;
        }
        return v;
    }
    isCollinear(p1, p2, p3) {
        // does pt1->pt2->pt3 make a straight line?
        // essentially this is just checking to see if
        //   slope(pt1->pt2) === slope(pt2->pt3)
        // if slopes are equal, then they must be collinear, because they share pt2
        const dx1 = p1[0] - p2[0];
        const dy1 = p1[1] - p2[1];
        const dx2 = p2[0] - p3[0];
        const dy2 = p2[1] - p3[1];
        return Math.abs(dx1 * dy2 - dx2 * dy1) < this.epsilon;
    }
    solveCubicNormalized(a, b, c) {
        // based somewhat on gsl_poly_solve_cubic from GNU Scientific Library
        const a3 = a / 3;
        const b3 = b / 3;
        const Q = a3 * a3 - b3;
        const R = a3 * (a3 * a3 - b / 2) + c / 2;
        if (Math.abs(R) < this.epsilon && Math.abs(Q) < this.epsilon) {
            return [-a3];
        }
        const F = a3 * (a3 * (4 * a3 * c - b3 * b) - 2 * b * c) + 4 * b3 * b3 * b3 + c * c;
        if (Math.abs(F) < this.epsilon) {
            const sqrtQ = Math.sqrt(Q);
            return R > 0
                ? [-2 * sqrtQ - a / 3, sqrtQ - a / 3]
                : [-sqrtQ - a / 3, 2 * sqrtQ - a / 3];
        }
        const Q3 = Q * Q * Q;
        const R2 = R * R;
        if (R2 < Q3) {
            const ratio = (R < 0 ? -1 : 1) * Math.sqrt(R2 / Q3);
            const theta = Math.acos(ratio);
            const norm = -2 * Math.sqrt(Q);
            const x0 = norm * Math.cos(theta / 3) - a3;
            const x1 = norm * Math.cos((theta + 2 * Math.PI) / 3) - a3;
            const x2 = norm * Math.cos((theta - 2 * Math.PI) / 3) - a3;
            return [x0, x1, x2].sort((x, y) => x - y);
        }
        else {
            const A = (R < 0 ? 1 : -1) * Math.pow(Math.abs(R) + Math.sqrt(R2 - Q3), 1 / 3);
            const B = Math.abs(A) >= this.epsilon ? Q / A : 0;
            return [A + B - a3];
        }
    }
    solveCubic(a, b, c, d) {
        if (Math.abs(a) < this.epsilon) {
            // quadratic
            if (Math.abs(b) < this.epsilon) {
                // linear case
                if (Math.abs(c) < this.epsilon) {
                    // horizontal line
                    return Math.abs(d) < this.epsilon ? [0] : [];
                }
                return [-d / c];
            }
            const b2 = 2 * b;
            let D = c * c - 4 * b * d;
            if (Math.abs(D) < this.epsilon) {
                return [-c / b2];
            }
            else if (D > 0) {
                D = Math.sqrt(D);
                return [(-c + D) / b2, (-c - D) / b2].sort((x, y) => x - y);
            }
            return [];
        }
        return this.solveCubicNormalized(b / a, c / a, d / a);
    }
    isEqualVec2(a, b) {
        return (Math.abs(a[0] - b[0]) < this.epsilon &&
            Math.abs(a[1] - b[1]) < this.epsilon);
    }
    compareVec2(a, b) {
        // returns -1 if a is smaller, 1 if b is smaller, 0 if equal
        if (Math.abs(b[0] - a[0]) < this.epsilon) {
            return Math.abs(b[1] - a[1]) < this.epsilon ? 0 : a[1] < b[1] ? -1 : 1;
        }
        return a[0] < b[0] ? -1 : 1;
    }
}

//
// polybool - Boolean operations on polygons (union, intersection, etc)
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/polybool
// SPDX-License-Identifier: 0BSD
//
class SegmentTValuesBuilder {
    constructor(geo) {
        this.tValues = [];
        this.geo = geo;
    }
    addArray(ts) {
        for (const t of ts) {
            this.tValues.push(t);
        }
        return this;
    }
    add(t) {
        t = this.geo.snap01(t);
        // ignore values outside 0-1 range
        if (t < 0 || t > 1) {
            return this;
        }
        for (const tv of this.tValues) {
            if (this.geo.snap0(t - tv) === 0) {
                // already have this location
                return this;
            }
        }
        this.tValues.push(t);
        return this;
    }
    list() {
        this.tValues.sort((a, b) => a - b);
        return this.tValues;
    }
}
class SegmentTValuePairsBuilder {
    constructor(allowOutOfRange, geo) {
        this.tValuePairs = [];
        this.allowOutOfRange = allowOutOfRange;
        this.geo = geo;
    }
    add(t1, t2) {
        t1 = this.geo.snap01(t1);
        t2 = this.geo.snap01(t2);
        // ignore values outside 0-1 range
        if (!this.allowOutOfRange && (t1 < 0 || t1 > 1 || t2 < 0 || t2 > 1)) {
            return this;
        }
        for (const tv of this.tValuePairs) {
            if (this.geo.snap0(t1 - tv[0]) === 0 ||
                this.geo.snap0(t2 - tv[1]) === 0) {
                // already have this location
                return this;
            }
        }
        this.tValuePairs.push([t1, t2]);
        return this;
    }
    list() {
        this.tValuePairs.sort((a, b) => a[0] - b[0]);
        return this.tValuePairs;
    }
    done() {
        return this.tValuePairs.length <= 0
            ? null
            : {
                kind: "tValuePairs",
                tValuePairs: this.list(),
            };
    }
}
class SegmentBase {
}
class SegmentLine extends SegmentBase {
    constructor(p0, p1, geo) {
        super();
        this.p0 = p0;
        this.p1 = p1;
        this.geo = geo;
    }
    copy() {
        return new SegmentLine(this.p0, this.p1, this.geo);
    }
    isEqual(other) {
        return (this.geo.isEqualVec2(this.p0, other.p0) &&
            this.geo.isEqualVec2(this.p1, other.p1));
    }
    start() {
        return this.p0;
    }
    start2() {
        return this.p1;
    }
    end2() {
        return this.p0;
    }
    end() {
        return this.p1;
    }
    setStart(p0) {
        this.p0 = p0;
    }
    setEnd(p1) {
        this.p1 = p1;
    }
    point(t) {
        const p0 = this.p0;
        const p1 = this.p1;
        if (t === 0) {
            return p0;
        }
        else if (t === 1) {
            return p1;
        }
        return [p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t];
    }
    split(ts) {
        if (ts.length <= 0) {
            return [this];
        }
        const pts = ts.map((t) => this.point(t));
        pts.push(this.p1);
        const result = [];
        let last = this.p0;
        for (const p of pts) {
            result.push(new SegmentLine(last, p, this.geo));
            last = p;
        }
        return result;
    }
    reverse() {
        return new SegmentLine(this.p1, this.p0, this.geo);
    }
    boundingBox() {
        const p0 = this.p0;
        const p1 = this.p1;
        return [
            [Math.min(p0[0], p1[0]), Math.min(p0[1], p1[1])],
            [Math.max(p0[0], p1[0]), Math.max(p0[1], p1[1])],
        ];
    }
    pointOn(p) {
        return this.geo.isCollinear(p, this.p0, this.p1);
    }
    draw(ctx) {
        const p0 = this.p0;
        const p1 = this.p1;
        ctx.moveTo(p0[0], p0[1]);
        ctx.lineTo(p1[0], p1[1]);
        return ctx;
    }
}
class SegmentCurve extends SegmentBase {
    constructor(p0, p1, p2, p3, geo) {
        super();
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.geo = geo;
    }
    copy() {
        return new SegmentCurve(this.p0, this.p1, this.p2, this.p3, this.geo);
    }
    isEqual(other) {
        return (this.geo.isEqualVec2(this.p0, other.p0) &&
            this.geo.isEqualVec2(this.p1, other.p1) &&
            this.geo.isEqualVec2(this.p2, other.p2) &&
            this.geo.isEqualVec2(this.p3, other.p3));
    }
    start() {
        return this.p0;
    }
    start2() {
        return this.p1;
    }
    end2() {
        return this.p2;
    }
    end() {
        return this.p3;
    }
    setStart(p0) {
        this.p0 = p0;
    }
    setEnd(p3) {
        this.p3 = p3;
    }
    point(t) {
        const p0 = this.p0;
        const p1 = this.p1;
        const p2 = this.p2;
        const p3 = this.p3;
        if (t === 0) {
            return p0;
        }
        else if (t === 1) {
            return p3;
        }
        const t1t = (1 - t) * (1 - t);
        const tt = t * t;
        const t0 = t1t * (1 - t);
        const t1 = 3 * t1t * t;
        const t2 = 3 * tt * (1 - t);
        const t3 = tt * t;
        return [
            p0[0] * t0 + p1[0] * t1 + p2[0] * t2 + p3[0] * t3,
            p0[1] * t0 + p1[1] * t1 + p2[1] * t2 + p3[1] * t3,
        ];
    }
    split(ts) {
        if (ts.length <= 0) {
            return [this];
        }
        const result = [];
        const splitSingle = (pts, t) => {
            const [p0, p1, p2, p3] = pts;
            const p4 = lerpVec2(p0, p1, t);
            const p5 = lerpVec2(p1, p2, t);
            const p6 = lerpVec2(p2, p3, t);
            const p7 = lerpVec2(p4, p5, t);
            const p8 = lerpVec2(p5, p6, t);
            const p9 = lerpVec2(p7, p8, t);
            result.push(new SegmentCurve(p0, p4, p7, p9, this.geo));
            return [p9, p8, p6, p3];
        };
        let last = [this.p0, this.p1, this.p2, this.p3];
        let lastT = 0;
        for (const t of ts) {
            last = splitSingle(last, (t - lastT) / (1 - lastT));
            lastT = t;
        }
        result.push(new SegmentCurve(last[0], last[1], last[2], last[3], this.geo));
        return result;
    }
    reverse() {
        return new SegmentCurve(this.p3, this.p2, this.p1, this.p0, this.geo);
    }
    getCubicCoefficients(axis) {
        const p0 = this.p0[axis];
        const p1 = this.p1[axis];
        const p2 = this.p2[axis];
        const p3 = this.p3[axis];
        return [
            p3 - 3 * p2 + 3 * p1 - p0,
            3 * p2 - 6 * p1 + 3 * p0,
            3 * p1 - 3 * p0,
            p0,
        ];
    }
    boundingTValues() {
        const result = new SegmentTValuesBuilder(this.geo);
        const bounds = (x0, x1, x2, x3) => {
            const a = 3 * x3 - 9 * x2 + 9 * x1 - 3 * x0;
            const b = 6 * x0 - 12 * x1 + 6 * x2;
            const c = 3 * x1 - 3 * x0;
            if (this.geo.snap0(a) === 0) {
                result.add(-c / b);
            }
            else {
                const disc = b * b - 4 * a * c;
                if (disc >= 0) {
                    const sq = Math.sqrt(disc);
                    result.add((-b + sq) / (2 * a));
                    result.add((-b - sq) / (2 * a));
                }
            }
            return result;
        };
        const p0 = this.p0;
        const p1 = this.p1;
        const p2 = this.p2;
        const p3 = this.p3;
        bounds(p0[0], p1[0], p2[0], p3[0]);
        bounds(p0[1], p1[1], p2[1], p3[1]);
        return result.list();
    }
    inflectionTValues() {
        const result = new SegmentTValuesBuilder(this.geo);
        result.addArray(this.boundingTValues());
        const p0 = this.p0;
        const p1 = this.p1;
        const p2 = this.p2;
        const p3 = this.p3;
        const p10x = 3 * (p1[0] - p0[0]);
        const p10y = 3 * (p1[1] - p0[1]);
        const p21x = 6 * (p2[0] - p1[0]);
        const p21y = 6 * (p2[1] - p1[1]);
        const p32x = 3 * (p3[0] - p2[0]);
        const p32y = 3 * (p3[1] - p2[1]);
        const p210x = 6 * (p2[0] - 2 * p1[0] + p0[0]);
        const p210y = 6 * (p2[1] - 2 * p1[1] + p0[1]);
        const p321x = 6 * (p3[0] - 2 * p2[0] + p1[0]);
        const p321y = 6 * (p3[1] - 2 * p2[1] + p1[1]);
        const qx = p10x - p21x + p32x;
        const qy = p10y - p21y + p32y;
        const rx = p21x - 2 * p10x;
        const ry = p21y - 2 * p10y;
        const sx = p10x;
        const sy = p10y;
        const ux = p321x - p210x;
        const uy = p321y - p210y;
        const vx = p210x;
        const vy = p210y;
        const A = qx * uy - qy * ux;
        const B = qx * vy + rx * uy - qy * vx - ry * ux;
        const C = rx * vy + sx * uy - ry * vx - sy * ux;
        const D = sx * vy - sy * vx;
        for (const s of this.geo.solveCubic(A, B, C, D)) {
            result.add(s);
        }
        return result.list();
    }
    boundingBox() {
        const p0 = this.p0;
        const p3 = this.p3;
        const min = [Math.min(p0[0], p3[0]), Math.min(p0[1], p3[1])];
        const max = [Math.max(p0[0], p3[0]), Math.max(p0[1], p3[1])];
        for (const t of this.boundingTValues()) {
            const p = this.point(t);
            min[0] = Math.min(min[0], p[0]);
            min[1] = Math.min(min[1], p[1]);
            max[0] = Math.max(max[0], p[0]);
            max[1] = Math.max(max[1], p[1]);
        }
        return [min, max];
    }
    mapXtoT(x, force = false) {
        if (this.geo.snap0(this.p0[0] - x) === 0) {
            return 0;
        }
        if (this.geo.snap0(this.p3[0] - x) === 0) {
            return 1;
        }
        const p0 = this.p0[0] - x;
        const p1 = this.p1[0] - x;
        const p2 = this.p2[0] - x;
        const p3 = this.p3[0] - x;
        const R = [
            p3 - 3 * p2 + 3 * p1 - p0,
            3 * p2 - 6 * p1 + 3 * p0,
            3 * p1 - 3 * p0,
            p0,
        ];
        for (const t of this.geo.solveCubic(R[0], R[1], R[2], R[3])) {
            const ts = this.geo.snap01(t);
            if (ts >= 0 && ts <= 1) {
                return t;
            }
        }
        // force a solution if we know there is one...
        if (force ||
            (x >= Math.min(this.p0[0], this.p3[0]) &&
                x <= Math.max(this.p0[0], this.p3[0]))) {
            for (let attempt = 0; attempt < 4; attempt++) {
                // collapse an R value to 0, this is so wrong!!!
                let ii = -1;
                for (let i = 0; i < 4; i++) {
                    if (R[i] !== 0 && (ii < 0 || Math.abs(R[i]) < Math.abs(R[ii]))) {
                        ii = i;
                    }
                }
                if (ii < 0) {
                    return 0;
                }
                R[ii] = 0;
                // solve again, but with another 0 to help
                for (const t of this.geo.solveCubic(R[0], R[1], R[2], R[3])) {
                    const ts = this.geo.snap01(t);
                    if (ts >= 0 && ts <= 1) {
                        return t;
                    }
                }
            }
        }
        return false;
    }
    mapXtoY(x, force = false) {
        const t = this.mapXtoT(x, force);
        if (t === false) {
            return false;
        }
        return this.point(t)[1];
    }
    pointOn(p) {
        if (this.geo.isEqualVec2(this.p0, p) || this.geo.isEqualVec2(this.p3, p)) {
            return true;
        }
        const y = this.mapXtoY(p[0]);
        if (y === false) {
            return false;
        }
        return this.geo.snap0(y - p[1]) === 0;
    }
    toLine() {
        // note: this won't work for arbitrary curves, because they could loop back on themselves,
        // but will work fine for curves that have already been split at all inflection points
        const p0 = this.p0;
        const p1 = this.p1;
        const p2 = this.p2;
        const p3 = this.p3;
        if (
        // vertical line
        (this.geo.snap0(p0[0] - p1[0]) === 0 &&
            this.geo.snap0(p0[0] - p2[0]) === 0 &&
            this.geo.snap0(p0[0] - p3[0]) === 0) || // horizontal line
            (this.geo.snap0(p0[1] - p1[1]) === 0 &&
                this.geo.snap0(p0[1] - p2[1]) === 0 &&
                this.geo.snap0(p0[1] - p3[1]) === 0)) {
            return new SegmentLine(p0, p3, this.geo);
        }
        return null;
    }
    draw(ctx) {
        const p0 = this.p0;
        const p1 = this.p1;
        const p2 = this.p2;
        const p3 = this.p3;
        ctx.moveTo(p0[0], p0[1]);
        ctx.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
        return ctx;
    }
}
function projectPointOntoSegmentLine(p, seg) {
    const dx = seg.p1[0] - seg.p0[0];
    const dy = seg.p1[1] - seg.p0[1];
    const px = p[0] - seg.p0[0];
    const py = p[1] - seg.p0[1];
    const dist = dx * dx + dy * dy;
    const dot = px * dx + py * dy;
    return dot / dist;
}
function segmentLineIntersectSegmentLine(segA, segB, allowOutOfRange) {
    const geo = segA.geo;
    const a0 = segA.p0;
    const a1 = segA.p1;
    const b0 = segB.p0;
    const b1 = segB.p1;
    const adx = a1[0] - a0[0];
    const ady = a1[1] - a0[1];
    const bdx = b1[0] - b0[0];
    const bdy = b1[1] - b0[1];
    const axb = adx * bdy - ady * bdx;
    if (geo.snap0(axb) === 0) {
        // lines are coincident or parallel
        if (!geo.isCollinear(a0, a1, b0)) {
            // they're not coincident, so they're parallel, with no intersections
            return null;
        }
        // otherwise, segments are on top of each other somehow (aka coincident)
        const tB0onA = projectPointOntoSegmentLine(segB.p0, segA);
        const tB1onA = projectPointOntoSegmentLine(segB.p1, segA);
        const tAMin = geo.snap01(Math.min(tB0onA, tB1onA));
        const tAMax = geo.snap01(Math.max(tB0onA, tB1onA));
        if (tAMax < 0 || tAMin > 1) {
            return null;
        }
        const tA0onB = projectPointOntoSegmentLine(segA.p0, segB);
        const tA1onB = projectPointOntoSegmentLine(segA.p1, segB);
        const tBMin = geo.snap01(Math.min(tA0onB, tA1onB));
        const tBMax = geo.snap01(Math.max(tA0onB, tA1onB));
        if (tBMax < 0 || tBMin > 1) {
            return null;
        }
        return {
            kind: "tRangePairs",
            tStart: [Math.max(0, tAMin), Math.max(0, tBMin)],
            tEnd: [Math.min(1, tAMax), Math.min(1, tBMax)],
        };
    }
    // otherwise, not coincident, so they intersect somewhere
    const dx = a0[0] - b0[0];
    const dy = a0[1] - b0[1];
    return new SegmentTValuePairsBuilder(allowOutOfRange, geo)
        .add((bdx * dy - bdy * dx) / axb, (adx * dy - ady * dx) / axb)
        .done();
}
function segmentLineIntersectSegmentCurve(segA, segB, allowOutOfRange, invert) {
    const geo = segA.geo;
    const a0 = segA.p0;
    const a1 = segA.p1;
    const A = a1[1] - a0[1];
    const B = a0[0] - a1[0];
    if (geo.snap0(B) === 0) {
        // vertical line
        const t = segB.mapXtoT(a0[0], false);
        if (t === false) {
            return null;
        }
        const y = segB.point(t)[1];
        const s = (y - a0[1]) / A;
        const result = new SegmentTValuePairsBuilder(allowOutOfRange, geo);
        if (invert) {
            result.add(t, s);
        }
        else {
            result.add(s, t);
        }
        return result.done();
    }
    const C = A * a0[0] + B * a0[1];
    const bx = segB.getCubicCoefficients(0);
    const by = segB.getCubicCoefficients(1);
    const rA = A * bx[0] + B * by[0];
    const rB = A * bx[1] + B * by[1];
    const rC = A * bx[2] + B * by[2];
    const rD = A * bx[3] + B * by[3] - C;
    const roots = geo.solveCubic(rA, rB, rC, rD);
    const result = new SegmentTValuePairsBuilder(allowOutOfRange, geo);
    if (geo.snap0(A) === 0) {
        // project curve's X component onto line
        for (const t of roots) {
            const X = bx[0] * t * t * t + bx[1] * t * t + bx[2] * t + bx[3];
            const s = (a0[0] - X) / B;
            if (invert) {
                result.add(t, s);
            }
            else {
                result.add(s, t);
            }
        }
    }
    else {
        // project curve's Y component onto line
        for (const t of roots) {
            const Y = by[0] * t * t * t + by[1] * t * t + by[2] * t + by[3];
            const s = (Y - a0[1]) / A;
            if (invert) {
                result.add(t, s);
            }
            else {
                result.add(s, t);
            }
        }
    }
    return result.done();
}
function segmentCurveIntersectSegmentCurve(segA, segB, allowOutOfRange) {
    const geo = segA.geo;
    // dummy coincident calculation for now
    // TODO: implement actual range/equality testing
    if (geo.isEqualVec2(segA.p0, segB.p0)) {
        if (geo.isEqualVec2(segA.p3, segB.p3)) {
            if (geo.isEqualVec2(segA.p1, segB.p1) &&
                geo.isEqualVec2(segA.p2, segB.p2)) {
                return {
                    kind: "tRangePairs",
                    tStart: [0, 0],
                    tEnd: [1, 1],
                };
            }
            else {
                return {
                    kind: "tValuePairs",
                    tValuePairs: [
                        [0, 0],
                        [1, 1],
                    ],
                };
            }
        }
        else {
            return {
                kind: "tValuePairs",
                tValuePairs: [[0, 0]],
            };
        }
    }
    else if (geo.isEqualVec2(segA.p0, segB.p3)) {
        return {
            kind: "tValuePairs",
            tValuePairs: [[0, 1]],
        };
    }
    else if (geo.isEqualVec2(segA.p3, segB.p0)) {
        return {
            kind: "tValuePairs",
            tValuePairs: [[1, 0]],
        };
    }
    else if (geo.isEqualVec2(segA.p3, segB.p3)) {
        return {
            kind: "tValuePairs",
            tValuePairs: [[1, 1]],
        };
    }
    const result = new SegmentTValuePairsBuilder(allowOutOfRange, geo);
    const checkCurves = (c1, t1L, t1R, c2, t2L, t2R) => {
        const bbox1 = c1.boundingBox();
        const bbox2 = c2.boundingBox();
        if (!boundingBoxesIntersect(bbox1, bbox2)) {
            return;
        }
        const t1M = (t1L + t1R) / 2;
        const t2M = (t2L + t2R) / 2;
        if (geo.snap0(t1R - t1L) === 0 && geo.snap0(t2R - t2L) === 0) {
            result.add(t1M, t2M);
            return;
        }
        const [c1L, c1R] = c1.split([0.5]);
        const [c2L, c2R] = c2.split([0.5]);
        checkCurves(c1L, t1L, t1M, c2L, t2L, t2M);
        checkCurves(c1R, t1M, t1R, c2L, t2L, t2M);
        checkCurves(c1L, t1L, t1M, c2R, t2M, t2R);
        checkCurves(c1R, t1M, t1R, c2R, t2M, t2R);
    };
    checkCurves(segA, 0, 1, segB, 0, 1);
    return result.done();
}
// return value:
//   null               => no intersection
//   SegmentTValuePairs => the segments intersect along a series of points, whose position is
//                         represented by T values pairs [segA_tValue, segB_tValue]
//                         note: a T value pair is returned even if it's just a shared vertex!
//   SegmentTRangePairs => the segments are coincident (on top of each other), and intersect along a
//                         segment, ranged by T values
function segmentsIntersect(segA, segB, allowOutOfRange) {
    if (segA instanceof SegmentLine) {
        if (segB instanceof SegmentLine) {
            return segmentLineIntersectSegmentLine(segA, segB, allowOutOfRange);
        }
        else if (segB instanceof SegmentCurve) {
            return segmentLineIntersectSegmentCurve(segA, segB, allowOutOfRange, false);
        }
    }
    else if (segA instanceof SegmentCurve) {
        if (segB instanceof SegmentLine) {
            return segmentLineIntersectSegmentCurve(segB, segA, allowOutOfRange, true);
        }
        else if (segB instanceof SegmentCurve) {
            return segmentCurveIntersectSegmentCurve(segA, segB, allowOutOfRange);
        }
    }
    throw new Error("PolyBool: Unknown segment instance in segmentsIntersect");
}

//
// polybool - Boolean operations on polygons (union, intersection, etc)
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/polybool
// SPDX-License-Identifier: 0BSD
//
class SegmentBoolBase {
    constructor(data, fill = null, closed = false, log = null) {
        var _a, _b, _c;
        this.otherFill = null;
        this.id = (_a = log === null || log === void 0 ? void 0 : log.segmentId()) !== null && _a !== void 0 ? _a : -1;
        this.data = data;
        this.myFill = {
            above: (_b = fill === null || fill === void 0 ? void 0 : fill.above) !== null && _b !== void 0 ? _b : null,
            below: (_c = fill === null || fill === void 0 ? void 0 : fill.below) !== null && _c !== void 0 ? _c : null,
        };
        this.closed = closed;
    }
}
class SegmentBoolLine extends SegmentBoolBase {
}
class SegmentBoolCurve extends SegmentBoolBase {
}
function copySegmentBool(seg, log) {
    if (seg instanceof SegmentBoolLine) {
        return new SegmentBoolLine(seg.data, seg.myFill, seg.closed, log);
    }
    else if (seg instanceof SegmentBoolCurve) {
        return new SegmentBoolCurve(seg.data, seg.myFill, seg.closed, log);
    }
    throw new Error("PolyBool: Unknown SegmentBool in copySegmentBool");
}
class EventBool {
    constructor(isStart, p, seg, primary) {
        this.status = null;
        this.isStart = isStart;
        this.p = p;
        this.seg = seg;
        this.primary = primary;
    }
}
class ListBool {
    constructor() {
        this.nodes = [];
    }
    remove(node) {
        const i = this.nodes.indexOf(node);
        if (i >= 0) {
            this.nodes.splice(i, 1);
        }
    }
    getIndex(node) {
        return this.nodes.indexOf(node);
    }
    isEmpty() {
        return this.nodes.length <= 0;
    }
    getHead() {
        return this.nodes[0];
    }
    removeHead() {
        this.nodes.shift();
    }
    insertBefore(node, check) {
        this.findTransition(node, check).insert(node);
    }
    findTransition(node, check) {
        var _a, _b;
        // bisect to find the transition point
        const compare = (a, b) => check(b) - check(a);
        let i = 0;
        let high = this.nodes.length;
        while (i < high) {
            const mid = (i + high) >> 1;
            if (compare(this.nodes[mid], node) > 0) {
                high = mid;
            }
            else {
                i = mid + 1;
            }
        }
        return {
            before: i <= 0 ? null : (_a = this.nodes[i - 1]) !== null && _a !== void 0 ? _a : null,
            after: (_b = this.nodes[i]) !== null && _b !== void 0 ? _b : null,
            insert: (node) => {
                this.nodes.splice(i, 0, node);
                return node;
            },
        };
    }
}
class Intersecter {
    constructor(selfIntersection, geo, log = null) {
        this.events = new ListBool();
        this.status = new ListBool();
        this.currentPath = [];
        this.selfIntersection = selfIntersection;
        this.geo = geo;
        this.log = log;
    }
    compareEvents(aStart, a1, a2, aSeg, bStart, b1, b2, bSeg) {
        // compare the selected points first
        const comp = this.geo.compareVec2(a1, b1);
        if (comp !== 0) {
            return comp;
        }
        // the selected points are the same
        if (aSeg instanceof SegmentLine &&
            bSeg instanceof SegmentLine &&
            this.geo.isEqualVec2(a2, b2)) {
            // if the non-selected points are the same too...
            return 0; // then the segments are equal
        }
        if (aStart !== bStart) {
            // if one is a start and the other isn't...
            return aStart ? 1 : -1; // favor the one that isn't the start
        }
        return this.compareSegments(bSeg, aSeg);
    }
    addEvent(ev) {
        this.events.insertBefore(ev, (here) => {
            if (here === ev) {
                return 0;
            }
            return this.compareEvents(ev.isStart, ev.p, ev.other.p, ev.seg.data, here.isStart, here.p, here.other.p, here.seg.data);
        });
    }
    divideEvent(ev, t, p) {
        var _a, _b;
        (_a = this.log) === null || _a === void 0 ? void 0 : _a.segmentDivide(ev.seg, p);
        const [left, right] = ev.seg.data.split([t]);
        // set the *exact* intersection point
        left.setEnd(p);
        right.setStart(p);
        const ns = right instanceof SegmentLine
            ? new SegmentBoolLine(right, ev.seg.myFill, ev.seg.closed, this.log)
            : right instanceof SegmentCurve
                ? new SegmentBoolCurve(right, ev.seg.myFill, ev.seg.closed, this.log)
                : null;
        if (!ns) {
            throw new Error("PolyBool: Unknown segment data in divideEvent");
        }
        // slides an end backwards
        //   (start)------------(end)    to:
        //   (start)---(end)
        this.events.remove(ev.other);
        ev.seg.data = left;
        (_b = this.log) === null || _b === void 0 ? void 0 : _b.segmentChop(ev.seg);
        ev.other.p = p;
        this.addEvent(ev.other);
        return this.addSegment(ns, ev.primary);
    }
    beginPath() {
        this.currentPath = [];
    }
    closePath() {
        for (const seg of this.currentPath) {
            seg.closed = true;
        }
    }
    addSegment(seg, primary) {
        const evStart = new EventBool(true, seg.data.start(), seg, primary);
        const evEnd = new EventBool(false, seg.data.end(), seg, primary);
        evStart.other = evEnd;
        evEnd.other = evStart;
        this.addEvent(evStart);
        this.addEvent(evEnd);
        return evStart;
    }
    addLine(from, to, primary = true) {
        const f = this.geo.compareVec2(from, to);
        if (f === 0) {
            // points are equal, so we have a zero-length segment
            return; // skip it
        }
        const seg = new SegmentBoolLine(new SegmentLine(f < 0 ? from : to, f < 0 ? to : from, this.geo), null, false, this.log);
        this.currentPath.push(seg);
        this.addSegment(seg, primary);
    }
    addCurve(from, c1, c2, to, primary = true) {
        const original = new SegmentCurve(from, c1, c2, to, this.geo);
        const curves = original.split(original.inflectionTValues());
        for (const curve of curves) {
            const f = this.geo.compareVec2(curve.start(), curve.end());
            if (f === 0) {
                // points are equal AFTER splitting... this only happens for zero-length segments
                continue; // skip it
            }
            // convert horizontal/vertical curves to lines
            const line = curve.toLine();
            if (line) {
                this.addLine(line.p0, line.p1, primary);
            }
            else {
                const seg = new SegmentBoolCurve(f < 0 ? curve : curve.reverse(), null, false, this.log);
                this.currentPath.push(seg);
                this.addSegment(seg, primary);
            }
        }
    }
    compareSegments(seg1, seg2) {
        // TODO:
        //  This is where some of the curve instability comes from... we need to reliably sort
        //  segments, but this is surprisingly hard when it comes to curves.
        //
        //  The easy case is something like:
        //
        //             C   A - - - D
        //               \
        //                 \
        //                   B
        //  A is clearly above line C-B, which is easily calculated... however, once curves are
        //  introduced, it's not so obvious without using some heuristic which will fail at times.
        //
        let A = seg1.start();
        let B = seg2.start2();
        const C = seg2.start();
        if (seg2.pointOn(A)) {
            // A intersects seg2 somehow (possibly sharing a start point, or maybe just splitting it)
            //
            //   AC - - - - D
            //      \
            //        \
            //          B
            //
            // so grab seg1's second point (D) instead
            A = seg1.start2();
            if (seg2.pointOn(A)) {
                if (seg1 instanceof SegmentLine) {
                    if (seg2 instanceof SegmentLine) {
                        // oh... D is on the line too... so these are the same
                        return 0;
                    }
                    if (seg2 instanceof SegmentCurve) {
                        A = seg1.point(0.5); // TODO: ???
                    }
                }
                if (seg1 instanceof SegmentCurve) {
                    A = seg1.end();
                }
            }
            if (seg2 instanceof SegmentCurve) {
                if (this.geo.snap0(A[0] - C[0]) === 0 &&
                    this.geo.snap0(B[0] - C[0]) === 0) {
                    // seg2 is a curve, but the tangent line (C-B) at the start point is vertical, and
                    // collinear with A... so... just sort based on the Y values I guess?
                    return Math.sign(C[1] - A[1]);
                }
            }
        }
        else {
            if (seg2 instanceof SegmentCurve) {
                // find seg2's position at A[0] and see if it's above or below A[1]
                const y = seg2.mapXtoY(A[0], true);
                if (y !== false) {
                    return Math.sign(y - A[1]);
                }
            }
            if (seg1 instanceof SegmentCurve) {
                // unfortunately, in order to sort against curved segments, we need to check the
                // intersection point... this means a lot more intersection tests, but I'm not sure how else
                // to sort correctly
                const i = segmentsIntersect(seg1, seg2, true);
                if (i && i.kind === "tValuePairs") {
                    // find the intersection point on seg1
                    for (const pair of i.tValuePairs) {
                        const t = this.geo.snap01(pair[0]);
                        if (t > 0 && t < 1) {
                            B = seg1.point(t);
                            break;
                        }
                    }
                }
            }
        }
        // fallthrough to this calculation which determines if A is on one side or another of C-B
        const [Ax, Ay] = A;
        const [Bx, By] = B;
        const [Cx, Cy] = C;
        return Math.sign((Bx - Ax) * (Cy - Ay) - (By - Ay) * (Cx - Ax));
    }
    statusFindSurrounding(ev) {
        return this.status.findTransition(ev, (here) => {
            if (ev === here) {
                return 0;
            }
            const c = this.compareSegments(ev.seg.data, here.seg.data);
            return c === 0 ? -1 : c;
        });
    }
    checkIntersection(ev1, ev2) {
        var _a;
        // returns the segment equal to ev1, or null if nothing equal
        const seg1 = ev1.seg;
        const seg2 = ev2.seg;
        (_a = this.log) === null || _a === void 0 ? void 0 : _a.checkIntersection(seg1, seg2);
        const i = segmentsIntersect(seg1.data, seg2.data, false);
        if (i === null) {
            // no intersections
            return null;
        }
        else if (i.kind === "tRangePairs") {
            // segments are parallel or coincident
            const { tStart: [tA1, tB1], tEnd: [tA2, tB2], } = i;
            if ((tA1 === 1 && tA2 === 1 && tB1 === 0 && tB2 === 0) ||
                (tA1 === 0 && tA2 === 0 && tB1 === 1 && tB2 === 1)) {
                return null; // segments touch at endpoints... no intersection
            }
            if (tA1 === 0 && tA2 === 1 && tB1 === 0 && tB2 === 1) {
                return ev2; // segments are exactly equal
            }
            const a1 = seg1.data.start();
            const a2 = seg1.data.end();
            const b2 = seg2.data.end();
            if (tA1 === 0 && tB1 === 0) {
                if (tA2 === 1) {
                    //  (a1)---(a2)
                    //  (b1)----------(b2)
                    this.divideEvent(ev2, tB2, a2);
                }
                else {
                    //  (a1)----------(a2)
                    //  (b1)---(b2)
                    this.divideEvent(ev1, tA2, b2);
                }
                return ev2;
            }
            else if (tB1 > 0 && tB1 < 1) {
                if (tA2 === 1 && tB2 === 1) {
                    //         (a1)---(a2)
                    //  (b1)----------(b2)
                    this.divideEvent(ev2, tB1, a1);
                }
                else {
                    // make a2 equal to b2
                    if (tA2 === 1) {
                        //         (a1)---(a2)
                        //  (b1)-----------------(b2)
                        this.divideEvent(ev2, tB2, a2);
                    }
                    else {
                        //         (a1)----------(a2)
                        //  (b1)----------(b2)
                        this.divideEvent(ev1, tA2, b2);
                    }
                    //         (a1)---(a2)
                    //  (b1)----------(b2)
                    this.divideEvent(ev2, tB1, a1);
                }
            }
            return null;
        }
        else if (i.kind === "tValuePairs") {
            if (i.tValuePairs.length <= 0) {
                return null;
            }
            // process a single intersection
            // skip intersections where endpoints meet
            let minPair = i.tValuePairs[0];
            for (let j = 1; j < i.tValuePairs.length &&
                ((minPair[0] === 0 && minPair[1] === 0) ||
                    (minPair[0] === 0 && minPair[1] === 1) ||
                    (minPair[0] === 1 && minPair[1] === 0) ||
                    (minPair[0] === 1 && minPair[1] === 1)); j++) {
                minPair = i.tValuePairs[j];
            }
            const [tA, tB] = minPair;
            // even though *in theory* seg1.data.point(tA) === seg2.data.point(tB), that isn't exactly
            // correct in practice because intersections aren't exact... so we need to calculate a single
            // intersection point that everyone can share
            const p = tB === 0
                ? seg2.data.start()
                : tB === 1
                    ? seg2.data.end()
                    : tA === 0
                        ? seg1.data.start()
                        : tA === 1
                            ? seg1.data.end()
                            : seg1.data.point(tA);
            // is A divided between its endpoints? (exclusive)
            if (tA > 0 && tA < 1) {
                this.divideEvent(ev1, tA, p);
            }
            // is B divided between its endpoints? (exclusive)
            if (tB > 0 && tB < 1) {
                this.divideEvent(ev2, tB, p);
            }
            return null;
        }
        throw new Error("PolyBool: Unknown intersection type");
    }
    calculate() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const segments = [];
        while (!this.events.isEmpty()) {
            const ev = this.events.getHead();
            (_a = this.log) === null || _a === void 0 ? void 0 : _a.vert(ev.p[0]);
            if (ev.isStart) {
                (_b = this.log) === null || _b === void 0 ? void 0 : _b.segmentNew(ev.seg, ev.primary);
                const surrounding = this.statusFindSurrounding(ev);
                const above = surrounding.before;
                const below = surrounding.after;
                (_c = this.log) === null || _c === void 0 ? void 0 : _c.tempStatus(ev.seg, above ? above.seg : false, below ? below.seg : false);
                const checkBothIntersections = () => {
                    if (above) {
                        const eve = this.checkIntersection(ev, above);
                        if (eve) {
                            return eve;
                        }
                    }
                    if (below) {
                        return this.checkIntersection(ev, below);
                    }
                    return null;
                };
                const eve = checkBothIntersections();
                if (eve) {
                    // ev and eve are equal
                    // we'll keep eve and throw away ev
                    // merge ev.seg's fill information into eve.seg
                    if (this.selfIntersection) {
                        let toggle; // are we a toggling edge?
                        if (ev.seg.myFill.below === null) {
                            toggle = ev.seg.closed;
                        }
                        else {
                            toggle = ev.seg.myFill.above !== ev.seg.myFill.below;
                        }
                        // merge two segments that belong to the same polygon
                        // think of this as sandwiching two segments together, where
                        // `eve.seg` is the bottom -- this will cause the above fill flag to
                        // toggle
                        if (toggle) {
                            eve.seg.myFill.above = !eve.seg.myFill.above;
                        }
                    }
                    else {
                        // merge two segments that belong to different polygons
                        // each segment has distinct knowledge, so no special logic is
                        // needed
                        // note that this can only happen once per segment in this phase,
                        // because we are guaranteed that all self-intersections are gone
                        eve.seg.otherFill = ev.seg.myFill;
                    }
                    (_d = this.log) === null || _d === void 0 ? void 0 : _d.segmentUpdate(eve.seg);
                    this.events.remove(ev.other);
                    this.events.remove(ev);
                }
                if (this.events.getHead() !== ev) {
                    // something was inserted before us in the event queue, so loop back
                    // around and process it before continuing
                    (_e = this.log) === null || _e === void 0 ? void 0 : _e.rewind(ev.seg);
                    continue;
                }
                //
                // calculate fill flags
                //
                if (this.selfIntersection) {
                    let toggle; // are we a toggling edge?
                    if (ev.seg.myFill.below === null) {
                        // if we are new then we toggle if we're part of a closed path
                        toggle = ev.seg.closed;
                    }
                    else {
                        // we are a segment that has previous knowledge from a division
                        // calculate toggle
                        toggle = ev.seg.myFill.above !== ev.seg.myFill.below;
                    }
                    // next, calculate whether we are filled below us
                    if (!below) {
                        // if nothing is below us, then we're not filled
                        ev.seg.myFill.below = false;
                    }
                    else {
                        // otherwise, we know the answer -- it's the same if whatever is
                        // below us is filled above it
                        ev.seg.myFill.below = below.seg.myFill.above;
                    }
                    // since now we know if we're filled below us, we can calculate
                    // whether we're filled above us by applying toggle to whatever is
                    // below us
                    ev.seg.myFill.above = toggle
                        ? !ev.seg.myFill.below
                        : ev.seg.myFill.below;
                }
                else {
                    // now we fill in any missing transition information, since we are
                    // all-knowing at this point
                    if (ev.seg.otherFill === null) {
                        // if we don't have other information, then we need to figure out if
                        // we're inside the other polygon
                        let inside;
                        if (!below) {
                            // if nothing is below us, then we're not filled
                            inside = false;
                        }
                        else {
                            // otherwise, something is below us
                            // so copy the below segment's other polygon's above
                            if (ev.primary === below.primary) {
                                if (below.seg.otherFill === null) {
                                    throw new Error("PolyBool: Unexpected state of otherFill (null)");
                                }
                                inside = below.seg.otherFill.above;
                            }
                            else {
                                inside = below.seg.myFill.above;
                            }
                        }
                        ev.seg.otherFill = {
                            above: inside,
                            below: inside,
                        };
                    }
                }
                (_f = this.log) === null || _f === void 0 ? void 0 : _f.status(ev.seg, above ? above.seg : false, below ? below.seg : false);
                // insert the status and remember it for later removal
                ev.other.status = surrounding.insert(ev);
            }
            else {
                // end
                const st = ev.status;
                if (st === null) {
                    throw new Error("PolyBool: Zero-length segment detected; your epsilon is " +
                        "probably too small or too large");
                }
                // removing the status will create two new adjacent edges, so we'll need
                // to check for those
                const i = this.status.getIndex(st);
                if (i > 0 && i < this.status.nodes.length - 1) {
                    const before = this.status.nodes[i - 1];
                    const after = this.status.nodes[i + 1];
                    this.checkIntersection(before, after);
                }
                (_g = this.log) === null || _g === void 0 ? void 0 : _g.statusRemove(st.seg);
                // remove the status
                this.status.remove(st);
                // if we've reached this point, we've calculated everything there is to
                // know, so save the segment for reporting
                if (!ev.primary) {
                    // make sure `seg.myFill` actually points to the primary polygon
                    // though
                    if (!ev.seg.otherFill) {
                        throw new Error("PolyBool: Unexpected state of otherFill (null)");
                    }
                    const s = ev.seg.myFill;
                    ev.seg.myFill = ev.seg.otherFill;
                    ev.seg.otherFill = s;
                }
                segments.push(ev.seg);
            }
            // remove the event and continue
            this.events.removeHead();
        }
        (_h = this.log) === null || _h === void 0 ? void 0 : _h.done();
        return segments;
    }
}

//
// polybool - Boolean operations on polygons (union, intersection, etc)
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/polybool
// SPDX-License-Identifier: 0BSD
//
//
// filter a list of segments based on boolean operations
//
function select(segments, selection, log) {
    const result = [];
    for (const seg of segments) {
        const index = (seg.myFill.above ? 8 : 0) +
            (seg.myFill.below ? 4 : 0) +
            (seg.otherFill && seg.otherFill.above ? 2 : 0) +
            (seg.otherFill && seg.otherFill.below ? 1 : 0);
        const flags = selection[index];
        const above = (flags & 1) !== 0; // bit 1 if filled above
        const below = (flags & 2) !== 0; // bit 2 if filled below
        if ((!seg.closed && flags !== 0) || (seg.closed && above !== below)) {
            // copy the segment to the results, while also calculating the fill status
            const fill = { above, below };
            if (seg instanceof SegmentBoolLine) {
                result.push(new SegmentBoolLine(seg.data, fill, seg.closed, log));
            }
            else if (seg instanceof SegmentBoolCurve) {
                result.push(new SegmentBoolCurve(seg.data, fill, seg.closed, log));
            }
            else {
                throw new Error("PolyBool: Unknown SegmentBool type in SegmentSelector");
            }
        }
    }
    log === null || log === void 0 ? void 0 : log.selected(result);
    return result;
}
class SegmentSelector {
    // prettier-ignore
    static union(segments, log) {
        // primary | secondary
        // above1 below1 above2 below2    Keep?               Value
        //    0      0      0      0   =>   yes if open         4
        //    0      0      0      1   =>   yes filled below    2
        //    0      0      1      0   =>   yes filled above    1
        //    0      0      1      1   =>   no                  0
        //    0      1      0      0   =>   yes filled below    2
        //    0      1      0      1   =>   yes filled below    2
        //    0      1      1      0   =>   no                  0
        //    0      1      1      1   =>   no                  0
        //    1      0      0      0   =>   yes filled above    1
        //    1      0      0      1   =>   no                  0
        //    1      0      1      0   =>   yes filled above    1
        //    1      0      1      1   =>   no                  0
        //    1      1      0      0   =>   no                  0
        //    1      1      0      1   =>   no                  0
        //    1      1      1      0   =>   no                  0
        //    1      1      1      1   =>   no                  0
        return select(segments, [
            4, 2, 1, 0,
            2, 2, 0, 0,
            1, 0, 1, 0,
            0, 0, 0, 0
        ], log);
    }
    // prettier-ignore
    static intersect(segments, log) {
        // primary & secondary
        // above1 below1 above2 below2    Keep?               Value
        //    0      0      0      0   =>   no                  0
        //    0      0      0      1   =>   no                  0
        //    0      0      1      0   =>   no                  0
        //    0      0      1      1   =>   yes if open         4
        //    0      1      0      0   =>   no                  0
        //    0      1      0      1   =>   yes filled below    2
        //    0      1      1      0   =>   no                  0
        //    0      1      1      1   =>   yes filled below    2
        //    1      0      0      0   =>   no                  0
        //    1      0      0      1   =>   no                  0
        //    1      0      1      0   =>   yes filled above    1
        //    1      0      1      1   =>   yes filled above    1
        //    1      1      0      0   =>   yes if open         4
        //    1      1      0      1   =>   yes filled below    2
        //    1      1      1      0   =>   yes filled above    1
        //    1      1      1      1   =>   no                  0
        return select(segments, [
            0, 0, 0, 4,
            0, 2, 0, 2,
            0, 0, 1, 1,
            4, 2, 1, 0
        ], log);
    }
    // prettier-ignore
    static difference(segments, log) {
        // primary - secondary
        // above1 below1 above2 below2    Keep?               Value
        //    0      0      0      0   =>   yes if open         4
        //    0      0      0      1   =>   no                  0
        //    0      0      1      0   =>   no                  0
        //    0      0      1      1   =>   no                  0
        //    0      1      0      0   =>   yes filled below    2
        //    0      1      0      1   =>   no                  0
        //    0      1      1      0   =>   yes filled below    2
        //    0      1      1      1   =>   no                  0
        //    1      0      0      0   =>   yes filled above    1
        //    1      0      0      1   =>   yes filled above    1
        //    1      0      1      0   =>   no                  0
        //    1      0      1      1   =>   no                  0
        //    1      1      0      0   =>   no                  0
        //    1      1      0      1   =>   yes filled above    1
        //    1      1      1      0   =>   yes filled below    2
        //    1      1      1      1   =>   no                  0
        return select(segments, [
            4, 0, 0, 0,
            2, 0, 2, 0,
            1, 1, 0, 0,
            0, 1, 2, 0
        ], log);
    }
    // prettier-ignore
    static differenceRev(segments, log) {
        // secondary - primary
        // above1 below1 above2 below2    Keep?               Value
        //    0      0      0      0   =>   yes if open         4
        //    0      0      0      1   =>   yes filled below    2
        //    0      0      1      0   =>   yes filled above    1
        //    0      0      1      1   =>   no                  0
        //    0      1      0      0   =>   no                  0
        //    0      1      0      1   =>   no                  0
        //    0      1      1      0   =>   yes filled above    1
        //    0      1      1      1   =>   yes filled above    1
        //    1      0      0      0   =>   no                  0
        //    1      0      0      1   =>   yes filled below    2
        //    1      0      1      0   =>   no                  0
        //    1      0      1      1   =>   yes filled below    2
        //    1      1      0      0   =>   no                  0
        //    1      1      0      1   =>   no                  0
        //    1      1      1      0   =>   no                  0
        //    1      1      1      1   =>   no                  0
        return select(segments, [
            4, 2, 1, 0,
            0, 0, 1, 1,
            0, 2, 0, 2,
            0, 0, 0, 0
        ], log);
    }
    // prettier-ignore
    static xor(segments, log) {
        // primary ^ secondary
        // above1 below1 above2 below2    Keep?               Value
        //    0      0      0      0   =>   yes if open         4
        //    0      0      0      1   =>   yes filled below    2
        //    0      0      1      0   =>   yes filled above    1
        //    0      0      1      1   =>   no                  0
        //    0      1      0      0   =>   yes filled below    2
        //    0      1      0      1   =>   no                  0
        //    0      1      1      0   =>   no                  0
        //    0      1      1      1   =>   yes filled above    1
        //    1      0      0      0   =>   yes filled above    1
        //    1      0      0      1   =>   no                  0
        //    1      0      1      0   =>   no                  0
        //    1      0      1      1   =>   yes filled below    2
        //    1      1      0      0   =>   no                  0
        //    1      1      0      1   =>   yes filled above    1
        //    1      1      1      0   =>   yes filled below    2
        //    1      1      1      1   =>   no                  0
        return select(segments, [
            4, 2, 1, 0,
            2, 0, 0, 1,
            1, 0, 0, 2,
            0, 1, 2, 0
        ], log);
    }
}

//
// polybool - Boolean operations on polygons (union, intersection, etc)
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/polybool
// SPDX-License-Identifier: 0BSD
//
function joinLines(seg1, seg2, geo) {
    if (geo.isCollinear(seg1.p0, seg1.p1, seg2.p1)) {
        return new SegmentLine(seg1.p0, seg2.p1, geo);
    }
    return false;
}
function joinCurves(seg1, seg2, geo) {
    if (geo.isCollinear(seg1.p2, seg1.p3, seg2.p1)) {
        const dx = seg2.p1[0] - seg1.p2[0];
        const dy = seg2.p1[1] - seg1.p2[1];
        const t = Math.abs(dx) > Math.abs(dy)
            ? (seg1.p3[0] - seg1.p2[0]) / dx
            : (seg1.p3[1] - seg1.p2[1]) / dy;
        const ts = geo.snap01(t);
        if (ts !== 0 && ts !== 1) {
            const ns = new SegmentCurve(seg1.p0, [
                seg1.p0[0] + (seg1.p1[0] - seg1.p0[0]) / t,
                seg1.p0[1] + (seg1.p1[1] - seg1.p0[1]) / t,
            ], [
                seg2.p2[0] - (t * (seg2.p3[0] - seg2.p2[0])) / (1 - t),
                seg2.p2[1] - (t * (seg2.p3[1] - seg2.p2[1])) / (1 - t),
            ], seg2.p3, geo);
            // double check that if we split at T, we get seg1/seg2 back
            const [left, right] = ns.split([t]);
            if (left.isEqual(seg1) && right.isEqual(seg2)) {
                return ns;
            }
        }
    }
    return false;
}
function joinSegments(seg1, seg2, geo) {
    if (seg1 === seg2) {
        return false;
    }
    if (seg1 instanceof SegmentLine && seg2 instanceof SegmentLine) {
        return joinLines(seg1, seg2, geo);
    }
    if (seg1 instanceof SegmentCurve && seg2 instanceof SegmentCurve) {
        return joinCurves(seg1, seg2, geo);
    }
    return false;
}
function SegmentChainer(segments, geo, log) {
    const closedChains = [];
    const openChains = [];
    const regions = [];
    for (const segb of segments) {
        let seg = segb.data;
        const closed = segb.closed;
        const chains = closed ? closedChains : openChains;
        const pt1 = seg.start();
        const pt2 = seg.end();
        const reverseChain = (index) => {
            log === null || log === void 0 ? void 0 : log.chainReverse(index, closed);
            const newChain = [];
            for (const seg of chains[index].segs) {
                newChain.unshift(seg.reverse());
            }
            chains[index] = {
                segs: newChain,
                fill: !chains[index].fill,
            };
            return newChain;
        };
        if (seg instanceof SegmentLine && geo.isEqualVec2(pt1, pt2)) {
            console.warn("PolyBool: Warning: Zero-length segment detected; your epsilon is " +
                "probably too small or too large");
            continue;
        }
        log === null || log === void 0 ? void 0 : log.chainStart({ seg, fill: !!segb.myFill.above }, closed);
        // search for two chains that this segment matches
        const firstMatch = {
            index: 0,
            matchesHead: false,
            matchesPt1: false,
        };
        const secondMatch = {
            index: 0,
            matchesHead: false,
            matchesPt1: false,
        };
        let nextMatch = firstMatch;
        function setMatch(index, matchesHead, matchesPt1) {
            // return true if we've matched twice
            if (nextMatch) {
                nextMatch.index = index;
                nextMatch.matchesHead = matchesHead;
                nextMatch.matchesPt1 = matchesPt1;
            }
            if (nextMatch === firstMatch) {
                nextMatch = secondMatch;
                return false;
            }
            nextMatch = null;
            return true; // we've matched twice, we're done here
        }
        for (let i = 0; i < chains.length; i++) {
            const chain = chains[i].segs;
            const head = chain[0].start();
            const tail = chain[chain.length - 1].end();
            if (geo.isEqualVec2(head, pt1)) {
                if (setMatch(i, true, true)) {
                    break;
                }
            }
            else if (geo.isEqualVec2(head, pt2)) {
                if (setMatch(i, true, false)) {
                    break;
                }
            }
            else if (geo.isEqualVec2(tail, pt1)) {
                if (setMatch(i, false, true)) {
                    break;
                }
            }
            else if (geo.isEqualVec2(tail, pt2)) {
                if (setMatch(i, false, false)) {
                    break;
                }
            }
        }
        if (nextMatch === firstMatch) {
            // we didn't match anything, so create a new chain
            const fill = !!segb.myFill.above;
            chains.push({ segs: [seg], fill });
            log === null || log === void 0 ? void 0 : log.chainNew({ seg, fill }, closed);
        }
        else if (nextMatch === secondMatch) {
            // we matched a single chain
            const index = firstMatch.index;
            log === null || log === void 0 ? void 0 : log.chainMatch(index, closed);
            // add the other point to the apporpriate end
            const { segs: chain, fill } = chains[index];
            if (firstMatch.matchesHead) {
                if (firstMatch.matchesPt1) {
                    seg = seg.reverse();
                    log === null || log === void 0 ? void 0 : log.chainAddHead(index, { seg, fill }, closed);
                    chain.unshift(seg);
                }
                else {
                    log === null || log === void 0 ? void 0 : log.chainAddHead(index, { seg, fill }, closed);
                    chain.unshift(seg);
                }
            }
            else {
                if (firstMatch.matchesPt1) {
                    log === null || log === void 0 ? void 0 : log.chainAddTail(index, { seg, fill }, closed);
                    chain.push(seg);
                }
                else {
                    seg = seg.reverse();
                    log === null || log === void 0 ? void 0 : log.chainAddTail(index, { seg, fill }, closed);
                    chain.push(seg);
                }
            }
            // simplify chain
            if (firstMatch.matchesHead) {
                const next = chain[1];
                const newSeg = joinSegments(seg, next, geo);
                if (newSeg) {
                    chain.shift();
                    chain[0] = newSeg;
                    log === null || log === void 0 ? void 0 : log.chainSimplifyHead(index, { seg: newSeg, fill }, closed);
                }
            }
            else {
                const next = chain[chain.length - 2];
                const newSeg = joinSegments(next, seg, geo);
                if (newSeg) {
                    chain.pop();
                    chain[chain.length - 1] = newSeg;
                    log === null || log === void 0 ? void 0 : log.chainSimplifyTail(index, { seg: newSeg, fill }, closed);
                }
            }
            // check for closed chain
            if (closed) {
                let finalChain = chain;
                let segS = finalChain[0];
                let segE = finalChain[finalChain.length - 1];
                if (finalChain.length > 0 &&
                    geo.isEqualVec2(segS.start(), segE.end())) {
                    // see if chain is clockwise
                    let winding = 0;
                    let last = finalChain[0].start();
                    for (const seg of finalChain) {
                        const here = seg.end();
                        winding += here[1] * last[0] - here[0] * last[1];
                        last = here;
                    }
                    // this assumes Cartesian coordinates (Y is positive going up)
                    const isClockwise = winding < 0;
                    if (isClockwise === fill) {
                        finalChain = reverseChain(index);
                        segS = finalChain[0];
                        segE = finalChain[finalChain.length - 1];
                    }
                    const newStart = joinSegments(segE, segS, geo);
                    if (newStart) {
                        finalChain.pop();
                        finalChain[0] = newStart;
                        log === null || log === void 0 ? void 0 : log.chainSimplifyClose(index, { seg: newStart, fill }, closed);
                    }
                    // we have a closed chain!
                    log === null || log === void 0 ? void 0 : log.chainClose(index, closed);
                    chains.splice(index, 1);
                    regions.push(finalChain);
                }
            }
        }
        else {
            // otherwise, we matched two chains, so we need to combine those chains together
            const appendChain = (index1, index2) => {
                // index1 gets index2 appended to it, and index2 is removed
                const { segs: chain1, fill } = chains[index1];
                const { segs: chain2 } = chains[index2];
                // add seg to chain1's tail
                log === null || log === void 0 ? void 0 : log.chainAddTail(index1, { seg, fill }, closed);
                chain1.push(seg);
                // simplify chain1's tail
                const next = chain1[chain1.length - 2];
                const newEnd = joinSegments(next, seg, geo);
                if (newEnd) {
                    chain1.pop();
                    chain1[chain1.length - 1] = newEnd;
                    log === null || log === void 0 ? void 0 : log.chainSimplifyTail(index1, { seg: newEnd, fill }, closed);
                }
                // simplify chain2's head
                const tail = chain1[chain1.length - 1];
                const head = chain2[0];
                const newJoin = joinSegments(tail, head, geo);
                if (newJoin) {
                    chain2.shift();
                    chain1[chain1.length - 1] = newJoin;
                    log === null || log === void 0 ? void 0 : log.chainSimplifyJoin(index1, index2, { seg: newJoin, fill }, closed);
                }
                log === null || log === void 0 ? void 0 : log.chainJoin(index1, index2, closed);
                chains[index1].segs = chain1.concat(chain2);
                chains.splice(index2, 1);
            };
            const F = firstMatch.index;
            const S = secondMatch.index;
            log === null || log === void 0 ? void 0 : log.chainConnect(F, S, closed);
            // reverse the shorter chain, if needed
            const reverseF = chains[F].segs.length < chains[S].segs.length;
            if (firstMatch.matchesHead) {
                if (secondMatch.matchesHead) {
                    if (reverseF) {
                        if (!firstMatch.matchesPt1) {
                            // <<<< F <<<< <-- >>>> S >>>>
                            seg = seg.reverse();
                        }
                        // <<<< F <<<< --> >>>> S >>>>
                        reverseChain(F);
                        // >>>> F >>>> --> >>>> S >>>>
                        appendChain(F, S);
                    }
                    else {
                        if (firstMatch.matchesPt1) {
                            // <<<< F <<<< --> >>>> S >>>>
                            seg = seg.reverse();
                        }
                        // <<<< F <<<< <-- >>>> S >>>>
                        reverseChain(S);
                        // <<<< F <<<< <-- <<<< S <<<<   logically same as:
                        // >>>> S >>>> --> >>>> F >>>>
                        appendChain(S, F);
                    }
                }
                else {
                    if (firstMatch.matchesPt1) {
                        // <<<< F <<<< --> >>>> S >>>>
                        seg = seg.reverse();
                    }
                    // <<<< F <<<< <-- <<<< S <<<<   logically same as:
                    // >>>> S >>>> --> >>>> F >>>>
                    appendChain(S, F);
                }
            }
            else {
                if (secondMatch.matchesHead) {
                    if (!firstMatch.matchesPt1) {
                        // >>>> F >>>> <-- >>>> S >>>>
                        seg = seg.reverse();
                    }
                    // >>>> F >>>> --> >>>> S >>>>
                    appendChain(F, S);
                }
                else {
                    if (reverseF) {
                        if (firstMatch.matchesPt1) {
                            // >>>> F >>>> --> <<<< S <<<<
                            seg = seg.reverse();
                        }
                        // >>>> F >>>> <-- <<<< S <<<<
                        reverseChain(F);
                        // <<<< F <<<< <-- <<<< S <<<<   logically same as:
                        // >>>> S >>>> --> >>>> F >>>>
                        appendChain(S, F);
                    }
                    else {
                        if (!firstMatch.matchesPt1) {
                            // >>>> F >>>> <-- <<<< S <<<<
                            seg = seg.reverse();
                        }
                        // >>>> F >>>> --> <<<< S <<<<
                        reverseChain(S);
                        // >>>> F >>>> --> >>>> S >>>>
                        appendChain(F, S);
                    }
                }
            }
        }
    }
    for (const { segs } of openChains) {
        regions.push(segs);
    }
    return regions;
}
function segmentsToReceiver(segments, geo, receiver, matrix) {
    const [a, b, c, d, e, f] = matrix;
    receiver.beginPath();
    for (const region of segments) {
        if (region.length <= 0) {
            continue;
        }
        for (let i = 0; i < region.length; i++) {
            const seg = region[i];
            if (i === 0) {
                const [p0x, p0y] = seg.start();
                receiver.moveTo(a * p0x + c * p0y + e, b * p0x + d * p0y + f);
            }
            if (seg instanceof SegmentLine) {
                const [p1x, p1y] = seg.p1;
                receiver.lineTo(a * p1x + c * p1y + e, b * p1x + d * p1y + f);
            }
            else if (seg instanceof SegmentCurve) {
                const [p1x, p1y] = seg.p1;
                const [p2x, p2y] = seg.p2;
                const [p3x, p3y] = seg.p3;
                receiver.bezierCurveTo(a * p1x + c * p1y + e, b * p1x + d * p1y + f, a * p2x + c * p2y + e, b * p2x + d * p2y + f, a * p3x + c * p3y + e, b * p3x + d * p3y + f);
            }
            else {
                throw new Error("PolyBool: Unknown segment instance");
            }
        }
        const first = region[0];
        const last = region[region.length - 1];
        if (geo.isEqualVec2(first.start(), last.end())) {
            receiver.closePath();
        }
    }
    return receiver;
}

//
// polybool - Boolean operations on polygons (union, intersection, etc)
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/polybool
// SPDX-License-Identifier: 0BSD
//
class Shape {
    constructor(geo, segments = null, log = null) {
        this.pathState = { kind: "beginPath" };
        this.saveStack = [];
        this.matrix = [1, 0, 0, 1, 0, 0];
        this.geo = geo;
        this.log = log;
        if (segments) {
            this.resultState = { state: "seg", segments };
        }
        else {
            this.resultState = {
                state: "new",
                selfIntersect: new Intersecter(true, this.geo, this.log),
            };
        }
    }
    setTransform(a, b, c, d, e, f) {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        this.matrix = [a, b, c, d, e, f];
        return this;
    }
    resetTransform() {
        this.matrix = [1, 0, 0, 1, 0, 0];
        return this;
    }
    getTransform() {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        const [a, b, c, d, e, f] = this.matrix;
        return { a, b, c, d, e, f };
    }
    transform(a, b, c, d, e, f) {
        const [a0, b0, c0, d0, e0, f0] = this.matrix;
        this.matrix = [
            a0 * a + c0 * b,
            b0 * a + d0 * b,
            a0 * c + c0 * d,
            b0 * c + d0 * d,
            a0 * e + c0 * f + e0,
            b0 * e + d0 * f + f0,
        ];
        return this;
    }
    rotate(angle) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const [a0, b0, c0, d0, e0, f0] = this.matrix;
        this.matrix = [
            a0 * cos + c0 * sin,
            b0 * cos + d0 * sin,
            c0 * cos - a0 * sin,
            d0 * cos - b0 * sin,
            e0,
            f0,
        ];
        return this;
    }
    rotateDeg(angle) {
        const ang = ((angle % 360) + 360) % 360;
        if (ang === 0) {
            return this;
        }
        let cos = 0;
        let sin = 0;
        if (ang === 90) {
            sin = 1;
        }
        else if (ang === 180) {
            cos = -1;
        }
        else if (ang === 270) {
            sin = -1;
        }
        else if (ang === 45) {
            cos = sin = Math.SQRT1_2;
        }
        else if (ang === 135) {
            sin = Math.SQRT1_2;
            cos = -Math.SQRT1_2;
        }
        else if (ang === 225) {
            cos = sin = -Math.SQRT1_2;
        }
        else if (ang === 315) {
            cos = Math.SQRT1_2;
            sin = -Math.SQRT1_2;
        }
        else if (ang === 30) {
            cos = Math.sqrt(3) / 2;
            sin = 0.5;
        }
        else if (ang === 60) {
            cos = 0.5;
            sin = Math.sqrt(3) / 2;
        }
        else if (ang === 120) {
            cos = -0.5;
            sin = Math.sqrt(3) / 2;
        }
        else if (ang === 150) {
            cos = -Math.sqrt(3) / 2;
            sin = 0.5;
        }
        else if (ang === 210) {
            cos = -Math.sqrt(3) / 2;
            sin = -0.5;
        }
        else if (ang === 240) {
            cos = -0.5;
            sin = -Math.sqrt(3) / 2;
        }
        else if (ang === 300) {
            cos = 0.5;
            sin = -Math.sqrt(3) / 2;
        }
        else if (ang === 330) {
            cos = Math.sqrt(3) / 2;
            sin = -0.5;
        }
        else {
            const rad = (Math.PI * ang) / 180;
            cos = Math.cos(rad);
            sin = Math.sin(rad);
        }
        const [a0, b0, c0, d0, e0, f0] = this.matrix;
        this.matrix = [
            a0 * cos + c0 * sin,
            b0 * cos + d0 * sin,
            c0 * cos - a0 * sin,
            d0 * cos - b0 * sin,
            e0,
            f0,
        ];
        return this;
    }
    scale(sx, sy) {
        const [a0, b0, c0, d0, e0, f0] = this.matrix;
        this.matrix = [a0 * sx, b0 * sx, c0 * sy, d0 * sy, e0, f0];
        return this;
    }
    translate(tx, ty) {
        const [a0, b0, c0, d0, e0, f0] = this.matrix;
        this.matrix = [
            a0,
            b0,
            c0,
            d0,
            a0 * tx + c0 * ty + e0,
            b0 * tx + d0 * ty + f0,
        ];
        return this;
    }
    save() {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        this.saveStack.push({ matrix: this.matrix });
        return this;
    }
    restore() {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        const s = this.saveStack.pop();
        if (s) {
            this.matrix = s.matrix;
        }
        return this;
    }
    transformPoint(x, y) {
        const [a, b, c, d, e, f] = this.matrix;
        return [a * x + c * y + e, b * x + d * y + f];
    }
    beginPath() {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        this.resultState.selfIntersect.beginPath();
        return this.endPath();
    }
    moveTo(x, y) {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        if (this.pathState.kind !== "beginPath") {
            this.beginPath();
        }
        const current = this.transformPoint(x, y);
        this.pathState = {
            kind: "moveTo",
            start: current,
            current,
        };
        return this;
    }
    lineTo(x, y) {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        if (this.pathState.kind !== "moveTo") {
            throw new Error("PolyBool: Must call moveTo prior to calling lineTo");
        }
        const current = this.transformPoint(x, y);
        this.resultState.selfIntersect.addLine(this.pathState.current, current);
        this.pathState.current = current;
        return this;
    }
    rect(x, y, width, height) {
        return this.moveTo(x, y)
            .lineTo(x + width, y)
            .lineTo(x + width, y + height)
            .lineTo(x, y + height)
            .closePath()
            .moveTo(x, y);
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        if (this.pathState.kind !== "moveTo") {
            throw new Error("PolyBool: Must call moveTo prior to calling bezierCurveTo");
        }
        const current = this.transformPoint(x, y);
        this.resultState.selfIntersect.addCurve(this.pathState.current, this.transformPoint(cp1x, cp1y), this.transformPoint(cp2x, cp2y), current);
        this.pathState.current = current;
        return this;
    }
    closePath() {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        // close with a line if needed
        if (this.pathState.kind === "moveTo" &&
            !this.geo.isEqualVec2(this.pathState.start, this.pathState.current)) {
            this.resultState.selfIntersect.addLine(this.pathState.current, this.pathState.start);
            this.pathState.current = this.pathState.start;
        }
        this.resultState.selfIntersect.closePath();
        return this.endPath();
    }
    endPath() {
        if (this.resultState.state !== "new") {
            throw new Error("PolyBool: Cannot change shape after using it in an operation");
        }
        this.pathState = { kind: "beginPath" };
        return this;
    }
    selfIntersect() {
        if (this.resultState.state === "new") {
            this.resultState = {
                state: "seg",
                segments: this.resultState.selfIntersect.calculate(),
            };
        }
        return this.resultState.segments;
    }
    segments() {
        if (this.resultState.state !== "reg") {
            const seg = this.selfIntersect();
            this.resultState = {
                state: "reg",
                segments: seg,
                regions: SegmentChainer(seg, this.geo, this.log),
            };
        }
        return this.resultState.regions;
    }
    output(receiver, matrix = [1, 0, 0, 1, 0, 0]) {
        return segmentsToReceiver(this.segments(), this.geo, receiver, matrix);
    }
    combine(shape) {
        const int = new Intersecter(false, this.geo, this.log);
        for (const seg of this.selfIntersect()) {
            int.addSegment(copySegmentBool(seg, this.log), true);
        }
        for (const seg of shape.selfIntersect()) {
            int.addSegment(copySegmentBool(seg, this.log), false);
        }
        return new ShapeCombined(int.calculate(), this.geo, this.log);
    }
}
class ShapeCombined {
    constructor(segments, geo, log = null) {
        this.geo = geo;
        this.segments = segments;
        this.log = log;
    }
    union() {
        return new Shape(this.geo, SegmentSelector.union(this.segments, this.log), this.log);
    }
    intersect() {
        return new Shape(this.geo, SegmentSelector.intersect(this.segments, this.log), this.log);
    }
    difference() {
        return new Shape(this.geo, SegmentSelector.difference(this.segments, this.log), this.log);
    }
    differenceRev() {
        return new Shape(this.geo, SegmentSelector.differenceRev(this.segments, this.log), this.log);
    }
    xor() {
        return new Shape(this.geo, SegmentSelector.xor(this.segments, this.log), this.log);
    }
}

//
// polybool - Boolean operations on polygons (union, intersection, etc)
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/polybool
// SPDX-License-Identifier: 0BSD
//
class BuildLog {
    constructor() {
        this.list = [];
        this.nextSegmentId = 0;
        this.curVert = NaN;
    }
    push(type, data) {
        this.list.push({
            type,
            data: JSON.parse(JSON.stringify(data)),
        });
    }
    info(msg, data) {
        this.push("info", { msg, data });
    }
    segmentId() {
        return this.nextSegmentId++;
    }
    checkIntersection(seg1, seg2) {
        this.push("check", { seg1, seg2 });
    }
    segmentDivide(seg, p) {
        this.push("div_seg", { seg, p });
    }
    segmentChop(seg) {
        this.push("chop", { seg });
    }
    statusRemove(seg) {
        this.push("pop_seg", { seg });
    }
    segmentUpdate(seg) {
        this.push("seg_update", { seg });
    }
    segmentNew(seg, primary) {
        this.push("new_seg", { seg, primary });
    }
    tempStatus(seg, above, below) {
        this.push("temp_status", { seg, above, below });
    }
    rewind(seg) {
        this.push("rewind", { seg });
    }
    status(seg, above, below) {
        this.push("status", { seg, above, below });
    }
    vert(x) {
        if (x !== this.curVert) {
            this.push("vert", { x });
            this.curVert = x;
        }
    }
    selected(segs) {
        this.push("selected", { segs });
    }
    chainStart(sf, closed) {
        this.push("chain_start", { sf, closed });
    }
    chainNew(sf, closed) {
        this.push("chain_new", { sf, closed });
    }
    chainMatch(index, closed) {
        this.push("chain_match", { index, closed });
    }
    chainClose(index, closed) {
        this.push("chain_close", { index, closed });
    }
    chainAddHead(index, sf, closed) {
        this.push("chain_add_head", { index, sf, closed });
    }
    chainAddTail(index, sf, closed) {
        this.push("chain_add_tail", { index, sf, closed });
    }
    chainSimplifyHead(index, sf, closed) {
        this.push("chain_simp_head", { index, sf, closed });
    }
    chainSimplifyTail(index, sf, closed) {
        this.push("chain_simp_tail", { index, sf, closed });
    }
    chainSimplifyClose(index, sf, closed) {
        this.push("chain_simp_close", { index, sf, closed });
    }
    chainSimplifyJoin(index1, index2, sf, closed) {
        this.push("chain_simp_join", { index1, index2, sf, closed });
    }
    chainConnect(index1, index2, closed) {
        this.push("chain_con", { index1, index2, closed });
    }
    chainReverse(index, closed) {
        this.push("chain_rev", { index, closed });
    }
    chainJoin(index1, index2, closed) {
        this.push("chain_join", { index1, index2, closed });
    }
    done() {
        this.push("done", null);
    }
}

//
// polybool - Boolean operations on polygons (union, intersection, etc)
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/polybool
// SPDX-License-Identifier: 0BSD
//
class PolyBool {
    constructor(geo = new GeometryEpsilon(), log = null) {
        this.geo = geo;
        this.log = log;
    }
    shape() {
        return new Shape(this.geo, null, this.log);
    }
    buildLog(enable) {
        var _a;
        this.log = enable ? new BuildLog() : null;
        return (_a = this.log) === null || _a === void 0 ? void 0 : _a.list;
    }
    segments(poly) {
        const shape = this.shape();
        shape.beginPath();
        for (const region of poly.regions) {
            const lastPoint = region[region.length - 1];
            shape.moveTo(lastPoint[lastPoint.length - 2], lastPoint[lastPoint.length - 1]);
            for (const p of region) {
                if (p.length === 2) {
                    shape.lineTo(p[0], p[1]);
                }
                else if (p.length === 6) {
                    shape.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
                }
                else {
                    throw new Error("PolyBool: Invalid point in region");
                }
            }
            shape.closePath();
        }
        return { shape, inverted: poly.inverted };
    }
    combine(segments1, segments2) {
        return {
            shape: segments1.shape.combine(segments2.shape),
            inverted1: segments1.inverted,
            inverted2: segments2.inverted,
        };
    }
    selectUnion(combined) {
        return {
            shape: combined.inverted1
                ? combined.inverted2
                    ? combined.shape.intersect()
                    : combined.shape.difference()
                : combined.inverted2
                    ? combined.shape.differenceRev()
                    : combined.shape.union(),
            inverted: combined.inverted1 || combined.inverted2,
        };
    }
    selectIntersect(combined) {
        return {
            shape: combined.inverted1
                ? combined.inverted2
                    ? combined.shape.union()
                    : combined.shape.differenceRev()
                : combined.inverted2
                    ? combined.shape.difference()
                    : combined.shape.intersect(),
            inverted: combined.inverted1 && combined.inverted2,
        };
    }
    selectDifference(combined) {
        return {
            shape: combined.inverted1
                ? combined.inverted2
                    ? combined.shape.differenceRev()
                    : combined.shape.union()
                : combined.inverted2
                    ? combined.shape.intersect()
                    : combined.shape.difference(),
            inverted: combined.inverted1 && !combined.inverted2,
        };
    }
    selectDifferenceRev(combined) {
        return {
            shape: combined.inverted1
                ? combined.inverted2
                    ? combined.shape.difference()
                    : combined.shape.intersect()
                : combined.inverted2
                    ? combined.shape.union()
                    : combined.shape.differenceRev(),
            inverted: !combined.inverted1 && combined.inverted2,
        };
    }
    selectXor(combined) {
        return {
            shape: combined.shape.xor(),
            inverted: combined.inverted1 !== combined.inverted2,
        };
    }
    polygon(segments) {
        const regions = [];
        const receiver = {
            beginPath: () => { },
            moveTo: () => {
                regions.push([]);
            },
            lineTo: (x, y) => {
                regions[regions.length - 1].push([x, y]);
            },
            bezierCurveTo: (c1x, c1y, c2x, c2y, x, y) => {
                regions[regions.length - 1].push([c1x, c1y, c2x, c2y, x, y]);
            },
            closePath: () => { },
        };
        segments.shape.output(receiver);
        return { regions, inverted: segments.inverted };
    }
    // helper functions for common operations
    union(poly1, poly2) {
        const seg1 = this.segments(poly1);
        const seg2 = this.segments(poly2);
        const comb = this.combine(seg1, seg2);
        const seg3 = this.selectUnion(comb);
        return this.polygon(seg3);
    }
    intersect(poly1, poly2) {
        const seg1 = this.segments(poly1);
        const seg2 = this.segments(poly2);
        const comb = this.combine(seg1, seg2);
        const seg3 = this.selectIntersect(comb);
        return this.polygon(seg3);
    }
    difference(poly1, poly2) {
        const seg1 = this.segments(poly1);
        const seg2 = this.segments(poly2);
        const comb = this.combine(seg1, seg2);
        const seg3 = this.selectDifference(comb);
        return this.polygon(seg3);
    }
    differenceRev(poly1, poly2) {
        const seg1 = this.segments(poly1);
        const seg2 = this.segments(poly2);
        const comb = this.combine(seg1, seg2);
        const seg3 = this.selectDifferenceRev(comb);
        return this.polygon(seg3);
    }
    xor(poly1, poly2) {
        const seg1 = this.segments(poly1);
        const seg2 = this.segments(poly2);
        const comb = this.combine(seg1, seg2);
        const seg3 = this.selectXor(comb);
        return this.polygon(seg3);
    }
}
new PolyBool();

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class GeometryExt extends GeometryEpsilon {
    atan2Deg(dy, dx) {
        if (Math.abs(dy) < this.epsilon) {
            return dx > 0 || Math.abs(dx) < this.epsilon ? 0 : 180;
        }
        else if (Math.abs(dx) < this.epsilon) {
            return dy < 0 ? 270 : 90;
        }
        else if (Math.abs(dx - dy) < this.epsilon) {
            return dx < 0 ? 225 : 45;
        }
        else if (Math.abs(dx + dy) < this.epsilon) {
            return dx < 0 ? 135 : 315;
        }
        return ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
    }
    sinDeg(degrees) {
        const ang = ((degrees % 360) + 360) % 360;
        switch (ang) {
            case 0:
            case 180:
                return 0;
            case 30:
            case 150:
                return 0.5;
            case 45:
            case 135:
                return Math.SQRT1_2;
            case 60:
            case 120:
                return Math.sqrt(3) / 2;
            case 90:
                return 1;
            case 210:
            case 330:
                return -0.5;
            case 225:
            case 315:
                return -Math.SQRT1_2;
            case 240:
            case 300:
                return -Math.sqrt(3) / 2;
            case 270:
                return -1;
            default:
                return Math.sin((ang * Math.PI) / 180);
        }
    }
    cosDeg(degrees) {
        const ang = ((degrees % 360) + 360) % 360;
        switch (ang) {
            case 0:
                return 1;
            case 30:
            case 330:
                return Math.sqrt(3) / 2;
            case 45:
            case 315:
                return Math.SQRT1_2;
            case 60:
            case 300:
                return 0.5;
            case 90:
            case 270:
                return 0;
            case 120:
            case 240:
                return -0.5;
            case 135:
            case 225:
                return -Math.SQRT1_2;
            case 150:
            case 210:
                return -Math.sqrt(3) / 2;
            case 180:
                return -1;
            default:
                return Math.cos((ang * Math.PI) / 180);
        }
    }
    linesIntersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
        // returns null if the lines are coincident (e.g., parallel or on top of
        // each other)
        const adx = a2x - a1x;
        const ady = a2y - a1y;
        const bdx = b2x - b1x;
        const bdy = b2y - b1y;
        const axb = adx * bdy - ady * bdx;
        if (this.snap0(axb) === 0) {
            return null; // lines are coincident
        }
        const dx = a1x - b1x;
        const dy = a1y - b1y;
        const A = this.snap01((bdx * dy - bdy * dx) / axb);
        const B = this.snap01((adx * dy - ady * dx) / axb);
        return {
            p: [a1x + A * adx, a1y + A * ady],
            alongA: A,
            alongB: B,
        };
    }
}
const geo = new GeometryExt();
const polybool = new PolyBool(geo);

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
function ApplyKerf(shape, kerf) {
    if (geo.snap0(kerf) === 0) {
        return shape;
    }
    const paths = [];
    shape.output({
        beginPath: () => { },
        moveTo: (x, y) => {
            paths.push({
                path: [],
                closed: false,
            });
        },
        lineTo: (x, y) => {
            paths[paths.length - 1].path.push([x, y]);
        },
        bezierCurveTo: (c1x, c1y, c2x, c2y, x, y) => {
            paths[paths.length - 1].path.push([c1x, c1y, c2x, c2y, x, y]);
        },
        closePath: () => {
            paths[paths.length - 1].closed = true;
        },
    });
    const halfKerf = Math.abs(kerf) / 2;
    const dir = Math.sign(kerf) * 90;
    const result = polybool.shape().beginPath();
    for (const { path, closed } of paths) {
        let newPath = path;
        if (closed) {
            newPath = [];
            const tangentAt = (i, start) => {
                const cmd = path[i];
                const last = path[(i + path.length - 1) % path.length];
                const lx = last[last.length - 2];
                const ly = last[last.length - 1];
                if (cmd.length === 2) {
                    // start and end points have same tangent
                    return geo.atan2Deg(ly - cmd[1], lx - cmd[0]);
                }
                else {
                    return start
                        ? geo.atan2Deg(ly - cmd[1], lx - cmd[0])
                        : geo.atan2Deg(cmd[3] - cmd[5], cmd[2] - cmd[4]);
                }
            };
            const offsetByAngle = (p, angle, dist) => [
                p[0] + dist * geo.cosDeg(angle),
                p[1] + dist * geo.sinDeg(angle),
            ];
            const offsetByNormal = (p, tangentAngle, dist) => offsetByAngle(p, tangentAngle - dir, dist);
            const roundedCommands = [];
            for (let i = 0; i < path.length; i++) {
                const ip = (i + path.length - 1) % path.length;
                const cmd = path[i];
                const a1 = tangentAt(ip, false);
                const a2 = tangentAt(i, true);
                const a3 = tangentAt(i, false);
                const dang = Math.min(Math.abs(a1 - a2), Math.abs(a1 + 360 - a2), Math.abs(a1 - (a2 + 360)));
                if (geo.snap0(dang) > 0) {
                    const cdist = (halfKerf * 4 * Math.tan(((dang / 4) * Math.PI) / 180)) / 3;
                    const last = path[ip];
                    const lx = last[last.length - 2];
                    const ly = last[last.length - 1];
                    const lxy = [lx, ly];
                    roundedCommands.push(newPath.length);
                    const c1 = offsetByAngle(offsetByNormal(lxy, a1, halfKerf), a1, -cdist);
                    const c2 = offsetByAngle(offsetByNormal(lxy, a2, halfKerf), a2, cdist);
                    const to = offsetByNormal(lxy, a2, halfKerf);
                    newPath.push([c1[0], c1[1], c2[0], c2[1], to[0], to[1]]);
                }
                if (cmd.length === 2) {
                    newPath.push(offsetByNormal(cmd, a3, halfKerf));
                }
                else {
                    const c1 = offsetByNormal([cmd[0], cmd[1]], a2, halfKerf);
                    const c2 = offsetByNormal([cmd[2], cmd[3]], a3, halfKerf);
                    const to = offsetByNormal([cmd[4], cmd[5]], a3, halfKerf);
                    newPath.push([c1[0], c1[1], c2[0], c2[1], to[0], to[1]]);
                }
            }
            // create loops from inner rounded corners
            for (const i of roundedCommands) {
                const ip = (i + newPath.length - 1) % newPath.length;
                const ip2 = (i + newPath.length - 2) % newPath.length;
                const ix = (i + 1) % newPath.length;
                const prev2 = newPath[ip2];
                const prev = newPath[ip];
                const here = newPath[i];
                const next = newPath[ix];
                if (here.length === 6) {
                    // check if next/prev intersect, and if so, turn here into a loop
                    const res = geo.linesIntersect(prev.length === 2 ? prev2[prev2.length - 2] : prev[2], prev.length === 2 ? prev2[prev2.length - 1] : prev[3], prev[prev.length - 2], prev[prev.length - 1], here[here.length - 2], here[here.length - 1], next[0], next[1]);
                    if (res &&
                        res.alongA > 0 &&
                        res.alongA < 1 &&
                        res.alongB > 0 &&
                        res.alongB < 1) {
                        here[0] = prev[prev.length - 2];
                        here[1] = prev[prev.length - 1];
                        here[2] = here[4];
                        here[3] = here[5];
                        prev[prev.length - 2] = res.p[0];
                        prev[prev.length - 1] = res.p[1];
                        here[4] = res.p[0];
                        here[5] = res.p[1];
                    }
                }
            }
        }
        if (newPath.length > 0) {
            const lastPt = newPath[newPath.length - 1];
            result.moveTo(lastPt[lastPt.length - 2], lastPt[lastPt.length - 1]);
            for (const pt of newPath) {
                if (pt.length === 2) {
                    result.lineTo(pt[0], pt[1]);
                }
                else {
                    result.bezierCurveTo(pt[0], pt[1], pt[2], pt[3], pt[4], pt[5]);
                }
            }
        }
    }
    return result;
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class Surface {
    constructor(thickness, kerf, border = polybool.shape(), cuts = polybool.shape(), scores = polybool.shape()) {
        this.home = { origin: [0, 0], angle: 0 };
        this.thickness = thickness;
        this.kerf = kerf;
        this.border = border;
        this.cuts = cuts;
        this.scores = scores;
    }
    replace(opts) {
        var _a, _b, _c, _d, _e;
        const surface = new Surface((_a = opts.thickness) !== null && _a !== void 0 ? _a : this.thickness, (_b = opts.kerf) !== null && _b !== void 0 ? _b : this.kerf, (_c = opts.border) !== null && _c !== void 0 ? _c : this.border, (_d = opts.cuts) !== null && _d !== void 0 ? _d : this.cuts, (_e = opts.scores) !== null && _e !== void 0 ? _e : this.scores);
        surface.setHome(this.home.origin, this.home.angle);
        return surface;
    }
    copy() {
        return this.replace({});
    }
    static combine(border, a, b) {
        const cuts = a.cuts.combine(b.cuts).union().combine(border).intersect();
        const scores = a.scores
            .combine(b.scores)
            .union()
            .combine(border)
            .intersect();
        return a.replace({
            border,
            cuts,
            scores,
        });
    }
    static union(a, b) {
        return Surface.combine(a.border.combine(b.border).union(), a, b);
    }
    static intersect(a, b) {
        return Surface.combine(a.border.combine(b.border).intersect(), a, b);
    }
    static subtract(a, b) {
        return Surface.combine(a.border.combine(b.border).difference(), a, b);
    }
    static xor(a, b) {
        return Surface.combine(a.border.combine(b.border).xor(), a, b);
    }
    unionBorder(border) {
        return Surface.union(this, this.replace({
            border,
            cuts: polybool.shape(),
            scores: polybool.shape(),
        }));
    }
    subtractBorder(border) {
        return Surface.subtract(this, this.replace({
            border,
            cuts: polybool.shape(),
            scores: polybool.shape(),
        }));
    }
    setHome(origin, angle) {
        this.home = { origin, angle };
        return this;
    }
    newShape() {
        return polybool
            .shape()
            .translate(this.home.origin[0], this.home.origin[1])
            .rotateDeg(this.home.angle);
    }
    boundingBox() {
        const min = [Infinity, Infinity];
        const max = [-Infinity, -Infinity];
        let empty = true;
        const check = (shape) => {
            for (const segs of shape.segments()) {
                for (const seg of segs) {
                    const bb = seg.boundingBox();
                    min[0] = Math.min(min[0], bb[0][0]);
                    min[1] = Math.min(min[1], bb[0][1]);
                    max[0] = Math.max(max[0], bb[1][0]);
                    max[1] = Math.max(max[1], bb[1][1]);
                    empty = false;
                }
            }
        };
        check(this.border);
        check(this.cuts);
        check(this.scores);
        if (empty) {
            min[0] = min[1] = max[0] = max[1] = 0;
        }
        return [min, max];
    }
    applyKerf() {
        if (geo.snap0(this.kerf) === 0) {
            return this;
        }
        return this.replace({
            kerf: 0,
            border: ApplyKerf(this.border, this.kerf),
        });
    }
}

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
function inspect(v, tab = 0) {
    switch (typeof v) {
        case 'string':
            return JSON.stringify(v).replace(/--/g, '\\u002d-');
        case 'boolean':
        case 'number':
            return JSON.stringify(v);
        case 'object':
            if (v === null) {
                return 'null';
            }
            else if (Array.isArray(v)) {
                if (v.every((vv) => typeof vv === 'object' && vv !== null)) {
                    const out = [];
                    for (let i = 0; i < v.length; i++) {
                        const s = inspect(v[i], tab);
                        if (s) {
                            out.push(s);
                        }
                    }
                    return `[${out.join(', ')}]`;
                }
                else {
                    let out = [];
                    for (let i = 0; i < v.length; i++) {
                        const s = inspect(v[i]);
                        if (s) {
                            out.push(s);
                        }
                    }
                    const s = `[${out.join(',')}]`;
                    if (s.length < 60 && !s.includes('\n')) {
                        return s;
                    }
                    out = [];
                    for (let i = 0; i < v.length; i++) {
                        const s = inspect(v[i], tab + 1);
                        if (s) {
                            out.push(s);
                        }
                    }
                    return `[\n${'  '.repeat(tab + 1)}${out.join(',\n')}\n${'  '.repeat(tab)}]`;
                }
            }
            else {
                const out = [];
                for (const [k, u] of Object.entries(v)) {
                    const ks = inspect(k);
                    const us = inspect(u, tab + 1);
                    if (us) {
                        out.push(`${'  '.repeat(tab + 1)}${ks}: ${us}`);
                    }
                }
                return `{\n${out.join(',\n')}\n${'  '.repeat(tab)}}`;
            }
    }
    return '';
}
class DocumentSVG extends DocumentBase {
    constructor(settings) {
        super(settings);
        this.surfaces = [];
        this.comments = [];
        this.settings = settings;
    }
    addSurface(offset, surface, cutColor, scoreColor) {
        this.surfaces.push({
            offset,
            surface: surface.applyKerf(),
            cutColor,
            scoreColor,
        });
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    toFile() {
        const num = (n) => `${Math.round(n * 1000) / 1000}`;
        const data = [];
        let originX = 0;
        let originY = 0;
        let width = 100;
        let height = 100;
        if (this.surfaces.length > 0) {
            const border = [
                [Infinity, Infinity],
                [-Infinity, -Infinity],
            ];
            for (const { offset, surface } of this.surfaces) {
                const bb = surface.boundingBox();
                border[0][0] = Math.min(border[0][0], offset[0] + bb[0][0] - 10);
                border[0][1] = Math.min(border[0][1], offset[1] + bb[0][1] - 10);
                border[1][0] = Math.max(border[1][0], offset[0] + bb[1][0] + 10);
                border[1][1] = Math.max(border[1][1], offset[1] + bb[1][1] + 10);
            }
            originX = border[0][0];
            originY = border[0][1];
            width = border[1][0] - border[0][0];
            height = border[1][1] - border[0][1];
            let gid = 0;
            const outputGroupOpen = () => {
                data.push(`<g id="p-${gid++}" style="fill:none;stroke-linecap:round;stroke-linejoin:round;">`);
            };
            const outputGroupClose = () => {
                data.push(`</g>`);
            };
            const outputPath = (offset, shape, color) => {
                const d = [];
                shape.output({
                    beginPath: () => { },
                    moveTo: (x, y) => {
                        d.push(`M${num(x)} ${num(y)}`);
                    },
                    lineTo: (x, y) => {
                        d.push(`L${num(x)} ${num(y)}`);
                    },
                    bezierCurveTo: (c1x, c1y, c2x, c2y, x, y) => {
                        d.push(`C${num(c1x)} ${num(c1y)} ${num(c2x)} ${num(c2y)} ${num(x)} ${num(y)}`);
                    },
                    closePath: () => {
                        d.push('Z');
                    },
                }, [1, 0, 0, 1, offset[0], offset[1]]);
                data.push(`<path stroke="${color}" stroke-width="1" d="${d.join('')}" />`);
            };
            for (const { offset, surface, cutColor, scoreColor } of this.surfaces) {
                outputGroupOpen();
                outputGroupOpen();
                outputPath(offset, surface.scores, scoreColor);
                outputGroupClose();
                outputGroupOpen();
                outputPath(offset, surface.border, cutColor);
                outputPath(offset, surface.cuts, cutColor);
                outputGroupClose();
                outputGroupClose();
            }
        }
        const { units } = this.settings;
        return {
            mimeType: 'image/svg+xml',
            extension: '.svg',
            data: new TextEncoder().encode(`<?xml version='1.0' encoding='utf-8'?>
<svg
  width="${num(width)}${units}"
  height="${num(height)}${units}"
  viewBox="${num(originX)} ${num(originY)} ${num(width)} ${num(height)}"
  xmlns="http://www.w3.org/2000/svg">
<!--
Generated by boxburner
by Sean Connelly (@velipso), https://sean.fun
Project Home: https://github.com/velipso/boxburner
SPDX-License-Identifier: 0BSD

Exported on: ${new Date().toString()}
-->
${this.comments.map((comment) => `<!--\n${inspect(comment)}\n-->`).join('\n')}
${data.join('\n')}
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
class EdgeBase {
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
class JointBase extends EdgeBase {
    thickness(thickness, params) {
        return this.jointThickness(false, thickness, params);
    }
    draw(surface, length, thickness, params) {
        return this.jointDraw(surface, length, false, thickness, params);
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
    jointThickness(callerInvert, thickness, { length1, length2, invert: userInvert }) {
        const invert = callerInvert !== userInvert;
        return (invert ? length2 : length1) * thickness;
    }
    jointDraw(surface, _length, _callerInvert, _thickness, _params) {
        return surface;
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
function boxJointFingerSpacer({ length, width1, width2, cornerDistance1, cornerDistance2, centerDistance, }, forward) {
    let x = 0;
    const fwd = (d, finger) => {
        forward(x, d, finger);
        x += d;
    };
    const fingers = (count) => {
        if (count > 10000) {
            throw new Error('Too many fingers');
        }
        fwd(width1, true);
        for (let i = 0; i < count; i++) {
            fwd(width2, false);
            fwd(width1, true);
        }
    };
    const left = length - cornerDistance1 - cornerDistance2;
    if (centerDistance > 0) {
        const half = (left - centerDistance) / 2;
        const fingerCount = Math.floor((half - width1) / (width1 + width2));
        const fingerLen = width1 + fingerCount * (width1 + width2);
        fwd(cornerDistance1 + (half - fingerLen) / 2, false);
        fingers(fingerCount);
        fwd(centerDistance + half - fingerLen, false);
        fingers(fingerCount);
        fwd(cornerDistance2 + (half - fingerLen) / 2, false);
    }
    else {
        const fingerCount = Math.floor((left - width1) / (width1 + width2));
        const fingerLen = width1 + fingerCount * (width1 + width2);
        fwd(cornerDistance1 + (left - fingerLen) / 2, false);
        fingers(fingerCount);
        fwd(cornerDistance2 + (left - fingerLen) / 2, false);
    }
}
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
                cornerDistance1Delta: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 0,
                        title: 'Corner Distance 1 Delta',
                        description: 'Additional corner distance',
                    },
                },
                cornerDistance2Delta: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 0,
                        title: 'Corner Distance 2 Delta',
                        description: 'Additional corner distance',
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
    jointThickness(callerInvert, thickness, { length1, length2, invert: userInvert }) {
        const invert = callerInvert !== userInvert;
        return (invert ? length2 : length1) * thickness;
    }
    jointDraw(surface, length, callerInvert, thickness, { invert: userInvert, width1, length1, width2, length2, play, cornerDistance, cornerDistance1Delta, cornerDistance2Delta, centerDistance, }) {
        const invert = callerInvert !== userInvert;
        const th = (invert ? length2 : length1) * thickness;
        boxJointFingerSpacer({
            length,
            width1,
            width2,
            cornerDistance1: cornerDistance + (cornerDistance1Delta !== null && cornerDistance1Delta !== void 0 ? cornerDistance1Delta : 0),
            cornerDistance2: cornerDistance + (cornerDistance2Delta !== null && cornerDistance2Delta !== void 0 ? cornerDistance2Delta : 0),
            centerDistance,
        }, (x, d, finger) => {
            if (finger === invert) {
                surface = surface.subtractBorder(surface
                    .newShape()
                    .beginPath()
                    .rect(x - play / 2, 0, d + play, th)
                    .closePath());
            }
        });
        return surface;
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
    thickness(_thickness, { height }) {
        return Math.max(0, height);
    }
    draw(surface, length, thickness, { flatWidth, curveWidth, curveAmount, height }) {
        if (height <= 0) {
            return surface;
        }
        return surface.subtractBorder(surface
            .newShape()
            .beginPath()
            .moveTo(flatWidth * length, 0)
            .bezierCurveTo((flatWidth + curveAmount) * length, 0, (flatWidth + curveWidth - curveAmount) * length, height, (flatWidth + curveWidth) * length, height)
            .lineTo((1 - flatWidth - curveWidth) * length, height)
            .bezierCurveTo((1 - flatWidth - curveWidth + curveAmount) * length, height, (1 - flatWidth - curveAmount) * length, 0, (1 - flatWidth) * length, 0)
            .closePath());
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
                cornerDistance1Delta: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 0,
                        title: 'Corner Distance 1 Delta',
                        description: 'Additional corner distance',
                    },
                },
                cornerDistance2Delta: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: null,
                        defaultNotNull: 0,
                        title: 'Corner Distance 2 Delta',
                        description: 'Additional corner distance',
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
    jointThickness(callerInvert, thickness, { tenonLength, invert: userInvert, mortiseEdge }) {
        const invert = callerInvert !== userInvert;
        if (invert) {
            if (mortiseEdge) {
                const edge = otherEdges.find((e) => e.name() === mortiseEdge.kind);
                if (!edge) {
                    throw new Error('Invalid mortise edge');
                }
                return edge.thickness(thickness, mortiseEdge.params);
            }
            return 0;
        }
        return tenonLength * thickness;
    }
    jointDraw(surface, length, callerInvert, thickness, { invert: userInvert, width1, tenonLength, width2, holeDistance, play, thicknessPlay, cornerDistance, cornerDistance1Delta, cornerDistance2Delta, centerDistance, mortiseEdge, }) {
        const invert = callerInvert !== userInvert;
        let eth = 0;
        if (invert) {
            if (mortiseEdge) {
                const edge = otherEdges.find((e) => e.name() === mortiseEdge.kind);
                if (!edge) {
                    throw new Error('Invalid mortise edge');
                }
                eth = edge.thickness(thickness, mortiseEdge.params);
                surface = edge.draw(surface, length, thickness, mortiseEdge.params);
            }
        }
        boxJointFingerSpacer({
            length,
            width1,
            width2,
            cornerDistance1: cornerDistance + (cornerDistance1Delta !== null && cornerDistance1Delta !== void 0 ? cornerDistance1Delta : 0),
            cornerDistance2: cornerDistance + (cornerDistance2Delta !== null && cornerDistance2Delta !== void 0 ? cornerDistance2Delta : 0),
            centerDistance,
        }, (x, d, finger) => {
            if (invert && finger) {
                const th = thickness;
                const y = holeDistance + eth;
                surface = surface.subtractBorder(surface
                    .newShape()
                    .beginPath()
                    .rect(x - play / 2, y - thicknessPlay, d + play, th + thicknessPlay * 2)
                    .closePath());
            }
            else if (!invert && !finger) {
                const th = tenonLength * thickness;
                surface = surface.subtractBorder(surface
                    .newShape()
                    .beginPath()
                    .rect(x - play / 2, 0, d + play, th)
                    .closePath());
            }
        });
        return surface;
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
const allEdges = [
    new ButtJoint(),
    new BoxJoint(),
    new LegEdge(),
    new MortiseAndTenonJoint(),
];
const allJoints = [
    new ButtJoint(),
    new BoxJoint(),
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
const scoreChar = (shape, offset, width, height, char) => {
    var _a;
    const flags = (_a = ascii17[char.toUpperCase()]) !== null && _a !== void 0 ? _a : ascii17['?'];
    const line = (x1, y1, x2, y2) => {
        shape
            .moveTo(offset[0] + x1 * width, offset[1] + y1 * height)
            .lineTo(offset[0] + x2 * width, offset[1] + y2 * height);
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
};
function ApplyText(text, x, y, width, height, fontSize) {
    const lines = text.split('\n');
    const maxChars = lines.reduce((a, b) => Math.max(a, b.length), 0);
    const chh = typeof fontSize === 'number'
        ? fontSize
        : Math.min(
        // auto font size
        ((width - 5) / maxChars) * 2, (height - 5) / lines.length);
    const chw = chh / 2;
    const sx = x + (width - chw * maxChars) / 2;
    const sy = y + (height - chh * lines.length) / 2;
    const result = polybool.shape();
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let j = 0; j < line.length; j++) {
            scoreChar(result, [sx + chw * j + chw * 0.15, sy + chh * i + chh * 0.15], chw * 0.7, chh * 0.7, line.charAt(j));
        }
    }
    return result;
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
                        title: 'Inner Width (units)',
                    },
                },
                height: {
                    type: 'float64',
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
    generate(settings, { label, labelFontSize, thickness, kerf, width, height, edge1, edge2, edge3, edge4, }) {
        const th = typeof thickness === 'number' ? thickness : settings.defaultThickness;
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
                        title: 'Inner Width (units)',
                    },
                },
                depth: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Inner Depth (units)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Inner Height (units)',
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
class BoxNested extends GeneratorBase {
    name() {
        return 'BoxNested';
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
                        title: 'Inner Width (units)',
                    },
                },
                depth: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Inner Depth (units)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Inner Height (units)',
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
class BoxTuck extends GeneratorBase {
    name() {
        return 'BoxTuck';
    }
    schema() {
        return {
            properties: {
                thickness: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: 0.3,
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
                        title: 'Inner Width (units)',
                    },
                },
                depth: {
                    type: 'float64',
                    metadata: {
                        default: 20,
                        title: 'Inner Depth (units)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Inner Height (units)',
                    },
                },
                scorePadding: {
                    type: 'float64',
                    metadata: {
                        default: 1,
                        title: 'Score Padding (units)',
                    },
                },
                notchWidth: {
                    type: 'float64',
                    metadata: {
                        default: 7,
                        title: 'Notch Width (units)',
                    },
                },
                notchHeight: {
                    type: 'float64',
                    metadata: {
                        default: 2,
                        title: 'Notch Height (units)',
                    },
                },
            },
            metadata: {
                order: [
                    'thickness',
                    'kerf',
                    'width',
                    'depth',
                    'height',
                    'scorePadding',
                    'notchWidth',
                    'notchHeight',
                ],
            },
        };
    }
    generate(settings, { thickness, kerf, width, depth, height, scorePadding, notchWidth, notchHeight, }) {
        const th = typeof thickness === 'number' ? thickness : settings.defaultThickness;
        const kr = typeof kerf === 'number' ? kerf : settings.defaultKerf;
        let surface = new Surface(th, kr);
        const r1x = 0;
        const r1y = 0;
        const r1w = width;
        const r1h = height;
        const r2x = r1x + r1w;
        const r2y = 0;
        const r2w = depth + th;
        const r2h = height;
        const r3x = r2x + r2w;
        const r3y = 0;
        const r3w = width + th;
        const r3h = height;
        const r4x = r3x + r3w;
        const r4y = 0;
        const r4w = depth + th;
        const r4h = height;
        // top/bottom depth
        const td = depth + th;
        // main shape
        surface = surface.unionBorder(polybool
            .shape()
            .rect(r1x, r1y, r1w, r1h)
            .rect(r2x, r2y, r2w, r2h)
            .rect(r3x, r3y, r3w, r3h)
            .rect(r4x, r4y, r4w, r4h)
            .rect(r1x, r1y, r1w, -td)
            .rect(r1x, r1y + r1h, r1w, td));
        // left tab
        surface = surface.unionBorder(polybool
            .shape()
            .moveTo(0, 0)
            .bezierCurveTo(-depth * 0.75, 0, -depth * 0.75, 0, -depth * 0.75, depth * 0.75)
            .lineTo(-depth * 0.75, height - depth * 0.75)
            .bezierCurveTo(-depth * 0.75, height, -depth * 0.75, height, 0, height)
            .closePath());
        // top tab
        surface = surface.unionBorder(polybool
            .shape()
            .moveTo(r1x, r1y - td)
            .bezierCurveTo(r1x, r1y - td - depth * 0.9, r1x, r1y - td - depth * 0.9, r1x + depth * 0.9, r1y - td - depth * 0.9)
            .lineTo(r1x + r1w - depth * 0.9, r1y - td - depth * 0.9)
            .bezierCurveTo(r1x + r1w, r1y - td - depth * 0.9, r1x + r1w, r1y - td - depth * 0.9, r1x + r1w, r1y - td)
            .closePath());
        // bottom tab
        surface = surface.unionBorder(polybool
            .shape()
            .moveTo(r1x, r1y + r1h + td)
            .bezierCurveTo(r1x, r1y + r1h + td + depth * 0.9, r1x, r1y + r1h + td + depth * 0.9, r1x + depth * 0.9, r1y + r1h + td + depth * 0.9)
            .lineTo(r1x + r1w - depth * 0.9, r1y + r1h + td + depth * 0.9)
            .bezierCurveTo(r1x + r1w, r1y + r1h + td + depth * 0.9, r1x + r1w, r1y + r1h + td + depth * 0.9, r1x + r1w, r1y + r1h + td)
            .closePath());
        // top mid tab
        surface = surface.unionBorder(polybool
            .shape()
            .rect(r2x, r2y, r2w - th, -depth)
            .combine(polybool
            .shape()
            .moveTo(r2x, r2y)
            .lineTo(r2x + r2w * 0.05, r2y - depth)
            .lineTo(r2x, r2y - depth)
            .closePath())
            .difference()
            .combine(polybool
            .shape()
            .moveTo(r2x + r2w - th, r2y)
            .lineTo(r2x + r2w - th - notchWidth * 0.1, r2y - notchWidth)
            .lineTo(r2x + r2w - th - notchWidth * 0.2, r2y - notchWidth)
            .lineTo(r2x + r2w - th - notchWidth * 0.2 - (depth - notchWidth) * 0.1, r2y - depth)
            .lineTo(r2x + r2w - th, r2y - depth)
            .closePath())
            .difference());
        // bottom mid tab
        surface = surface.unionBorder(polybool
            .shape()
            .rect(r2x, r2y + r2h, r2w - th, depth)
            .combine(polybool
            .shape()
            .moveTo(r2x, r2y + r2h)
            .lineTo(r2x + depth * 0.05, r2y + r2h + depth)
            .lineTo(r2x, r2y + r2h + depth)
            .closePath())
            .difference()
            .combine(polybool
            .shape()
            .moveTo(r2x + r2w - th, r2y + r2h)
            .lineTo(r2x + r2w - th - notchWidth * 0.1, r2y + r2h + notchWidth)
            .lineTo(r2x + r2w - th - notchWidth * 0.2, r2y + r2h + notchWidth)
            .lineTo(r2x + r2w - th - notchWidth * 0.2 - (depth - notchWidth) * 0.1, r2y + r2h + depth)
            .lineTo(r2x + r2w - th, r2y + r2h + depth)
            .closePath())
            .difference());
        // top right tab
        surface = surface.unionBorder(polybool
            .shape()
            .rect(r4x + th, r4y, r4w - th, -depth)
            .combine(polybool
            .shape()
            .moveTo(r4x + th, r4y)
            .lineTo(r4x + th + notchWidth * 0.1, r4y - notchWidth)
            .lineTo(r4x + th + notchWidth * 0.2, r4y - notchWidth)
            .lineTo(r4x + th + notchWidth * 0.2 + (depth - notchWidth) * 0.1, r4y - depth)
            .lineTo(r4x + th, r4y - depth)
            .closePath())
            .difference()
            .combine(polybool
            .shape()
            .moveTo(r4x + r4w, r4y)
            .lineTo(r4x + r4w - depth * 0.05, r4y - depth)
            .lineTo(r4x + r4w, r4y - depth)
            .closePath())
            .difference());
        // bottom right tab
        surface = surface.unionBorder(polybool
            .shape()
            .rect(r4x + th, r4y + r4h, r4w - th, depth)
            .combine(polybool
            .shape()
            .moveTo(r4x + th, r4y + r4h)
            .lineTo(r4x + th + notchWidth * 0.1, r4y + r4h + notchWidth)
            .lineTo(r4x + th + notchWidth * 0.2, r4y + r4h + notchWidth)
            .lineTo(r4x + th + notchWidth * 0.2 + (depth - notchWidth) * 0.1, r4y + r4h + depth)
            .lineTo(r4x + th, r4y + r4h + depth)
            .closePath())
            .difference()
            .combine(polybool
            .shape()
            .moveTo(r4x + r4w, r4y + r4h)
            .lineTo(r4x + r4w - depth * 0.05, r4y + r4h + depth)
            .lineTo(r4x + r4w, r4y + r4h + depth)
            .closePath())
            .difference());
        {
            const pad = scorePadding;
            surface = surface.replace({
                cuts: polybool
                    .shape()
                    // top left
                    .moveTo(r1x, r1y - td)
                    .lineTo(r1x + notchWidth - 1, r1y - td)
                    .bezierCurveTo(r1x + notchWidth, r1y - td, r1x + notchWidth, r1y - td, r1x + notchWidth, r1y - td + 1)
                    .lineTo(r1x + notchWidth, r1y - td + notchHeight)
                    // top right
                    .moveTo(r1x + r1w, r1y - td)
                    .lineTo(r1x + r1w - notchWidth + 1, r1y - td)
                    .bezierCurveTo(r1x + r1w - notchWidth, r1y - td, r1x + r1w - notchWidth, r1y - td, r1x + r1w - notchWidth, r1y - td + 1)
                    .lineTo(r1x + r1w - notchWidth, r1y - td + notchHeight)
                    // bottom left
                    .moveTo(r1x, r1y + r1h + td)
                    .lineTo(r1x + notchWidth - 1, r1y + r1h + td)
                    .bezierCurveTo(r1x + notchWidth, r1y + r1h + td, r1x + notchWidth, r1y + r1h + td, r1x + notchWidth, r1y + r1h + td - 1)
                    .lineTo(r1x + notchWidth, r1y + r1h + td - notchHeight)
                    // bottom right
                    .moveTo(r1x + r1w, r1y + r1h + td)
                    .lineTo(r1x + r1w - notchWidth + 1, r1y + r1h + td)
                    .bezierCurveTo(r1x + r1w - notchWidth, r1y + r1h + td, r1x + r1w - notchWidth, r1y + r1h + td, r1x + r1w - notchWidth, r1y + r1h + td - 1)
                    .lineTo(r1x + r1w - notchWidth, r1y + r1h + td - notchHeight),
                scores: polybool
                    .shape()
                    // back
                    .moveTo(r1x + pad, r1y - th)
                    .lineTo(r1x + r1w - pad, r1y - th)
                    .moveTo(r1x + r1w, r1y + pad)
                    .lineTo(r1x + r1w, r1y + r1h - pad)
                    .moveTo(r1x, r1y + pad)
                    .lineTo(r1x, r1y + r1h - pad)
                    .moveTo(r1x + pad, r1y + r1h + th)
                    .lineTo(r1x + r1w - pad, r1y + r1h + th)
                    // top tab
                    .moveTo(r1x + pad + notchWidth, r1y - td)
                    .lineTo(r1x + r1w - pad - notchWidth, r1y - td)
                    // bottom tab
                    .moveTo(r1x + pad + notchWidth, r1y + r1h + td)
                    .lineTo(r1x + r1w - pad - notchWidth, r1y + r1h + td)
                    // first depth under tabs
                    .moveTo(r2x + pad, r2y)
                    .lineTo(r2x + r2w - th - pad, r2y)
                    .moveTo(r2x + pad, r2y + r2h)
                    .lineTo(r2x + r2w - th - pad, r2y + r2h)
                    // first depth right side
                    .moveTo(r2x + r2w, r2y + pad)
                    .lineTo(r2x + r2w, r2y + r2h - pad)
                    // second depth under tabs
                    .moveTo(r4x + th + pad, r4y)
                    .lineTo(r4x + r4w - pad, r4y)
                    .moveTo(r4x + th + pad, r4y + r4h)
                    .lineTo(r4x + r4w - pad, r4y + r4h)
                    // second depth left side
                    .moveTo(r4x, r4y + pad)
                    .lineTo(r4x, r4y + r4h - pad),
            });
        }
        return [Surface.union(surface, surface)];
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
class TubeTab extends GeneratorBase {
    name() {
        return 'TubeTab';
    }
    schema() {
        return {
            properties: {
                thickness: {
                    type: 'float64',
                    nullable: true,
                    metadata: {
                        default: 0.3,
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
                        title: 'Inner Width (units)',
                    },
                },
                depth: {
                    type: 'float64',
                    metadata: {
                        default: 20,
                        title: 'Inner Depth (units)',
                    },
                },
                height: {
                    type: 'float64',
                    metadata: {
                        default: 100,
                        title: 'Inner Height (units)',
                    },
                },
                scorePadding: {
                    type: 'float64',
                    metadata: {
                        default: 1,
                        title: 'Score Padding (units)',
                    },
                },
                tabWidth: {
                    type: 'float64',
                    metadata: {
                        default: 10,
                        title: 'Tab Width (units)',
                    },
                },
                tabHeight: {
                    type: 'float64',
                    metadata: {
                        default: 20,
                        title: 'Tab Height (units)',
                    },
                },
                tabInnerCut: {
                    type: 'float64',
                    metadata: {
                        default: 1,
                        title: 'Tab Inner Cut (units)',
                    },
                },
                tabCount: {
                    type: 'float64',
                    metadata: {
                        default: 2,
                        title: 'Tab Count',
                    },
                },
                receiverWidth: {
                    type: 'float64',
                    metadata: {
                        default: 10,
                        title: 'Receiver Width (units)',
                    },
                },
            },
            metadata: {
                order: [
                    'thickness',
                    'kerf',
                    'width',
                    'depth',
                    'height',
                    'scorePadding',
                    'tabWidth',
                    'tabHeight',
                    'tabInnerCut',
                    'tabCount',
                    'receiverWidth',
                ],
            },
        };
    }
    generate(settings, { thickness, kerf, width, depth, height, scorePadding, tabWidth, tabHeight, tabInnerCut, tabCount, receiverWidth, }) {
        const th = typeof thickness === 'number' ? thickness : settings.defaultThickness;
        const kr = typeof kerf === 'number' ? kerf : settings.defaultKerf;
        let surface = new Surface(th, kr);
        const r1x = 0;
        const r1y = 0;
        const r1w = width;
        const r1h = height;
        const r2x = r1x + r1w;
        const r2y = 0;
        const r2w = depth + th;
        const r2h = height;
        const r3x = r2x + r2w;
        const r3y = 0;
        const r3w = width + th;
        const r3h = height;
        const r4x = r3x + r3w;
        const r4y = 0;
        const r4w = depth + th;
        const r4h = height;
        const tabs = [];
        for (let i = 0; i < tabCount; i++) {
            const top = (height * i) / tabCount;
            const bottom = (height * (i + 1)) / tabCount;
            const h = Math.min(bottom - top, tabHeight);
            const y = (top + bottom - h) / 2;
            tabs.push({ top, y, h, bottom });
        }
        // main shape
        surface = surface.unionBorder(polybool
            .shape()
            .rect(r1x, r1y, r1w, r1h)
            .rect(r2x, r2y, r2w, r2h)
            .rect(r3x, r3y, r3w, r3h)
            .rect(r4x, r4y, r4w, r4h));
        // left tab
        surface = surface.unionBorder(polybool
            .shape()
            .moveTo(0, 0)
            .bezierCurveTo(-receiverWidth, 0, -receiverWidth, 0, -receiverWidth, receiverWidth)
            .lineTo(-receiverWidth, height - receiverWidth)
            .bezierCurveTo(-receiverWidth, height, -receiverWidth, height, 0, height)
            .closePath());
        // right tab(s)
        for (const { y, h } of tabs) {
            surface = surface.unionBorder(polybool
                .shape()
                .moveTo(r4x + r4w, y + tabInnerCut)
                .lineTo(r4x + r4w + th, y + tabInnerCut)
                .lineTo(r4x + r4w + th, y)
                .lineTo(r4x + r4w + th + tabWidth, y)
                .lineTo(r4x + r4w + th + tabWidth, y + h)
                .lineTo(r4x + r4w + th, y + h)
                .lineTo(r4x + r4w + th, y + h - tabInnerCut)
                .lineTo(r4x + r4w, y + h - tabInnerCut)
                .closePath()
                .combine(polybool
                .shape()
                .moveTo(r4x + r4w + th, y)
                .lineTo(r4x + r4w + th + tabWidth, y + h / 3)
                .lineTo(r4x + r4w + th + tabWidth, y)
                .closePath())
                .difference()
                .combine(polybool
                .shape()
                .moveTo(r4x + r4w + th, y + h)
                .lineTo(r4x + r4w + th + tabWidth, y + (h * 2) / 3)
                .lineTo(r4x + r4w + th + tabWidth, y + h)
                .closePath())
                .difference());
        }
        {
            const pad = scorePadding;
            const cuts = polybool.shape();
            const scores = polybool
                .shape()
                // back
                .moveTo(r1x + r1w, r1y + pad)
                .lineTo(r1x + r1w, r1y + r1h - pad)
                // first depth right side
                .moveTo(r2x + r2w, r2y + pad)
                .lineTo(r2x + r2w, r2y + r2h - pad)
                // second depth left side
                .moveTo(r4x, r4y + pad)
                .lineTo(r4x, r4y + r4h - pad);
            for (const { top, y, h, bottom } of tabs) {
                scores
                    // left side
                    .moveTo(r1x, top === 0 ? pad : top)
                    .lineTo(r1x, y - pad)
                    .moveTo(r1x, y + h + pad)
                    .lineTo(r1x, bottom === height ? bottom - pad : bottom)
                    // right side
                    .moveTo(r4x + r4w, y + tabInnerCut + pad)
                    .lineTo(r4x + r4w, y + h - tabInnerCut - pad);
                cuts
                    .moveTo(r1x, y)
                    .bezierCurveTo(r1x - th, y, r1x - th, y, r1x - th, y + th)
                    .lineTo(r1x - th, y + h - th)
                    .bezierCurveTo(r1x - th, y + h, r1x - th, y + h, r1x, y + h);
            }
            surface = surface.replace({ cuts, scores });
        }
        return [Surface.union(surface, surface)];
    }
}

//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//
const allGenerators = [
    new BoxNested(),
    new BoxPlain(),
    new BoxTuck(),
    new KerfTester(),
    new Rectangle(),
    new TubeTab(),
];

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

export { ApplyKerf, BoxJoint, BoxNested, BoxPlain, BoxTuck, ButtJoint, DocumentBase, DocumentSVG, EdgeBase, GeneratorBase, JointBase, KerfTester, LegEdge, MortiseAndTenonJoint, Rectangle, SettingsTypeDef, Shape, Surface, TubeTab, allEdges, allEdgesTypeDef, allGenerators, allJoints, boxJointFingerSpacer, edgeListTypeDef, exportDocument, geo, polybool };
