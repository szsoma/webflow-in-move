/*!
 * FluidBlocks v1.0 - https://fluidgo.gumroad.com
 * @license Copyright 2022, Soma Szoboszlai. All rights reserved.
 * Purchasing this code gives you the rights to use it in your projects but not to redistribute it to others through cloneables or any other method of sharing the code.
 * For a license to use this code in a template, please contact Soma Szoboszlai. This code is listed as is.
 * No modifications or updates can be requested.
 * Purchasing this code is not in exchange for any support from Soma Szoboszlai in implementing it in your project or in exchange for any other personal service.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Site rectangles move down animation
function rectangleReveal() {
  let rectangleReveal = gsap.utils.toArray('.col4_item')
  let tl = gsap.timeline({
    scrollTrigger: {
      //trigger element / viewport
      trigger: '.section_who',
      start: 'top center',
    },
  })
  tl.from(rectangleReveal, {
    y: '0%',
    stagger: { each: 0.3 },
    duration: 1.8,
    ease: 'expo.inOut',
    delay: 'random(0.1, 0.9)',
  })
}

// Project #01
function project01() {
  let item1 = document.find('.wim_project-01-rect1.is-1')
  let item2 = document.find('.wim_project-01-ed')
  var tl1 = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'expo.inOut',
    },
    repeat: -1,
    yoyo: true,
  })

  tl1
    .to(item1, {
      scaleY: 4,
    })
    .to(item1, {
      scaleY: 1,
    })
    .to(item2, {
      height: '8%',
      rotate: 360,
    })
    .to(item2, {
      height: '100%',
    })
    .to(
      '.wim_project-01-rect1.is-2:nth-child(1)',
      {
        y: '100%',
      },
      '<'
    )
    .to('.wim_project-01-rect1.is-2:nth-child(2)', {
      x: '-100%',
    })
    .to('.wim_project-01-rect1.is-2:nth-child(1)', {
      x: '100%',
      delay: -1,
    })
    .to('.wim_project-01-rect1.is-2:nth-child(2)', {
      y: '100%',
    })
    .to('.wim_project-01-rect1.is-2:nth-child(1)', {
      y: '0%',
      delay: -1,
    })
    .to('.wim_project-01-rect1.is-2:nth-child(2)', {
      x: '0%',
    })
    .to('.wim_project-01-rect1.is-2:nth-child(1)', {
      x: '0%',
      delay: -1,
    })
    .to('.wim_project-01-rect1.is-2:nth-child(2)', {
      y: '0%',
    })
    .to('.wim_project-01-circle', {
      y: '200%',
      stagger: { each: 0.6 },
      duration: 1.2,
      ease: 'expo.inOut',
      delay: -0.8,
    })
}
rectangleReveal()
project01()
