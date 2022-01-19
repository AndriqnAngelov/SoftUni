function solved(inputArray) {
  function sumArray(arr) {
    return arr.reduce((a, b) => a + b);
  }
  let modArray = inputArray.map((el, index) => {
    if (el % 2 == 0) {
      el += index;
    } else {
      el -= index;
    }
    return el;
  });
  console.log(modArray);
  console.log(sumArray(inputArray) + "\n" + sumArray(modArray));
}

