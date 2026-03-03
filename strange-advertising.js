function viralAdvertising(days) {
  let cumulativeLikes = 0;
  let shared = 5;

  for (let i = 0; i < days; i++) {
    const likes = Math.floor(shared / 2);
    cumulativeLikes += likes;
    shared = likes * 3;
  }

  return cumulativeLikes;
}

console.log(viralAdvertising(5));
