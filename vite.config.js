import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'public/login.html'),
        register: resolve(__dirname, 'public/register.html')
      }
    }
  },
  server: {
    open: true,
  }
}