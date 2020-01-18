// document.addEventListener('DOMContentLoaded', function() {
//   const p = document.querySelector('p');
//   const divs = document.querySelectorAll('div');
//   console.log(p);
//   console.log(divs);
//   // document.getElementById('hi')
// });

// const items = document.getElementsByClassName('item');
// console.log(items);

// const heading = document.querySelector('h2');
// console.dir(heading);

// const pizzaList = document.querySelector('.pizzaList');
// console.log(pizzaList);

const image = document.querySelector('.photo');
console.log(image);
console.log(image.naturalWidth);

image.addEventListener('load', function() {
  console.log(image.naturalWidth);
});

image.addEventListener('click', function() {
  image.classList.toggle('rounded');
});

image.setAttribute('hello-attribute', 'iam-here');

function showAlert() {
  alert(`Welcome ${image.dataset.name} ${image.dataset.last}`);
}

image.addEventListener('click', showAlert);

image.removeEventListener('click', showAlert);
