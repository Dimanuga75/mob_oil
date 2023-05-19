import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

let mainMenuBox = document.querySelector(".main-box__menu");
let mainBtnItem = document.querySelectorAll(".main__btn");
let mainTitle = document.querySelector(".main__title");
let mainDotsBox = document.querySelector(".main__dots-box");
let mainDotsArr = document.querySelectorAll(".main__dots-items");
let moreItemArr = document.querySelectorAll(".inner__more-product");
let userListBasket = document.querySelector(".slider");
let counter = 0;
let stepShift;
let moreBtnArr = document.querySelectorAll(".main-more");
let moreInnerDesk = document.querySelector(".more-product__inner-desk");
const screen1200 = window.matchMedia("(max-width: 1200px)");

function chooseBtnSalad() {
  for (const item of mainBtnItem) {
    item.classList.remove("italy");
    item.classList.remove("meat");
    item.classList.remove("east");
    item.classList.remove("east-main");
    item.classList.remove("italy-main");
    item.classList.remove("meat-main");
    item.classList.add("salad");
  }

  mainTitle.classList.remove("italy");
  mainTitle.classList.remove("meat");
  mainTitle.classList.remove("east");
  mainTitle.classList.add("salad");
}
function chooseBtnItaly() {
  for (const item of mainBtnItem) {
    item.classList.remove("salad");
    item.classList.remove("meat");
    item.classList.remove("east");
    item.classList.remove("east-main");
    item.classList.remove("salad-main");
    item.classList.remove("meat-main");
    item.classList.add("italy");
  }

  mainTitle.classList.remove("salad");
  mainTitle.classList.remove("meat");
  mainTitle.classList.remove("east");
  mainTitle.classList.add("italy");
}
function chooseBtnMeat() {
  for (const item of mainBtnItem) {
    item.classList.remove("salad");
    item.classList.remove("italy");
    item.classList.remove("east");
    item.classList.remove("east-main");
    item.classList.remove("salad-main");
    item.classList.remove("italy-main");
    item.classList.add("meat");
  }

  mainTitle.classList.remove("salad");
  mainTitle.classList.remove("italy");
  mainTitle.classList.remove("east");
  mainTitle.classList.add("meat");
}
function chooseBtnEast() {
  for (const item of mainBtnItem) {
    item.classList.remove("salad");
    item.classList.remove("italy");
    item.classList.remove("meat");
    item.classList.remove("meat-main");
    item.classList.remove("salad-main");
    item.classList.remove("italy-main");
    item.classList.add("east");
  }

  mainTitle.classList.remove("salad");
  mainTitle.classList.remove("italy");
  mainTitle.classList.remove("meat");
  mainTitle.classList.add("east");
}
function sliderMain(step) {
  let mainInnerArr = document.querySelectorAll(".main__inner");
  mainInnerArr.forEach(
    (item) => (item.style.transform = `translateX(-${step}px)`)
  );
}

