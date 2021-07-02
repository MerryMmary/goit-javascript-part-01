/*
Неявный возврат
В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными 
скобками и без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить 
return. Это называется явный возврат (explicit return). Такой синтаксис используется в том случае, 
если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.

const add = (a, b, c) => a + b + c;
Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется 
неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров 
a, b и c.

Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым 
выражением, но подходит только в случае когда в теле функции не нужно выполнять никаких 
дополнительных инструкций кроме возврата значения.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;
Задание
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
*/

// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }; // explicit return

// implicit return
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

console.log('05- calculateTotalPrice(3, 400)', calculateTotalPrice(3, 400));


// Пиши код выше этой строки