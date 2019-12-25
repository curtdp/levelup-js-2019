/*
String
Number // str
null
undefined
Object
Symbol
Boolean
*/

// const first = 'Igor';
// const last = 'Oliinyk';
// const music = `Jazz`;

// const sentense1 = "McDonald's is cool";
// const sentense2 = "McDonald's is cool";
// const sentense3 = 'McDonald\'s is "cool"';
// const sentense4 = `the weather outside
// is frightning
// the weather is cool`;

// function sayHello() {
//   return 'Hello from function';
// }

// const html = `
// <h1>Hello ${sayHello()}</h1>
// <div>
//   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae, qui mollitia tenetur vero quasi nostrum a consequuntur ut hic! Consequuntur ut accusamus officiis inventore corporis sed praesentium, libero iste.</p>
//   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae, qui mollitia tenetur vero quasi nostrum a consequuntur ut hic! Consequuntur ut accusamus officiis inventore corporis sed praesentium, libero iste.</p>
//   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus beatae, qui mollitia tenetur vero quasi nostrum a consequuntur ut hic! Consequuntur ut accusamus officiis inventore corporis sed praesentium, libero iste.</p>
// </div>
// `;

// document.querySelector('.wrapper').innerHTML = html;

// Number

// const age = 100.5;
// const age2 = 50;

// const candies = 20;
// const kids = 3;
// const eachKidGets = Math.floor(candies / kids);
// const dadGets = candies % kids;

// console.log(`Each kid gets ${eachKidGets} candies`);
// console.log(`Dad gets ${dadGets} candies`);

// const sum = 1.1 + 2.2;

let person = {
  first: 'Igor',
  last: 'Oliinyk',
  age: 100,
};

// let a = null;

// Boolean
// true false

// let isDrawing = true;
let age = 20;

let ofAge = age > 21;
// console.log(ofAge);
// age = 34;
// ofAge = age > 21;
// console.log(ofAge);

// Symbol

if (ofAge) {
  console.log('You can buy alcohol');
} else if (age < 18) {
  console.log('You are too young go sleep');
} else {
  console.log("You can'not buy alcohol. Go home");
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// 7 - 3 = 4

console.log(getRandomArbitrary(3, 7));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(2, 4));
