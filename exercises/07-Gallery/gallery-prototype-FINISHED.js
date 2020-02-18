function Gallery(gallery) {
  if (!gallery) {
    throw new Error('Gallery not found!');
  }

  this.gallery = gallery;
  // select the elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // bind our methods to the instance when we need then
  this.showNextImage = this.showNextImage.bind(this);
  this.showPreviousImage = this.showPreviousImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // Event Listeners

  this.images.forEach(image =>
    image.addEventListener('click', e => this.showImage(e.currentTarget)),
  );

  this.images.forEach(image => {
    image.addEventListener('keyup', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        this.showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', this.handleClickOutside);

  // 1 проблема, с несколькими галереями эти слушатели будут присваиваться дважды, перенести в openModal
  // window.addEventListener('keyup', handleKeyPress);
  // nextButton.addEventListener('click', showNextImage);
}

Gallery.prototype.openModal = function() {
  console.info('opening modal...');
  if (this.modal.matches('open')) {
    console.info('modal already open');
    return;
  }
  this.modal.classList.add('open');

  // 2
  // Event Listeners

  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPreviousImage);
};

Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');

  // TODO: add event listeners for clicks and keyboard

  // 2
  // Event Listeners

  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPreviousImage);
};

Gallery.prototype.handleClickOutside = function(e) {
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function(e) {
  console.log('KeyUp Handling');
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
  console.log('ShowingNextImage');
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild,
  );
};

Gallery.prototype.showPreviousImage = function() {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild,
  );
};

Gallery.prototype.showImage = function(el) {
  if (!el) {
    console.info('no image to show');
    return;
  }

  // update the modal with this info

  console.log(el);

  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};

// Use it on the page

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
