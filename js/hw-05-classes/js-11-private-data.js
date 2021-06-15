/*
Приватные свойства

Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса. Пользователь класса 
должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса.

В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только 
внутри класса. Это одно из отличий классов и функций-конструкторов - в классах легко объявить 
приватные свойства.

Допустим почта пользователя должна быть недоступна из вне, то есть приватна. Добавляя к имени 
свойства символ # мы делаем его приватным. Объявление приватного свойства до инциализации в 
конструкторе - обязательно.

class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Будет ошибка, это приватное свойство
Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого перед 
их именем необходимо поставить символ #.


Задание

Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для 
публичного интерфейса, для чтения и изменения этого свойства.

getBrand() - возвращает значение приватного свойства brand.
changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
*/
'use strict'

class Car {
    #brand; // Приватна вл-сть
    
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
    }
    getBrand() {
      return this.#brand;
    }
    changeBrand(newBrand) {
        return this.#brand = newBrand;
  }   
}

new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
console.log('11- Car', Car);
