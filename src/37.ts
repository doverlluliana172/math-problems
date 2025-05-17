function calculateGCD(a: number, b: number): number {
  while(b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

// Example usage:
console.log(calculateGCD(48, 18)); // Output: 6
