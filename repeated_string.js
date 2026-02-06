function repeatedString(s, n) {
  const countA = (str) => str.split("").filter((c) => c == "a").length;

  const aInS = countA(s);
  const repeatedTimes = Math.floor(n / s.length);
  const remaining = n % s.length;
  const aInReminder = countA(s.slice(0, remaining));

  return aInS * repeatedTimes + aInReminder;
}
