function solved(array) {
  let towns = [];

  for (const arr of array) {
    let line = arr.split(" | ");
    towns.push({
      town: line[0],
      latitude: Number(line[1]).toFixed(2),
      longitude: Number(line[2]).toFixed(2),
    });
  }
  for (const town of towns) {
    console.log(town);
  }
}
solved(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
