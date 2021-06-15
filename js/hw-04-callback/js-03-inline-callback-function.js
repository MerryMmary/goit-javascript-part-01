/*
Инлайн-колбэки

Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо 
при вызове функции в которую передаём колбэк. Такая функция будет доступна только как значение 
параметра и больше нигде в коде.

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest('Манго', function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest('Поли', function notify(name) {
  consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});

Задание
Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн 
колбэк-функцию eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'.
*/
function makePizza(pizzaName, callback) {
  console.log(`03- Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {
  console.log(`03- Доставляем пиццу ${pizzaName}.`);
});
// Пиши код ниже этой строки

makePizza('Ультрасыр', function eatPizza(pizzaName) {
    console.log(`03- Едим пиццу ${pizzaName}`);
});