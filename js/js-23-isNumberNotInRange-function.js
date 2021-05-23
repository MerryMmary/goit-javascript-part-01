/*
Логическое NOT

Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. 
То есть число должно быть меньше либо равно start и больше либо равно end. 
Результатом выражения проверки будет буль true или false.

Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, не вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.
*/

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

console.log('isNumberNotInRange? Logical NOT', isNumberNotInRange(10, 20, 15));
console.log('isNumberNotInRange? Logical NOT', isNumberNotInRange(10,20,30));