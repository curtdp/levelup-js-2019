/*eslint comma-dangle: ["error", "always-multiline"]*/

function sayHello() {
  console.log(`Hello ${this.last}`);
}

const person = {
  first: 'Igor',
  last: 'Oliinyk',
  '777': '777 Value2222',
  '1last': '1Last',
  gadgets: {
    laptop: 'Macbook',
    smartphone: 'iPhone',
  },
  777: '777 Value',
  newKey: 'Something new',
  newKey2: 'Something new2',
  sayHi() {
    console.log(`Hi!!! ${this.first}`);
  },
  sayHello,
  sayMeow: () => {
    console.log(`Meowww!! ${this}`);
  },
};

const key = 'first';

console.log(person);
console.log(person.first);
console.log(person['1last']);
console.log(person[key]);
console.log(person['last']);
console.log(person[777]);

const person2 = new Object(42);

console.log(person2);

const person3 = person;
console.log(person3.first);
person3.first = 'Vasya';
console.log(person3.first);
console.log(person.first);

const person4 = { ...person };
console.log(person4.first);
person4.first = 'Oleg';
person4.gadgets.laptop = 'Ubuntu';
console.log(person4.first);
console.log(person.first);
console.log(person4.gadgets.laptop);
console.log(person.gadgets.laptop);

const person5 = _.cloneDeep(person);
console.log(person5.gadgets.laptop);
person5.gadgets.laptop = 'CentOS';
console.log(person5.gadgets.laptop);
console.log(person.gadgets.laptop);

// person.pets = {
//   dog: 'Sparky',
// };

// const dogName = person.pets ? person.pets.dog : `Person has no dog`;
// console.log(dogName);

if (person.pets && person.pets.dog) {
  console.log(person.pets.dog);
}

// console.log(person.pets.dog);
console.log(delete person.gadgewerts1);
console.log(person);

Object.defineProperty(person, 'bike', {
  value: 'XB3',
  writable: false,
  configurable: true,
});

person.bike = 'Giant';

console.log(person.bike);
// console.log(delete person.bike);

Object.defineProperty(person, 'bike', {
  writable: true,
});

person.bike = 'Trek';
console.log(person.bike);

console.log(delete person.bike);

person.sayHi();
person.sayHello();

person.sayMeow();

console.log(this);
