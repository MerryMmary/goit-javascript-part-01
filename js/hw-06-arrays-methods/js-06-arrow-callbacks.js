/*
Стрелочные функции как коллбеки

Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за 
более краткого синтаксиса объявления, особенно если не нужно тело функции.

const numbers = [5, 10, 15, 20, 25];

// Объявление функции
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});
Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит 
делать если одна функция используется в нескольих местах программы или если она громоздкая.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);


Задание
Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную 
функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
*/

// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
    let totalPrice = 0;

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

    //   orderedItems.forEach(function (item) {
    //     totalPrice += item;
    //   });

    //   return totalPrice;
    // }
    
    orderedItems.forEach(item => {
        totalPrice += item;
        //console.log(totalPrice);
    })
    return totalPrice;
}
// Пиши код выше этой строки
console.log('06- calculateTotalPrice([12, 85, 37, 4])', calculateTotalPrice([12, 85, 37, 4]));