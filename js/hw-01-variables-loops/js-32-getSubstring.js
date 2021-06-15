/*
Метод slice()

Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до 
length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

string - оригинальная строка
length - количество символов с начала строки для подстроки
Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
*/

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
} 

console.log('getSubstring from entered srting', getSubstring('Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова.', 80));