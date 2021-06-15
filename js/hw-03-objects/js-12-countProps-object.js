/*
Задача. Подсчёт свойств

Задание
Напиши функцию countProps(object), которая считает и возвращает количество собственных 
свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
*/

function countProps(object) {
  let propCount = 0;
  // Change code below this line
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            propCount+=1;
            
        }
    }
    
    
  // Change code above this line
  return propCount;
}

console.log('12- countProps({ name: "Mango", age: 2 })', countProps({ name: "Mango", age: 2 }));