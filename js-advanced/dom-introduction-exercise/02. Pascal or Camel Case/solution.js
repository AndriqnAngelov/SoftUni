function solve() {
  let inputText = document.getElementById("text").value;
  let namingConvention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  inputText = inputText.toLowerCase();
  let textTransform = "";

  //console.log(namingConvention);
  if (namingConvention == "Camel Case") {
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] == " ") {
        textTransform += inputText[i + 1].toUpperCase();
        i++;
      } else {
        textTransform += inputText[i];
      }
    }
    result.textContent = textTransform;
  } else if (namingConvention == "Pascal Case") {
    textTransform += inputText[0].toUpperCase();
    for (let i = 1; i < inputText.length; i++) {
      if (inputText[i] == " ") {
        textTransform += inputText[i + 1].toUpperCase();
        i++;
      } else {
        textTransform += inputText[i];
      }
    }
    result.textContent = textTransform;
  } else {
    result.textContent = "Error!";
  }
  console.log(textTransform);
}
