import { defineConfig } from 'vite'
import path from 'path'
import { resolve } from 'path'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'
import handlebars from 'vite-plugin-handlebars'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    // --- ENV
    envPrefix: 'APP_',

    base: './',
    // base: '/vite-dba-boilerplate/',

    // --- Path aliases
    resolve: {
		alias: {
			"@": resolve(__dirname, './src/assets')
		}
	},

    // --- Server Configuration
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
        emptyOutDir: true,
        rollupOptions: {
          input: Object.fromEntries(
                    glob.sync(['./*.html', './pages/**/*.html']).map(file => [
                        path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
                        fileURLToPath(new URL(file, import.meta.url))
                    ])
                )
        },
    },

    // --- Plugins
    plugins: [
        ViteImageOptimizer({
            // https://github.com/FatehAK/vite-plugin-image-optimizer
            png: {
				quality: 70,
			},
			jpeg: {
				quality: 70,
			},
			jpg: {
				quality: 70,
			},
            webp: {
                lossless: true,
            },
            avif: {
            lossless: true,
            },
            cache: false,
            cacheLocation: undefined,
        }),

        // --- Plugin for image optimization
        {
			...imagemin(['./src/assets/images/**/*.{jpg,png,jpeg}'], {
				destination: './src/assets/images/',
				plugins: [
					imageminWebp({ quality: 70 })
				]
			}),
			apply: 'serve',
		},

        // Plugin for partial import in to HTML
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ]
})

    