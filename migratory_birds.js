function migratoryBirds(arr) {
  const dic = {};
  let minBirdSight = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    dic[arr[i]] = (dic[arr[i]] || 0) + 1;
  }
  console.log(dic);

  for (let i in dic) {
    console.log("dic[i] ", i, dic[i]);
    if (dic[i] > dic[minBirdSight] || minBirdSight == 0) {
      minBirdSight = i;
    }
    if ((dic[i] = dic[minBirdSight])) {
      if (i < minBirdSight) {
        minBirdSight = i;
      }
    }
  }

  return minBirdSight;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
