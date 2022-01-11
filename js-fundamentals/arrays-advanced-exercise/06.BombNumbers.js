function solved(inputArr, bomb) {
  let bombNumber = bomb[0];
  let bombPower = bomb[1];

  while (inputArr.includes(bombNumber)) {
    let index = inputArr.indexOf(bombNumber);
    let elementsToRemove = bombPower * 2 + 1;
    let strartIndex = index - bombPower;
    
    if (strartIndex < 0) {
      elementsToRemove += strartIndex;
      strartIndex = 0;
    }
    inputArr.splice(strartIndex, elementsToRemove);
  }
  let result = inputArr.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(result);
}

