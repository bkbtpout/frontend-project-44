import { startGame } from '../src/index.js';
import { gamePrime } from '../src/games/prime.js';
console.log('Welcome to the Brain Games!');
const playerName = startGame();
gamePrime(playerName);