// so first guessing number will be the last index of the first array and then we will check
// if it is divisible by all the elements of the first array and also if it is a factor of all the elements of the second array. If it is then we will increment our count and move to the next number which will be the last index of the first array + 1 and repeat the process until we reach the last index of the second array.

function getTotalX(a, b) {
  let count = 0;
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    let isValid = true;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      for (let j = 0; j < b.length; j++) {
        if (b[j] % i !== 0) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid) count++;
  }

  return count;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
