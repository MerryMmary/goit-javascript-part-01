/*
Задача. Подсчёт свойств 2.0

Выполни рефакторинг функции countProps(object) используя метод Object.keys() 
и, возможно, цикл for...of.
*/

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  const keys = Object.keys(object);

  for (const key of keys) {
      propCount += 1;
  }

  return propCount;
  // Change code above this line
}

console.log('14- countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })', countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));