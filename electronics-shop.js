// what is the problem in the function below?

function getMoneySpent(keyboards, drives, b) {
  keyboards.sort((a, b) => a - b);
  drives.sort((a, b) => a - b);
  let maxSpent = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const currentCost = keyboards[i] + drives[j];
      if (currentCost <= b) {
        maxSpent = Math.max(maxSpent, currentCost);
      }
    }
  }
  return maxSpent;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
