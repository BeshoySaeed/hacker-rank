// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const catAt = Math.abs(x - z);
  const catBt = Math.abs(y - z);
  return catAt < catBt ? "Cat A" : catAt > catBt ? "Cat B" : "Mouse C";
}
