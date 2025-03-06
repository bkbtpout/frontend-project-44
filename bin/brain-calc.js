const chalk = require('chalk');
const { getRandomIntInclusive } = require('../src/utils');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const rounds = 3;
let correctAnswers = 0;

console.log('What is the result of the expression?');

function askQuestion(expression) {
  return new Promise(resolve => {
    readline.question(`${expression}: `, resolve);
  });
}

async function playGame() {
  for (let i = 0; i < rounds; i++) {
    const num1 = getRandomIntInclusive(1, 10);
    const num2 = getRandomIntInclusive(1, 10);
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const expression = `${num1} ${operator} ${num2}`;
    const expectedAnswer = eval(expression);

    const answer = await askQuestion(expression);

    if (parseFloat(answer) === expectedAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(chalk.red.bold('Wrong!'));
      console.log(`The correct answer was ${expectedAnswer}`);
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