function solved(array) {
  let arr = array.sort((a, b) => {
    return a - b;
  });
  let result = arr[0] + " " + arr[1];
  console.log(result);
}

