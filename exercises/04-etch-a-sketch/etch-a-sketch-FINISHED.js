/** @type {CanvasRenderingContext2D} */
// Выбрать элементы на странице
// canvas, кнопка сброса

const canvas = document.querySelector('.screen');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake-btn');
const MOVE_AMOUNT = 10;

// Настроить canvas для рисования
// Сделать переменные height и width из свойств объекта canvas
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // Начать рисовать
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// написать функцию draw
function draw({ key }) {
  console.log(key);
  hue += 5;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// обработка кнопок
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// функция очистки / сброса
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
      console.log('Done the shake!');
    },
    {
      once: true
    }
  );
}

shakeBtn.addEventListener('click', clearCanvas);

// слушать события стрелок
window.addEventListener('keydown', handleKey);
