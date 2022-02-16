function toggle() {
  let buttonElement = document.querySelector(".button");
  let text = document.querySelector("#extra");
  console.log(text.textContent);

  if (buttonElement.textContent == "More") {
    buttonElement.textContent = "Less";
    text.style.display = "block";
  } else {
    buttonElement.textContent = "More";
    text.style.display = "none";
  }
}
