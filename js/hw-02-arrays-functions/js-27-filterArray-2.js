/*
Зачада: фильтрация массива чисел 2.0

Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
*/

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

      for (let number of numbers) {

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

console.log('27- Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]', filterArray([1, 2, 3, 4, 5], 3));