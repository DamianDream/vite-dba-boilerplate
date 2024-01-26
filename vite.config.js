import { defineConfig, loadEnv } from 'vite'
// import path from 'path'
import { resolve, relative, extname } from 'path'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'
import handlebars from 'vite-plugin-handlebars'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'


export default defineConfig(({ command, mode }) => {

    // get all available env data variables (OPTIONAL)
    const env = loadEnv("mock", process.cwd(), "");

    // Reduce below return object with all env variables (uncomment code bellow)

    // const processEnvValues = {
    //     "process.env": Object.entries(env).reduce((prev, [key, val]) => {
    //     return {
    //         ...prev,
    //         [key]: val,
    //     };
    //     }, {}),
    // };

    // --- EXAMPLE (How to recall env variable)
    // Return specific env variable by Name
    // const APP_API_URL = JSON.stringify(env.APP_XAMPPTEST)

    // Path to output "dist" folder (bundle)
    const pathAliases = {
        projectDir: resolve(__dirname, 'dist'),
        // Path to localhost server folder
        xamppDir: resolve('/Applications/XAMPP/xamppfiles/htdocs/sites/vite/')
    }

    const outFolderDir = (false) ? pathAliases.projectDir : pathAliases.xamppDir;

    //  --- GithubPages
    const gitHubRepoName = JSON.stringify(env.APP_VITE_BASE)
    const compileForGitHubPages  = (false) ? gitHubRepoName : './';

    console.log(compileForGitHubPages)

    return {
        // --- ENV
        envPrefix: 'APP_',

        // Environment path
        base: compileForGitHubPages,

        // --- Path aliases
        resolve: {
            alias: {
                "@": resolve(__dirname, './src/assets'),
                "@fonts": resolve(__dirname, './src/assets/fonts/'),
            }
        },

        // --- Server Configuration
        server: {
            // for dev
            port: '5000',
        },
        preview: {
            // for build and preview
            // Note "Preview mode" may be different from the server environment!  
            // Suggest to try XAMPP server or similar for testing.
            port: '5001',
        },

        css: {
            devSourcemap: true,
        },

        build: {
            outDir: outFolderDir,
            emptyOutDir: true,

            // Collect all pages from all indicated folders
            //  No need to indicate it separately
            rollupOptions: {
            input: Object.fromEntries(
                        glob.sync(['./*.html', './pages/**/*.html']).map(file => [
                            relative(__dirname, file.slice(0, file.length - extname(file).length)),
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
                partialDirectory: resolve(__dirname, 'src/partials'),
            }),
        ]
    }
})

    