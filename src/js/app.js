import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import createArticleCard from "./modules/createArticleCard.js";
import newsArticles from "./modules/newsArticles.js";
import products from "./modules/products.js";
import createProductCard from "./modules/createProductCard.js";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const burger = document.querySelector(".js-burger-btn");
const header = document.querySelector(".js-header-menu");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
});

const scrollUpButton = document.querySelector(".js-up-button");
scrollUpButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  //mousewheel: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  //loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 10,
      slideToClickedSlide: true,
    },
    1200: {
      slidesPerView: 9,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
  },
});

const newsContainer = document.querySelector(".js-news-container");
newsArticles
  .slice(-3)
  .reverse()
  .map((article) => {
    const newsCard = createArticleCard(article);
    newsContainer.appendChild(newsCard);
  });

const catalogWrapper = document.querySelector(".js-catalog-wrapper");
products
  .slice(-5)
  .reverse()
  .map((item) => {
    const swiperSlide = createProductCard(item);
    catalogWrapper.appendChild(swiperSlide);
  });

const galleryContainer = document.querySelector(".js-gallery-container");
const urlPhotoGallery =
  "https://api.unsplash.com/photos/random/?count=6&client_id=t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4&query=guitar";

fetch(urlPhotoGallery)
  .then((data) => data.json())
  .then((data) => createPhotos(data))
  .catch((err) => console.log(`Error: ${err}`));

function createPhotos(data) {
  data.map((item) => {
    const photoWrapper = document.createElement("div");
    photoWrapper.classList.add("photo-wrapper");
    photoWrapper.style.backgroundImage = `url(${item.urls.small}`;
    galleryContainer.appendChild(photoWrapper);
  });
}

const subscribeForm = document.querySelector(".registration-form");
const subscribeLogin = document.querySelector(".input-name");
const subscribeEmail = document.querySelector(".input-email");
const warning = document.querySelector(".registration-warning");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    subscribeLogin.value &&
    subscribeEmail.value.includes("@") &&
    subscribeEmail.value[0] !== "@"
  ) {
    warning.innerText = "You're subscribed now!";
    subscribeLogin.value = "";
    subscribeEmail.value = "";
  } else {
    warning.innerText = "Wrong login/password!";
  }
});
