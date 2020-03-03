function wait(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function destroyPopup(popup) {
  popup.classList.remove('open');

  await wait(1000);

  popup.remove();

  // popup.parentElement.removeChild(popup);

  popup = null;
}

function ask(options) {
  return new Promise(async resolve => {
    const popup = document.createElement('form');
    popup.classList.add('popup');

    popup.insertAdjacentHTML(
      'afterbegin',
      `
      <fieldset>
        <label>${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </fieldset>
    `,
    );

    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);

      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true },
      );
    }
    console.log(popup);

    popup.addEventListener(
      'submit',
      e => {
        e.preventDefault();
        console.log('SUBMITTED!!!');
        resolve(e.target.input.value);
        destroyPopup(popup);
      },
      { once: true },
    );

    document.body.appendChild(popup);

    // wait

    await wait(50);
    popup.classList.add('open');
  });
}

const buttons = document.querySelectorAll('[data-question]');
console.log(buttons);

async function askQuestion(e) {
  const button = e.currentTarget;
  console.log(button.dataset);

  // const cancel = button.dataset.hasOwnProperty('cancel');
  // const cancel = button.hasAttribute('data-cancel');
  const cancel = 'toString' in button.dataset;

  const answer = await ask({ title: button.dataset.question, cancel });

  console.log(answer);
}

buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your cats name?' },
];

// Promise.all([
//   ask(questions[0]),
//   ask(questions[1]),
//   ask(questions[2]),
// ]).then(answers => console.log(answers));

// Promise.all(questions.map(ask)).then(answers => console.log(answers));

async function asyncMap(array, callback) {
  const results = [];

  for (const item of array) {
    results.push(await callback(item));
  }

  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

// async function askMany() {
//   let results = [];

//   for (const question of questions) {
//     results.push(await ask(question));
//   }
//   console.log(results);

//   // return results;
// }
// askMany();
