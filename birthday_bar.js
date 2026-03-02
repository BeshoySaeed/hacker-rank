function birthday(s, d, m) {
  let count = 0;
  let windowSum = 0;

  if (m > s.length) return 0;

  // First window
  for (let i = 0; i < m; i++) {
    windowSum += s[i];
  }

  if (windowSum === d) count++;

  // Slide the window
  for (let i = m; i < s.length; i++) {
    console.log(s[i - m], s[i]);
    windowSum = windowSum - s[i - m] + s[i];
    if (windowSum === d) count++;
  }

  return count;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
