document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const cross = document.querySelector('.cross');
  const pop = document.querySelector('.popup');

  menu.addEventListener('click', () => {
    pop.classList.add('active');
    menu.classList.add('manunotactive');
    cross.classList.add('crossactive');
  });

  cross.addEventListener('click', () => {
    pop.classList.remove('active');
    cross.classList.remove('crossactive');
    menu.classList.remove('manunotactive');
  });
});
