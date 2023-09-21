const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
toggleBtn.addEventListener("click", () => {
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
