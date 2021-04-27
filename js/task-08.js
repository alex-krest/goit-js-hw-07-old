// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const controlsEl = document.querySelector("#controls");
console.log(controls);

const inputEl = document.querySelector("input");
console.log(inputEl);

const renderBtn = document.querySelector("[data-action=render]");
console.log(renderBtn);

const destroyBtn = document.querySelector("[data-action=destroy]");
console.log(destroyBtn);

const boxes = document.querySelector("#boxes");
console.log(boxes);
// -----
const amount = input.value;
console.log(amount);

btnRender.addEventListener('click', createBoxes);
function createBoxes(amount) {
	const divOne = document.createElement('div');
	divOne.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
	const divWidth = divOne.style.width : 30 px;
	const divHeigth = divOne.style.width : 30 px;
	const divCollection = divOne * amount;

	boxes.insertAdjacentElement( "afterbegin", divCollection);
};

btnDestroy.addEventListener('click', clean);
function clean() {
	input.textContent = '';
	boxes.innerHTML = '';
};
// -----------------------------------------------
// const inputEl(controlsEl) = document.querySelector("input");
// const renderBtn = document.querySelector("[data-action=render]");
// const destroyBtn = document.querySelector("[data-action=destroy]");
const divEl(boxes) = document.querySelector("#boxes");
inputEl.addEventListener(`input`, quontityElement);
let amount = 0;
function quontityElement(event) {
  amount = event.currentTarget.value;
}
renderBtn.addEventListener(`click`, createBoxes);
destroyBtn.addEventListener(`click`, destroyBoxes);
function createBoxes(quontityElement) {
  let change = 20;
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement(`div`);
    change += 10;
    divBox.style.width = `${change}px`;
    divBox.style.height = `${change}px`;
    divBox.style.backgroundColor = `${`rgb(1${change},${change},${change})`}`;
    divEl.appendChild(divBox);
  }
}
console.log(divEl);
function destroyBoxes(quontityElement) {
  for (let i = 0; i < amount; i++) {
    const divDel = document.querySelector("#boxes div");
    divDel.remove();
  }
}
