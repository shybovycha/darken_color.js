import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/darken_color.bs.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [resolve(), commonjs(), terser()]
};