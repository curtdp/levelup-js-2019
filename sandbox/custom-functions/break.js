const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;

  console.log('I am done');
};

console.log(power(3, 4));
// → 1024
