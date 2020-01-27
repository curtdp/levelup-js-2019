let myObj = {
  0: 'hello',
  3: 'Privet',
  length: 4
};

// myObj
// console.log(Array.from(myObj))

// let arr = ['0', 1, true, { k: 1 }, [0, 1]];
// arr //?
// typeof arr //?
// Array.isArray(arr)//?
// Array.isArray(myObj)//?

// let arr;
// arr = [1, 2, 3, 4, 5];

// arr[1]; //?
// arr.length; //?
// arr[arr.length - 1]; //?

// arr[0] = 6;
// arr;
// arr[10] = 1;
// arr[9]; //?
// console.log(arr);
// arr[arr.length] = arr.length;

let arr = [1, 2, 3, 5, 6];

[3, 4, 2, 5, 6, 23, 432].forEach(function(item, i, array) {
  console.log(item * item, array);
});

// arr.every((e, i, array) => e === 5); //?
// arr.some((e, i, array) => e === 5); //?
// arr.filter(function(e) {
//   return e % 2 === 1;
// }); //?
// arr.find(e => e % 2); //?
// arr.findIndex(e => !(e % 3)); //?
// let doubleArr = arr.map((e, i) => e * e); //?
// doubleArr; //?
// arr.reduce((p, c) => p - c); //?

const array1 = ['Igor', 'Vasya', 'Oleg'];
// function reducer(accumulator, currentValue) {
//   return accumulator - currentValue;
// }

array1.reduce(function(accumulator, currentValue) {
  return accumulator * currentValue;
}, 10); //?

'Igor' * 'Vasya'; //?

let company = [
  {
    car: 5,
    computer: 10,
    cooler: 1
  },
  {
    car: 3,
    computer: 7,
    cooler: 1
  },
  {
    car: 0,
    computer: 1,
    cooler: 0
  }
];

let activesSum = company.reduce(function(e) {
  return {};
}, {});
