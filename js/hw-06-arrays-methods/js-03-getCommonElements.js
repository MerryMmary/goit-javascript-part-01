/*
Задача. Общие элементы

Задание
Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в 
параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех 
которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*/
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    firstArray.forEach(value => {
        console.log(value);
        if (secondArray.includes(value)) {
           commonElements.push(value);
        }
    });

    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }
  
    return commonElements;
    // Пиши код выше этой строки
  }
  
console.log('03- getCommonElements([1, 2, 3], [2, 1, 17, 19])', getCommonElements([1, 2, 3], [2, 1, 17, 19]));