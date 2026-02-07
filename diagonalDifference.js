function diagonalDifference(arr) {
    let primarySum = 0;
    let secondarySum = 0;

    for (let i = 0; i < arr.length; i++) {
        primarySum += arr[i][i];
        secondarySum += arr[i][arr.length - 1 - i];
    }

    return Math.abs(primarySum - secondarySum);
}

console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]))