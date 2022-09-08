'use strict';

// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'test';

// document.querySelector('.score').textContent = '19';
// document.querySelector('.number').textContent = '17';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highScore = 0;
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
const settingMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    settingMessage('No number 🛑');

    // When player wins
  } else if (guess === SecretNumber) {
    settingMessage('Correct number 🥳 !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = SecretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Too high or too low
  else {
    if (score > 1) {
      settingMessage(guess > SecretNumber ? 'Lower' : 'Higher');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      settingMessage('You lost 😥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  settingMessage('Start guessing...');
});
