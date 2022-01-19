function solved(array) {
  for (let a = 0; a < array.length; a++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let b = 0; b < a; b++) {
      leftSum += array[b];
    }
    for (let c = array.length - 1; c > a; c--) {
      rightSum += array[c];
    }
    if (leftSum == rightSum) {
      console.log(a);
      return;
    }
  }
  console.log("no");
}
