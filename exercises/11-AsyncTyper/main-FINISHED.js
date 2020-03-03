function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// 1 async for of
// async function draw(el) {
//   console.log(el);
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     console.log(el.dataset);
//     const amountOfTime = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTime);
//   }
// }

// 2 recursion

function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTime = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTime);
    // exit condition
    if (index <= text.length) {
      console.log('hi');
      drawLetter();
    }
  }
  // when this function draw() draw, invoke drawLetter
  drawLetter();
}

const els = document.querySelectorAll('[data-type]');
// console.log(els);

els.forEach(draw);
