function findDigits(n) {
  let digit = 0;
  const str = String(n);

  for (let i = 0; i < str.length; i++) {
    const d = Number(str[i]);
    if (d !== 0 && n % d === 0) {
      digit++;
    }
  }

  return digit;
}

console.log(findDigits(111));