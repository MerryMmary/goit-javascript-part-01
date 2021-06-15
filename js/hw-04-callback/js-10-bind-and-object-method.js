/*
Метод bind и методы объекта

При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на 
метод, которая присваивается как значение параметра, вызываемого без объекта.

const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() это вызов метода getFullName без объекта
  console.log(`Обрабатываем заявку от ${callback()}.`);
}

makeMessage(customer.getFullName); // Будет ошибка при вызове функции
В строгом режиме, значение this в методе getFullName, при вызове как колбэк-функции callback(), 
будет undefined. При обращении к свойствам firstName и lastName будет ошибка, так как undefined 
это не объект.

Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. 
Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту 
customer.

// ❌ Было
makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// ✅ Стало
makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

Задание
Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. 
Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку 
на метод объекта service. Сбор статистики симулируется логированием строки. Разберись и дополни 
код так, чтобы он работал верно.
*/
 'use strict';

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']




console.log('10- firstInvoke – ',firstInvoke);
console.log('10- secondInvoke – ',secondInvoke);

