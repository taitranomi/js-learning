'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting elements
const header = document.querySelector('.header');

// Inserting Element
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'Boyzzzz <button class="btn btn--close-cookie">Gotcha</button>'

header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.parentElement.removeChild(message);
})

// styles
message.style.backgroundColor = 'blue';
message.style.width = '120%';

console.log(getComputedStyle(message).color);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.getAttribute('designer'));

// logo.setAttribute('company', 'CMC');
// console.log(logo.getAttribute('company'));

// Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current X/Y', window.pageXOffset, pageYOffset);

  // Scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  section1.scrollIntoView({behavior: 'smooth'});
});

// Event Handler
const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('Mother Fucker');

//   h1.removeEventListener('mouseenter', alertH1);
// }

const alertH1 = function (e) {
  alert('Mother Fucker');
}

h1.removeEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('Mother Fucker');
// };

