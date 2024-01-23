import { defineConfig } from 'vite'
import path from 'path'
import { resolve } from 'path'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
    base: './',
    resolve: {
		alias: {
			"@": resolve(__dirname, './src/assets')
		}
	},
    server: {
        port: '5000',
    },
    preview: {
        port: '5001',
    },
    css: {
        devSourcemap: true,
    },
    esbuild: {
		jsxFactory: 'create',
		jsxInject: 'import { create } from "/src/components/utils/jsxCreate.js"'
	},
    build: {
        rollupOptions: {
          input: Object.fromEntries(
                    glob.sync(['./*.html', './pages/**/*.html']).map(file => [
                        path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
                        fileURLToPath(new URL(file, import.meta.url))
                    ])
                )
        },
      },
    plugins: [
        handlebars({
            // context(pagePath) {
            //     return pageData[pagePath]
            // },
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ],
    envPrefix: 'APP_',
})

    