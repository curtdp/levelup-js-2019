const people = [
  { name: 'Igor', cool: true, country: 'Ukraine' },
  { name: 'Pedro', cool: true, country: 'Columbia' },
  { name: 'Pushok', cool: false, country: 'Ukraine' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Функция не существует не объявлена
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Igor'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
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
