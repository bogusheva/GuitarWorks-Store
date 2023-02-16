export default function createOption(element) {
  let option = document.createElement("option");
  option.setAttribute("value", element);
  option.innerText = element;
  return option;
}
