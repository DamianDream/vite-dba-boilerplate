import javascriptLogo from '@/images/javascript.svg' 
import { parseTSV } from './localization/uLangConvertTSV.js'

import '../scss/style.scss'

console.log('Main script loaded');

// --- import from src dir

// --- import from public dir
// import viteLogo from '/images/vite.svg' 

document.getElementById('image').src = javascriptLogo

parseTSV()
