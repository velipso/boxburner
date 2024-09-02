//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type Shape, geo, polybool } from './Geometry';
import { type Vec2, type Vec6 } from './types';

export function ApplyKerf(shape: Shape, kerf: number): Shape {
  if (geo.snap0(kerf) === 0) {
    return shape;
  }
  const paths: Array<{
    path: Array<Vec2 | Vec6>;
    closed: boolean;
  }> = [];
  shape.output({
    beginPath: () => {},
    moveTo: (x: number, y: number) => {
      paths.push({
        path: [],
        closed: false,
      });
    },
    lineTo: (x: number, y: number) => {
      paths[paths.length - 1].path.push([x, y]);
    },
    bezierCurveTo: (
      c1x: number,
      c1y: number,
      c2x: number,
      c2y: number,
      x: number,
      y: number,
    ) => {
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
      const tangentAt = (i: number, start: boolean): number => {
        const cmd = path[i];
        const last = path[(i + path.length - 1) % path.length];
        const lx = last[last.length - 2];
        const ly = last[last.length - 1];
        if (cmd.length === 2) {
          // start and end points have same tangent
          return geo.atan2Deg(ly - cmd[1], lx - cmd[0]);
        } else {
          return start
            ? geo.atan2Deg(ly - cmd[1], lx - cmd[0])
            : geo.atan2Deg(cmd[3] - cmd[5], cmd[2] - cmd[4]);
        }
      };
      const offsetByAngle = (p: Vec2, angle: number, dist: number): Vec2 => [
        p[0] + dist * geo.cosDeg(angle),
        p[1] + dist * geo.sinDeg(angle),
      ];
      const offsetByNormal = (p: Vec2, tangentAngle: number, dist: number) =>
        offsetByAngle(p, tangentAngle - dir, dist);
      const roundedCommands: number[] = [];
      for (let i = 0; i < path.length; i++) {
        const ip = (i + path.length - 1) % path.length;
        const cmd = path[i];
        const a1 = tangentAt(ip, false);
        const a2 = tangentAt(i, true);
        const a3 = tangentAt(i, false);
        const dang = Math.min(
          Math.abs(a1 - a2),
          Math.abs(a1 + 360 - a2),
          Math.abs(a1 - (a2 + 360)),
        );
        if (geo.snap0(dang) > 0) {
          const cdist =
            (halfKerf * 4 * Math.tan(((dang / 4) * Math.PI) / 180)) / 3;
          const last = path[ip];
          const lx = last[last.length - 2];
          const ly = last[last.length - 1];
          const lxy: Vec2 = [lx, ly];
          roundedCommands.push(newPath.length);
          const c1 = offsetByAngle(
            offsetByNormal(lxy, a1, halfKerf),
            a1,
            -cdist,
          );
          const c2 = offsetByAngle(
            offsetByNormal(lxy, a2, halfKerf),
            a2,
            cdist,
          );
          const to = offsetByNormal(lxy, a2, halfKerf);
          newPath.push([c1[0], c1[1], c2[0], c2[1], to[0], to[1]]);
        }
        if (cmd.length === 2) {
          newPath.push(offsetByNormal(cmd, a3, halfKerf));
        } else {
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
          const res = geo.linesIntersect(
            prev.length === 2 ? prev2[prev2.length - 2] : prev[2],
            prev.length === 2 ? prev2[prev2.length - 1] : prev[3],
            prev[prev.length - 2],
            prev[prev.length - 1],
            here[here.length - 2],
            here[here.length - 1],
            next[0],
            next[1],
          );
          if (
            res &&
            res.alongA > 0 &&
            res.alongA < 1 &&
            res.alongB > 0 &&
            res.alongB < 1
          ) {
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
        } else {
          result.bezierCurveTo(pt[0], pt[1], pt[2], pt[3], pt[4], pt[5]);
        }
      }
    }
  }
  return result;
}
