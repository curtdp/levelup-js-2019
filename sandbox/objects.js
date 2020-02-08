const person = {
  first: 'Igor',
  last: 'Oliinyk',
  '777': '777 Value2222',
  '1last': '1Last',
  gadgets: {
    laptop: 'Macbook',
    smartphone: 'iPhone'
  },
  777: '777 Value'
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
