function formingMagicSquare(s) {
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],

    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],

    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],

    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],

    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],

    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],

    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],

    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];
  let minCost = Infinity;

  for (let i = 0; i < magicSquares.length; i++) {
    let elementCost = 0;

    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        elementCost += Math.abs(magicSquares[i][r][c] - s[r][c]);
      }
    }

    if (elementCost < minCost) {
      minCost = elementCost;
    }
  }

  return minCost;
}

console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ]),
);
