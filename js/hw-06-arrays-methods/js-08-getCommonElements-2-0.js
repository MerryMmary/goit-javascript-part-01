/*
Задача. Общие элементы 2.0
Задание

Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Пиши код ниже этой строки
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
  
    firstArray.forEach(function (element) {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
  }
*/


// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
//function getCommonElements(firstArray, secondArray) {

    const commonElements = [];
  
    firstArray.forEach( element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
}
  
console.log('08- getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])', getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));