const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
});
