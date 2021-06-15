/*
Задача: доставка товара

Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя 
(параметр country) и возвращать сообщение о результате хранящееся в переменной message. 
Обязательно используй инструкцию switch.

Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> 
и <price> необходимо подставить соотвествующие значения.

Список стран и стоимость доставки:

China - 100 кредитов
Chile - 250 кредитов
Australia - 170 кредитов
Jamaica - 120 кредитов
Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть 
строку "Sorry, there is no delivery to your country"
*/
function getShippingCost(country) {
  let message;
  // Change code below this line
  let price;
  switch (country) {
    case 'China':
      price=100;
      message=`Shipping to ${country} will cost ${price} credits`;
      break;
      
     case 'Chile':
      price=250;
      message=`Shipping to ${country} will cost ${price} credits`;
      break;
      
     case 'Australia':
      price=170;
      message=`Shipping to ${country} will cost ${price} credits`;
      break;
      
     case 'Jamaica':
      price=120;
      message=`Shipping to ${country} will cost ${price} credits`; 
      break;
     
     default:
      message='Sorry, there is no delivery to your country';
      
  }
  // Change code above this line
  return message;
}

console.log('getShippingCost / Cost is', getShippingCost('Germany'));
console.log('getShippingCost / Cost is', getShippingCost('Australia'));