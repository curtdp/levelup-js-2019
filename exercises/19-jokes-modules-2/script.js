// https://icanhazdadjoke.com/api

import { fetchJoke } from './lib/index.js';
import { handleClick } from './lib/handlers.js';
import { jokeButton } from './lib/elements.js';

fetchJoke();

jokeButton.addEventListener('click', handleClick);
