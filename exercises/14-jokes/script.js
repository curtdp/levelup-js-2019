// https://icanhazdadjoke.com/api

const jokeButton = document.querySelector('.getJoke');
const jokeEl = document.querySelector('.joke');
const jokeBtnText = document.querySelector('.jokeBtnText');
const loader = document.querySelector('.loader');

const buttonText = [
  '🤦‍♂️',
  'так себе',
  'не шути так',
  'астанавись!',
  'серьезно',
  'огспди',
  'пожалуйста хватит',
  'это была худшая шутка',
];

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();

  return data;
}

fetchJoke();

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];

  if (item === not) {
    console.log('we used it last time, look again');
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  loader.classList.remove('hidden');
  jokeBtnText.setAttribute('disabled', 'true');
  const { joke } = await fetchJoke();
  jokeEl.textContent = joke;
  jokeBtnText.textContent = randomItemFromArray(
    buttonText,
    jokeBtnText.textContent,
  );
  loader.classList.add('hidden');
  jokeBtnText.setAttribute('disabled', 'false');
}

jokeButton.addEventListener('click', handleClick);
