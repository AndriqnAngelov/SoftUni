function solved(array) {
  let index = 0;
  let maxIndex = 0;
  let value = 0;
  let len = 1;
  let maxLen = 0;
  let result = "";
  for (let a = 0; a < array.length; a++) {
    if (a + 1 <= array.length - 1) {
      index = array[a];
      value = array[a];
      for (let b = a + 1; b < array.length; b++) {
        if (value != array[b]) {
          break;
        }
        len++;
      }
    }
    if (len > maxLen) {
      maxLen = len;
      maxIndex = index;
    }
    len = 1;
  }
  for (let i = 0; i < maxLen; i++) {
    result += maxIndex + " ";
  }
  console.log(result);
}

