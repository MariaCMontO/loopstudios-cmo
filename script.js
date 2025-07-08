
const buttons = Array.from(
  document.querySelectorAll('.header__menu-button, .header__close-menu'),
);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleContainer();
  });
});

function toggleContainer() {
  const container = document.querySelector('.header__menu-container');
  const isShown = container.classList.contains(
    'header__menu-container--displayed',
  );
  container.classList.toggle('header__menu-container--displayed', !isShown);
}
