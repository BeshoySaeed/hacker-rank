function bonAppetit(bill, k, b) {
  const validBillAmount =
    bill.reduce((acc, curr, x) => {
      if (x !== k) {
        return acc + curr;
      }
      return acc;
    }, 0) / 2;

  if (validBillAmount === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - validBillAmount);
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
