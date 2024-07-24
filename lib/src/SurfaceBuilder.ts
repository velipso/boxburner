//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import { Surface } from './Surface';
import { DrawBuilder } from './DrawBuilder';
import { ITextCommand, Vec2 } from './types';

export class SurfaceBuilder {
  border = new DrawBuilder();
  holes: { offset: Vec2; db: DrawBuilder }[] = [];
  cuts: { offset: Vec2; db: DrawBuilder }[] = [];
  scores: { offset: Vec2; db: DrawBuilder }[] = [];
  text: ITextCommand[] = [];

  hole(offset: Vec2, angle = 0) {
    const db = new DrawBuilder();
    db.turn(angle);
    this.holes.push({ offset, db });
    return db;
  }

  cut(offset: Vec2, angle = 0) {
    const db = new DrawBuilder();
    db.turn(angle);
    this.cuts.push({ offset, db });
    return db;
  }

  score(offset: Vec2, angle = 0) {
    const db = new DrawBuilder();
    db.turn(angle);
    this.scores.push({ offset, db });
    return db;
  }

  build(thickness: number) {
    return new Surface(
      thickness,
      this.border.close().build(),
      this.holes.map(({ offset, db }) => ({ offset, commands: db.close().build() })),
      this.cuts.map(({ offset, db }) => ({ offset, commands: db.close().build() })),
      this.scores.map(({ offset, db }) => ({ offset, commands: db.close().build() })),
      this.text
    );
  }
}
