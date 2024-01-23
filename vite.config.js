import { defineConfig } from 'vite'
import path from 'path'
import { resolve } from 'path'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'
import handlebars from 'vite-plugin-handlebars'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'


export default defineConfig({

    base: '/vite-dba-boilerplate/',
    // base: './',

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
        ViteImageOptimizer({
            png: {
				quality: 70,
			},
			jpeg: {
				quality: 70,
			},
			jpg: {
				quality: 70,
			},
        }),
        {
			...imagemin(['./src/assets/images/**/*.{jpg,png,jpeg}'], {
				destination: './src/assets/images/',
				plugins: [
					imageminWebp({ quality: 70 })
				]
			}),
			apply: 'serve',
		},
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ],
    envPrefix: 'APP_',
})

    