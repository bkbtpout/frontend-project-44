import getRandomInt from '../utils.js';
const progressionLength = getRandomInt(5, 10);
const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, index) => start + index * step);
};
const getGameData = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 5);
  const progression = generateProgression(start, step, progressionLength);
  
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  
  const question = progression.join(' ');
  const answer = String(hiddenValue);
  
  return { question, answer };
};
export default getGameData;