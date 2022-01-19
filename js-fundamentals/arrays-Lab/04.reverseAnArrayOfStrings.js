function solved(array) {
  let print = "";
  for (let i = array.length - 1; i >= 0; i--) {
    print += array[i] + " ";
  }
  console.log(print);
}
