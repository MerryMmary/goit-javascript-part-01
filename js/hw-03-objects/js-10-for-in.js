/*
Цикл for...in

В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя перебрать циклами 
for или for...of. Для перебора объектов используется специальный цикл for...in, который перебирает 
ключи объекта object.

Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, 
а в массив values все значения его свойств.
*/
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
    //console.log('01 - key', key);
    keys.push(key);
    //console.log('02 - value', apartment[key]);
    values.push(apartment[key]);
};
console.log('10- keys for in', keys);
console.log('10- values for in', values);