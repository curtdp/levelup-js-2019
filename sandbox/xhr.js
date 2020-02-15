// GET https://api.chucknorris.io/jokes/random

const resultText = document.querySelector('.resultText');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // console.log(xhr.readyState);
    // console.log(JSON.parse(xhr.responseText).value);
    if (xhr.status === 200) {
      resultText.textContent = JSON.parse(xhr.responseText).value;
    }
  }
};
