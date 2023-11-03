import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
//TODO add src alias
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: [
      {
        find: '@@',
        replacement: path.resolve(__dirname, './'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src/'),
      },
      {
        find: '@auth',
        replacement: path.resolve(__dirname, './src/auth'),
      },
      {
        find: '@common',
        replacement: path.resolve(__dirname, './src/common'),
      },
      {
        find: '@users',
        replacement: path.resolve(__dirname, './src/users'),
      },
    ],
  },
})
