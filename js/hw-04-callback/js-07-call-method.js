/*
Метод call
Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, при этом функция не 
является его методом. Для этого у функций есть методы call и apply.

foo.call(obj, arg1, arg2, ...)
Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст 
аргументы arg1, arg2 и т. д.


function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = { username: "Манго" };
const poly = { username: "Поли" };

greetGuest.call(mango, "Добро пожаловать");
// Добро пожаловать, Манго.

greetGuest.call(poly, "С приездом");
// С приездом, Поли.


Задание
Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим 
<блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position 
- позиция элемента в массиве (на единицу больше чем индекс).

Не объявляй дополнительные параметры функции composeMessage(position).
Используй call для вызова функции в контексте одного объекта-заказа.
Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она 
была вызывана.
Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов 
из массива orders с помощью цикла for.
*/
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];

for (let i = 0; i < orders.length; i+=1) {
    //console.log(orders[i]);
    //console.log(composeMessage.call(orders[i]));
    messages.push(composeMessage.call(orders[i], i+1));
}

console.log('07- ')
console.table(messages);


