function solved(array) {
  console.log(
    array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n")
  );
}

