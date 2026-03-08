function appendAndDelete(s, t, k) {
    // Write your code here
    let commonLength = 0;
    while (commonLength < s.length && commonLength < t.length && s[commonLength] === t[commonLength]) {
        commonLength++;
        console.log('common length', commonLength)
    }

    let minMoves = (s.length - commonLength) + (t.length - commonLength);

    if (k >= minMoves && (k - minMoves) % 2 === 0) {
        return 'Yes';
    } else if (k >= s.length + t.length) {
        return 'Yes';
    } else {
        return 'No';
    }
}

console.log(appendAndDelete('ashley', 'ash', 2));
