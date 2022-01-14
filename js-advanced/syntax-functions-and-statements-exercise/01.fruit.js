function solved(fruit, weight, priceOfKilogram) {
  let kilograms = weight / 1000;
  let price = kilograms * priceOfKilogram;
  console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}
solved("orange", 2500, 1.8);
