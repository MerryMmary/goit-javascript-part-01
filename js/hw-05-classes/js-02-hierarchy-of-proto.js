/*
Задача. Цепочка прототипов

Задание
Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, 
а тот в свою очередь был прототипом для child.
*/
const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Пиши код выше этой строки

console.log('02- child', child);
console.log('02- child is _proto_ of parent?', parent.isPrototypeOf(child));


console.log('02- parent', parent);
console.log('02- child is _proto_ of parent?', ancestor.isPrototypeOf(parent));