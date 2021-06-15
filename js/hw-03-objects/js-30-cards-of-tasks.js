/*
Задача. Карточки задач

Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. 
В новом объекте должно быть свойство completed, значение которого хранится в одноимённой 
локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и
 priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority 
 должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

*/
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
    const Task = { completed: false, category: 'General', priority: 'Normal',};
    //console.log(Task);

    const finalTask = { ...Task, ...data};
    return finalTask;
    
  // Change code above this line
}
console.log('30- makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })', makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }