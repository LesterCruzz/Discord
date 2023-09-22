const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const toggleBler = document.querySelector(".header__nav .bler");
toggleBler.addEventListener("click", () => {
  toggleBler.classList.remove("open");
  headerNav.classList.remove("open");
});
toggleBtn.addEventListener("click", () => {
  toggleBler.classList.toggle("open");
  toggleBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
});

// const toggleBtn = document.querySelector(".toggle__menu");
// toggleBtn.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     removeActiveTab();
//     tab.classList.add("active");
//   });
// });

// function removeActiveTab() {
//   toggleBtn.forEach((tab) => {
//     tab.classList.remove("active");
//   });
// }
