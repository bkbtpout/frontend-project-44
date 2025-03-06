const chalk = require('chalk');
const { getRandomIntInclusive } = require('../src/utils');
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });


const rounds = 3;
let correctAnswers = 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

function askQuestion(question) {
  return new Promise(resolve => {
    readline.question(`Question: ${question}\nYour answer: `, resolve);
  });
}

async function playGame() {
  for (let i = 0; i < rounds; i++) {
    const question = getRandomIntInclusive(1, 99);
    
    const answer = await askQuestion(question);

    if ((question % 2 === 0 && answer.toLowerCase() === 'yes') ||
        (question % 2 !== 0 && answer.toLowerCase() === 'no')) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(chalk.red.bold('Wrong!'));
      console.log(`The correct answer was ${question % 2 === 0 ? 'yes' : 'no'}`);
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

