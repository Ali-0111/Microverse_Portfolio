const humberger = document.querySelector('.humberger');
const mainHead = document.querySelector('.main-head-desktop');
const spanHide = document.querySelector('.humberger .hide');
const span1 = document.querySelector('.humberger .span-1');
const span2 = document.querySelector('.humberger .span-2');
const links = document.querySelectorAll('nav .flex a');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.input2');

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
  const emailAdd = form.elements.email.value;
  if (emailAdd === emailAdd.toLowerCase()) {
    form.submit();
    ok();
  } else {
    showError();
  }
}

// saved Local

function savedLocal() {
  const emailAdd = form.elements.email.value;
  const name = form.elements.name.value;
  const message = form.elements.textarea.value;
  localStorage.setItem('formData', JSON.stringify({
    name,
    email: emailAdd,
    message,
  }));
}

// fillForm function

function fillForm() {
  const dataRestored = JSON.parse(localStorage.getItem('formData'));
  form.elements.name.value = dataRestored.name;
  form.elements.email.value = dataRestored.email;
  form.elements.textarea.value = dataRestored.message;
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

// input event to save
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    savedLocal();
  });
});

// filling the form on when windows loads

window.addEventListener('load', () => {
  fillForm();
});