function solved(array) {
  let result = -10000000;
  for (const arr of array) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > result) {
        result = arr[i];
      }
    }
  }
  console.log(result);
}
