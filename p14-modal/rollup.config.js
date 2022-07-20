import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({ plugins: [], minimize: true }),
      babel({
        exclude: "node_module/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      commonjs(),
    ],
  },
];
