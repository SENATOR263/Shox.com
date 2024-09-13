const toggleButton = document.getElementById('mobile-menu');
const menu = document.querySelector('.navbar__menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggleButton.classList.toggle('is-active');
});