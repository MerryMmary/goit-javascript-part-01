/*
Методы toLowerCase() и toUpperCase()

Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, 
но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в 
нижнем регистре из параметра input.
*/

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}
console.log('normalizeInput toLowerCase', normalizeInput('Hello Mariia'));