function solved(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    star += "* ";
  }
  for (let i = 0; i < n; i++) {
    console.log(star);
  }
}

