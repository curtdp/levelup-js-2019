import wait from 'waait';

import { name, address, internet, image } from 'faker/locale/uk';
import { formatDistance, format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { uk } from 'date-fns/locale';
import axios from 'axios';
import _, { difference, isEqual } from 'lodash';
import to from 'await-to-js';

async function go() {
  console.log('Going');
  await wait(500);
  console.log('Ending!');
}

// go();

function sayName() {
  return `${name.firstName()} ${name.lastName()}`;
}

// console.log(sayName());

const fakeNames = Array.from({ length: 10 }, () => {
  return `${name.firstName(1)} ${name.lastName(1)}`;
});
const fakeAddresses = Array.from({ length: 10 }, () => {
  return `${address.country()} ${address.city()} ${address.streetAddress()}`;
});

// console.log(fakeNames);
// console.log(fakeAddresses);

// console.log(internet.exampleEmail(), internet.email());

const img = document.createElement('img');
img.src = image.avatar();

document.body.appendChild(img);

const distance = formatDistance(
  new Date(2020, 3, 4, 10, 32, 0),
  new Date(2018, 3, 4, 12, 32, 0),
  {
    locale: uk,
  },
);

// console.log(distance);
// console.log(
//   format(new Date(2020, 6, 4, 12, 35), `'Сьогодні' do MMMM QQQQ yo `, {
//     locale: uk,
//   }),
// );
const date = new Date('2018-09-01Z16:01:36.386Z');
const timeZone = 'Europe/Madrid';
const zonedDate = utcToZonedTime(date, timeZone);

// console.log(date);
// console.log(zonedDate);

async function getJoke() {
  const {
    data: { joke },
  } = await axios('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(joke);
}

// getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [7, 8, 9, 0, 11, 12, 13, 14, 15];

console.log(difference(a, b));

const person1 = {
  name: 'igor',
  hardware: {
    laptop: 'Macbook',
  },
};

const person2 = {
  name: 'igor',
  hardware: {
    laptop: 'Macbook2',
  },
};

console.log(isEqual(person1, person2));
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(_.last(c));

console.log(_.differenceBy([{ x: 1, y: 3 }, { x: 1 }], [{ x: 1 }], 'x'));

function checkIfNameIsCool(firstName) {
  return new Promise((resolve, reject) => {
    if (firstName === 'Igor') {
      resolve('Cool Name!!!');
      return;
    }
    reject(new Error('Bad name'));
  });
}

async function checkName() {
  try {
    const res = await checkIfNameIsCool('Tobik');
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

checkName();
