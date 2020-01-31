console.log('IT WORKS');
const acceptBtn = document.querySelector('.accept');
let options = {
  root: document.querySelector('.licence'),
  rootMargin: '0px',
  threshold: 1
};

let observer = new IntersectionObserver(activateButton, options);

function activateButton(entries) {
  // console.log('activate button');
  // console.log(entries);
  if (entries[0].isIntersecting) {
    acceptBtn.removeAttribute('disabled');
  } else {
    acceptBtn.setAttribute('disabled', true);
  }
}

let target = document.querySelector('.bottom');
observer.observe(target);
