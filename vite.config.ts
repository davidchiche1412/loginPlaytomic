import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: { include: ['firebase/app', 'firebase/auth'] },
  plugins: [reactRefresh()]
})
