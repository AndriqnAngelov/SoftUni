function solved(n, m) {
    let result = 0;
    for (let i = 10; i >= 0; i--) {
      if (n % i == 0 && m % i == 0) {
        result = i;
        break;
      }
    }
  
    console.log(result);
  }
  