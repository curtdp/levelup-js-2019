function Gallery(gallery) {
  if (!gallery) {
    throw new Error('Gallery not found!');
  }

  this.gallery = gallery;

  this.images = Array.from(gallery.querySelectorAll('img'));

  this.modal = document.querySelector('.modal');

  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // bind out methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPreviousImage = this.showPreviousImage.bind(this);
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // Event listeners

  this.images.forEach(image => {
    image.addEventListener('click', e => this.showImage(e.currentTarget));
  });

  this.images.forEach(image => {
    image.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', this.handleClickOutside);

  // window.addEventListener('keyup', handleKeyPress);
  // nextButton.addEventListener('click', showNextImage);
  // prevButton.addEventListener('click', showPreviousImage);
}

Gallery.prototype.showImage = function(el) {
  if (!el) {
    console.info('no image to show');
    return;
  }

  console.log(el);

  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('p').textContent = el.dataset.description;

  this.currentImage = el;

  this.openModal();
};

Gallery.prototype.openModal = function() {
  if (this.modal.matches('.open')) {
    console.log('modal already opened');
    return;
  }
  console.log('Opening modal...');

  this.modal.classList.add('open');

  // Event Listeners
  window.addEventListener('keyup', this.handleKeyPress);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPreviousImage);
};

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');

  window.removeEventListener('keyup', this.handleKeyPress);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPreviousImage);
};

Gallery.prototype.handleClickOutside = function(e) {
  // console.log(e.target, e.currentTarget);
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyPress = function(e) {
  console.log('handle key press');
  if (e.key === 'Escape') {
    this.closeModal();
    return;
  }

  if (e.key === 'ArrowRight') {
    this.showNextImage();
    return;
  }
  if (e.key === 'ArrowLeft') {
    this.showPreviousImage();
    return;
  }
};

Gallery.prototype.showNextImage = function() {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild,
  );
};
Gallery.prototype.showPreviousImage = function() {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild,
  );
};

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
