export default function createProductCard(item) {
  const itemStatus = document.createElement("span");
  itemStatus.innerText = item.status;
  itemStatus.classList.add("item-status");
  if (item.status == "sold") {
    itemStatus.classList.add("sold");
  }
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
  const itemCard = document.createElement("div");
  itemCard.classList.add("item-card");
  itemCard.append(itemStatus, itemImgWrapper, itemName, itemPrice);

  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperSlide.appendChild(itemCard);
  return swiperSlide;
}
