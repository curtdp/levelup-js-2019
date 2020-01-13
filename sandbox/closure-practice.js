function range(start, end) {
  const result = [];
  if (end !== undefined) {
    if (end === 0) {
      return [];
    } else {
      const length = end - start;
      for (let i = 0; i <= length; i++) {
        result.push(start++);
      }
      return result;
    }
  } else {
    return function(end) {
      const length = end - start;
      for (let i = 0; i <= length; i++) {
        result.push(start++);
      }
      return result;
    };
  }
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

// console.log(range(3, 8));

var start3 = range(3);
var start4 = range(4);

// start3(3); // [3]
console.log(start3(10)); // [3,4,5,6,7,8]
console.log(start4(12)); // [3,4,5,6,7,8]
// start3(0); // []

// start4(6); // [4,5,6]
