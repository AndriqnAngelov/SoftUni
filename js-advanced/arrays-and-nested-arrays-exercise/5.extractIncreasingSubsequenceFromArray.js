function solved(array) {
  let value = 0;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= value) {
      result.push(array[i]);
      value = array[i];
    }
  }
  return result;
}
