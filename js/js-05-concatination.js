/* Объяви перемнную message и запиши в неё сообщение о покупке, 
строку в формате: "You picked <имя товара>, price per item is 
<цена товара> credits". Где <имя товара> и <цена товара> 
это значения переменных productName и pricePerItem. 
Используй синтаксис шаблонных строк. */

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log('message is', message);