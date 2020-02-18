function Gallery(gallery) {
  if (!gallery) {
    throw new Error('Gallery not found!');
  }

  const images = Array.from(gallery.querySelectorAll('img'));

  const modal = document.querySelector('.modal');

  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');

  let currentImage;

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }

    console.log(el);

    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('p').textContent = el.dataset.description;

    currentImage = el;

    openModal();
  }

  function openModal() {
    if (modal.matches('.open')) {
      console.log('modal already opened');
      return;
    }
    console.log('Opening modal...');

    modal.classList.add('open');

    // Event Listeners
    window.addEventListener('keyup', handleKeyPress);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPreviousImage);
  }

  function closeModal() {
    modal.classList.remove('open');

    window.removeEventListener('keyup', handleKeyPress);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPreviousImage);
  }

  function handleClickOutside(e) {
    // console.log(e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyPress(e) {
    console.log('handle key press');
    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (e.key === 'ArrowRight') {
      showNextImage();
      return;
    }
    if (e.key === 'ArrowLeft') {
      showPreviousImage();
      return;
    }
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPreviousImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  // Event listeners

  images.forEach(image => {
    image.addEventListener('click', e => showImage(e.currentTarget));
  });

  images.forEach(image => {
    image.addEventListener('keyup', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);

  // window.addEventListener('keyup', handleKeyPress);
  // nextButton.addEventListener('click', showNextImage);
  // prevButton.addEventListener('click', showPreviousImage);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
