function designerPdfViewer(h, word) {
  const alphabet = {};
  for (let i = 0; i < 26; i++) {
    alphabet[String.fromCharCode(97 + i)] = i + 1;
  }
  console.log("alphabet", alphabet);
  const elHeight = [];
  for (let i = 0; i < word.length; i++) {
    elHeight.push(h[alphabet[word[i]] - 1]);
  }
  return Math.max(...elHeight) * word.length;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      7,
    ],
    "zaba",
  ),
);
