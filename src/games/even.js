import { playRound } from '../index.js';
const isEven = (num) => num % 2 === 0;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateQuestionAndAnswer = () => {
    const number = getRandomInt(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return { question: number, correctAnswer };
};
export const gameEven = (playerName) => {
    const rounds = 3;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < rounds; i++) {
        const { question, correctAnswer } = generateQuestionAndAnswer();
        const isCorrect = playRound(question, correctAnswer, playerName);
        if (!isCorrect) {
            return;
        }
    }
    console.log(`Congratulations, ${playerName}!`);
};