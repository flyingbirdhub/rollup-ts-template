import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

function plugins() {
  return [
    json(),
    typescript(),
    resolve(),
    commonjs({
    sourceMap: false,
  })];
}

export default [{
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: plugins(),
}, {
  input: './dist/src/index.d.ts',
  output: [{ file: 'dist/types/index.d.ts', format: 'esm' }],
  plugins: [dts()],
}];
