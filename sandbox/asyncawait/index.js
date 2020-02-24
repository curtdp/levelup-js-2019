// // L1

// console.log('🥪 Syncronous 1');

// // L2

// setTimeout(_ => console.log('🍅 Timeout 2'), 0);

// // L3

// Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// // L4

// console.log('🥪 Syncronous 4');

import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
promise
  .then(response => response.json())
  .then(user => {
    throw new Error('Oh Oh');
    return user;
  })
  .then(task => console.log('😜', task.title))
  .catch(err => console.log('😢', err));

console.log('🥪 Syncronous');
