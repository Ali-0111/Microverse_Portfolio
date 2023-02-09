const humberger = document.querySelector('.humberger');
const mainHead = document.querySelector('.main-head-desktop');
const spanHide = document.querySelector('.humberger .hide');
const span1 = document.querySelector('.humberger .span-1');
const span2 = document.querySelector('.humberger .span-2');
const links = document.querySelectorAll('nav .flex a');
const form = document.querySelector('.form');

// munu-tuggle function
function menuTuggle() {
  humberger.classList.toggle('p-fixed');
  spanHide.classList.toggle('hidden');
  span1.classList.toggle('span-1-j');
  span2.classList.toggle('span-2-j');
  mainHead.classList.toggle('main-head-visible');
}

// function : showError

function showError() {
  const msg = document.querySelector('small');
  msg.innerText = 'Use emil in lowerCase';
}

// function valid email entered
function ok() {
  const msg = document.querySelector('small');
  msg.innerText = 'Approved';
}

// validation

function validation() {
  const v = form.elements.email.value;
  if (v === v.toLowerCase()) {
    form.submit();
    ok();
  } else {
    showError();
  }
}

// adding events section

humberger.addEventListener('click', menuTuggle);
// humber ger clicked function
Array.from(links).forEach((element) => element.addEventListener('click', menuTuggle));

// form submit event
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validation();
});
