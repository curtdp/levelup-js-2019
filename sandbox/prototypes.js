function Person(name) {
  this.name = name;
}

Person.prototype.speak = function() {
  console.log(`Hello ${this.name}`);
};

const igor = new Person('Igor');

igor.speak();

igor.__proto__; //?
igor.constructor.prototype; //?
Object.getPrototypeOf(igor); //?

class Person2 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Hello ${this.name}`);
  }
}

class Programmer extends Person2 {
  constructor(name, lang) {
    super(name);
    this.lang = lang;
  }

  can() {
    super.speak();
    console.log(`The programmer ${this.name} can do ${this.lang}`);
  }
  speak() {
    console.log(`Programmer ${this.name} speaks`);
  }
}

const igor2 = new Person2('Igor2'); //?

const vasya = new Programmer('Vasya', 'Python'); //?

vasya.can(); //?
