function getSecondLargest(nums) {
  // Complete the function
  // remove first largest
  const max = Math.max(...nums);
  nums = nums.filter((n) => n !== max);
  const secondLargest = Math.max(...nums);
  console.log(secondLargest);
  return secondLargest;
}

getSecondLargest([2, 3, 6, 6, 5]);

console.log(5 & 3);
