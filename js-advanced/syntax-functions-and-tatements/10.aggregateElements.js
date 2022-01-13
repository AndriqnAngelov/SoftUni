function solved(input) {
  let sum = input.reduce((a, b) => a + b);
  let inverseValuesSum = 0;
  for (let i = 0; i < input.length; i++) {
    inverseValuesSum += 1 / input[i];
  }
  console.log(sum);
  console.log(inverseValuesSum);
  console.log(input.join(""));
}

