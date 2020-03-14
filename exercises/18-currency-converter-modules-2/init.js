import currencies from './currencies.js';
import { handleInput } from './handlers.js';
import { fromSelect, toSelect, form } from './elements.js';

import { generateOptions } from './lib.js';

export function init() {
  const optionsHTML = generateOptions(currencies);

  // console.log(optionsHTML);

  // populate options
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
