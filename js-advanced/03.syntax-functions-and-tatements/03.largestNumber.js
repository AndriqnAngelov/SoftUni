function solved(a, b, c) {
  let largestNumber = 0;
  if (a > b) {
    largestNumber = a;
  } else {
    largestNumber = b;
  }
  if (c > largestNumber) {
    largestNumber = c;
  }
  console.log(`The largest number is ${largestNumber}.`);
}
