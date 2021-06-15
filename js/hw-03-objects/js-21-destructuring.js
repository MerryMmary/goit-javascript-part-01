/*
Деструктуризация объектов

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  public: true,
  rating: 8.38,
};

// Деструктуризируем
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? "публичном" : "закрытом";
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;


Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за 
три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной 
операцией деструктуризации свойств объекта highTemperatures.
*/
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow } = highTemperatures; // деструктуризація коду нижче 3 рядки

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log('21- meanTemperature', meanTemperature);
