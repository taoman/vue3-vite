import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isTestMod = command === 'serve' && mode === 'development'
  console.log('isTestMod', isTestMod)
  return {
    base: !isTestMod ? '/rem/' : '/',
    build: {
      outDir: 'rem',
      assetsDir: 'assets',
      chunkSizeWarningLimit: 1500,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    plugins: [vue(), vueSetupExtend(), Components({ resolvers: [AntDesignVueResolver()] })],
    resolve: {
      alias: {
        src: resolve(__dirname, 'src')
      }
    }
  }
})
