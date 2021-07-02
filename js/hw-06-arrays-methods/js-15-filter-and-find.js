/*
Методы filter и find

Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда 
необходимо выбрать более одного элемента из коллекции по какому-то критерию.

массив.filter((element, index, array) => {
  // Тело коллбек-функции
});

* Не изменяет оригинальный массив.
* Поэлементно перебирает оригинальный массив.
* Возвращает новый массив.
* Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
* Если коллбек вернул true элемент добавляется в возвращаемый массив.
* Если коллбек вернул false элемент не добавляется в возвращаемый массив.
* Если ни один элемент не удовлетворил условию, возвращает пустой массив.

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригинальный массив не изменился
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и если 
результат её выполнения true, текущий элемент добавляет в новый массив.

Задание

Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, 
а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
*/
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => {
    if ( number%2 ===0) {
        return number;
    }
});
console.log('15- evenNumbers', evenNumbers);

const oddNumbers = numbers.filter(number => {
    if ( number%2 === 1) {
        return number;
    }
});;


console.log('15- oddNumbers', oddNumbers);