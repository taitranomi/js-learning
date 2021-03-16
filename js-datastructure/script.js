'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 enhanced object literals
  openingHours,

  orderDelivery(obj) {
    console.log(obj);
  }
};



restaurant.orderDelivery({
  time: '12:20',
  address: '11 Duy Tan',
});

const arr = [1,2,3];
const [x, y, z] = arr;

console.log(x, y, z);

let [first, second] = restaurant.categories;
console.log(first, second);

// swap first and second
[first, second] = [second, first];
console.log(first, second); 

// const [first, ,third] = restaurant.categories;
// console.log(first, third);

console.log(restaurant.order(2, 0));

// const nested = [2, 4, [5, 6]];
// const [i = 1, ,[a, b], m = 1] = nested;

// console.log(i, a, b, m);

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

let a = 111;
let b = 999;

const obj = {a: 12, b: 4, c: 15};
({a, b} = obj);

console.log(a, b);

const { fri } = restaurant.openingHours;
console.log(fri);

const arrSpread = [1, 2, 3, 4, 5, 6];
const newArr = [10, 8, ...arrSpread];
console.log(newArr);

const str = "Tran";
const strLetters = [...str];
console.log(strLetters);

// const promptObj = [
//   prompt('Mem1'),
//   prompt('Mem2'),
//   prompt('Mem3'),
// ];
// console.log(promptObj);

const arrRest = [1, 2, ...[3, 4]];
const [a1, b1, ...others] = [1, 2, 3, 4];

console.log(a1, b1, others);

// objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// function
const addRest = function (...numbers) {
  console.log(numbers);
}

addRest(2, 3, 4);
addRest(...arr);

// Short Circuiting (&& and ||)
console.log(undefined || 0 || '' || 'Hello' || 23);
restaurant.numGuests = 44;

const guest1 = restaurant.numGuests || 10;
console.log(guest1);

console.log(2 && 3);

// Nullish Coalescing Operators
console.log(null ?? 10);

// looping Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(var item of menu) {
  console.log(item)
}

console.log([...menu.entries()]);

for(var item of menu.entries()) {
  console.log(item)
}

console.log(restaurant);

// Optional Chaining ?.
console.log(restaurant.openingHours.mon?.open);

// Looping Objects: Object Keys, Values and Entries
for(const day of Object.keys(openingHours)) {
  console.log(day);
}

// Set 
let orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
]);

orderSet.add('Bread');
orderSet.delete('Pizza');

const newOrderSet = [...new Set(orderSet)];
console.log(newOrderSet);

// Map
const arrTwo = [1, 2];

const rest = new Map();
rest.set('name', 'Classico Italiano')
    .set(2, 'Italy')
    .set(arrTwo, 'Test');
console.log(rest.set(3, 'Brazil'));

console.log(rest.get(arrTwo));

console.log(rest.has('time'));

const programmingQuestion = new Map([
  ['question', 'What is PL?'],
  [1, 'C'],
  [2, 'Java'],
]);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// String method



