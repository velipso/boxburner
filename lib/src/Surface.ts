//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { type Vec2 } from './types';
import { type Shape, polybool, geo } from './Geometry';
import { ApplyKerf } from './ApplyKerf';

export class Surface {
  readonly thickness: number;
  readonly kerf: number;
  readonly border: Shape;
  readonly cuts: Shape;
  readonly scores: Shape;
  home: { origin: Vec2; angle: number } = { origin: [0, 0], angle: 0 };

  constructor(
    thickness: number,
    kerf: number,
    border: Shape = polybool.shape(),
    cuts: Shape = polybool.shape(),
    scores: Shape = polybool.shape(),
  ) {
    this.thickness = thickness;
    this.kerf = kerf;
    this.border = border;
    this.cuts = cuts;
    this.scores = scores;
  }

  replace(
    opts: Partial<{
      thickness: number;
      kerf: number;
      border: Shape;
      cuts: Shape;
      scores: Shape;
    }>,
  ) {
    const surface = new Surface(
      opts.thickness ?? this.thickness,
      opts.kerf ?? this.kerf,
      opts.border ?? this.border,
      opts.cuts ?? this.cuts,
      opts.scores ?? this.scores,
    );
    surface.setHome(this.home.origin, this.home.angle);
    return surface;
  }

  copy() {
    return this.replace({});
  }

  private static combine(border: Shape, a: Surface, b: Surface): Surface {
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

  static union(a: Surface, b: Surface): Surface {
    return Surface.combine(a.border.combine(b.border).union(), a, b);
  }

  static intersect(a: Surface, b: Surface): Surface {
    return Surface.combine(a.border.combine(b.border).intersect(), a, b);
  }

  static subtract(a: Surface, b: Surface): Surface {
    return Surface.combine(a.border.combine(b.border).difference(), a, b);
  }

  static xor(a: Surface, b: Surface): Surface {
    return Surface.combine(a.border.combine(b.border).xor(), a, b);
  }

  unionBorder(border: Shape): Surface {
    return Surface.union(
      this,
      this.replace({
        border,
        cuts: polybool.shape(),
        scores: polybool.shape(),
      }),
    );
  }

  subtractBorder(border: Shape): Surface {
    return Surface.subtract(
      this,
      this.replace({
        border,
        cuts: polybool.shape(),
        scores: polybool.shape(),
      }),
    );
  }

  setHome(origin: Vec2, angle: number) {
    this.home = { origin, angle };
    return this;
  }

  newShape() {
    return polybool
      .shape()
      .translate(this.home.origin[0], this.home.origin[1])
      .rotateDeg(this.home.angle);
  }

  boundingBox(): [Vec2, Vec2] {
    const min: Vec2 = [Infinity, Infinity];
    const max: Vec2 = [-Infinity, -Infinity];
    let empty = true;
    const check = (shape: Shape) => {
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
