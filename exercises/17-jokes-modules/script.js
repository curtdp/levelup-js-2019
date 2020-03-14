// https://icanhazdadjoke.com/api
import { fetchJoke } from './lib/index.js';
import { jokeButton } from './lib/elements.js';

import { handleClick } from './lib/handlers.js';

fetchJoke();

jokeButton.addEventListener('click', handleClick);
