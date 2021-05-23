/*
Функция checkPassword(password) получает пароль в параметр password, проверяет его на 
совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение 
о результате сравнения, хранящееся в переменной message.

Если значение параметра password:

равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }
*/

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null: 
      message = 'Canceled by user!'
      break;
      
    case ADMIN_PASSWORD:   
      message = 'Welcome!'
      break;
    
    default:
      message = 'Access denied, wrong password!'
  }

  // Change code above this line
  return message;
}

console.log('checkPassword with SWITCH / default', checkPassword('Hello'));
console.log('checkPassword with SWITCH / default', checkPassword('jqueryismyjam'));