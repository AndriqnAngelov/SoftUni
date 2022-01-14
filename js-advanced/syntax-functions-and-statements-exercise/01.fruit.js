function solved(fruit, weight, priceOfKilogram) {
  let fruitType = fruit;
  let kilograms = weight / 1000;
  let money = kilograms * priceOfKilogram;
  console.log(
    `I need $${money.toFixed(2)} to buy ${kilograms.toFixed(
      2
    )} kilograms ${fruitType}.`
  );
}
solved("orange", 2500, 1.8);
