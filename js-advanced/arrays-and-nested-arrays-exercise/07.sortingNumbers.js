function solved(array) {
    array.sort((a, b) => a - b);
    let result = [];
    while (array.length != 0) {
        result.push(array.shift());
        result.push(array.pop());
    }
    return result;
  }

