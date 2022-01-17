function solved(numInput, oprOne, oprTwo, oprThree, oprfour, oprFive) {
  let num = Number(numInput);
  let array = [oprOne, oprTwo, oprThree, oprfour, oprFive];

  for (let i = 0; i < array.length; i++) {
    let operation = array[i];
    if (operation == "chop") {
      num /= 2;
    } else if (operation == "dice") {
      num = Math.sqrt(num);
    } else if (operation == "spice") {
      num++;
    } else if (operation == "bake") {
      num *= 3;
    } else if (operation == "fillet") {
      num = (num * 0.8).toFixed(1);
    }
    console.log(num);
  }
}

