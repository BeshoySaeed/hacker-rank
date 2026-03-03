function saveThePrisoner(prisoners, candies, start) {
  const zeroBasedStart = start - 1;
  const lastIndex = (zeroBasedStart + candies - 1) % prisoners;
  console.log(lastIndex);
  console.log(zeroBasedStart);
  return lastIndex + 1;
}

console.log(saveThePrisoner(3, 7, 3));
