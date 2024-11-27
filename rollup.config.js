import { terser } from 'rollup-plugin-terser';  // 用于代码压缩
import json from '@rollup/plugin-json';  // 用于处理JSON文件

export default {
  input: 'src/index.js',  // 入口文件，指向你的源代码
  output: [
    {
      file: 'dist/pixelfit.cjs.js',  // CommonJS格式的输出
      format: 'cjs',
      sourcemap: true,  // 是否生成sourcemap
      name: 'Pixelfit',  // 库的全局变量名称
    },
    {
      file: 'dist/pixelfit.esm.js',  // ES模块格式的输出
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/pixelfit.min.js',  // 压缩版
      format: 'umd',
      sourcemap: true,
      name: 'Pixelfit',  // UMD的全局变量名称
      plugins: [terser()],  // 使用terser插件压缩代码
    },
  ],
  plugins: [
    json(),  // 处理json文件
  ],
  external: ['some-external-library'],  // 如果有外部依赖，不会将它们打包进库中
};