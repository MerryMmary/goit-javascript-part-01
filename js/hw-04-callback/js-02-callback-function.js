/*
Колбэк-функции

Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в 
качестве аргумента и та, в свою очередь, вызывает переданную функцию.

Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров 
другие функции или возвращающая функцию как результат.

// Колбэк-функция
function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);

Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback 
и вызвана внутри функции registerGuest через круглые скобки. Имя параметра для колбэка может 
быть произвольным, главное помнить, что значением будет функция.

Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) 
колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться 
как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
*/
function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log("02- makeMessage('Роял гранд', makePizza) – ", makeMessage('Роял гранд', makePizza));
console.log("02- makeMessage('Ультрасыр', deliverPizza) – ", makeMessage('Ультрасыр', deliverPizza));
