/*
Задача. Фильтрация массива чисел
Задание
Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, 
в котором будут только те элементы оригинального массива, которые больше чем значение параметра 
value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*/
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки

    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] > value) {
    //     filteredNumbers.push(numbers[i]);
    //   }
    // }
    numbers.forEach((currentValue) => {
        //console.log(currentValue); //значення елементів масиву
        if (currentValue > value) {
            filteredNumbers.push(currentValue);
        }
    });
    
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
console.log('02- filterArray([12, 24, 8, 41, 76], 38)', filterArray([12, 24, 8, 41, 76], 38));