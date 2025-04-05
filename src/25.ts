function calculateSum(numbers: number[]): number {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum;
}
