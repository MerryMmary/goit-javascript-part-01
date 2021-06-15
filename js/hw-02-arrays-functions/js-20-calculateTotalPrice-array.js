/*
Задача: подсчёт суммы покупки

Напиши функцию calculateTotalPrice(order), которая принимает один параметр 
order - массив чисел, и рассчитывает общую сумму его элементов. 
Общая сумма элементов должна сохраняться в переменной total, 
которая возвращается, как результат работы функции.
*/
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
    for (let i = 0; i < order.length; i+=1) {
        total += order[i];
    }

  // Change code above this line
  return total;
}

console.log('20- calculateTotalPrice([12, 85, 37, 4]) is — ', calculateTotalPrice([12, 85, 37, 4]));