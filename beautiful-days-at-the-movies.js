function beautifulDays(i, j, k) {
  // Write your code here
  const arrayOfDays = Array.from(
    { length: j - i + 1 },
    (_, index) => i + index,
  );
  let numOfBeautifulDays = 0;

  arrayOfDays.forEach((day) => {
    const originalDay = day;
    let reversed = 0;
    while (day > 0) {
      const lastDigit = day % 10;
      reversed = reversed * 10 + lastDigit;
      day = Math.floor(day / 10);
    }
    if ((originalDay - reversed) % k === 0) numOfBeautifulDays++;
  });
  return numOfBeautifulDays;
}

console.log(beautifulDays(20, 23, 6));
