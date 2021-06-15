/*
Задача: генератор slug

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире
*/
function slugify(title) {
  // Change code below this line
    let arrayFromTitle = title.toLowerCase(' ').split(" ");
    //arrayFromTitle=arrayFromTitle.split(" ");
    return arrayFromTitle.join('-');

  // Change code above this line
}

console.log("slugify('Hello everybody lets go')", slugify('Hello everybody lets go'));