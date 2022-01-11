function houseParty(input) {
  let listOfGuests = [];

  for (let i = 0; i < input.length; i++) {
    let element = input[i].split(" ");
    let name = element[0];
    if (element.length == 3) {
      if (!listOfGuests.includes(name)) {
        listOfGuests.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (!listOfGuests.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        for (let y = 0; y < listOfGuests.length; y++) {
          let elm = listOfGuests[y];
          if (elm == name) {
            listOfGuests.splice(y, 1);
          }
        }
      }
    }
  }

  listOfGuests.forEach((element) => {
    console.log(element);
  });
}

