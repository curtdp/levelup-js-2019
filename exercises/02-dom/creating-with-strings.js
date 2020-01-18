const item = document.querySelector('.item');

const width = 500;
const height = 350;
const src = `https://source.unsplash.com/random/${width}x${height}`;
const desc = 'Big city';
const myHTML = `
<div>
  <h2>Hello from strings</h2>
  <img src="${src}" alt="${desc}"/>
</div>
`;

console.log(myHTML.classList);
console.log(typeof myHTML);

item.innerHTML = myHTML;

/** ================= */

const igor = document.querySelector('.igor');

console.log(igor.children);
console.log(igor.firstElementChild);
console.log(igor.lastElementChild);
console.log(igor.previousElementSibling);
console.log(igor.nextElementSibling);
console.log(igor.parentElement);

// el.childNodes
// el.firstChild
// el.lastChild
// el.previousSibling
// el.nextSibling
// el.parentNode
