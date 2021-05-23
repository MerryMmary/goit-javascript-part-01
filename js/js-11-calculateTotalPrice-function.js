/*
Задача: математические операторы 2.0

Функция calculateTotalPrice считает и возвращает общую сумму покупки. 
Она принимает два параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество единиц товара в заказе;
pricePerItem - цена одной единицы товара.
Дополни код функции так, чтобы в переменную totalPrice записывалась общая 
сумма покупки, результат умножения кол-ва товаров на цену одного.
*/

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity*pricePerItem;

  // Change code above this line
  return totalPrice;
};

console.log('calculateTotalPrice is', calculateTotalPrice(10,9.99));