function solved(array) {
  let num = array.shift();
  let startIndex = Math.ceil(array.length / 2);
  let leftArr = array.slice(0, num);
  let rigthArr = array.slice(array.length - num);
  console.log(leftArr.join(" "));
  console.log(rigthArr.join(" "));
}


