'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)} millions people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
        </div>
    </article>
        `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighbors = function(country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);

//         // get neighbour countries
//         const [neighbour] = data.borders;

//         if(!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, 'neighbour');
//         }) 
//     })
// }

// getCountryAndNeighbors('usa');

// Promises and Fetch API 

// const renderError = function(msg) {
//     countriesContainer.insertAdjacentText('beforeend', msg);
//     countriesContainer.style.opacity = 1;
// }

// const getJSON = function(url, errorMsg = 'Something went wrong') {
//     return fetch(url)
//     .then(response => {
//         if(!response.ok) throw new Error(`${errorMsg} ${response.status}`);

//         return response.json();
//     });
// };

// const getCountryData = function (country) {
//     getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
//     .then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if(!neighbour) throw new Error('No neighbour found!');

//         // Country 2
//         getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => renderError(`Something went wrong! ${err}`))
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function() {
//     getCountryData('australia');
// })

// Event Loop practice
// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Promise.resolve('Resolved Promise 2').then(res => {
//     for(let i = 0; i < 1000000; i++) {

//     }
//     console.log(res)
// })

// console.log('Test End');

// const lotteryPromise = new Promise(function(resolve, reject) {
    

//     setTimeout(function() {
//         if(Math.random() >= 0.5) {
//             resolve('You win money');
//         } else {
//             reject(new Error('You lost your money'));
//         }
//     }, 2000)

// });

// lotteryPromise
// .then(res => console.log(res))
// .catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds*1000);
//     });
// };

// wait(2)
// .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// })
// .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc')
// .then(x => console.log(x));

// Promise.reject('abc')
// .catch(x => console.error(x));

const whereAmI = async function(country) {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await res.json();
    console.log(data);

    renderCountry(data[0]);
}

whereAmI('portugal');

console.log('FIRST');


