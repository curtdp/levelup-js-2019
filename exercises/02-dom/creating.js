// const myParagraph = document.createElement('p');
// myParagraph.textContent = 'I am p';
// myParagraph.classList.add('special');

// console.log(myParagraph);

// const myImage = document.createElement('img');
// myImage.src = 'https://source.unsplash.com/random/200x400';
// myImage.alt = 'Nice coffee';

// const myDiv = document.createElement('div');
// myDiv.classList.add('wrapper');

// // appendChild

// // document.body.appendChild(myDiv);

// // myDiv.appendChild(myParagraph);

// // myDiv.appendChild(myImage);

// myDiv.appendChild(myParagraph);

// myDiv.appendChild(myImage);

// document.body.appendChild(myDiv);

// const heading = document.createElement('h2');
// heading.textContent = 'Cool info';

// myDiv.insertAdjacentElement('afterend', heading);

// LI

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'First';
const li2 = li1.cloneNode();
li2.textContent = 'Second';
/* eslint-disable */
const li3 = document.createElement  ('li');
li3.textContent = 'Third';
const li4 = document.createElement('li');
li4.textContent = 'Fourth';
const li5 = document.createElement('li');
li5.textContent = 'Fifth';

ul.appendChild(li3);
li3.insertAdjacentElement('beforebegin', li2);
li2.insertAdjacentElement('beforebegin', li1);
li3.insertAdjacentElement('afterend', li4);
ul.appendChild(li5);
document.body.appendChild(ul);
