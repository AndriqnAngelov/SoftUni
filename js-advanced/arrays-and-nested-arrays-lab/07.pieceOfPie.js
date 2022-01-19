function solved(array, flavorsOne, flavorsTwo) {
  let startIndex = array.indexOf(flavorsOne);
  let endtIndex = array.indexOf(flavorsTwo) + 1;
  let result = array.slice(startIndex, endtIndex);
  return result;
}
