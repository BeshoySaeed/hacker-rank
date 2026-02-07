function compareTriplets(a, b) {
    let b_score = 0;
    let a_score = 0;
    const length = a.length;

    for (let i = 0; i <= length; i++) {
        if (a[i] < b[i]) {
            b_score++;
        } else if (a[i] > b[i]) {
            a_score++;
        }
    }
    return [a_score, b_score];
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));