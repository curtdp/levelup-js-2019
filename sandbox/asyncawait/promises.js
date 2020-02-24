import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
promise.then(response => response.json()).then(json => console.log(json));
