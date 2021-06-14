import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import pkg from "./package.json";
import image from '@rollup/plugin-image';


export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [url(), image(), typescript()],
};
