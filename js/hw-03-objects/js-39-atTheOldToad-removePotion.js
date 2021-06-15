/*
Задача. Удаляем зелье
Задание
Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий 
в свойстве potions.
*/
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
      const deleteName = this.potions.indexOf(potionName);
      return this.potions.splice(deleteName,1);
    // Change code above this line
  },
};

console.log('39- atTheOldToad removePotion', atTheOldToad);