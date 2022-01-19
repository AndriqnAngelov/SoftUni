function solved(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    let bigNum = 0;
    for (let x = i + 1; x < array.length; x++) {
      if (array[x] > bigNum) {
        bigNum = array[x];
      }
    }
    if (array[i] > bigNum) {
      result.push(array[i]);
    }
  }
  result.push(array[array.length - 1]);
  console.log(result.join(" "));
}

