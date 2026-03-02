function staircase(n) {
  let stairCase = "";
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    if (i != 1) stairCase += "\n";
    stairCase += `${spaces}${hashes}`;
  }

  console.log(stairCase);
}
