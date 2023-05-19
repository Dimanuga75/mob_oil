let headerMenuBox = document.querySelector(".header__menu-box");
let headerMobileMenu = document.querySelector(".header__menu-close");
headerMenuBox.addEventListener("click", function (e) {
  let headerMobileMenuInner = document.querySelector(".header__menu-inner");
  if (
    e.target.classList.contains("header__btn-box") ||
    e.target.classList.contains("header__btn-item")
  ) {
    e.preventDefault();
    headerMobileMenuInner.classList.add("active");
  }
  if (e.target.classList.contains("header__close-img")) {
    e.preventDefault();
    headerMobileMenuInner.classList.remove("active");
  }
});
