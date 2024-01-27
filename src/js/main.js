console.log('Main script loaded');
import '../scss/style.scss'

// --- import from src dir
import javascriptLogo from '@/images/javascript.svg' 

// --- import from public dir
// import viteLogo from '/images/vite.svg' 

document.getElementById('image').src = javascriptLogo

console.log(import.meta.env)
