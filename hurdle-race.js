function hurdleRace(k, height) {
  // Write your code here
  const max = Math.max(...height);
  return max > k ? max - k : 0;
}
