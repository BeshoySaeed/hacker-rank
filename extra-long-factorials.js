function extraLongFactorials(n) {

    let result = 1n;

    for(let i = BigInt(n); i > 0; i--) {
        result *= i;
    }
    return result.toString();

};

console.log(extraLongFactorials(3));