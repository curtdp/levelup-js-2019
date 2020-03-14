import { sayHi } from './lib.js';
import { debounce } from 'lodash-es';

console.log(sayHi('Igor'));
console.log(sayHi('Vasya'));

const btn = document.querySelector('.btn');

btn.addEventListener(
  'click',
  debounce(() => {
    console.log('I am clicked!');
  }, 400),
);

async function fetchData() {
  const res = await fetch('https://api.exchangeratesapi.io/latest');
  const data = await res.json();
  return data;
}

async function go() {
  console.log(await fetchData());
}

go();
