'use strict';
let dice = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let number;
let threshold;
document.querySelector('.check').addEventListener('click', function () {
    threshold = document.querySelector('.guess').value;
    if (threshold > 0 && threshold <= 20) {
        number = threshold;
        if (number == dice) {
            document.querySelector('.message').textContent = 'CORRECT!!';
            document.querySelector('.number').textContent = number;
            document.querySelector('body').style.backgroundColor = '#60b347';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if (number < dice) {
            score--;
            document.querySelector('.message').textContent = 'Too low';
            document.querySelector('.score').textContent = score;
        }
        else if (number > dice) {
            score--;
            document.querySelector('.message').textContent = 'Too high';
            document.querySelector('.score').textContent = score;
        }
    }
    else {
        document.querySelector('.message').textContent = 'Wrong input';
    };
});
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    score = 20;
    dice = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});