// function utopianTree(n) {
//   let startHeight = 1;

//   for (let i = 0; i <= n; i++) {
//     if (i == 0) continue;
//     if (i % 2 != 0) {
//       startHeight = startHeight * 2;
//     } else {
//       startHeight++;
//     }
//     console.log(i, startHeight);
//   }
//   return startHeight;
// }

function utopianTree(n) {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    height = i % 2 === 1 ? height * 2 : height + 1;
  }

  return height;
}

console.log(utopianTree(1));
