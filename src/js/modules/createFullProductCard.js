export default function createFullProductCard(item) {
  const itemStatus = document.createElement("span");
  itemStatus.innerText = item.status;
  itemStatus.classList.add("item-status");
  const itemImgWrapper = document.createElement("div");
  itemImgWrapper.classList.add("item-image-wrapper");
  const itemImg = document.createElement("img");
  itemImg.src = item.src;
  itemImgWrapper.appendChild(itemImg);
  const itemName = document.createElement("h3");
  itemName.innerText = item.name;
  itemName.classList.add("item-name");
  const itemPrice = document.createElement("span");
  itemPrice.innerText = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  itemPrice.classList.add("item-price");
  const itemButton = document.createElement("button");
  itemButton.classList.add("btn");
  itemButton.classList.add("btn-dark");
  if (item.status == "sold") {
    itemStatus.classList.add("sold");
    itemButton.value = "Notify me";
  } else {
    itemButton.value = "Buy now";
  }
  itemButton.innerText = itemButton.value;
  itemButton.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    createMessageWindow(e.target.value, item.name, item.price);
  });

  const itemCard = document.createElement("div");
  itemCard.classList.add("item-card");
  itemCard.append(itemStatus, itemImgWrapper, itemName, itemPrice, itemButton);

  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperSlide.appendChild(itemCard);
  return swiperSlide;
}
