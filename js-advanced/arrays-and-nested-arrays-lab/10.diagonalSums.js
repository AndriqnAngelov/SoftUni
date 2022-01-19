function solved(array) {
  let startIndex = 0;
  let endIndex = array[0].length - 1;
  let sumOne = 0;
  let sumTwo = 0;
  for (const arr of array) {
    sumOne += Number(arr[startIndex]);
    sumTwo += arr[endIndex];
    startIndex++;
    endIndex--;
  }
  console.log(sumOne + " " + sumTwo);
}
