'use strict';

var firstName = 'Tai';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year);

        const isMillenial = () => {
            console.log(this.year >= 1981 && this.year <= 1996)
        };

        isMillenial();
    },

    greet: () => {
        console.log(`Hey ${this.firstName}`) // can't use this keyword in arrow function 
    },
};

jonas.calcAge();


// Arguments
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// addExpr(3, 4);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

// addArrow(arguments);

// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge // copying the method
// matilda.calcAge();

// const f = jonas.calcAge;
// console.log(f);
// f();

const me = {
    name: 'Jonas',
    age: 30,
    family: ['Alice', 'Bob'],
}

const friend = Object.assign({},me);
friend.name = 'Tai';
friend.family.push('Dung');

console.log('Before:', me);
console.log('After:', friend);


