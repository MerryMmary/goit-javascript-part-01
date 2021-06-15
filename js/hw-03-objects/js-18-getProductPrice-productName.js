/*
Задача. Поиск объекта по значению свойства

Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. 
Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). 
Если продукт с таким названием не найден, функция должна возвращать null.


*/
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
    // Change code below this line
    let nameIsFound = false;
    for (const product of products) {
        if (productName === product.name) {
            //console.log(product.price);
            return product.price;
            nameIsFound = true;
            break;
        }
    }

        if ( nameIsFound !== true) {
            //console.log(null);
            return null;
        }    
    
}
    
console.log('18- getProductPrice("Droid")', getProductPrice("Droid"));
console.log('18- getProductPrice("Scanner")', getProductPrice("Scanner"));
  
  // Change code above this line
