import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8080,
    },
    plugins: [
        react(),
        viteSvgr({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
})
