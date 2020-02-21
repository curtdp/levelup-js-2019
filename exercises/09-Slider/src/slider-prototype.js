function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw Error('No Slider passed in');
  }

  this.slider = slider;

  this.slides = slider.querySelector('.slides');
  const prevBtn = slider.querySelector('.prevBtn');
  const nextBtn = slider.querySelector('.nextBtn');

  this.startSlider();
  this.applyClasses();

  // Event listeners
  prevBtn.addEventListener('click', () => this.move('back'));
  nextBtn.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function() {
  console.log(this.slider.querySelector('.current'));
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.move = function(direction) {
  const classesToRemove = ['prev', 'current', 'next'];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  if (direction === 'back') {
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
  console.log({ prev: this.prev, current: this.current, next: this.next });
};

const mySlider = new Slider(document.querySelector('.slider'));
const photoSlider = new Slider(document.querySelector('.photo-slider'));

console.log(mySlider, photoSlider);

window.photoSlider = photoSlider;

window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowRight') {
    photoSlider.move();
    return;
  }
  if (e.key === 'ArrowLeft') {
    photoSlider.move('back');
    return;
  }
});
