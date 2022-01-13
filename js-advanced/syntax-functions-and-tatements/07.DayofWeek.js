function solved(input) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  for (let i = 1; i <= days.length; i++) {
    if (input == days[i]) {
      console.log(i+1);
      return;
    }
  }
  console.log("error");
}
