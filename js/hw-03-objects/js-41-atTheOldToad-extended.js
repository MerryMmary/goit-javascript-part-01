/*
Задача. Расширяем инвентарь

Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем 
может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив 
объектов со следующими свойствами.

{
  name: "Dragon breath",
  price: 700
}

Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, 
а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName 
на newName в массиве potions.
*/
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
    
    getPotions() {
        const arrpotions = [];
        for (const potion of this.potions) {
            arrpotions.push(potion);
        }
    return console.log('41- getPotions arrpotions', arrpotions);    
    },
    
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
    },
  
  removePotion(potionName) {
      //const potionIndex = this.potions.indexOf(potionName); // індекс знайденого ел-та (обєкта)
      let i = 0;

    for (let potion of this.potions) {
        if (potion.name === potionName) {
            this.potions.splice(i, 1);
        }
        i += 1;

        if (i === this.potions.length) {
            return `Potion ${potionName} is not in inventory!`;
        }
    }
    
      
    // if (potionIndex === -1) {
    //   return `Potion ${potionName} is not in inventory!`;
    // }

    //   this.potions.splice(potionIndex, 1);
      // console.log('removePotion this.potions', this.potions)
    },
  
    updatePotionName(oldName, newName) {
        //const potionIndex = this.potions.indexOf(oldName);
        let i = 0;

        for (let potion of this.potions) {
            if (potion.name === oldName) {
                this.potions.splice(i, 1, {name:newName, price:potion.price,});
            }
            i += 1;

            if (i === this.potions.length) {
                return `Potion ${oldName} is not in inventory!`;
            }
        }
    },

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
  // Change code above this line
};

atTheOldToad.getPotions();

atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.log('41- atTheOldToad addPotion', atTheOldToad.potions);

atTheOldToad.removePotion("Dragon breath");
console.log('41- atTheOldToad removePotion "Dragon breath"', atTheOldToad.potions);

atTheOldToad.removePotion("Speed potion");
console.log('41- atTheOldToad removePotion "Speed potion"', atTheOldToad.potions);

atTheOldToad.updatePotionName("Stone skin", "Polymorth");
console.log('41- atTheOldToad updatePotionName "Stone skin", "Polymorth"', atTheOldToad.potions);