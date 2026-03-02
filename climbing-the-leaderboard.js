function climbingLeaderboard(ranked, player) {
  const uniqueArr = [...new Set(ranked)];
  let result = [];
  let pointer = uniqueArr.length - 1;
  let currentPlayerRank = 0;
  while (currentPlayerRank < player.length) {
    const currentRank = uniqueArr[pointer];
    if (player[currentPlayerRank] < currentRank) {
      result.push(pointer + 2);
      currentPlayerRank++;
    } else if (player[currentPlayerRank] === currentRank) {
      result.push(pointer + 1);
      currentPlayerRank++;
    } else if (player[currentPlayerRank] > currentRank) {
      if (pointer === 0) {
        result.push(1);
        currentPlayerRank++;
      }
      pointer--;
      continue;
    }
  }
  return result;
}

// i got time exceeded error so i got another solution

function climbingLeaderboard2(ranked, player) {
  const uniqueArr = [...new Set(ranked)]; // unique descending scores
  const result = [];
  let pointer = uniqueArr.length - 1; // start from bottom

  for (let i = 0; i < player.length; i++) {
    let score = player[i];

    // Move pointer left while player >= current rank
    while (pointer >= 0 && score >= uniqueArr[pointer]) {
      pointer--;
    }

    // Calculate rank
    result.push(pointer + 2);
  }

  return result;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]),
);
