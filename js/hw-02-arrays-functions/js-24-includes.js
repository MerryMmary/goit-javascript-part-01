/*
Метод includes()

 includes(value) проверяет есть ли в массиве элемент со значением value 
 и возвращает true или false соответственно. 

 Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.
*/
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

console.log('24- checkFruit("mandarin")', checkFruit("mandarin"));