// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
const sizeControl = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");
console.log(sizeText.textContent);

sizeControl.addEventListener("input", changeSize);
function changeSize(e) {
  //   console.log(e.currentTarget.value);
  sizeText.textContent.style.fontSize = e.currentTarget.value;
}
