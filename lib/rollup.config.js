//
// boxburner - Generates patterns for laser cutting
// by Sean Connelly (@velipso), https://sean.fun
// Project Home: https://github.com/velipso/boxburner
// SPDX-License-Identifier: 0BSD
//

import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/boxburner.ts",
    output: {
      file: "dist/boxburner.js",
      format: "esm",
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
      file: "dist/boxburner.min.js",
      format: "esm",
    },
    plugins: [
      resolve(),
      typescript({
        tsconfig: "tsconfig.json",
      }),
      terser(),
    ],
  },
  {
    input: "src/boxburner.ts",
    output: {
      file: "dist/boxburner.d.ts",
    },
    plugins: [dts({ compilerOptions: { composite: false } })],
  },
];
