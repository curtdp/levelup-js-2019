const people = [
  { name: 'Igor', cool: true, country: 'Ukraine' },
  { name: 'Pedro', cool: true, country: 'Columbia' },
  { name: 'Pushok', cool: false, country: 'Ukraine' },
];

people.forEach((person, index) => {
  // console.info(person.name);
  // console.error(person.name); // stack trace
  // console.warn(person.name);
});

// console.table(people);

// Console methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Hey Im One');
  console.warn('Watch Out');
  console.error('Hey');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  console.count(`running doctorize for ${name}`);
  return `Dr. ${name}`;
}

// doctorize('Igor'); // run in browser console

function greet(name) {
  // doesntExist(); // Функция не существует не объявлена
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Igor'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

const remove = document.querySelector('.remove');
remove.addEventListener('click', function() {
  button.remove();
});

// A Dad joke fetch

async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
