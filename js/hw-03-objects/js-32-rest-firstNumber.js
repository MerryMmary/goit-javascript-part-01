/*
Операция rest для сбора части аргументов функции


Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, 
объявив параметры до «сбора».

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
Все аргументы, для которых будут объявлены параметры, передадут им свои значения, остальные 
аргументы будут помещены в массив. Операция rest собирает все оставшиеся аргументы и поэтому 
должна идти последней в подписи функции, иначе будет ошибка.

Задание
Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum()
 так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число 
 должно быть первым параметром функции.
*/

// Change code below this line
function addOverNum(firstNumber, ...args) {
    let total = 0;
    //console.log(firstNumber); // виведе 1ий агрумент
    //console.log(secondNumber); // виведе 2ий агрумент 
    for (const arg of args) {
        if (arg>firstNumber)  {
        total += arg;
        }
  }

  return total;
  // Change code above this line
}

console.log('32- addOverNum(firstNumber, ...args)', addOverNum(10, 12, 4, 11, 48, 10, 8)); 
