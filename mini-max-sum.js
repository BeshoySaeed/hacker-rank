function miniMaxSum(arr) {
  const sortedArr = arr.sort();
  const minSum = sortedArr.slice(0, 4).reduce((cal, curr) => cal + curr, 0);
  const maxSum = sortedArr.slice(1, 5).reduce((cal, curr) => cal + curr, 0);

  console.log(`${minSum} ${maxSum}`);
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));
