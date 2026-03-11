function cutTheSticks(arr) {
    // Write your code here
    let resultLength = [];

    while(arr.length > 0) {
        resultLength.push(arr.length);
        const minLength = Math.min(...arr);
        arr = arr.map(stick => stick - minLength).filter(stick => stick > 0);
    }

    return resultLength;
}

console.log(cutTheSticks([1,2,3,4,3,3,2,1]))