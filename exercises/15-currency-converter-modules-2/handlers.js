import { convert, formatCurrency } from './lib.js';

import { fromInput, toSelect, fromSelect, toEl } from './elements.js';

export async function handleInput(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);

  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value,
  );
  console.log(rawAmount);
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
