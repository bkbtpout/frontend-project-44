import { playRound } from '../index.js';

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateQuestionAndAnswer = () => {
    const number = getRandomInt(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { question: number, correctAnswer };
};
export const gamePrime = (playerName) => {
    const rounds = 3;
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < rounds; i++) {
        const { question, correctAnswer } = generateQuestionAndAnswer();
        const isCorrect = playRound(question, correctAnswer, playerName);
        if (!isCorrect) {
            return; }
        }
        console.log(`Congratulations, ${playerName}!`);
    };
