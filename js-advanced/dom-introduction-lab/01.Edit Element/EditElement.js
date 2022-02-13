function editElement(element, math, replacer) {
  for (;;) {
    if (!element.textContent.includes(math)) {
      break;
    }
    element.textContent = element.textContent.replace(math, replacer);
  }
}
