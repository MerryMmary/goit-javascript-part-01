/*
Задача. Хранилище 2.0


Задание

Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы
свойство items было приватным.

Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, 
в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
*/
'use strict'

class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(item) {
        const itemIndex = this.#items.indexOf(item);
        this.#items.splice(itemIndex, 1);
    }
};

// заменив функцию-конструктор ниже

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log('12- storage.getItems()', storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log('12- storage.addItem("Дроид")', storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log('12- storage.removeItem("Пролонгер")', storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]