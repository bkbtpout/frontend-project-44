const chalk = require('chalk');
const { getRandomIntInclusive } = require('../src/utils');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const rounds = 3;
let correctAnswers = 0;

console.log('Answer "yes" if given number is prime, otherwise answer "no".');

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function askQuestion(number) {
  return new Promise(resolve => {
    readline.question(`Question: ${number}\nYour answer: `, resolve);
  });
}

async function playGame() {
  for (let i = 0; i < rounds; i++) {
    const question = getRandomIntInclusive(1, 100);
    
    const answer = await askQuestion(question);

    if ((isPrime(question) && answer.toLowerCase() === 'yes') ||
        (!isPrime(question) && answer.toLowerCase() === 'no')) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(chalk.red.bold('Wrong!'));
      console.log(`The correct answer was ${isPrime(question) ? 'yes' : 'no'}`);
      break;
    }
  }

  if (correctAnswers === rounds) {
    console.log(chalk.green.bold('\nCongratulations! You won the game.'));
  } else {
    console.log(chalk.red.bold('\nYou lost the game. Try again next time.'));
  }

  readline.close();
}

playGame();