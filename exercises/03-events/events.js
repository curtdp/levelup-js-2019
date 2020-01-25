// // 1. Взять элемент
const btn = document.querySelector('.btn');
const link = document.querySelector('.link');
// const btn2 = document.querySelector('.btn2');
// const body = document.querySelector('body');

const buyBtns = document.querySelector('.buyBtns');
buyBtns.addEventListener('click', function(e) {
  console.log(event.target);
});
// const alrt = () => alert('1');
// btn.addEventListener('click', alrt);

// btn.removeEventListener('click', alrt);

// btn.onclick = () => alert(2);

// // 2. Слушать на нем событие
link.addEventListener('click', handleClick);
// btn.addEventListener('mouseenter', handleClick);
// body.addEventListener('mouseenter', handleClick);

// // 3. Что-то сделать при наступлении события на элементе
function handleClick(event) {
  event.preventDefault();
  console.dir(event);
  console.dir(event.relatedTarget);
}

// показать как обрабатываются нажатия клавиатуры

// window.addEventListener('keyup', function(event) {
//   console.clear();
//   console.dir(event);
//   console.dir(event.target);
// });

// Удаление слушателя события
// btn.removeEventListener('click', handleClick);

// const faster = () => console.log('Move Faster!!!');

// btn.addEventListener('click', faster);

// const btns = document.querySelectorAll('.buy');

// btns.forEach(btn => {
//   btn.addEventListener('click', function(event) {
//     const num = btn.querySelector('strong').innerText;
//     console.log(`You bought item ${num}`);
//     console.log(event.currentTarget);
//     console.log(event.target);
//   });
// });

window.addEventListener('keydown', function(event) {
  // if (event.key.includes('Arrow')) {
  //   event.preventDefault();
  // }
  this.console.log(event.key);
  if (event.key === 'R') {
    event.preventDefault();
  }
});

const input = document.querySelector('.text');
const form = document.querySelector('.myForm');
form.addEventListener('submit', function(e) {
  if (input.value.length < 2) {
    e.preventDefault();
  }
});
