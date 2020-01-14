// Hoisting

// function declaration
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// Anonymous function
const doctorize2 = function(firstName) {
  return `Dr. ${firstName}`;
};

const inchToCM = inches => inches * 2.54;

function add(a, b = 3) {
  return a + b;
}

add(3);

const myAdd = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({ firstName: first, lastName: last });

console.log(makeABaby('Oleg', 'Oliinyk'));

// IIFE
// Immediatly Invoked Function Expression

(function(name) {
  console.log(`You are very cool ${name}`);
})('Igor');

const sayHiForIgor = function() {
  console.log(`Hey ${this.name} 3`);
};

const igor = {
  name: 'Igor',
  sayHi: function() {
    console.log(`Hey ${this.name}`);
  },
  sayHi2() {
    console.log(`Hey ${this.name} 2`);
  },
  sayHi3: sayHiForIgor,
  sayHiForIgor
};

igor.sayHi();

// callback

const button = document.querySelector('.clickMe');
button.addEventListener('click', function handleClick() {
  sayHello();
  console.log('Nice job');
});

setTimeout(
  name => {
    console.log(`Done! Time to eat! ${name}`);
  },
  1000,
  'Igor'
);
