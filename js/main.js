
// /* Create the timeline animation */
// let tl = gsap.timeline();

// // Select logo element
// const logo = document.querySelector(".logo");

// // Anima la proprietà `top` del logo
// tl.to(logo, {
//   top: 0,
//   duration: 1, // Time in seconds
//   ease: "power3.inOut", // Easing Curve
// });

//   // Menu animation

//   // gsap.to() from CSS to JS
//   // gsap.from() from JS to CSS
//   let tl2 = gsap.timeline();

//   tl2.from('.tab-left, .tab-bottom,.tab-right ', {
//     opacity: 0,
//     ease: "power3.inOut",
//   });
// });

document.addEventListener("DOMContentLoaded", () => {

  //
  document.querySelector(".hamburger").style.opacity = 0;

  anime.timeline({ loop: false })
    .add({
      targets: ".svg-path-1",
      fill: "#000",
      duration: 1500,
      easing: "easeInOutSine"
    })
    .add({
      targets: ".svg-path-2",
      fill: "#000",
      duration: 1000,
      easing: "easeInOutSine"
    }, "-=1000")
    .add({
      targets: ".svg-path-3",
      fill: "#000",
      duration: 1000,
      easing: "easeInOutSine"
    }, "-=1000")
    .add({
      targets: ".logo",
      translateY: '-40vh', // Sposta l'SVG verso l'alto di metà altezza della viewport
      duration: 1000,
      easing: 'easeInOutExpo'
    }, "+=1000")
    .add({

      targets: ".hamburger",
      opacity: 1,
      easing: 'easeInOutExpo',
      duration: 500

    }, "+=500");

  const menuButton = document.querySelector('#menu-button');
  const tabLeft = document.querySelector('.tab-left');
  const tabBottom = document.querySelector('.tab-bottom');
  const tabRight = document.querySelector('.tab-right');

  menuButton.addEventListener('click', () => {

    menuButton.classList.toggle('is-active'); // Toggle active class
    tabLeft.classList.toggle('open-left'); // Toggle open classes
    tabBottom.classList.toggle('open-bottom');
    tabRight.classList.toggle('open-right');
  });

});
