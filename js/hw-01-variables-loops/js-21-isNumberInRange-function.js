/*
Логическое И / &&

Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. 
Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка

Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток 
от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. 
Результатом выражения проверки будет буль true или false.
*/
function isNumberInRange(start, end, number) {
  const isInRange = (number>=start && number<=end); // Change this line

  return isInRange;
}

console.log('isNumberInRange ? Logical AND', isNumberInRange(20, 100, 80));
console.log('isNumberInRange ? Logical AND', isNumberInRange(20, 100, 5));
console.log('isNumberInRange ? Logical AND', isNumberInRange(20,100,100));