export function generateOptions(options) {
  // console.log(options);
  return Object.entries(options)
    .map(([currencryCode, currencyName]) => {
      return `
      <option value="${currencryCode}">${currencryCode} — ${currencyName}</option>
    `;
    })
    .join('');
}

export function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
