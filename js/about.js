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
