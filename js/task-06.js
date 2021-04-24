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
elInput.style.border = "3px solid #bdbdbd";
console.log(elInput.dataset.length);
console.log(elInput.value.length);

elInput.addEventListener(blur, validation);
function validation(event) {
  if (elInput.value.length === elInput.dataset.length) {
    elInput.classList.add("valid");
  }
  return elInput.classList.add("invalid");
}
