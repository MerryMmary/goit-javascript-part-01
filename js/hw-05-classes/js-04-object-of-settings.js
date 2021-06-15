/*
Объект настроек

Функции-конструкторы всегда принимают большое количество входных данных для свойств будущего 
объекта. Поэтому, к ним также можно применить паттерн «Объект настроек», передавая один объект 
с логично именованными свойствами, вместо несвязанного набора аргументов.

function User({ name, email }) {
  this.name = name;
  this.email = email;
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

Задание
Выполни рефакторинг функции-конструктора Car так, чтобы она принимала один параметр - 
объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи)
 функции.
*/

function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

console.log('04- Car is ', Car);