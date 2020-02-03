console.log('it works');

const licence = document.querySelector('.licence');
const acceptBtn = document.querySelector('.accept');

const target = licence.querySelector('.bottom');
// licence.addEventListener('scroll', function(e) {
//   console.log(e.target.scrollTop);
//   console.log(e.target.scrollHeight);
// });

function handleIntersection(entry) {
  if (entry[0].isIntersecting) {
    acceptBtn.removeAttribute('disabled');
  } else {
    acceptBtn.setAttribute('disabled', true);
  }
}

let licenceObserver = new IntersectionObserver(handleIntersection, {
  root: licence,
  rootMargin: '0px',
  threshold: 1
});

licenceObserver.observe(target);
