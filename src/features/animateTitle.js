import gsap from 'gsap'

function animateTitle() {
  // Get the element from the DOM
  const h1Inner = document.querySelector('.heading-style-h1')

  // If it exists, play the aniamtion
  if (h1Inner) {
    gsap.from(h1Inner, {
      y: '-100%',
      duration: 0.6,
      ease: 'elastic.out(1, 0.6)',
    })
  }
}

export default animateTitle
