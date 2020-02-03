const turt = document.querySelector('.turt');

console.log(turt.style.left);
let x = 0;
let y = 0;
let isBack = false;
let rotate = 0;

function handleKey(e) {
  if (!e.key.includes('Arrow')) return;

  switch (e.key) {
    case 'ArrowUp':
      y = y - 1;
      console.log('Up');
      rotate = -90;
      break;
    case 'ArrowRight':
      console.log('Right');
      isBack = false;
      x = x + 1;
      rotate = 0;
      break;
    case 'ArrowDown':
      y = y + 1;
      console.log('Down');
      rotate = 90;
      break;
    case 'ArrowLeft':
      console.log('Left');
      isBack = true;
      x = x - 1;
      rotate = 0;
      break;
    default:
      console.log('This was not arrow key');
  }

  const speed = 10;
  turt.style.setProperty('--x', `${x * speed}px`);
  turt.style.setProperty('--y', `${y * speed}px`);
  turt.style.setProperty('--rotate', `${rotate}deg`);
  if (isBack) {
    turt.style.setProperty('--flip', '180deg');
  } else {
    turt.style.setProperty('--flip', '0');
  }
}

window.addEventListener('keydown', handleKey);
