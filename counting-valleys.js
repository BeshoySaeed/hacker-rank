function countingValleys(steps, path) {
  const valleys = [];
  let currentLevel = 0;

  for (let i = 0; i < steps; i++) {
    const step = path[i];
    if (step === "U") {
      currentLevel++;
      if (currentLevel === 0) {
        valleys.push(i);
      }
    } else if (step === "D") {
      currentLevel--;
    }
  }
  return valleys.length;
}
