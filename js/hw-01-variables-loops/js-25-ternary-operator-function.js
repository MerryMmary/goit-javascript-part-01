/*
Выполни рефакторинг решения задачи «Склад товаров», 
заменив инструкцию if...else тернарным оператором.

  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is placed, the manager will contact you";
  }

*/
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

    message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
  // Change code above this line
  return message;
}
console.log('checkStorage Ternary operator', checkStorage(300, 150));
console.log('checkStorage Ternary operator', checkStorage(10, 150));

    