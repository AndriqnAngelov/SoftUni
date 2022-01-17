function solved(arrayInput) {
  let resultArray = [];
  for (const num of arrayInput) {
    if (num < 0) {
      resultArray.unshift(num);
    } else {
      resultArray.push(num);
    }
  }
  console.log(resultArray.join("\n"));
}

