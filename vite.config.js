import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'public/login.html'),
        register: resolve(__dirname, 'public/register.html'),
        personal: resolve(__dirname, 'public/personal.html'),
        coursesFinish: resolve(__dirname, 'public/finish-courses.html'),
      }
    }
  },
  server: {
    open: true,
  }
}