function chooseDotsClass() {
  for (const item of mainDotsArr) {
    item.classList.remove("salad");
    item.classList.remove("italy");
    item.classList.remove("meat");
    item.classList.remove("east");
  }
}
let indexCat;
mainMenuBox.addEventListener("click", function (e) {
  for (const item of moreBtnArr) {
    item.classList.remove("click-more");
  }
  for (const item of moreItemArr) {
    item.classList.remove("active");
  }
  let index = e.target.dataset.category;

  counter = index;
  stepSlider();
  indexCat = index * stepShift;
  if (e.target.dataset.category == 0) {
    chooseBtnSalad();
    sliderMain(indexCat);
    chooseDotsClass();
    e.target.classList.add("salad-main");
    mainDotsArr[index].classList.add("salad");
  }
  if (e.target.dataset.category == 1) {
    chooseBtnItaly();
    chooseDotsClass();
    mainDotsArr[index].classList.add("italy");
    e.target.classList.add("italy-main");
    sliderMain(indexCat);
  }

  if (e.target.dataset.category == 2) {
    chooseBtnMeat();
    chooseDotsClass();
    mainDotsArr[index].classList.add("meat");
    e.target.classList.add("meat-main");
    sliderMain(indexCat);
  }
  if (e.target.dataset.category == 3) {
    chooseBtnEast();
    chooseDotsClass();
    mainDotsArr[index].classList.add("east");
    e.target.classList.add("east-main");
    sliderMain(indexCat);
  }
});
mainDotsBox.addEventListener("click", function (e) {
  for (const item of moreBtnArr) {
    item.classList.remove("click-more");
  }
  for (const item of moreItemArr) {
    item.classList.remove("active");
  }
  moreInnerDesk.classList.remove("active");
  let index = e.target.dataset.category;
  counter = index;
  stepSlider();
  indexCat = index * stepShift;

  if (e.target.dataset.category == 0) {
    chooseBtnSalad();
    chooseDotsClass();
    sliderMain(indexCat);
    mainDotsArr[index].classList.add("salad");
    mainBtnItem[index].classList.add("salad-main");
  }
  if (e.target.dataset.category == 1) {
    chooseBtnItaly();
    chooseDotsClass();
    sliderMain(indexCat);
    mainDotsArr[index].classList.add("italy");
    mainBtnItem[index].classList.add("italy-main");
  }

  if (e.target.dataset.category == 2) {
    chooseBtnMeat();
    chooseDotsClass();
    sliderMain(indexCat);
    mainDotsArr[index].classList.add("meat");
    mainBtnItem[index].classList.add("meat-main");
  }
  if (e.target.dataset.category == 3) {
    chooseBtnEast();
    chooseDotsClass();
    sliderMain(indexCat);
    mainDotsArr[index].classList.add("east");
    mainBtnItem[index].classList.add("east-main");
  }
});

let newValue;
function Value(e) {
  if (e.target.classList.contains("count__btn")) {
    const direction = e.target.dataset.set;
    const inp = e.target.parentElement.querySelector("input.count__item");
    const cuurentValue = +inp.value;
    if (direction == "plus") {
      newValue = cuurentValue + 1;
    } else {
      newValue = cuurentValue - 1 > 0 ? cuurentValue - 1 : 0;
    }
    inp.value = newValue;
  }
}
userListBasket.addEventListener("click", function (e) {
  Value(e);
});
moreInnerDesk.addEventListener("click", function (e) {
  Value(e);
});
let aboutDotActive = document.querySelectorAll(".about__dots-items");
let feedbackItemArr = document.querySelectorAll(".about__feedback-item");

function aboutDotsActive() {
  let aboutDotItem = document.querySelectorAll(".about__dots-item");
  let step;
  for (let i = 0; i < aboutDotActive.length; i++) {
    if (aboutDotActive[i].classList.contains("active")) {
      step = aboutDotItem[i].dataset.category;
    }
  }
  let stepSliderAbout = step * 290;
  feedbackItemArr.forEach(
    (item) => (item.style.transform = `translateX(-${stepSliderAbout}px)`)
  );
}
aboutDotsActive();

function stepSlider() {
  let sliderBox = document.querySelector(".slider");
  let widthSlider = Number(
    getComputedStyle(sliderBox).width.replace(/[a-zа-яё]/gi, "")
  );
  let columnGapSlider = Number(
    getComputedStyle(sliderBox).columnGap.replace(/[a-zа-яё]/gi, "")
  );
  stepShift = widthSlider + columnGapSlider;
}

let aboutDotsBox = document.querySelector(".about__dots-box");
aboutDotsBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("about__dots-item")) {
    let feedbackBox = document.querySelector(".about__feedback-box");
    let widthSlider = Number(
      getComputedStyle(feedbackBox).width.replace(/[a-zа-яё]/gi, "")
    );
    let columnGapSlider = Number(
      getComputedStyle(feedbackBox).columnGap.replace(/[a-zа-яё]/gi, "")
    );
    for (const item of aboutDotActive) {
      item.classList.remove("active");
    }
    let index = e.target.dataset.category;
    aboutDotActive[index].classList.add("active");
    let stepSliderAbout = index * (widthSlider + columnGapSlider);
    feedbackItemArr.forEach(
      (item) => (item.style.transform = `translateX(-${stepSliderAbout}px)`)
    );
  }
});
let moreBox = document.querySelector(".slider__inner");

