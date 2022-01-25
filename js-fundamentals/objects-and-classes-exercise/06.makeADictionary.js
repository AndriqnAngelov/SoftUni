function solved(array) {
  let dic = {};
  for (const arr of array) {
    let obj = JSON.parse(arr);
    let [key] = Object.entries(obj);
    dic[key[0]] = key[1];
  }
  let sortedDic = Object.keys(dic);
  sortedDic.sort((a, b) => a.localeCompare(b));

  for (const iterator of sortedDic) {
    console.log(`Term: ${iterator} => Definition: ${dic[iterator]}`);
  }
}

