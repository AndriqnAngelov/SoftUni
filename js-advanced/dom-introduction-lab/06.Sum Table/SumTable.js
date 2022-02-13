function sumTable() {
  let tdElements = document.querySelectorAll("tr td");
  let tdSumElement = document.getElementById("sum");
  let sum = 0;
  for (let index = 0; index < tdElements.length - 2; index++) {
    if (index % 2 != 0) {
      sum += Number(tdElements[index].textContent);
    }
  }
  tdSumElement.textContent = sum;
}
