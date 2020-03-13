import { init } from './init.js';

const app = document.querySelector('.app form');
app.addEventListener('mouseenter', init, {
  once: true,
});
