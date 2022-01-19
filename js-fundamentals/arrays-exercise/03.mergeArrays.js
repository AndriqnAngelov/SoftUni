function solved(inputOne, inputTwo) {
  let result = [];
  for (let i = 0; i < inputOne.length; i++) {
    if (i % 2 == 0) {
      result.push(Number(inputOne[i]) + Number(inputTwo[i]));
    } else {
      result.push(inputOne[i] + inputTwo[i]);
    }
  }
  console.log(result.join(" - "));
}
solved(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
