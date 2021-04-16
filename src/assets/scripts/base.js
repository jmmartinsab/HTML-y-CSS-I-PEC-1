const hamburger = document.getElementById("hamburger");
const headerMenu = document.querySelector(".js-header__menu-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  headerMenu.classList.toggle("js-header__menu-container--show");
});