let sliderBtnLeft = document.querySelector(".slider__btn.left");
let sliderBtnRight = document.querySelector(".slider__btn.right");

sliderBtnLeft.onclick = function () {
  for (const item of moreBtnArr) {
    item.classList.remove("click-more");
  }
  for (const item of moreItemArr) {
    item.classList.remove("active");
  }
  stepSlider();
  counter++;
  if (counter > moreItemArr.length - 1) {
    counter = 0;
  }

  let step = counter * stepShift;
  sliderMain(step);
  if (counter === 0) {
    chooseBtnSalad();
    chooseDotsClass();
    mainDotsArr[counter].classList.add("salad");
    mainBtnItem[counter].classList.add("salad-main");
  }
  if (counter === 1) {
    chooseBtnItaly();
    chooseDotsClass();
    mainDotsArr[counter].classList.add("italy");
    mainBtnItem[counter].classList.add("italy-main");
  }
  if (counter === 2) {
    chooseBtnMeat();
    chooseDotsClass();
    mainDotsArr[counter].classList.add("meat");
    mainBtnItem[counter].classList.add("meat-main");
  }
  if (counter === 3) {
    chooseBtnEast();
    chooseDotsClass();
    mainDotsArr[counter].classList.add("east");
    mainBtnItem[counter].classList.add("east-main");
  }
};

sliderBtnRight.onclick = function () {
  for (const item of moreBtnArr) {
    item.classList.remove("click-more");
  }
  for (const item of moreItemArr) {
    item.classList.remove("active");
  }
  stepSlider();
  counter--;
  if (counter < 0) {
    counter = moreItemArr.length - 1;
  }
  let step = counter * stepShift;
  sliderMain(step);
  if (counter === 0) {
    chooseBtnSalad();
    chooseDotsClass();
    mainDotsArr[counter].classList.add("salad");
    mainBtnItem[counter].classList.add("salad-main");
  }
  if (counter === 1) {
    chooseBtnItaly();
    chooseDotsClass();
    mainDotsArr[counter].classList.add("italy");
    mainBtnItem[counter].classList.add("italy-main");
  }
  if (counter === 2) {
    chooseBtnMeat();
    chooseDotsClass();
    mainDotsArr[counter].classList.add("meat");
    mainBtnItem[counter].classList.add("meat-main");
  }
  if (counter === 3) {
    chooseBtnEast();
    chooseDotsClass();
    mainDotsArr[counter].classList.add("east");
    mainBtnItem[counter].classList.add("east-main");
  }
};
let moreProductBox = document.querySelector(".more-product__box");
for (let i = 0; i < moreItemArr.length; i++) {
  moreProductBox.insertAdjacentElement("beforeend", moreItemArr[i]);
}
if (!screen1200.matches) {
  moreBox.addEventListener("click", function (e) {
    if (e.target.classList.contains("main-more")) {
      e.target.classList.toggle("click-more");

      moreInnerDesk.classList.toggle("active");
    }
  });
  //  userListBasket.insertAdjacentHTML(
  //    "afterend",
  //    "<div class='more-product__box'> </div>"
  //  );
}
if (screen1200.matches) {
  moreBox.addEventListener("click", function (e) {
    if (e.target.classList.contains("main-more")) {
      e.target.classList.toggle("click-more");
      moreInnerDesk.classList.toggle("active");
      moreItemArr.forEach((item) => (item.style.display = "none"));
      let index = e.target.dataset.category;
      moreItemArr[index].classList.toggle("active");
      moreItemArr[index].style.display = "flex";
    }
  });
}
