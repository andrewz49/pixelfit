import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import html from '@rollup/plugin-html';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';  // 导入插件

export default defineConfig({
  input: 'src/index.js',  // 入口文件，指向你的源代码
  output: [
    {
      file: 'dist/pixelfit.cjs.js',  // CommonJS格式的输出
      format: 'cjs',
      sourcemap: false,  // 是否生成sourcemap
      name: 'Pixelfit',  // 库的全局变量名称
      exports: 'default', // 显式设置为 'default'
    },
    {
      file: 'dist/pixelfit.esm.js',  // ES模块格式的输出
      format: 'esm',
      sourcemap: false,
    },
    {
      file: 'dist/pixelfit.min.js',  // 压缩版
      format: 'umd',
      sourcemap: false,
      name: 'Pixelfit',  // UMD的全局变量名称
      plugins: [terser()],  // 使用terser插件压缩代码
    },
  ],
  plugins: [
    del({ targets: 'dist/*' }),  // 在打包前清理 dist 目录
    resolve(), // 解析 node_modules 模块
    commonjs(), // 支持 CommonJS 转换为 ESM
    babel({ babelHelpers: 'bundled' }), // 支持 Babel 转换
    terser(), // 压缩代码
    html({
      title: 'Pixelfit - Responsive Design Tool',
      inject: {
        injectScript: '<script src="dist/pixelfit.min.js"></script>',
      },
    }),
  ]
});