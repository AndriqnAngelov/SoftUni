function solved(array) {
  let heroes = [];

  for (const arr of array) {
    let [name, level, items] = arr.split(" / ");
    heroes.push({
      name,
      level,
      items,
    });
  }

  heroes.sort((a, b) => a.level - b.level);

  heroes.map((x) => {
    console.log(
      `Hero: ${x.name}` +
        "\n" +
        `level => ${x.level}` +
        "\n" +
        `items => ${x.items}`
    );
  });
}

