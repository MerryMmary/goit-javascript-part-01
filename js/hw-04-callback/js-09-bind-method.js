/*
Метод bind

Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, 
когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным 
контекстом, используется метод bind.

foo.bind(obj, arg1, arg2, ...)

Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj и аргументами 
arg1, arg2 и т. д. Получается копия функции которую можно передать куда угодно и вызвать когда угодно.

function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = { service: 'Steam' };
const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."

const gmail = { service: 'Gmail' };
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."


Задание
Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов. 
Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её копии 
с привязанным контекстом к соответствующим объектам.
*/
const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');

console.log('09- pizzaPalaceComposer', pizzaPalaceComposer);
console.log('09- pizzaPalaceMessage', pizzaPalaceMessage);
console.log('09- burgerShackComposer', burgerShackComposer);
console.log('09- burgerShackMessage', burgerShackMessage);