// let arr = [1, -1, 1, 1, 2, 3, -1];

// Найдем первое отрицательное число и сделаем новый массив после него + 1
// в reduce посчитаем сумму всех абсолютных значений
// тут с acc мы делаем abs каждый раз
// это можно оптимизировать если задать начальное значение аккумулятору 0
// тогда брать абсолютное значение нужно будет только у элемента

// function findSumOfAbsValuesAfterFirstNegative(arr) {
//   const firstNegativeIndex = arr.findIndex(item => item < 0);
//   if (firstNegativeIndex === -1 || firstNegativeIndex === arr.length - 1) {
//     // console.log(
//     //   'Массив не содержит отрицательных чисел или первое отрицательное число является последним элементом массива'
//     // );
//     return null;
//   }

//   return arr.slice(arr.findIndex(item => item < 0) + 1).reduce((acc, item) => {
//     return acc + Math.abs(item);
//   }, 0);
// }

// console.assert(
//   findSumOfAbsValuesAfterFirstNegative([1, -1, 1, 1, 2, 3, -1]) === 8
// );
// console.assert(
//   findSumOfAbsValuesAfterFirstNegative([1, 1, 1, 1, 2, 3, -1]) === null
// );
// console.assert(
//   findSumOfAbsValuesAfterFirstNegative([1, 1, 1, 1, 2, 3, 1]) === null
// );
// console.assert(findSumOfAbsValuesAfterFirstNegative([-1, -3]) === 3);
// console.assert(findSumOfAbsValuesAfterFirstNegative([-2, -2]) === 2);
// console.assert(findSumOfAbsValuesAfterFirstNegative([1, 2, 4, 5, 6]) === null);

const numbers = [0, 1, 1, 1, -6, -5, 6];

const firstNegative = numbers.findIndex(el => el < 0);

const module = numbers.reduce((acc, el, i) => {
  if (i > firstNegative) {
    return acc + Math.abs(el);
  }
  return acc;
}, 0);

module; //?

// const numbers = [
//   10,
//   -8,
//   12,
//   3,
//   -14,
//   -3,
//   -14,
//   -1,
//   -15,
//   9,
//   -7,
//   6,
//   -3,
//   -11,
//   2,
//   1,
//   -13,
//   -7,
//   8,
//   -10
// ];
// const newNumbers = numbers.map(function(el) {
//   return Math.abs(el);
// });
// const minValue = Math.min(...newNumbers);
// let indexMinNumber = newNumbers.reduce((acc, el, i) => {
//   if (el === minValue) {
//     acc.push(i);
//   }
//   return acc;
// }, []);

// console.log(indexMinNumber);
