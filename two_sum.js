const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) return true;

    if (nums[left] + nums[right] > target) right--;

    if (nums[left] + nums[right] < target) left++;
  }

  return false;
};
