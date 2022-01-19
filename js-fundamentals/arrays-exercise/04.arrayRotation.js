function solved(array, rotation) {
  for (let i = 0; i < rotation; i++) {
    let value = array.shift();
    array.push(value);
  }
  console.log(array.join(" "));
}

