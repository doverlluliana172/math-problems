import { sqrt, PI } from 'mathjs';

const pi = PI;
const h = 10; // Example height

function calculateCircumference(radius) {
  const circumference = 2 * pi * radius;
  return circumference;
}

function main() {
  console.log(`The circumference of the circle with radius ${radius} is: ${calculateCircumference(radius)} units.`);
}

// Example usage
const radius = 5; // Example radius for a circle
main();
