function solved(array) {
  let count = 0;
  console.log(
    array
      .sort()
      .map((x) => {
        return ++count + "." + x;
      })
      .join("\n")
  );
}
