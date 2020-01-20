const btn = document.querySelector('.btn');

function handleClick() {
  document.querySelector('.wrapper').innerHTML = `<h1>HELLO</h1>`;
  return function() {
    console.log('IT GOT CLICKED HELLO!!!');
  };
}
function handleClick2() {
  document.querySelector('.wrapper').innerHTML = `<h1>PRIVET</h1>`;
  return function() {
    console.log('IT GOT CLICKED PRIVET!!!');
  };
}

let handler;

switch (prompt('case 1 or 2')) {
  case '1':
    handler = handleClick;
    break;
  case '2':
    handler = handleClick2;
    break;
}

btn.addEventListener('click', handler());
