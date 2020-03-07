function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// async for of

// async function draw(el) {
//   console.log(el);

//   const text = el.textContent;
//   let soFar = '';

//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;

//     console.log(soFar);

//     const { typeMin, typeMax } = el.dataset;

//     const amountOfTime = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTime);
//   }
// }

function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index++;
    const amountOfTime = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTime);

    if (index <= text.length) {
      drawLetter();
    }
  }

  drawLetter();
}

const els = document.querySelectorAll('[data-type]');

els.forEach(draw);
