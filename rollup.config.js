import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import clear from 'rollup-plugin-clear';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import { dependencies } from './package.json';

const outputDir = 'dist';
const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: {
    dir: outputDir,
    format: 'cjs',
    sourcemap: true,
    exports: 'auto',
  },
  plugins: [
    clear({
      targets: [outputDir],
    }),
    nodeResolve({ extensions }),
    // 必须在之babel之前
    commonjs(),
    babel({
      exclude: /node_modules/,
      extensions,
      babelHelpers: 'bundled',
    }),

    uglify(),
  ],
  // 避免打包的外部应用
  external: [...Object.keys(dependencies || {})],
};
