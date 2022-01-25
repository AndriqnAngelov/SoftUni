function solved(input) {
  let cats = [];

  let Cat = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  };

  for (const value of input) {
    let cat = value.split(" ");
    let name = cat[0];
    let age = cat[1];
    cats.push(new Cat(name, age));
  }
  for (const cat of cats) {
    cat.meow();
  }
}

