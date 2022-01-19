function solved(n, array) {
  let print = "";
  for (let i = n - 1; i >= 0; i--) {
    print += array[i] + " ";
  }
  console.log(print);
}
