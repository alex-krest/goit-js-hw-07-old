// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

const elInput = document.querySelector("#validation-input");
const limitLength = parseInt(elInput.dataset.length);
elInput.addEventListener("blur", validation);
function validation() {
  let value = elInput.value.length;
  if (value === limitLength) {
    elInput.classList.add("valid");
    elInput.classList.remove("invalid");
  } else {
    elInput.classList.add("invalid");
    elInput.classList.remove("valid");
  }
}
