function colorize() {
  let tableElements = document.querySelectorAll("tr");
  for (let index = 0; index < tableElements.length; index++) {
    if (index % 2 != 0) {
      tableElements[index].style.backgroundColor = "teal";
    }
  }
}
