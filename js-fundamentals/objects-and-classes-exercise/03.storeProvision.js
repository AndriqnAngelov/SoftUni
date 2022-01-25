function solved(arrayOne, arrayTwo) {
  let products = {};

  for (let i = 0; i < arrayOne.length; i += 2) {
    let product = arrayOne[i];
    let quantity = Number(arrayOne[i + 1]);
    products[product] = quantity;
  }
  for (let i = 0; i < arrayTwo.length; i += 2) {
    let product = arrayTwo[i];
    let quantity = Number(arrayTwo[i + 1]);
    if (!products[product]) {
      products[product] = 0;
    }
    products[product] += quantity;
  }
  for (const [key, value] of Object.entries(products)) {
    console.log(`${key} -> ${value}`);
  }
}

