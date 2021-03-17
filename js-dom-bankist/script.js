'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');

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
// const h1 = document.querySelector('h1');

// // const alertH1 = function (e) {
// //   alert('Mother Fucker');

// //   h1.removeEventListener('mouseenter', alertH1);
// // }

// const alertH1 = function (e) {
//   alert('Mother Fucker');
// }

// h1.removeEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// h1.addEventListener('mouseenter', alertH1);

// // h1.onmouseenter = function (e) {
// //   alert('Mother Fucker');
// // };

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target);
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINKS', e.target);
// });

// Page navigation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('LINK');
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({
//       section1.scrollIntoView({behavior: 'smooth'});
//     });


//   });
// })

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  if(e.target.classList.contains('nav__link')) {
    console.log('Link');
  
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'});
  }
});

const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orange';

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('h1').style.background = 'var(--gradient-secondary)';

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// })

// function Animals(name, specie) {
//   this.name = name;
//   this.specie = specie;
// }
// Animals.prototype.sing = function(){
//   return `${this.name} can sing`;
// }
// Animals.prototype.dance = function() {
//   return `${this.name} can dance`;
// }
// let Bingo = new Animals("Bingo", "Hairy");

// console.log(Bingo.sing());

class Animals {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
  sing() {
      return `${this.name} can sing`;
  }
  dance() {
      return `${this.name} can dance`;
  }
} 
class Cats extends Animals {
  constructor(name, age, whiskerColor) {
      super(name, age);
      this.whiskerColor = whiskerColor;
  }
  whiskers() {
      return `I have ${this.whiskerColor} whiskers`;
  }
}
let clara = new Cats("Clara", 33, "indigo");

console.log(clara.sing());
console.log(clara.whiskers());

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if(!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  
  // Active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  
})