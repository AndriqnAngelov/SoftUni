function solved(array, n) {
  for (let i = 0; i < n; i++) {
    let element = array.pop();
    array.unshift(element);
  }
  console.log(array.join(" "));
}

