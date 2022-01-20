function solved(array) {
  let numbers = array.shift().split(" ").map(Number);

  for (let i = 0; i < array.length; i++) {
    let [command, numOne, numTwo] = array[i].split(" ");
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    if (command == "Add") {
      numbers.push(numOne);
    } else if (command == "Remove") {
      numbers = numbers.filter((el) => el !== numOne);
    } else if (command == "RemoveAt") {
      numbers.splice(numOne, 1);
    } else if (command == "Insert") {
      numbers.splice(numTwo, 0, numOne);
    }
  }
  console.log(numbers.join(" "));
}
