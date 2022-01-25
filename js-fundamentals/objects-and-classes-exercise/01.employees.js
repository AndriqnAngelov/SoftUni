function solved(array) {
  let employees = {};

  for (const arr of array) {
    let name = arr;
    let personalNumber = arr.length;
    employees[name] = personalNumber;
  }
  for (const key in employees) {
    console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
  }
}
