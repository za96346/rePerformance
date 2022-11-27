import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint' //导入包

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
		eslintPlugin({
			include: [
                'src/**/*.js',
                'src/**/*.ts',
                'src/*.js',
                'src/*.ts',
                'src/**/*.jsx',
                'src/**/*.tsx'
            ]
		})
    ],
})
