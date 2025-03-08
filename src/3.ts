function getRandomMathProblem(): string {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const operators = ['+', '-', '*', '/'];
  let problem = '';

  for (let i = 0; i < 3; i++) {
    const num1 = numbers[Math.floor(Math.random() * numbers.length)];
    const num2 = numbers[Math.floor(Math.random() * numbers.length)];
    const op = operators[Math.floor(Math.random() * operators.length)];
    problem += `${num1} ${op} ${num2}`;
  }

  return problem;
}
