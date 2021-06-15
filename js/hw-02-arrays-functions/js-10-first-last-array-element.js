/*
Крайние элементы массива

Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
 Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
*/
function getExtremeElements(array) {
  // Change code below this line
  const newArray=[array[0], array[array.length-1]];
  
 return newArray;

  // Change code above this line
}

console.log('10- getExtremeElements newArray from [1,2,3,4,5]', getExtremeElements([1,2,3,4,5]));