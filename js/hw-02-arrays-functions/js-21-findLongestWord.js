/*
Задача: поиск самого длинного слова

Напиши функцию findLongestWord(string) которая принимает произвольную строку 
состоящую только из слов разделённых пробелом (параметр string) и возвращает 
самое длинное слово в этой строке.

*/

function findLongestWord(string) {
  // Change code below this line
    const wordsArray = string.split(' ');
    let maxWordLength = 1;
    let word;
    //console.log(wordsArray);

    for (let i = 0; i < wordsArray.length; i += 1) {
        
        if (wordsArray[i].length > maxWordLength) {
            maxWordLength = wordsArray[i].length;
            word = wordsArray[i];  
        }
        
    }

    return word;

  // Change code above this line
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));