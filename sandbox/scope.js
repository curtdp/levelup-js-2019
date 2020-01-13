/* eslint-disable */

// window object
// const first = 'Igor';
// let second = 'Oliinyk';
// var age = 100;

function sayHi() {
  console.log('Hi!');
}

// Scope Lookup
let age = 100;
// YDKJS Scopes and Closures

function go() {
  const myAge = 33;
  const hair = 'blonde';
  console.log(age);
  console.log(myAge);
  console.log(hair);
}

// go();

// block scope

function isCool(name) {
  let cool;
  if (name === 'Igor') {
    cool = true;
  }

  console.log(cool);
  return cool;
}

// isCool('Igor');

// var leaking
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let dog = 'Tobik';

function logDog(dog) {
  console.log(dog);
}

function go() {
  var dog = 'Barney';
  logDog(dog, 'hello');
}

go();

dog = 'Tuzik';

// function sayHi(name) {
//   function yell() {
//     console.log(name.toUpperCase());
//   }
//   yell();
// }
