function findMaxSum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (currentSum + arr[i] > arr[i]) {
      currentSum += arr[i];
    } else {
      currentSum = arr[i];
    }

    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
