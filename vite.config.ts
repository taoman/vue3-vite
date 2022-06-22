import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import compressPlugin from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true,
    port: 3000,
    proxy: {
      '/article': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue', 'tailwindcss']
    }
  },
  plugins: [
    vue(),
    compressPlugin({
      deleteOriginFile: true,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    Components({
      resolvers: [
        AntDesignVueResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src')
    }
  }
})
