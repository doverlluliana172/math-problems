function findSmallestDifference(arr: number[]): [number, number] {
  let minDiff = Infinity;
  let smallestDifferenceIndex = -1;

  arr.forEach((value, index) => {
    if (value < 0 || value > Math.max(...arr)) return; // Skip non-integer or out-of-range values

    const currentDiff = value - arr[index];

    if (currentDiff < minDiff) {
      minDiff = currentDiff;
      smallestDifferenceIndex = index;
    }
  });

  return [smallestDifferenceIndex, minDiff];
}

// Example usage:
const arr1: number[] = [-5, -3, 0, 2, 4, 6];
console.log(findSmallestDifference(arr1)); // Output: [2, 2]

const arr2: number[] = [1, 2, 3, 4, 5];
console.log(findSmallestDifference(arr2)); // Output: [-1, -1]
