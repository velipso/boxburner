//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/boxburner.ts",
    output: {
      file: "dist/boxburner.cjs",
      format: "cjs",
      exports: "named",
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "tsconfig.json",
      }),
    ],
  },
  {
    input: "src/boxburner.ts",
    output: {
      file: "dist/boxburner.min.cjs",
      format: "cjs",
      exports: "named",
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "tsconfig.json",
      }),
      terser(),
    ],
  },
];
