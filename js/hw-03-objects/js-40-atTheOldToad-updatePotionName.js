/*
Задача. Обновляем зелье

Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с 
oldName на newName, в массиве зелий в свойстве potions.
*/

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
      const changeNameIndex = this.potions.indexOf(oldName);
      return this.potions.splice(changeNameIndex,1,newName);
      
    // Change code above this line
  },
};

atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.log('40- atTheOldToad updatePotionName', atTheOldToad);