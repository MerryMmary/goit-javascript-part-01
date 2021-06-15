/*
Деструктуризация в циклах

При переборе массива объектов циклом for...of получаются множественные обращения 
к свойствам объекта.
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

Для того, чтобы сократить количество повторений, можно деструктуризировать 
свойства объекта в локальные переменные в теле цикла.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте 
объявления переменной book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}


Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

*/
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb,} of colors) {

  //const {hex, rgb,} = color; // 1-н об’єкт

  hexColors.push(hex);
  rgbColors.push(rgb);
};

console.log('24- hexColors', hexColors);
console.log('24- rgbColors', rgbColors);
