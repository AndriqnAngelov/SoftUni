function solved(array) {
  let towns = {};

  for (const value of array) {
    let arr = value.split(" <-> ");

    if (towns[arr[0]]) {
      towns[arr[0]] += Number(arr[1]);
    } else {
      towns[arr[0]] = Number(arr[1]);
    }
  }
  for (const town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}
