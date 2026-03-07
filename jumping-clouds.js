// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let energy = 100;
    let n = c.length;
    let i = 0;

    do {
          i = (i + k) % n;

        energy--;

        if (c[i] === 1) {
            energy -= 2;
        }
    } while (i !== 0)

    return energy;
};

console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2));