import './styles/style.css'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { $, jQuery } from 'jquery'
import SplitType from 'split-type'

// export for others scripts to use
window.$ = $
window.jQuery = jQuery

// importing my functions

/* --- Stealing Code is Baad! ;) --- */

/*!
 * FluidBlocks v1.0 - https://fluidgo.gumroad.com
 * @license Copyright 2022, Soma Szoboszlai. All rights reserved.
 * Purchasing this code gives you the rights to use it in your projects but not to redistribute it to others through cloneables or any other method of sharing the code.
 * For a license to use this code in a template, please contact Soma Szoboszlai. This code is listed as is.
 * No modifications or updates can be requested.
 * Purchasing this code is not in exchange for any support from Soma Szoboszlai in implementing it in your project or in exchange for any other personal service.
 */
gsap.registerPlugin(Flip, ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
  // Bottom nav -----------------

  $('.menu_item').on('mouseenter', function () {
    let state = Flip.getState('.menu_active')
    $('.menu_active').appendTo($(this))
    Flip.from(state, {
      duration: 0.4,
      ease: 'power2.out',
    })
  })
  $('.menu_wrap').on('mouseleave', function () {
    let state = Flip.getState('.menu_active')
    $('.menu_active').appendTo($('.menu_item.w--current'))
    Flip.from(state, {
      duration: 0.4,
      ease: 'power2.out',
    })
  })

  // Site rectangles move down animation ---------------
  function rectangeReveal() {
    let rectangleReveal = gsap.utils.toArray('.col4_item')
    let tl = gsap.timeline({
      scrollTrigger: {
        //trigger element / viewport
        trigger: '.section_who',
        start: 'top bottom',
      },
    })
    tl.from(rectangleReveal, {
      y: '0%',
      stagger: { each: 0.2 },
      duration: 1.6,
      ease: 'expo.inOut',
      delay: 'random(0, 0.8)',
    })
  }

  // Page Loader animation

  function pageLoader() {
    document.querySelector('.page-wrapper').classList.add('is-loading')
    let loaderLines = gsap.utils.toArray('.loader_line')
    var tlLoader = gsap.timeline({
      paused: false,
    })
    // for (let i = 0; i < loaderLines.length; i++) {
    //   loaderLines[i].style.width = i + "px";
    // }

    // TextSplit char function
    var splittedArrayHero = gsap.utils.toArray(
      '.heading-style-h1, .welcome-txt'
    )
    splittedArrayHero.forEach((index) => {
      let typeSplit = new SplitType(index, {
        types: 'words, chars',
        tagName: 'span',
      })
      //  typeSplit.revert();
    })

    tlLoader
      .to(loaderLines, {
        scaleY: 0,
        stagger: { each: 0.1 },
        duration: 2,
        ease: 'expo.inOut',
      })
      .to(
        '.welcome-txt .char',
        {
          y: '-500%',
          stagger: { each: 0.08 },
          opacity: 0,
          duration: 1.2,
          ease: 'expo.in',
          delay: 'random(0, 0.4)',
          onComplete: () =>
            document
              .querySelector('.page-wrapper')
              .classList.remove('is-loading'),
        },
        '<+=1.2'
      )
      .from(
        '.page-loader',
        {
          y: 0,
          duration: 2,
          ease: 'expo.out',
        },
        '>-=1'
      )
      .from(
        '.heading-style-h1 .char',
        {
          y: '100%',
          stagger: { each: 0.08 },
          duration: 1.2,
          ease: 'expo.out',
        },
        '<+=.5'
      )

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_hero',
        start: 'top top',
        scrub: 3,
      },
    })
    tl.to('.txt-row.is-hero, .txt-row.is-3', {
      x: '-6%',
      stagger: { each: 0.09 },
      duration: 1,
    }).to(
      '.txt-row.is-2',
      {
        x: '6%',
      },
      '<'
    )
  }

  // You'll Learn word animation -------------------

  function movingWords() {
    let tl = gsap.timeline({ repeat: -1 })
    let i = 0
    let wordsArray = gsap.utils.toArray('.moving-words_txt')
    let wordsDivArray = gsap.utils.toArray('.moving-words')
    wordsArray.forEach((element) => {
      tl.to(wordsDivArray, {
        yPercent: i,
        duration: 1.2,
        delay: 0.3,
        ease: 'expo.inOut',
      })
      i -= 100 / 6
    })
    tl.to('.moving-words', {
      y: i - 100,
      duration: 0.3,
      delay: 0.3,
    }).to('.moving-words', {
      yPercent: 0,
      duration: 0,
    })
  }

  // Title animation -------------------

  let typeSplit2

  function titleAnim() {
    // TextSplit char function
    var titleArray = gsap.utils.toArray('.anim-title')

    titleArray.forEach((index) => {
      typeSplit2 = new SplitType(index, {
        types: 'words, chars',
        tagName: 'span',
      })
    })
    $('.section-header_content').each(function (index) {
      let listTitle = $(this).find('.anim-title .char')
      let triggerElement = $(this).closest('.section_header')
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top 60%',
        },
      })
      tl.from(listTitle, {
        autoAlpha: 0,
        stagger: { each: 0.04 },
        duration: 0.02,
        delay: 'random(0.01, 1)',
      })
    })
    // typeSplit2.revert();
  }

  // Animating HERO

  // Calling your functions ->
  function init() {
    titleAnim()
    pageLoader()
    rectangeReveal()
    movingWords()
    // other functions you made
  }

  // Calling init function ->
  window.addEventListener('load', function () {
    init()
  })

  //------------&&&&&&&&---------------------

  // Project #01 -----------------------------

  let item1 = $('.wim_project-01-rect1.is-1')
  let item2 = $('.wim_project-01-ed')

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
})
