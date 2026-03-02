function timeConversion(s) {
  const isAm = s.slice(-2) == "AM";
  let hours = Number(s.substring(0, 2));
  const minutes = s.slice(3, 5);
  const seconds = s.slice(6, 8);
  if (isAm) {
    if (hours >= 12) {
      hours -= 12;
    }
  } else {
    if (hours < 12) {
      hours += 12;
    }
  }
  return `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
}

console.log(timeConversion("06:40:03AM"));
