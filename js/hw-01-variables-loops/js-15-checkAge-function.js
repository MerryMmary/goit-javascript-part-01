/*
Добавь выражение проверки совершеннолетия пользователя, 
значения параметра age, в условие для инструкции if.

Если пользователь совершеннолетний, должен выполняться блок if и в переменную 
message записывается строка "You are an adult".
В противном случае должен выполняться блок else и записывается строка "You are a minor".
*/

function checkAge(age) {
  let message;

  if (age>=18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}
console.log('checkAge(age) is adult (if else operator)?', checkAge(17));
console.log('checkAge(age) is adult (if else operator)?', checkAge(36));