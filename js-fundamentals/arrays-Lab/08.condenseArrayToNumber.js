function solved(array) {
  let arrLentgth = array.length;
  while (arrLentgth > 1) {
    let newArray = [];
    for (let i = 1; i < arrLentgth; i++) {
      newArray.push(Number(array[i] + array[i - 1]));
    }
    arrLentgth = newArray.length;
    array = newArray;
  }

  console.log(array[0]);
}
