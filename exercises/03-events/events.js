// 1. Взять элемент
const btn = document.querySelector('.btn');

// 2. Слушать на нем событие
btn.addEventListener('click', handleClick);

// 3. Что-то сделать при наступлении события на элементе
function handleClick() {
  console.log('IT GOT CLICKED!!!');
}

// показать как обрабатываются нажатия клавиатуры

// Удаление слушателя события
btn.removeEventListener('click', handleClick);

const faster = () => console.log('Move Faster!!!');

btn.addEventListener('click', faster);
