# DBA Boilerplate Vite for Create Landings and MPA 
Current version: 1.0.0 (beta)

### For whom and what purpose will this template may be useful: 
- HTML, CSS, SCSS, Tailwind, JavaScript learning and practice 
- "Vite" learning and practice 
- Simple landing pages, Portfolio etc. creation and development
- Single and Multi Page project

Key features of this template:

**Build Tools**: Vite.js
<br>
**Plugins**: Autoprefixer, Imagemin, Imagemin-Webp, Vite plugin Image Optimizer, Vite plugin handlebars, CSSnano, Fast-glob
<br>
**Styles**: SCSS, Tailwind CSS
<br>
**Reset**: for SCSS development I use CSS Reset from here:  [The New CSS Reset](https://elad2412.github.io/the-new-css-reset/)

Why it unique template:<br>
- **Multilingual**<br>
- **Telegram notification**<br>
- **Partial HTML Injection**<br>
- **Sourcemap** Scripts & Styles sourcemap build only for in Production Mode<br>

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
        <br>*Note: Dependencies for plugin above: "svgo" and "sharp"*
- **[imagemin-webp](https://www.npmjs.com/package/imagemin-webp):** Converts formats such as .png/.jpg etc to .webp format
- **[imagemin](link):** 
- **[cssnano](link):** 
- **[fast-glob](link):** 
- **[postcss](link):** 
- **[sass](link):** 
- **[tailwindcss](link):** 
- **[vite-plugin-handlebars](https://www.npmjs.com/package/vite-plugin-handlebars):** 
- **[vite-plugin-remove-console](https://github.com/xiaoxian521/vite-plugin-remove-console):** 
- **[vite-plugin-static-copy](https://github.com/sapphi-red/vite-plugin-static-copy/tree/main):** 
- **[vite-plugin-webfont-dl](https://github.com/feat-agency/vite-plugin-webfont-dl?tab=readme-ov-file#supported-webfont-providers):** - Automatically download and adds fonts (locally) to html file.

## Before starting

> [!WARNING]
>
> If you are using Windows, make sure to use `normalizePath` after doing `path.resolve` / `resolve` or else.
> `\` is a escape charactor in `fast-glob` and you should use `/`.
>
> ```js
> import { normalizePath } from 'vite'
> import path from 'node:path'
>
> normalizePath(path.resolve(__dirname, './foo')) // C:/project/foo
>
> // instead of
> path.resolve(__dirname, './foo') // C:\project\foo
> ```
>
> See [`fast-glob` documentation about this](https://github.com/mrmlnc/fast-glob#how-to-write-patterns-on-windows) for more details.

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
├── .github           # GitHub Actions folder
│   ├── workflows	            # Folder for your github workflows
|   │    ├── deployGitHubPage.yml	            # Action for deploy Vite project via GitHubPages
├── node_modules            # Node.js dependencies for the project.
├── pages                   # Folder for additional .html pages
├── public                  # Public assets and resources
│   ├── favicon	            # Folder for your web page favicon 
│   ├── images                 # Folder for your public images
├── src                     # Source code
│   ├── assets	            # Folder for you assets (fonts, images, etc...)
|   │    ├── fonts	            # Folder for your fonts
|   │    ├── images                 # Folder for your images
|   ├── components	        # Folder for your components
│   ├── js                  # Javascript files of your project
│   ├── partials                  # HTML Partials files of your project
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

## Partial HTML inject

Folder for your partials files location showed below: 
```plaintext
├── src                     # Source code
│   ├── partials                  # HTML Partials files of your project
```

 Create the `.html` file and inject it to your pages using special syntax {{> FILE_NAME }}
```html
<main>
    {{> FILE_NAME }}
</main>
```

## Fonts
*Automatically downloads and injects fonts from the **configured webfont CSS URL(s)**.*

1. Select your font families in your [webfont provider](#supported-webfont-providers) *(e.g. [Google Fonts](https://fonts.google.com))* and copy the **CSS URL**(s) from the ***"Use on the web"*** code block:

	```html
	<link href="[CSS URL]" rel="stylesheet">
	```

2. Add **`webfontDownload`** to your Vite plugins via predefine array with the selected Google Fonts **CSS URL**(s):
	```js
	// vite.config.js

	import webfontDownload from 'vite-plugin-webfont-dl';

    const customFonts = [
        'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
    ]

	export default {
	  plugins: [ 
        webfontDownload(customFonts),
         ],
	};
	```

    ### Supported webfont providers <span name="supported-webfont-providers"></span>
- **[Google Fonts](https://fonts.google.com)**
- **[Bunny Fonts](https://bunny.net/fonts/)**
- **[Fontshare](https://www.fontshare.com)**
<br>

## Tests
<!-- TODO: Tests description-->

## GitHub Pages
For this template you can use GitHub Pages to deploy your project.
in the `deployGitHubPage.yml` file you can set action to trigger workflow on push to the `demo` branch or manually.

Please follow thous steps to deploy your project via GitHub Pages Automatically:
1. Create GitHub Private Access Token - [PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
>PAT Config for Workflow actions:
> Below you can find the list of privileges you should enable whet create PAT:
> - repo
> - workflow
> - write
> - delete
> - admin:org 
> - admin:public_key 

2. Set up remote URL for your project repository: <br>
Example of URL pattern:
Git command: `git remote set-url origin`
URL: `https://[TOKEN]` + `[@]` + `github.com/[YOUR_ACCOUNT]/[REPOSITORY_NAME]`

```bush
git remote set-url origin https://jsg_dfjsdlfkhdlfhjdlgjdj37209gsdfbslnbcsajfnsa@github.com/my_github_name/repository_name.git
```

## License

This template was created under the [MIT License](LICENSE).

> ### “If, at first, you do not succeed, call it version 1.0.”
> _― Khayri R.R. Woulfe_

P.S. I knew that my template is overkill for one base template ;) but youse it as you like!
My next template will be Vite Typescript, Vite React, ASTRO.

Follow me on socials below:

### mySocials
<p align="left">
<a href="https://linkedin.com/in/batalshykov-dima" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="batalshykov-dima" height="30" width="40" /></a>
<a href="https://fb.com/dima.batalschykov" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="dima.batalschykov" height="30" width="40" /></a>
<a href="https://instagram.com/it_immigrant_" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="it_immigrant_" height="30" width="40" /></a>
</p>

P.P.S. Do not buy me a coffee, rather just add me to friends !)
