/*
Функция checkPassword(password) получает пароль пользователя в параметр password, 
проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и 
возвращает сообщение о результате сравнения, хранящееся в переменной message.

Если значение параметра password равно null, 
значит пользователь отменил операцию и в message записывается строка "Canceled by user!".

Если значение параметра password совпадает со значением ADMIN_PASSWORD, 
в переменную message присваивается строка "Welcome!".

Если ни одно из предыдущих условий не выполнилось, в переменную message 
записывается строка "Access denied, wrong password!".
*/
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password===null) { // Change this line
    message =  'Canceled by user!';
  } else if (password===ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log('checkPassword is?', checkPassword(123456));
console.log('checkPassword is?', checkPassword('jqueryismyjam'));
console.log('checkPassword is?', checkPassword(null));