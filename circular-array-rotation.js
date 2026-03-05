function circularArrayRotation(a, k, queries) {
  const n = a.length;
  const rotated = new Array(n);
  k %= n; // Handle cases where k is larger than n
  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = a[i];
  }
  return queries.map((q) => rotated[q]);
}

console.log(circularArrayRotation([1, 2, 3], 0, [0, 1, 2])); // Output: [2, 3, 1]
