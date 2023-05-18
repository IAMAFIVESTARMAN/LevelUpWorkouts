console.log("this works ?");

// import codes from "./node_modules/country-calling-code/lib/index.js";
// import icons

// import { barbellOutline } from "ionicons/icons";

// let html = `<button>Click Me    <ion-icon class="feature-icon" name="barbell-outline"></ion-icon></button>`;

// const el = document.querySelector(".nav-cta");

// el.insertAdjacentHTML("afterbegin", html);

// console.log(el);
// console.log(add);
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

// async function getCountries() {
//   let headers = new Headers();

//   headers.append(
//     "Access-Control-Allow-Origin",
//     "http://127.0.0.1:5501/index.html"
//   );
//   try {
//     const res = await fetch("https://api.first.org/data/v1/teams", {
//       mode: "no-cors",
//       headers: headers,
//     });
//     const data = await res.json();
//     // console.log(data);

//     // console.log(res);
//     if (!res.ok) {
//       throw new Error(`Something went wrong Error code : ${res.status}`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// getCountries();

// codes.forEach((el) => console.log(el.countryCodes[0]));
