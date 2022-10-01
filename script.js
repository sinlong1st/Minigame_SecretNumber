'use strict';
///////////////////////Generate random number
var secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
//////////////////////
let curScore = 20;
let highScore = 0;
const displayMes = mes => {
  document.querySelector('.message').textContent = mes;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('Guess:' + guess, typeof guess);
  // When no input
  if (!guess) {
    displayMes('You have to guess a number🤗');

    // When guess the right number
  } else if (guess === secretNum) {
    if (curScore > highScore) {
      highScore = curScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    displayMes('Boom!!! You are correct!');
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').textContent = secretNum;
    // document.querySelector('.guess').disable = true;
    document.querySelector('.number').style.width = '270px';
  } else if (guess > secretNum) {
    displayMes('A bit lower might be right!');
    curScore--;
  } else if (guess < secretNum) {
    displayMes('Make it higher !!!');
    curScore--;
  }
  document.querySelector('.score').textContent = curScore;
  if (curScore <= 0) {
    displayMes('You lost !!!');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
  curScore = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMes('Start guessing...');
  document.querySelector('.guess').value = null;
  document.querySelector('.highscore').textContent = highScore;
});
