/*
Задача. Общая стоимость товара

Напиши функцию calculateTotalPrice(productName) которая принимает один параметр 
productName - название товара. Функция должна вернуть общую стоимость (цена * количество) 
товара с таким именем из массива products.

*/
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
    let TotalPrice = 0;
    
    for (const product of products) {
        // console.log(product.name === productName);

        if (product.name === productName) {
            TotalPrice = product.price * product.quantity;
        }
    }

    return TotalPrice;

  // Пиши код выше этой строки
}

console.log('20- calculateTotalPrice("Grip")', calculateTotalPrice("Grip"));
console.log('20- calculateTotalPrice("Bravo")', calculateTotalPrice("Bravo"));