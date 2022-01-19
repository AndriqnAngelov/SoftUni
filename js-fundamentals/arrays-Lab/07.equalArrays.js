function solved(arrayOne, arrayTwo) {
  let index = 0;
  let sum = 0;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] != arrayTwo[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
    sum += Number(arrayOne[i]);
  }
  if (index == 0) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
