import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import createShortArticleCard from "./modules/createShortArticleCard.js";
import createFullArticleCard from "./modules/createFullArticleCard.js";
import newsArticles from "./modules/newsArticles.js";
import products from "./modules/products.js";
import createProductCard from "./modules/createProductCard.js";
import createOption from "./modules/createOption.js";
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

const allNewsContainer = document.querySelector(".js-news-all");
if (allNewsContainer) {
  newsArticles.reverse().map((article) => {
    const newsCard = createFullArticleCard(article);
    allNewsContainer.appendChild(newsCard);
  });
}

const newsContainer = document.querySelector(".js-news-container");
if (newsContainer) {
  newsArticles
    .slice(-3)
    .reverse()
    .map((article) => {
      const newsCard = createShortArticleCard(article, 90);
      newsContainer.appendChild(newsCard);
    });
}

const catalogWrapper = document.querySelector(".js-catalog-wrapper");
if (catalogWrapper) {
  products
    .slice(-5)
    .reverse()
    .map((item) => {
      const swiperSlide = createProductCard(item);
      catalogWrapper.appendChild(swiperSlide);
    });
}

const allCatalogWrapper = document.querySelector(".js-all-catalog-wrapper");
const price1 = document.querySelector(".js-price-from");
const price2 = document.querySelector(".js-price-to");
const searchButton = document.querySelector(".js-search-submit");
const resetButton = document.querySelector(".js-reset");
const minToMaxButton = document.querySelector(".js-min-button");
const maxToMinButton = document.querySelector(".js-max-button");
const selectBrand = document.querySelector("#select-brands");
const selectCategory = document.querySelector("#select-category");
const selectStock = document.querySelector("#select-stock");
const searchProduct = document.querySelector(".search-guitar");
const brandsArray = [];

if (allCatalogWrapper) {
  showAllProducts(products);
  products.map((item) => {
    if (!brandsArray.includes(item.brand)) {
      brandsArray.push(item.brand);
    }
  });
  brandsArray.forEach((item) => {
    let newOption = createOption(item);
    selectBrand.appendChild(newOption);
  });
  selectBrand.onchange = () => {
    selectCategory.value = "all";
    selectStock.value = "all";
    if (selectBrand.value !== "all") {
      allCatalogWrapper.innerHTML = "";
      let array = products.filter(
        (element) => element.brand === selectBrand.value
      );
      showAllProducts(array);
    } else {
      showAllProducts(products);
    }
  };

  selectCategory.onchange = () => {
    selectBrand.value = "all";
    selectStock.value = "all";
    if (selectCategory.value !== "all") {
      allCatalogWrapper.innerHTML = "";
      let array = products.filter(
        (element) => element.type === selectCategory.value
      );
      showAllProducts(array);
    } else {
      showAllProducts(products);
    }
  };

  selectStock.onchange = () => {
    selectBrand.value = "all";
    selectCategory.value = "all";
    if (selectStock.value !== "all") {
      allCatalogWrapper.innerHTML = "";
      let array = products.filter(
        (element) => element.status === selectStock.value
      );
      showAllProducts(array);
    } else {
      showAllProducts(products);
    }
  };

  resetButton.onclick = () => {
    allCatalogWrapper.innerHTML = "";
    selectBrand.value = "all";
    selectStock.value = "all";
    selectCategory.value = "all";
    searchProduct.value = "";
    price2.value = "";
    price1.value = "";
    showAllProducts(products);
  };

  searchButton.onclick = () => {
    if (price2.value > 0 && price2.value >= price1.value) {
      allCatalogWrapper.innerHTML = "";
      let array = products
        .filter(
          (element) =>
            element.price >= price1.value && element.price <= price2.value
        )
        .sort((a, b) => parseInt(a.price) - parseInt(b.price));
      showAllProducts(array);
    }
  };

  minToMaxButton.onclick = () => {
    allCatalogWrapper.innerHTML = "";
    let array = products.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    showAllProducts(array);
  };

  maxToMinButton.onclick = () => {
    allCatalogWrapper.innerHTML = "";
    let array = products.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    showAllProducts(array);
  };

  searchProduct.addEventListener("compositionupdate", () => {
    searchCatalog();
  });
  searchProduct.addEventListener("keyup", () => {
    searchCatalog();
  });
}

function showAllProducts(data) {
  data.map((item) => {
    const ProductCard = createProductCard(item, true);
    allCatalogWrapper.appendChild(ProductCard);
  });
}

function searchCatalog() {
  allCatalogWrapper.innerHTML = "";
  selectBrand.value = "all";
  selectStock.value = "all";
  selectCategory.value = "all";
  if (searchProduct.value) {
    let array = products.filter((item) =>
      item.name.toLowerCase().includes(searchProduct.value.toLowerCase())
    );
    array.map((item) => {
      showAllProducts(array);
    });
  } else {
    showAllProducts(products);
  }
}

const galleryContainer = document.querySelector(".js-gallery-container");
const urlPhotoGallery =
  "https://api.unsplash.com/photos/random/?count=6&client_id=t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4&query=guitar";

if (galleryContainer) {
  fetch(urlPhotoGallery)
    .then((data) => data.json())
    .then((data) => createPhotos(data))
    .catch((err) => console.log(`Error: ${err}`));
}

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

if (subscribeForm) {
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
}
