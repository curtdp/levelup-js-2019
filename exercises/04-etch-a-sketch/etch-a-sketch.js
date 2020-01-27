// Выбрать элементы на странице
// canvas и кнопка сброса
const canvas = document.querySelector('.screen');
const ctx = canvas.getContext('2d');

const shakeBtn = document.querySelector('.shake-btn');

// Настроить canvas для рисования
// взять ширину и высоту

// let width = canvas.width;
// let height = canvas.height;

const { width, height } = canvas;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // Начать рисовать
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const MOVE_AMOUT = 10;

function draw({ key }) {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue += 10;
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUT;
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(event) {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw(event);
  }
}

window.addEventListener('keydown', handleKey);

shakeBtn.addEventListener('click', clearCanvas);

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
