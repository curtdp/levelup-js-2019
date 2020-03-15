import wait from 'waait';
import faker from 'faker/locale/uk';
import { name } from 'faker/locale/uk';

import { formatDistance, format } from 'date-fns';
import { uk } from 'date-fns/locale';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';

import to from 'await-to-js';

console.log(`Доброго дня ${faker.name.firstName(0)}`);

const fakeNames = Array.from({ length: 10 }, () => {
  return `${name.firstName(1)} ${name.lastName(1)}`;
});

console.log(fakeNames);

async function go() {
  console.log('Going!');
  await wait(500);
  console.log('ending!');
}

go();

console.log(
  formatDistance(
    new Date(2020, 2, 3, 11, 14, 41),
    new Date(2020, 2, 3, 12, 15, 42),
    { locale: uk },
  ),
);

console.log(`
  ${format(new Date(2020, 1, 4), `do MMMM Qo ' квартал ' y ' року'`, {
    locale: uk,
  })}
`);

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

getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [43, 45, 7, 8, 9, 54, 64, 34, 1];

console.log('Same values ', intersection(a, b));

const person1 = {
  name: 'igor',
  hardware: {
    laptop: 'Macbook',
  },
};
const person2 = {
  name: 'igor',
  hardware: {
    laptop: 'Macbook',
  },
};

console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
  return new Promise(function(resolve, reject) {
    if (firstName === 'Igor') {
      resolve('Cool Name');
      return;
    }
    reject(new Error('Bad name'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('Tobik'));
  if (err) {
    // deal with it
    console.error(err);
  } else {
    console.log(successValue);
  }
}

checkName();
