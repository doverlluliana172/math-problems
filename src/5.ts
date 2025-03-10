import { Random } from 'mathjs';

function getRandomInt(min: number, max: number): number {
  const rand = new Random();
  return Math.round(rand.uniform(min, max));
}

export default getRandomInt;
