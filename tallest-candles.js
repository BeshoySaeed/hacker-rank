function birthdayCakeCandles(candles) {
  const tallest = Math.max(...candles);
  const tallestCandlesLength = candles.filter((c) => c == tallest).length;

  return tallestCandlesLength;
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));
