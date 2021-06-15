/*
Задача: гравировка украшений

Сервису гравировки украшений нужна функция, которая бы автоматически считала 
цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция 
принимает строку, состоящую из слов разделённых только пробелами (параметр message) 
и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
*/

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
    let totalPrice = message.split(' ').length * pricePerWord;
    return totalPrice;

   // Change code above this line
}

console.log('12- calculateEngravingPrice(message, pricePerWord)', calculateEngravingPrice("JavaScript is in my blood", 10));