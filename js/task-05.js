// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const uncoInput = document.querySelector("#name-input");
const uncoSpan = document.querySelector("#name-output");

uncoInput.addEventListener("input", change);

function change(event) {
  if (uncoInput.value === "") {
    return (uncoSpan.textContent = "незнакомец");
  }
  uncoSpan.textContent = event.currentTarget.value;
}
