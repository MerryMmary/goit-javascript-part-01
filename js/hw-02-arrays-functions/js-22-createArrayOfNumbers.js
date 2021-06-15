/*
Метод push()
push() позволяет добавить один или несколько элементов 
в конец массива, без необходимости указывать индексы добавляемых элементов.

Дополни код функции createArrayOfNumbers(min, max) так, 
чтобы она возвращала массив всех целых чисел от значения min до max.
*/

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
    for (let i = min; i <= max; i+=1) {
        numbers.push(i);
}
  // Change code above this line
  return numbers;
}

console.log('22- createArrayOfNumbers(14, 17)', createArrayOfNumbers(14, 17));
