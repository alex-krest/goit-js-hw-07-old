// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Количество элементов: 4
const amountCategories = document.querySelectorAll(".item");
console.log(amountCategories);

console.log(`В списке ${amountCategories.length} категории`);

amountCategories.forEach((el) =>
  console.log(
    `Текст заголовка: ${el.firstElementChild.textContent}`,
    `Количество елементов ${el.lastElementChild.children.length}`
  )
);
