function equalizeArray(arr) {
    // Write your code here
    const frequency = {};
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    const maxFrequency = Math.max(...Object.values(frequency));
    return arr.length - maxFrequency;
}