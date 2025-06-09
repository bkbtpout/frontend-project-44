import { playRound } from '../index.js';

const gcd = (a, b) => {
while (b) {
    [a, b] = [b, a % b];
}
return a;
};
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateQuestionAndAnswer = () => {
const num1 = getRandomInt(1, 100);
const num2 = getRandomInt(1, 100);
const question = `${num1} ${num2}`;
const correctAnswer = gcd(num1, num2);
return { question, correctAnswer };
};
export const gameGCD = (playerName) => {
const rounds = 3;
console.log('Find the greatest common divisor of given numbers.');
for (let i = 0; i < rounds; i++) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const isCorrect = playRound(question, correctAnswer, playerName);
    if (!isCorrect) {
        return;
    }
}
console.log(`Congratulations, ${playerName}!`);
};