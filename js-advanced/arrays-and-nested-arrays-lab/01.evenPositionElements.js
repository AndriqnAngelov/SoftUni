function solved(arrInput) {
  let result = "";
  for (let i = 0; i < arrInput.length; i++) {
    if (i % 2 == 0) {
      result += arrInput[i] + " ";
    }
  }
  console.log(result);
}

