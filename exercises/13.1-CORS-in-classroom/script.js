const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';

const form = document.querySelector('form');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data.results;
}

fetchRecipes('burger');

async function handleSubmit(e) {
  e.preventDefault();
  console.log(form.query.value);

  form.submit.disabled = true;

  recipesGrid.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="margin:auto;background:#fff;display:block;"
  width="200px"
  height="200px"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
>
  <circle
    cx="50"
    cy="50"
    fill="none"
    stroke="#e15b64"
    stroke-width="10"
    r="35"
    stroke-dasharray="164.93361431346415 56.97787143782138"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      repeatCount="indefinite"
      dur="1s"
      values="0 50 50;360 50 50"
      keyTimes="0;1"
    ></animateTransform>
  </circle>
</svg>`;

  await getAndShowRecipes(form.query.value);

  form.submit.disabled = false;
}

async function getAndShowRecipes(recipes) {
  const recipesData = await fetchRecipes(recipes);

  displayRecipes(recipesData);
}

function displayRecipes(recipes) {
  console.log('Creating HTML');

  const html = recipes.map(recipe => {
    return `
      <div class="recipe p-2 border rounded">
        <h2 class="text-3xl font-semibold">${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${recipe.thumbnail &&
          `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
          <a class="text-blue-700 underline" href="${
            recipe.href
          }">View recipe</a>
      </div>
    `;
  });

  recipesGrid.innerHTML = html.join('');

  console.log(html);
}

form.addEventListener('submit', handleSubmit);

getAndShowRecipes(form.query.value);
