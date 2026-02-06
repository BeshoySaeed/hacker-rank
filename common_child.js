"ABCDEF", "FBDAMN"
function commonChild(s1, s2) {
  const n = s1.length;
  let prev = Array(n + 1).fill(0);
  let curr = Array(n + 1).fill(0);
  console.log("prev", prev);
  console.log("curr", curr);
  console.log("length", n);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        curr[j] = prev[j - 1] + 1;
      } else {
        curr[j] = Math.max(prev[j], curr[j - 1]);
      }
    }
    [prev, curr] = [curr, prev];
    curr.fill(0);
  }
  return prev[n];
}

console.log(commonChild("ABCDEF", "FBDAMN"));
