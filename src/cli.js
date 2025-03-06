const readlineSync = require('readline-sync');

module.exports = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};