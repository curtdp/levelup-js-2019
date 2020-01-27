const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  console.log('click');
  console.log(card);
  // Взять источник картинки
  const imgSrc = card.querySelector('img').src;
  const cardDescription = card.dataset.description;
  const cardTitle = card.querySelector('h2').textContent;
  // Вставить данные в модальное окно
  modalInner.innerHTML = `
    <img src="${imgSrc.replace(200, 600)}" alt="${cardTitle}"/>
    <p>${cardDescription}</p>
  `;
  // Показать окно
  console.log(modalOuter);
  modalOuter.classList.add('isOpen');
}

function closeModal() {
  modalOuter.classList.remove('isOpen');
}

modalOuter.addEventListener('click', function(event) {
  const isInside = !!event.target.closest('.modal-inner');
  if (!isInside) {
    closeModal();
  }
});

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);
