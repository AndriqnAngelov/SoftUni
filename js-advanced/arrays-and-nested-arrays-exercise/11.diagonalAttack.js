function solved(array) {
  let matrix = [];
  for (const arr of array) {
    matrix.push(arr.split(" ").map(Number));
  }
  let startIndex = 0;
  let endIndex = matrix[0].length - 1;
  let sumOne = 0;
  let sumTwo = 0;
  for (const mat of matrix) {
    sumOne += Number(mat[startIndex]);
    sumTwo += mat[endIndex];
    startIndex++;
    endIndex--;
  }
  if (sumOne == sumTwo) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (j != matrix[i].length - 1 - i && j != i) {
          matrix[i][j] = sumOne;
        }
      }
    }
    for (const mat of matrix) {
      console.log(mat.join(" "));
    }
  } else {
    for (const mat of matrix) {
      console.log(mat.join(" "));
    }
  }
}
