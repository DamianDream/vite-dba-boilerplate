# DBA Boilerplate for Vite markup template

Key features of this template:

**Build Tools**: Vite.js
<br>
**Plugins**: Autoprefixer, Imagemin, Imagemin-Webp, Vite plugin Image Optimizer, Vite plugin handlebars, CSSnano, Fast-glob
<br>
**Styles**: SCSS, Tailwind CSS
<br>
**Reset**: for SCSS development I use CSS Reset from here:  [The New CSS Reset](https://elad2412.github.io/the-new-css-reset/)

**!Important:** In this project I configure SCSS and Tailwind CSS and you can choose what to use in your project. In case you choose SCSS you need to remove Tailwind imports from scss files: <br> 
- <span style="color:#06b6d4">@tailwind base;<span>
- <span style="color:#06b6d4">@tailwind components;<span>
- <span style="color:#06b6d4">@tailwind utilities;<span>

Get your project up and running quickly with this template and start creating amazing websites!

## Dependencies

This template uses the following dependencies:

- **[Vite](https://vitejs.dev/):** A next-generation frontend build tool that offers a fast dev server and optimized builds.
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer):** Autoprefixer automatically adds vendor prefixes to CSS.
- **[vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer):** Image optimization (png, jpeg, gif, tiff, webp, avif). 
- **[imagemin-webp](https://www.npmjs.com/package/imagemin-webp):** Converts formats such as .png/.jpg etc to .webp format
<!-- - **[name](link):** Description -->

## Starting

1. To start using this template, clone the repository with this command:

```bash
git clone https://github.com/DamianDream/vite-dba-boilerplate.git
```

2. Then rename the folder "vite-builder" and install the dependencies:

```bash
cd your-project-name
npm install
```


## Further steps

After cloning the template, make sure to clean up and update the following:

1. Remove the .git directory and run `git init` to clean the commit history.
```bash
rm -rf .git
git init
```

2. Clean up the README.md file.
3. Adapt the LICENSE file to your project.
4. Delete `public/vite.svg`, folder `src/img/**/*`, `src/fonts/**/*` and also `src/scss/**.*` except `style.scss` and `_reset.scss`.
5. Remove unnecessary `.html` files in the `pages` and `src/partials` folder.
6. Delete the content from `src/scss/style.scss` except `@import "reset.scss";`.
7. In the `main.js` file, leave only these import statements: `import './style.scss'';`.

## Scripts

Use the following scripts for your development workflow:

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview the build
npm run preview

# Build & Preview with instant open page
npm run build:open
```

## Folder Structure

This is the structure of the project:
tailwind.config.js

```plaintext
├── node_modules            # Node.js dependencies for the project.
├── pages                   # Folder for additional .html pages
├── public                  # Public assets and resources
│   ├── favicon	            # Folder for your web page favicon 
│   ├── images                 # Folder for your public images
├── src                     # Source code
│   ├── fonts	            # Folder for your fonts
│   ├── img                 # Folder for your images
│   ├── js                  # Javascript files of your project
│   ├── scss                # SCSS styles for your project
├── .gitignore              # Files and folders to be ignored by Git
├── .prettierrc              # Prettier configuration file
├── .prettierignore              # Files and folders to be ignored by Prettier
├── index.html              # The HTML file for your project
├── LICENSE                 # The license for your project
├── package-lock.json       # Lockfile for your project's dependencies
├── package.json            # Defines your project and its dependencies
├── postcss.config.cjs      # Configuration for PostCSS
├── README.md               # This file
├── tailwind.config.js          # Configuration for Tailwind CSS
├── vite.config.js          # Configuration for Vite
```

## License

This template was created under the [MIT License](LICENSE).
