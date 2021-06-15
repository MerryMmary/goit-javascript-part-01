/*
Задача. Коллекция значений свойства

Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
*/
const products = [
  { name: 'Radar', price: 1300, quantity: 4 }, //A0
  { name: 'Scanner', price: 2700, quantity: 3 }, //A1
  { name: 'Droid', price: 400, quantity: 7 }, //A2
  { name: 'Grip', price: 1200, quantity: 9 }, //A3
];




function getAllPropValues(propName) {
  // Change code below this line
    let valuesArr = [];
    
  for (let i = 0; i < products.length; i+=1) {
    const productsKeys = Object.keys(products[i]); // it's array
      //console.log(productsKeys.includes(propName));
      
    if (productsKeys.includes(propName)) {
        valuesArr.push(products[i][propName]); // і-тий елемент, обєкт в вл-стю propName
        //console.log(products[i][propName]);
    }
  }

    return valuesArr;

  // Change code above this line
}

console.log('19- ARRAY OF OBJECTS -- getAllPropValues("name")', getAllPropValues("name"));
console.log('19- ARRAY OF OBJECTS -- getAllPropValues("category")', getAllPropValues("category"));


