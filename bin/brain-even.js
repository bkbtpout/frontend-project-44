import { startGame } from '../src/index.js';
import { gameEven } from '../src/games/even.js';
console.log('Welcome to the Brain Games!');
const playerName = startGame();
gameEven(playerName);