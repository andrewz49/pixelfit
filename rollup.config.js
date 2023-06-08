import json from 'rollup-plugin-json'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'
export default {
  input: 'modules/pixelfit.js',
  output: [
    {
      name: pkg.name,
      file: pkg.main,
      format: 'es'
    }
  ],
  plugins: [
    json(),
    typescript({lib: ["es5", "es6", "dom"], target: "es5"})
  ]
};