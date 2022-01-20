function solved(n, k) {
  let result = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    let m = k;
    if (result.length < k) {
      m = result.length;
    }
    for (let x = 0; x < m; x++) {
      sum += result[i - 1 - x];
    }
    result.push(sum);
  }
  console.log(result.join(" "));
}
