var age;
console.log(age);
age = 10;
sayHi();

function sayHi() {
  console.log('hey');
  console.log(add(1, 2));
}

function add(a, b) {
  return a + b;
}
