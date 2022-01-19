function solved(array) {
  array.sort((a, b) => a - b);
  let startIndex = Math.floor(array.length / 2);
  let result = array.slice(startIndex);
  return result;
}

