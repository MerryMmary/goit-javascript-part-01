/*
Метод every()

Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый 
коллбек-функцией. Возвращает true или false.

массив.every((element, index, array) => {
  // Тело коллбек-функции
});

Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает true если все элементы массива удовлетворяют условию.
Возвращает false если хотя бы один элемент массива не удовлетворяет условию.
Перебор массива прекращается если коллбек возвращает false.
// Все элементы больше либо равны нулю? - да
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
При работе с массивом объектов проверяется значение какого-то их свойства.


Задание
Используя метод every() дополни код так, чтобы:

В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray 
на чётность.
В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray 
на нечётность.
В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray 
на чётность.
В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray 
на нечётность.
В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray 
на чётность.
В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray 
на нечётность.
*/

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки
console.log('26- firstArray, secondArray, thirdArray', firstArray, secondArray, thirdArray);

const eachElementInFirstIsEven = firstArray.every( numValue => numValue%2 === 0);
const eachElementInFirstIsOdd = firstArray.every( numValue => numValue%2 !== 0);

const eachElementInSecondIsEven = secondArray.every( numValue => numValue%2 === 0);
const eachElementInSecondIsOdd = secondArray.every( numValue => numValue%2 !== 0);

const eachElementInThirdIsEven = thirdArray.every( numValue => numValue%2 === 0);
const eachElementInThirdIsOdd = thirdArray.every( numValue => numValue%2 !== 0);

console.log('26- eachElementInFirstIsEven', eachElementInFirstIsEven, 'eachElementInFirstIsOdd', eachElementInFirstIsOdd,
'eachElementInSecondIsEven', eachElementInSecondIsEven, 'eachElementInSecondIsOdd', eachElementInSecondIsOdd,
'eachElementInThirdIsEven', eachElementInThirdIsEven, 'eachElementInThirdIsOdd', eachElementInThirdIsOdd);