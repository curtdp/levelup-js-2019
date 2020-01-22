// Создайте div
const wrapper = document.createElement('div');
// добавьте ему класс wrapper
wrapper.classList.add('wrapper');

// вставьте его в body

document.body.appendChild(wrapper);

// сделайте неупорядоченный список

// добавьте три элемента списка со словами "one, two three"

const ul = `
  <ul>
    <li>Один</li>
    <li>Два</li>
    <li>Три</li>
  </ul>
`;

// разместите список внутрь wrapper

wrapper.innerHTML = ul;

// создайте картинку

const myImg = document.createElement('img');
// установите путь к картинке
myImg.src =
  'https://images.unsplash.com/photo-1530041686259-53d26f863313?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk5NTd9&auto=format&fit=crop&w=500&q=80';
// установите ширину 250
myImg.width = 250;
// добавьте класс cute
myImg.classList.add('cute');
// добавьте альтернативный текст Cute Puppy
myImg.alt = 'Cute Puppy';
// Добавьте эту картинку в элемент wrapper
wrapper.appendChild(myImg);

// из HTML строки, создайте div, с двумя параграфами внутри

const myHtml = `
  <div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius fugiat obcaecati, voluptatibus praesentium, sapiente facere non beatae, dicta perferendis ipsa error reiciendis. Dolorum culpa eius reiciendis molestiae quisquam tempore et?</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci tenetur, nihil voluptatem ab eaque quae, facere velit laudantium voluptas doloribus beatae ratione, cumque eos. Aliquid est obcaecati eum repellat in?</p>
  </div>
`;

// поместите этот div перед неупорядоченным списком из упражнения выше

document.querySelector('ul').insertAdjacentHTML('beforebegin', myHtml);

// добавьте второму параграфу класс warning

document.querySelector('p').nextElementSibling.classList.add('warning');

// удалите первый параграф

document.querySelector('p').remove();

// создайте функцию с именем generatePlayerCard которая принимает три аргумента: name, age и height
// эта функция возвращает такой html:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>Его рост HEIGHT и возраст AGE лет. В собачьих годах ему будет AGEINDOGYEARS!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('playerCard');
  cardEl.innerHTML = `
  <h2>${name} — ${age}</h2>
  <p>Его рост ${height} и возраст ${age} лет. В собачьих годах ему будет ${age *
    7}!</p>
    <div>
      <button class="deleteMe">Удали меня</button>
    </div>
  `;
  return cardEl;
}

// 1 собачий год это 7 человеческих лет по идее :)

// создайте новый div с классом cards

const cards = document.createElement('div');
cards.classList.add('cards');

// пусть эта функция создаст 4 карточки
cards.appendChild(generatePlayerCard('Igor', 35, 150));
cards.appendChild(generatePlayerCard('Arseny', 16, 160));
cards.appendChild(generatePlayerCard('Olga', 25, 155));
cards.appendChild(generatePlayerCard('Anatoly', 32, 180));

// добавьте эти карточки в div
// вставьте div в DOM сразу перед элементом .wrapper

wrapper.insertAdjacentElement('beforebegin', cards);

// Бонус, добавьте кнопку удаления каждой карточке чтобы когда вы по ней кликните, карточка удалялась целиком

// выберите все кнопки!

const deleteButtons = document.querySelectorAll('.deleteMe');
// console.log(deleteButtons);
// сделайте функцию удаления

function removeCard(event) {
  console.log(event.target);
  event.target.closest('.playerCard').remove();
}

// пройдитесь по ним в цикле и добавьте обработчик события 'click'
deleteButtons.forEach(button => {
  button.addEventListener('click', removeCard);
});
