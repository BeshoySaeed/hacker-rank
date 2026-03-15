function nonDivisibleSubset(k, s) {
    const remainderCount = new Array(k).fill(0);

    for (const num of s) {
        remainderCount[num % k]++;
    }

    let result = 0;

    if (remainderCount[0] > 0) {
        result += 1;
    }

    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i !== k - i) {
            result += Math.max(remainderCount[i], remainderCount[k - i]);
        }
    }

    if (k % 2 === 0) {
        result -= Math.min(1, remainderCount[k / 2] - Math.max(remainderCount[k / 2], 0));
        if (remainderCount[k / 2] > 0) {
            result += 1;
        }
    }

    return result;
}

console.log(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]))


