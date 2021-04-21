// В JS есть массив строк.
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
// const ing = ingredients.forEach((el) =>
//   console.log(document.createElement("li"))
// );

const element = ingredients.map((ing) => {
  const item = document.createElement("li");
  item.textContent = [ing];
  return item;
});
console.log(...element);

const list = document.querySelector("#ingredients");
list.append(...element);
