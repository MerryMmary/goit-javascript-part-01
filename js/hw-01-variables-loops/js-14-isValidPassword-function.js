/*
Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей 
и возвращает результат проверки - буль true или false. 
Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. 
Введённый пароль передаётся в параметр password.

Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. 
Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.
*/

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = (password===SAVED_PASSWORD);

  // Change code above this line
  return isMatch;
}
console.log('isValidPassword?', isValidPassword('12354'));
console.log('isValidPassword?', isValidPassword('jqueryismyjam'));