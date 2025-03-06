const chalk = require('chalk');
const { getRandomIntInclusive } = require('../src/utils');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const rounds = 3;
let correctAnswers = 0;

console.log('What number is missing in this progression?');

function generateProgression(start, step, length, hiddenIndex) {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  progression[hiddenIndex] = '..';
  return progression;
}

function askQuestion(progression) {
  return new Promise(resolve => {
    readline.question(`Question: ${progression.join(' ')}\nYour answer: `, resolve);
  });
}

async function playGame() {
  for (let i = 0; i < rounds; i++) {
    const start = getRandomIntInclusive(1, 50);
    const step = getRandomIntInclusive(1, 10);
    const length = 10;
    const hiddenIndex = getRandomIntInclusive(0, length - 1);
    const progression = generateProgression(start, step, length, hiddenIndex);
    const expectedAnswer = start + hiddenIndex * step;

    const answer = await askQuestion(progression);

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