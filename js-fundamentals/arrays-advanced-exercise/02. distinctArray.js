function distincArray(input) {
  let result = [];
  input.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  console.log(result.join(" "));
}

