/*
Задача. Добавляем новое зелье

Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий 
в свойстве potions.

*/
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    // Change code above this line
    },
};

console.log('38- atTheOldToad addPotion', atTheOldToad);