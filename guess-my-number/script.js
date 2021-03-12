'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct Number";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

var highscore = Number(document.querySelector('.highscore').textContent);
var secretNumber = Math.trunc(Math.random()*20) + 1;
var score = Number(document.querySelector('.score').textContent);

console.log(score);

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        if(score === 0) {
            document.querySelector('.message').textContent = "You've lost! 😒";
        }
        else {
            document.querySelector('.message').textContent = "No Number! 🤣🤣";
            score--;
            document.querySelector('.score').textContent = String(score);
        }
    }

    // When player wins
    else if(guess === secretNumber) {
        if(score === 0) {
            document.querySelector('.message').textContent = "You've lost! 😒";
        }
        else {
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.message').textContent = "Noiceeeeee! ❤❤❤";

            document.querySelector('body').style.backgroundColor = 'green';

            document.querySelector('.number').style.width = '30rem'

            if(score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
    }

    // When guess is high
    else if(guess > secretNumber) {
        if(score === 0) {
            document.querySelector('.message').textContent = "You've lost! 😒";
        }
        else {
            document.querySelector('.message').textContent = "High!!!";
            score--;
            document.querySelector('.score').textContent = String(score);
        }
    }

    // When guess is low
    else if(guess < secretNumber) {
        if(score === 0) {
            document.querySelector('.message').textContent = "You've lost! 😒";
        }
        else {
            document.querySelector('.message').textContent = "Lowwww!!!!!!!";
            score--;
            document.querySelector('.score').textContent = String(score);
        }
    }
});

document.querySelector('.again').addEventListener
('click', function() {
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.score').textContent = '20';

    document.querySelector('.guess').value = "";

    document.querySelector('.message').textContent = "Start guessing...";

    document.querySelector('body').style.backgroundColor = '#222';

    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = Number(document.querySelector('.score').textContent);
})