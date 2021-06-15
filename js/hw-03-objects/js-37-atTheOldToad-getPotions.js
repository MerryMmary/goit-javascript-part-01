/*
Задача. Получаем все зелья

Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства 
potions.

*/
const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  // Change code above this line
  getPotions() {
    return this.potions;
  }  
};

console.log('37- atTheOldToad getPotions()', atTheOldToad);
