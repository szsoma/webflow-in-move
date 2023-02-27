import './styles/style.css'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// importing my functions
import rectangleReveal from './features/home.js'
import project01 from './features/home.js'

// Home javascript section
gsap.registerPlugin(Flip, ScrollTrigger)
rectangleReveal()
project01()

console.log('It"s working')
