/*
Задача: заказ продукта 2.0

Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) 
составляет и возвращает сообщение о покупке ремонтных дроидов. 
Она объявляет три параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество дроидов в заказе
pricePerDroid - цена одного дроида
deliveryFee - стоимость доставки
Дополни код функции так, чтобы она возвращала сообщение о заказе в формате 
"You ordered droids worth <total price> credits. Delivery (<delivery fee> 
    credits) is included in total price.". 
    Не забудь о цене доставки при вычислениях общей стоимости.
*/

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  
  let totalPrice = orderedQuantity*pricePerDroid+deliveryFee;
  
let message=`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


  // Change code above this line
  return message;
}

console.log('makeOrderMessage is', makeOrderMessage(3,3.89,2));