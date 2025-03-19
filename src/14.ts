function getRandomMathProblem(): string {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 3)];
  const problem = `${num1} ${operator} ${num2}`;
  return problem;
}
