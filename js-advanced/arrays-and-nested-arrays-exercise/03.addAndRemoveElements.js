function solved(array) {
  let count = 1;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let command = array[i];
    if (command == "add") {
      result.push(count);
    } else {
      result.pop();
    }
    count++;
  }
  if (result.length < 1) {
    console.log("Empty");
    return;
  }
  result.forEach((element) => {
    console.log(element);
  });
}

