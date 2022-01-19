function solved(array) {
  let result = 0;
  let firstArray = array.shift();
  result += horizontalNeighbors(firstArray);
  for (const arr of array) {
    result += horizontalNeighbors(arr);
    result += verticalNeighbors(arr);
    firstArray = arr.slice();
  }
  function horizontalNeighbors(input) {
    let result = 0;
    for (let i = 1; i < input.length; i++) {
      if (input[i] == input[i - 1]) {
        result++;
      }
    }
    return result;
  }
  function verticalNeighbors(input) {
    let res = 0;
    for (let i = 0; i < input.length; i++) {
      if (firstArray[i] == input[i]) {
        res++;
      }
    }
    return res;
  }
  console.log(result);
}

