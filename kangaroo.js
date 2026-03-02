function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  const t = (x2 - x1) / (v1 - v2);

  return t >= 0 && Number.isInteger(t) ? "YES" : "NO";
}

console.log(kangaroo(0, 2, 5, 3));
