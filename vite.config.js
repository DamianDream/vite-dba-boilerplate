import { defineConfig, loadEnv } from 'vite'
import { resolve, relative, extname } from 'path'
import glob from 'fast-glob'
import { fileURLToPath } from 'url'
import handlebars from 'vite-plugin-handlebars'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import webfontDownload from 'vite-plugin-webfont-dl'

// ------------ Fast Dev Config 

//  ? Build for GitHub Pages ?
const gitHubPages = false
const gitHubPagesRepository = "/vite-boilerplate-js/"
// repository is at https://github.com/<USERNAME>/<REPO>
// f publish on github-pages we should indicate Repository name <REPO>

//  ? Build for local server ?
const outputToLocalServer = false

// Path to output "dist" folder (bundle) and Server (for example XAMPP) dir
const pathAliases = {
    projectDir: resolve(__dirname, 'dist'),
    xamppDir: resolve('/Applications/XAMPP/xamppfiles/htdocs/sites/vite/')
}

//  --- Fonts
// Add fonts  below with the selected Google Fonts CSS URL(s)
const customFonts = [
    'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
]
// Note: to use this fonts workflow  custom fonts in HTML head you inject <link href="[CSS URL]" rel="stylesheet">

// ------------

export default defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production'
    const isDevelopment = mode === 'development'

    //  --- Root Dir ---
    const root = resolve(__dirname, './');

    //  --- Output Dir ---
    const outFolderDir = (outputToLocalServer) ? pathAliases.xamppDir : pathAliases.projectDir;

    //  --- Github Pages ---
    const configureBaseProjectPath  = (gitHubPages) ? gitHubPagesRepository : './';

    return {
        root,
        envPrefix: 'APP_',
        base: configureBaseProjectPath,
        resolve: {
            alias: {
                "@": resolve(__dirname, './src/assets'),
                "@fonts": resolve(__dirname, './src/assets/fonts/'),
                "@img": resolve(__dirname, './src/assets/images/'),
            }
        },

        // --- Server Configuration
        server: { port: '5000'},
        // Note "Preview mode" may be different from the server environment!  
        // Suggest to try XAMPP server or similar for testing.
        preview: { port: '5001' },
        css: {
            devSourcemap: isDevelopment,
        },
        build: {
            minify: isProduction,
            cssMinify: isProduction,
            sourcemap: isDevelopment,
            emptyOutDir: true,
            outDir: outFolderDir,
            rollupOptions: {

                // Collect all pages from all indicated folders
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
            webfontDownload( customFonts ),
            ViteImageOptimizer({
                png: { quality: 70 },
                jpeg: { quality: 70 },
                jpg: { quality: 70 },
                webp: { lossless: true },
                avif: { lossless: true },
                cache: false,
                cacheLocation: undefined,
            }),
            {
                ...imagemin(['./src/assets/images/**/*.{jpg,png,jpeg}'], {
                    destination: './src/assets/images/',
                    plugins: [ imageminWebp({ quality: 70 }) ]
                }),
                apply: 'serve',
            },
            handlebars({
                partialDirectory: resolve(__dirname, 'src/partials'),
            }),
        ]
    }
})

    