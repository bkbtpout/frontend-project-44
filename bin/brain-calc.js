import getRandomInt from '../utils.js'; 
const operations = ['+', '-', '*'];
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};
const getGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calculate(num1, num2, operation));
  return { question, answer };
};
export default getGameData;