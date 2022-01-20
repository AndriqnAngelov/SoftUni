function solved(array) {
  let rowSum = array[0].reduce((a, b) => a + b);
  let col = [];
  for (let i = 0; i < array[0].length; i++) {
    col.push(Number(0));
  }
  for (const arr of array) {
    for (let i = 0; i < arr.length; i++) {
      col[i] += Number(arr[i]);
    }
  }
  for (let i = 0; i < col.length; i++) {
    if (rowSum != col[i]) {
      return false;
    }
  }
  return true;
}

