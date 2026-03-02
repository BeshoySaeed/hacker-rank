function plusMinus(arr) {
  const dic = {};
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) dic["1"] = (dic["1"] || 0) + 1;
    if (arr[i] < 0) dic["-1"] = (dic["-1"] || 0) + 1;
    if (arr[i] == 0) dic["0"] = (dic["0"] || 0) + 1;
  }
  const positives = (dic["1"] || 0) / length;
  const negatives = (dic["-1"] || 0) / length;
  const zeros = (dic["0"] || 0) / length;

  console.log(positives.toFixed(6));
  console.log(negatives.toFixed(6));
  console.log(zeros.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
