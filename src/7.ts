import { useState } from 'react';

function MathProblem() {
  const [problem, setProblem] = useState({});

  // Generate a random math problem
  function generateProblem() {
    let type = ['addition', 'subtraction', 'multiplication', 'division'][Math.floor(Math.random() * 4)];
    let operand1 = Math.floor(Math.random() * 10);
    let operand2 = Math.floor(Math.random() * 10);

    if (type === 'addition') {
      return `${operand1} + ${operand2}`;
    } else if (type === 'subtraction') {
      return `${operand1} - ${operand2}`;
    } else if (type === 'multiplication') {
      return `${operand1} * ${operand2}`;
    } else {
      return `${operand1} / ${operand2}`;
    }
  }

  // Update the problem state with a new random math problem
  function updateProblem() {
    setProblem({
      type: generateProblem(),
      answer: null,
    });
  }

  // Handle user input for the solution to the math problem
  function handleInputChange(event) {
    const target = event.target;
    const value = parseInt(target.value);
    const name = target.name;

    setProblem({ ...problem, [name]: value });
  }

  // Check if the user's solution is correct and update the problem state accordingly
  function checkAnswer() {
    let correct = false;

    switch (problem.type) {
      case 'addition':
        correct = problem.answer === operand1 + operand2;
        break;
      case 'subtraction':
        correct = problem.answer === operand1 - operand2;
        break;
      case 'multiplication':
        correct = problem.answer === operand1 * operand2;
        break;
      case 'division':
        correct = problem.answer === operand1 / operand2;
        break;
    }

    if (correct) {
      alert('Correct!');
    } else {
      alert('Incorrect, please try again');
    }
  }

  return (
    <div>
      <h1>Math Problems</h1>
      <p>{problem.type}</p>
      <input type="number" name="answer" onChange={handleInputChange} />
      <button onClick={updateProblem}>Generate New Problem</button>
      <button onClick={checkAnswer}>Check Answer</button>
    </div>
  );
}
