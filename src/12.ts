import { random } from 'mathjs';

function getRandomNumber(min: number, max: number): number {
  return random(min, max);
}

console.log(getRandomNumber(1, 10));
