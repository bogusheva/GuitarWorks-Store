export default function createMessageWindow(text, model, price) {
  const messageWindow = document.createElement("div");
  messageWindow.classList.add("message-window");
  const messageHeading = document.createElement("h2");
  const messageInfo = document.createElement("div");
  messageInfo.classList.add("message-info");
  const messageSubHeading = document.createElement("h3");

  const messageInfoModel = document.createElement("span");
  messageInfoModel.classList.add("order-model");
  messageInfoModel.innerText = model;
  const messageInfoPrice = document.createElement("span");
  messageInfoPrice.classList.add("order-price");
  const messageText = document.createElement("h3");
  messageText.innerText = "Please, leave us your contacts:";

  if (text === "Buy now") {
    messageHeading.innerText = "We will call you ASAP!";
    messageSubHeading.innerText = "Your order is:";
    messageInfoPrice.innerText = `Price: $${price}`;
  } else {
    messageHeading.innerText =
      "We call you as soon as guitar will be in stock!";
  }
  messageInfo.append(
    messageSubHeading,
    messageInfoModel,
    messageInfoPrice,
    messageText
  );

  const messageFormContainer = document.createElement("form");
  messageFormContainer.classList.add("registration-form");
  const messageFormName = document.createElement("input");
  messageFormName.setAttribute("type", "text");
  messageFormName.setAttribute("placeholder", "your name&surname");
  const messageFormPhone = document.createElement("input");
  messageFormPhone.setAttribute("type", "text");
  messageFormPhone.setAttribute("minlength", "10");
  messageFormPhone.setAttribute("placeholder", "your phone");
  const warning = document.createElement("span");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.classList.add("btn");
  submitButton.classList.add("btn-dark");
  submitButton.innerText = "Submit";
  messageFormContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    const regexp = /^[^a-zA-Z]*$/;
    if (
      messageFormName.value &&
      regexp.test(messageFormPhone.value) &&
      !regexp.test(messageFormName.value) &&
      messageFormPhone.value
    ) {
      warning.innerText = "Please, pick up the phone! We are calling!";
      messageFormName.style.display = "none";
      messageFormPhone.style.display = "none";
      submitButton.style.display = "none";
      messageText.style.display = "none";
    } else {
      warning.innerText = "Something wrong with data. Try again";
    }
  });

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-btn");
  closeButton.innerText = "X";
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    messageWindow.remove();
  });
  messageFormContainer.append(
    messageFormName,
    messageFormPhone,
    warning,
    submitButton
  );

  messageWindow.append(
    messageHeading,
    messageInfo,
    messageFormContainer,
    closeButton
  );
  document.querySelector(".body-container").appendChild(messageWindow);
}
