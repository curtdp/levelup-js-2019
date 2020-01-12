// function definition
function calculateBill(billAmount, taxRate) {
  // this is the function body
  const total = billAmount * (1 + taxRate);
  return total;
}

// function call
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(80, 0.13);

console.log(myTotal, myTotal2);
