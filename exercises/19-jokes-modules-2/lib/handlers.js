import { randomItemFromArray } from './utils.js';
import { loader, jokeBtnText, jokeEl } from './elements.js';
import { fetchJoke } from './index.js';
import buttonText from '../data/buttonText.js';

export async function handleClick() {
  loader.classList.remove('hidden');
  jokeBtnText.setAttribute('disabled', 'true');
  const { joke } = await fetchJoke();
  jokeEl.textContent = joke;
  jokeBtnText.textContent = randomItemFromArray(
    buttonText,
    jokeBtnText.textContent,
  );
  loader.classList.add('hidden');
  jokeBtnText.setAttribute('disabled', 'false');
}
