function solved(array, num) {
  for (let a = 0; a < array.length; a++) {
    if (a + 1 <= array.length - 1) {
      for (let b = a + 1; b < array.length; b++) {
        let numOne = array[a];
        let numTwo = array[b];
        if (numOne + numTwo == num) {
          console.log(numOne + " " + numTwo);
        }
      }
    }
  }
}
solved([14, 20, 60, 13, 7, 19, 8], 27);
