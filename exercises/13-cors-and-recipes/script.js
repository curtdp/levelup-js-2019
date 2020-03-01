const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const recipesGrid = document.querySelector('.recipes');

const form = document.querySelector('form.search');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
  return data;
}

fetchRecipes('pizza');

async function handleSubmit(e) {
  e.preventDefault();
  console.log(e.currentTarget.query.value);

  const el = event.currentTarget;

  // turn the form off
  el.submit.disabled = true;

  // submit the search
  const recipes = await fetchRecipes(el.query.value);
  console.log(recipes);

  displayRecipes(recipes.results);

  el.submit.disabled = false;
}

function displayRecipes(recipes) {
  console.log('creating HTML');
  console.log(recipes);
  const html = recipes.map(recipe => {
    return `
    <div class="recipe p-2 border rounded">
      <h2 class="text-4xl font-semibold">${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title} thumbnail"/>`}
        <a class="text-blue-700 underline" href="${recipe.href}">View recipe</a>
    </div>
    `;
  });
  console.log(html);
  recipesGrid.innerHTML = html.join('');
}

form.addEventListener('submit', handleSubmit);
