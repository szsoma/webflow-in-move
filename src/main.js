import './styles/style.css'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);


console.log('Soma! It"s working')

/*!
 *Hey Mr. Reverse engineer! Thanks for checking
 * FluidBlocks v1.0 - https://fluidgo.gumroad.com
 * @license Copyright 2022, Soma Szoboszlai. All rights reserved.
 * Purchasing this code gives you the rights to use it in your projects but not to redistribute it to others through cloneables or any other method of sharing the code.
 * For a license to use this code in a template, please contact Soma Szoboszlai. This code is listed as is.
 * No modifications or updates can be requested.
 * Purchasing this code is not in exchange for any support from Soma Szoboszlai in implementing it in your project or in exchange for any other personal service.
 */
let tl2 = gsap.timeline({ delay: 0.1 });
tl2.to(".txt-row", {
  opacity: 1,
  ease: "power4.out",
  duration: 0.3
}, 0
);
gsap.registerPlugin(ScrollTrigger);

let pixelArr = gsap.utils.toArray("#rect");
let trends = document.getElementsByClassName("is-trends");
let five = document.getElementsByClassName("five-pixel");
let triggerElement = document.getElementsByClassName(".anim-container");

let tl = gsap.timeline({
  scrollTrigger: {
    //trigger element / viewport
    trigger: triggerElement,
    start: "top top",
    end: "center center",
    scrub: true
  }
});

tl.from(trends, {
  x: "-17em",
  duration: 4
})
  .from(
    five,
    {
      opacity: 1,
      x: "-10em",
      duration: 15
    },
    ">"
  )
  .from(
    pixelArr,
    {
      opacity: 0,
      stagger: { each: 0.07 },
      delay: "random(0, 20)"
    },
    ">-=30%"
  );
