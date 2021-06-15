/*
Вычисляемые свойства

const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};

console.log(user.name); // "Генри Сибола"


Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, 
имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - 
строка "jqueryismyjam".
*/
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
    [emailInputName]: 'henry.carter@aptmail.com',
    [passwordInputName]:'jqueryismyjam',
  
  // Change code above this line
};

console.log('09-credentials', credentials);