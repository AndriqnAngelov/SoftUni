function solved(input) {
    let strInput = input.toString();
    let sum = Number(strInput[0]);
    let check = true;
    for (let i = 1; i < strInput.length; i++) {
      if (strInput[i] != strInput[i - 1]) {
        check = false;
      }
      sum += Number(strInput[i]);
    }
    console.log(check);
    console.log(sum);
  }
solved(1234);
