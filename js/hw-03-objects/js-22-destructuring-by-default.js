/*
Значения по умолчанию

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // Последнее королевство
console.log(author); // Бернард Корнуэлл
console.log(coverImage); // https://via.placeholder.com/640/480

В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. 
Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации 
свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку 
"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
*/

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow, icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log('22- meanTemperature', meanTemperature);