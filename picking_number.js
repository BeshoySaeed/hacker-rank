function pickingNumbers(a) {
  a.sort((x, y) => x - y);
  let result = [];
  let start = 0;
  let step = 1;
  while (start < a.length && step < a.length) {
    if (step)
      if (a[step] - a[start] > 1) {
        result.push(a.slice(start, step).length);
        start = step;
      }
    step++;
    if (step === a.length) {
      result.push(a.slice(start, step).length);
    }
  }

  return Math.max(...result);
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
