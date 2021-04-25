// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const controls = document.querySelector("#controls");
// console.log(controls);

const input = controls.firstElementChild;
console.log(input);

const btnRender = document.querySelector("button[data-action='render']");
console.log(btnRender);

const btnDestroy = document.querySelector("button[data-action='destroy']");
console.log(btnDestroy);

const boxes = document.querySelector("#boxes");
console.log(boxes);

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
