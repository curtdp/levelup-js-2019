function wait(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function destroyPopup(popup) {
  popup.classList.remove('open');

  // wait the animation
  await wait(1000);

  // remove the popup entierly
  popup.remove();

  // Раньше когда не было метода remove
  // popup.parentElement.removeChild(popup);

  // console.log(popup); // остается в памяти до сборки мусора
  popup = null; // Удаляем явно иначе могут быть утечки памяти

  // в eslint может быть установлено правило,
  // no-param-reassign
  // которое запрещает изменение параметров функции.
  // Но мы знаем зачем мы это делаем
}

function ask(options) {
  return new Promise(async function(resolve) {
    // 1. Create a popup with all the field
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
      <fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
    `,
    );
    console.log(popup);
    // 2. Check if we want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);

      // TODO: listen for a click on that cancel button
      skipButton.addEventListener(
        'click',
        function() {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true },
      );
    }
    // 3. Listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        console.log('Submitted!');
        resolve(e.target.input.value);
        // .input потому что аттрибут name="input"
        // console.log(e.target.input.value);

        // remove it from the DOM entierly
        destroyPopup(popup);
      },
      { once: true },
    );
    // 4. When someone does submit it, resolve the data what was in the input box!
    // 5. Insert that popup into the DOM
    document.body.appendChild(popup);
    // put very small timeout before we add open class
    // setTimeout(function() {
    //   popup.classList.add('open');
    // }, 0);
    await wait(50);
    popup.classList.add('open');
  });
}

// Select all buttons with data-question attribute

async function askQuestion(e) {
  const button = e.currentTarget;
  console.log(button.dataset);
  const cancel = 'cancel' in button.dataset; // оператор in совершает поиск в цепочке прототипов, помните об этом
  // const cancel = button.dataset.hasOwnProperty('cancel');
  // const cancel = button.hasAttribute('data-cancel');
  const answer = await ask({ title: button.dataset.question, cancel });
  // console.log(cancel);
  console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');

buttons.forEach(button => button.addEventListener('click', askQuestion));

// Как задавать серию вопросов?

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your cats name?' },
];

// // Можно ли использовать Promise.all?

// Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(
//   answers => {
//     console.log(answers);
//   },
// );

// // или

// Promise.all(questions.map(ask)).then(data => console.log(data));
// // или
// questions.forEach(async function(question) {
//   const answer = await ask(question);
//   console.log(answer);
// });

// // Не то что нужно :(

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
//   return results;
// }
// const res = askMany();
// console.log(res);
