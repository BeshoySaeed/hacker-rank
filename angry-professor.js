function angryProfessor(k, a) {
  // Write your code here
  let count = 0;
  a.forEach((s) => {
    if (s <= 0) {
      count++;
    }
  });
  if (count >= k) {
    return "NO";
  }
  return "YES";
}
