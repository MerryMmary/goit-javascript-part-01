/*
Логическое ИЛИ ||

Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить 
доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только 
пользователи с подпиской pro или vip.

Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра 
subType равно строкам "pro" или "vip", пользователь получит доступ. 
Результатом выражения проверки будет буль true или false.
*/

function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType==='pro' || subType==='vip'); // Change this line

  return canAccessContent;
}
console.log('checkIfCanAccessContent ? Logical OR', checkIfCanAccessContent('vip'));
console.log('checkIfCanAccessContent ? Logical OR', checkIfCanAccessContent('hello'));