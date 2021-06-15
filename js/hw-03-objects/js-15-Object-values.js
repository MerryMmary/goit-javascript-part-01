/*
Метод Object.values()

Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод Object.values(obj) 
возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) 
вернёт пустой массив.

Запиши в п/еременную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех 
значений его свойств. Используй методы Object.keys() и Object.values().
*/

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log('15- Object.keys(apartment)', keys);
console.log('15- Object.values(apartment)', values);