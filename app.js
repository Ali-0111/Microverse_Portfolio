const humberger = document.querySelector('.humberger');
const mainHead = document.querySelector('.main-head-desktop');
const spanHide = document.querySelector('.humberger .hide');
const span1 = document.querySelector('.humberger .span-1');
const span2 = document.querySelector('.humberger .span-2');
const links = document.querySelectorAll('nav .flex a');
const seeProjectBtn = document.querySelector('.btn-4');

// munu-tuggle function
function menuTuggle() {
  humberger.classList.toggle('p-fixed');
  spanHide.classList.toggle('hidden');
  span1.classList.toggle('span-1-j');
  span2.classList.toggle('span-2-j');
  mainHead.classList.toggle('main-head-visible');
}
function popUp (e) {
  console.log(e.target);
}
// adding events
humberger.addEventListener('click', menuTuggle);
// humber ger clicked function
Array.from(links).forEach((element) => element.addEventListener('click', menuTuggle));

seeProjectBtn.addEventListener('click', popUp);