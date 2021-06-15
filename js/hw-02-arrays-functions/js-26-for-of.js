/*
Цикл for...of

for (const variable of iterable) {
  // тело цикла
}
variable — переменная, которая будет хранить значение элемента на каждой итерации
iterable — коллекция, которая имеет перечислимые элементы, например массив


Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}

*/

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

      for (let pricePerItem of order) {
    total += pricePerItem;
    }
    
  // Change code above this line
  return total;
}

console.log('calculateTotalPrice([412, 371, 94, 63, 176])', calculateTotalPrice([412, 371, 94, 63, 176]));