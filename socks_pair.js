function sockMerchant(n, ar) {
  const dic = {};
  let pairs = 0;
  for (let i = 0; i < n; i++) {
    dic[ar[i]] = (dic[ar[i]] || 0) + 1;
  }

  for (let n in dic) {
    if (dic[n] % 2 === 0) {
      pairs += dic[n] / 2;
    } else if (dic[n] > 2) {
      pairs += (dic[n] - (dic[n] % 2)) / 2;
    }
  }

  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

console.log(Math.round(4.12));
