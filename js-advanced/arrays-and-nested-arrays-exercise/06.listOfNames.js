function solved(array) {
  let count = 0;
  console.log(
    array
      .sort((a, b) => a.localeCompare(b))
      .map((x) => {
        return ++count + "." + x;
      })
      .join("\n")
  );
}

