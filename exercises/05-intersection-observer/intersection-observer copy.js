const licence = document.querySelector('.licence');
const watch = document.querySelector('.watch');
const acceptBtn = document.querySelector('.accept');

function obCallback(payload) {
  console.log(payload[0]);
  if (payload[0].intersectionRatio === 1) {
    acceptBtn.removeAttribute('disabled');
  } else {
    acceptBtn.setAttribute('disabled', true);
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: licence,
  threshold: 1
});

// ob.observe(watch);
ob.observe(licence.lastElementChild);

// licence.addEventListener('scroll', function(e) {
// старый способ
// console.log(e.target.scrollTop); // Как далеко мы прокрутили от верха
// console.log(e.target.scrollHeight); // Какой высоты наш элемент
// });

// Если код выполняется на другой странице где нет такого элемента
// function licenceScroll() {
//   const licence = document.querySelector('.licence');
//   if (!licence) {
//     return; // сразу выйти, элемента нет на странице
//   }

//   licence.addEventListener('scroll', function(e) {
//     console.log(e);
//   });
// }
// licenceScroll();
