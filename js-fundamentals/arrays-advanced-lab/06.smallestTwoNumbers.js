function solved(array) {
  array.sort((a, b) => a - b);
  console.log(
    array
      .sort((a, b) => a - b)
      .slice(0, 2)
      .join(" ")
  );
}
solved([3, 0, 10, 4, 7, 3]);
