const randomMathProblem = () => {
  // Generate a random number between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  // Generate a random operator (+, -, x, /)
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  // Generate a random number between 1 and 10
  const num2 = Math.floor(Math.random() * 10) + 1;
  // Return the math problem as a string
  return `${num1} ${operator} ${num2}`;
};
