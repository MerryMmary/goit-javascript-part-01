  /*
Задача: форматирование сообщения

Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, 
если длина превышает значение в параметре maxLength.

Дополни код функции так, что если длина строки:

не превышает maxLength, функция возвращает её в исходном виде.
больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие 
"...", после чего возвращает укороченную версию.
  */

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  /*  if (message.length > maxLength) {
        result = message.slice(0, maxLength);
    } else {
        result = message;
    }
    */
  result=message.length>maxLength ? message.slice(0, maxLength) + '...' : message;
  
  /// Change code above this line
  return result;
}

console.log('formatMessage, 100', formatMessage('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.', 100));
console.log('formatMessage, 16', formatMessage('Curabitur ligula sapien', 16));
console.log('formatMessage, 23', formatMessage('Curabitur ligula sapien', 23));

// let str = 'Curabitur ligula sapien';
// console.log(str.length);
// console.log(str.slice(0, str.length));
// console.log(str.length>=23);
