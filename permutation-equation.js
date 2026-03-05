function permutationEquation(p) {
    const loopFrequency = Math.max(...p);
    const resultEquations = [];
    for (let i = 1; i <= loopFrequency; i++) {
        const currentIndex = p.indexOf(i) + 1;
        const targetIndex = p.indexOf(currentIndex);

        resultEquations.push(targetIndex + 1);
    }

    return resultEquations;
}

console.log(permutationEquation([5,2,1,3,4]))