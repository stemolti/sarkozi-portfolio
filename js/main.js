
// /* Create the timeline animation */
// let tl = gsap.timeline();

// // Select logo element
// const logo = document.querySelector(".logo");



//   // Menu animation

//   // gsap.to() from CSS to JS
//   // gsap.from() from JS to CSS
//   let tl2 = gsap.timeline();

//   tl2.from('.tab-left, .tab-bottom,.tab-right ', {
//     opacity: 0,
//     ease: "power3.inOut",
//   });
// });


/* L'evento preso in considerazione è quello del caricamento del sito
  addEventListener è un metodo che ascolta l'evento  DOMContentLoaded
  dopo di che esegue la funzione anonima all'interno del quale ci sono una
  serie di istruzioni per generare l'animazion del mio logo
*/
document.addEventListener("DOMContentLoaded", () => {

  /*
  
  */
  document.querySelector(".hamburger").style.opacity = 0;

  /* Su oggetto di AnimeJS creo una timeline su vado a realizzare un effetto */
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

      targets: ".hamburger",
      opacity: 1,
      easing: 'easeInOutExpo',
      duration: 500

    }, "+=1000");

  // /* Creaato la timeline su cui eseguire l'animazione */
  let tl = gsap.timeline();

  // // Anima la proprietà `top` del logo
  // gsap.to() legge prima la proprieta dal CSS, poi esegue quello che c'è su JS
  // gsap.from() from JS to CSS
  tl.to(".logo", {
    top: 0,
    duration: 3, // Time in seconds
    ease: "expo.inOut", // Easing Curve
  });

  const menuButton = document.querySelector('#menu-button');
  const tabLeft = document.querySelector('.tab-left');
  const tabBottom = document.querySelector('.tab-bottom');
  const tabRight = document.querySelector('.tab-right');


  /* addEventListerner è un metodo(funzione) che riceve in input due variabili (o paramentri)
   il primo paramentro è l'evento click ovvero l'azione che si compie con il mouse.
   il secondo parametro è una funzione anonima che esegue delle istruzioni
  */
  menuButton.addEventListener('click', () => {

    menuButton.classList.toggle('is-active'); // Toggle active class
    tabLeft.classList.toggle('open-left'); // Toggle open classes
    tabBottom.classList.toggle('open-bottom');
    tabRight.classList.toggle('open-right');
  });

});


/*add({
      targets: ".logo",
      translateY: '-40vh', // Sposta l'SVG verso l'alto di metà altezza della viewport
      duration: 1000,
      easing: 'easeInOutExpo'
    }, "+=1000") */