function extract(content) {
  let text = document.getElementById(content).textContent;
  let result = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "(") {
      let matchText = "";
      for (let a = i + 1; a < text.length; a++) {
        if (text[a] == ")") {
          break;
        }
        matchText += text[a];
      }
      result.push(matchText);
    }
  }
  return result.join("; ");
}
