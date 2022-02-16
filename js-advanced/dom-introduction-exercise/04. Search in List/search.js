function search() {
  let searchInput = document.querySelector("#searchText").value;
  let liElements = document.querySelectorAll("ul li");
  let result = document.querySelector("#result");
  let count = 0;
  for (let i = 0; i < liElements.length; i++) {
    if (liElements[i].textContent.includes(searchInput)) {
      count++;
      liElements[i].style.fontWeight = "bold";
      liElements[i].style.textDecoration = "underline";
    }else{
      liElements[i].style.fontWeight = "normal";
      liElements[i].style.textDecoration = "none";
    }
  }
  result.textContent = `${count} matches found`;
}
