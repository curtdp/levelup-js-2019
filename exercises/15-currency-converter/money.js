const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toEl = document.querySelector('.to_amount');
const endpoint = 'https://api.exchangeratesapi.io/latest';

const form = document.querySelector('.app form');

const ratesByBase = {};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function generateOptions(options) {
  // console.log(options);
  return Object.entries(options)
    .map(([currencryCode, currencyName]) => {
      return `
      <option value="${currencryCode}">${currencryCode} — ${currencyName}</option>
    `;
    })
    .join('');
}

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  console.log(rates);
  return rates;
}

async function convert(amount, from, to) {
  // check if we event have the rates to convert from that currency

  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we dont habe ${from} to convert to ${to}. So lets go get it!`,
    );
    const rates = await fetchRates(from);
    console.log(rates);
    // store for next time
    ratesByBase[from] = rates;
  }

  // convert the amount that they passed in
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

const optionsHTML = generateOptions(currencies);

// console.log(optionsHTML);

// populate options
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

async function handleInput(e) {
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

form.addEventListener('input', handleInput);
