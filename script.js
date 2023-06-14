console.log("this works ?");

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");

let currentSlide = 0;
let maxSlide = slides.length;

console.log(slides);

// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
//   );
// };

function nextSlide() {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach(
    (el, i) => (el.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
  );
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  slides.forEach(
    (el, i) => (el.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
}

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

slides.forEach((el, i) => (el.style.transform = `translateX(${100 * i}%)`));

setInterval(nextSlide, 5000);

import { codes } from "./countrycodes.js";

document.addEventListener("DOMContentLoaded", function () {
  const dropDown = document.querySelector("#countries");
  let output;
  codes.forEach((el) => {
    // console.log(el);
    output += `<option>${el.dial_code}</option>`;
  });
  dropDown.insertAdjacentHTML("beforeend", output);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// if (module.hot) {
//   module.hot.accept();
// }
