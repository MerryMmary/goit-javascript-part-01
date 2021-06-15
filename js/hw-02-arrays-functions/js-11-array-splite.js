/*
Метод строк split() — строку в массив
split(delimeter) delimeter– символ розбивки слів

Дополни код функции splitMessage(message, delimeter) так, 
чтобы она возвращала в переменной words результат разделения строки 
message по разделителю delimeter - массив строк.

*/
function splitMessage(message, delimeter) {
    let words;
    // Change code below this line
    words = [];
    words = message.split(delimeter);
    // Change code above this line
    console.log(typeof words);
  return words;
}

console.log('11- split words', splitMessage("Я ходжу в школу", " "));
console.log('11- split words', splitMessage("Mango hurries to the train", " "));

console.log('11- split words', "Я ходжу в школу".split(' '));