function solved(collection, numbers) {
  let modArray = collection.slice(0, numbers[0]);
  modArray.splice(0, numbers[1]);
  let count = 0;
  modArray.forEach((element) => {
    if (element == numbers[2]) {
      count++;
    }
  });
  console.log(`Number ${numbers[2]} occurs ${count} times.`);
}
