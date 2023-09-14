const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})