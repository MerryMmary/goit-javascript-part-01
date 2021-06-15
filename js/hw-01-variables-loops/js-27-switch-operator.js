/*
Инструкция switch

Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя 
(параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной 
подписки и возвращает цену хранящуюся в переменной price.

Если значение параметра type это строка:

"starter" - цена подписки 0 кредитов.
"professional" - цена подписки 20 кредитов.
"organization" - цена подписки 50 кредитов.
Изначально в теле функции была инструкция if...else, которая выглядела вот так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}

После рефакторинга инструкция if..else была заменена на switch. 
Дополни код инструкции switch, чтобы функция работала правильно.

*/

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case 'starter': // Change this line
      price = 0; // Change this line
      break;

    case 'professional': // Change this line
      price = 20; // Change this line
      break;

    case 'organization': // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
console.log('getSubscriptionPrice / The price is', getSubscriptionPrice('professional')+' credits');