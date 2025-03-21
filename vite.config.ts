/*
 * @Descripttion:
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-02-21 12:47:14
 * @LastEditors: LiWen
 * @LastEditTime: 2022-03-01 11:16:41
 */
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import createVitePlugins from './vite/plugins'
import { viteMockServe } from 'vite-plugin-mock'
import { EnvProduction } from './src/entity/systemConfigEntity'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const plugins = createVitePlugins(env as unknown as EnvProduction, command === 'build');
  plugins.push(viteMockServe({
    mockPath: "mock",// 解析根目录下的mock文件夹
    localEnabled: env.VITE_USE_MOCK_ENV === 'true',  // 开发打包开关
    prodEnabled: env.VITE_USE_MOCK_PRO === 'true', // 生产打包开关
    supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
  }));
  return {
    plugins: plugins,
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // vite 相关配置
    server: {
      port: 82,
      host: true,
      open: true,
      proxy: {
        '/dev-api': {
          target: 'http://192.168.0.36:8081',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
      },
    },
  }
})
