const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}

const getRandomNumber = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
}

const getRandomArrayElement = <T>(array: T[]): T => {
  return array[getRandomInt(array.length)];
}
