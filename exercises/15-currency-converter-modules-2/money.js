const form = document.querySelector('.app form');

form.addEventListener(
  'mouseenter',
  () => {
    import('./init.js').then(module => {
      module.init();
    });
  },
  {
    once: true,
  },
);
