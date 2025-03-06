const chalk = require('chalk');
const { getRandomIntInclusive } = require('../src/utils');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const rounds = 3;
let correctAnswers = 0;

console.log('Find the greatest common divisor of given numbers.');

function askQuestion(numbers) {
  return new Promise(resolve => {
    readline.question(`Question: ${numbers.join(', ')}\nYour answer: `, resolve);
  });
}

function gcd(a, b) {
  while (b != 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

async function playGame() {
  for (let i = 0; i < rounds; i++) {
    const num1 = getRandomIntInclusive(1, 100);
    const num2 = getRandomIntInclusive(1, 100);
    const numbers = [num1, num2];
    const expectedAnswer = gcd(num1, num2);

    const answer = await askQuestion(numbers);

    if (parseInt(answer) === expectedAnswer) {
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