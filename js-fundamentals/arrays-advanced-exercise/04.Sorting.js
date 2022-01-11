function solved(input) {
  input.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  for (let i = 0; i < input.length / 2; i++) {
    result.push(input[input.length - 1 - i]);
    result.push(input[i]);
  }
  if (input.length % 2 != 0) {
    result.pop();
  }
  console.log(result.join(" "));
}

