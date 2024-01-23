// import javascriptLogo from '@/images/javascript.svg'
import viteLogo from '/images/vite.svg'

import './about.scss'

//  Import Header as JSX
import { Header } from '/src/components/TestElement/TestElement.jsx'
document.querySelector("header").appendChild(Header)

// document.getElementById('image').src = viteLogo


const img = document.querySelector('#image');
img.src = viteLogo

console.log(import.meta.env)
