/** @type {CanvasRenderingContext2D} */

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

ctx.lineJoin = 'square';
ctx.lineCap = 'square';
ctx.lineWidth = 10;

ctx.strokeStyle = `hsl(0, 100%, 50%)`;
ctx.beginPath(); // Начать рисовать
ctx.moveTo(200, 200);
ctx.lineTo(100, 200);
ctx.lineTo(150, 250);
ctx.stroke();
