function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  let current;
  let prev;
  let next;

  const slides = slider.querySelector('.slides');
  console.log(slides);
  const prevBtn = slider.querySelector('.prevBtn');
  const nextBtn = slider.querySelector('.nextBtn');

  function startSlider() {
    current = slides.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    applyClasses();
  }

  startSlider();
  applyClasses();
  console.log(current);

  prevBtn.addEventListener('click', () => move('back'));
  nextBtn.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const photoSlider = Slider(document.querySelector('.photo-slider'));
