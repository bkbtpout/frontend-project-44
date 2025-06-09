import { startGame } from '../src/index.js';
import { gameGCD } from '../src/games/gcd.js';
console.log('Welcome to the Brain Games!');
const playerName = startGame();
gameGCD(playerName);