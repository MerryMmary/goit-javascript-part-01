/*

Задача. Расходы на зарплату

Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя 
сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников 
и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

*/
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
    const salary = Object.values(salaries);
    //console.log('16--', salary);

    for (const everySalary of salary) {
        totalSalary += everySalary;
    }

  // Change code above this line
  return totalSalary;
}

console.log('countTotalSalary({ mango: 100, poly: 150, alfred: 80 })', countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))