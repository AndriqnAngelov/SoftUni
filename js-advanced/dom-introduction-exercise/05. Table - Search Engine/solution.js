function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let inputText = document.querySelector("#searchField").value;
    let tableElements = document.querySelectorAll("tbody tr");
    for (let i = 0; i < tableElements.length; i++) {
      if (tableElements[i].textContent.includes(inputText)) {
        tableElements[i].classList.add("select");
      } else {
        tableElements[i].classList.remove("select");
      }
    }
  }
}
