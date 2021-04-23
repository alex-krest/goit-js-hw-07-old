// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;
const spanValue = document.querySelector("#value");
const buttons = document.querySelectorAll("#counter button");
const btnDecrement = buttons[0];
const btnIncrement = buttons[1];

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}
function increment(event) {
  counterValue += 1;
  value.textContent = counterValue;
}
