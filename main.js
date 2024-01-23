// --- import from src dir
import javascriptLogo from '@/images/javascript.svg' 

// --- import from public dir
// import viteLogo from '/images/vite.svg' 

import './style.scss'

//  Import Header as JSX
import { Header } from './src/components/TestElement/TestElement.jsx'
document.querySelector("header").appendChild(Header)

document.getElementById('image').src = javascriptLogo

console.log(import.meta.env)
