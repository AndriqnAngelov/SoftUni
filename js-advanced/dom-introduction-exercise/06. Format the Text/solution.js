function solve() {
  let textInput = document.querySelector("#input").value;
  let spliteArray = textInput.split(".").filter((x) => x != "");
  let output = document.querySelector("#output");

  while (spliteArray.length > 0) {
    let text = spliteArray.splice(0, 3) + '.';
    console.log(text);
    let tag = document.createElement("p");
    tag.textContent = text;
    output.appendChild(tag);
  }
}
