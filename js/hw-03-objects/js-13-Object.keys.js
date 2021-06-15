/*
Метод Object.keys()

У встроенного класса Object есть несколько полезных методов для работы с объектами. 
Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его 
собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.
Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства 
объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys
массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
*/

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
//console.log(keys);

for (const key of keys) {
    values.push(apartment[key]);
}
console.log("13- const apartment = { descr: 'Spacious apartment in the city center', rating: 4, price: 2153}  values", values);

