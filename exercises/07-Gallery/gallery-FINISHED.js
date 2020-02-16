function Gallery(gallery) {
  if (!gallery) {
    throw new Error('Gallery not found!');
  }

  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  console.log(images);

  const modal = document.querySelector('.modal');

  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');

  let currentImage;

  function openModal() {
    console.info('opening modal...');
    if (modal.matches('open')) {
      console.info('modal already open');
      return;
    }
    modal.classList.add('open');

    // 2
    // Event Listeners

    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPreviousImage);
  }

  function closeModal() {
    modal.classList.remove('open');

    // TODO: add event listeners for clicks and keyboard

    // 2
    // Event Listeners

    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPreviousImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
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

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }

    // update the modal with this info

    console.log(el);

    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // Event Listeners

  images.forEach(image =>
    image.addEventListener('click', e => showImage(e.currentTarget)),
  );

  images.forEach(image => {
    image.addEventListener('keyup', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener('click', handleClickOutside);

  // 1 проблема, с несколькими галереями эти слушатели будут присваиваться дважды, перенести в openModal
  // window.addEventListener('keyup', handleKeyPress);
  // nextButton.addEventListener('click', showNextImage);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
