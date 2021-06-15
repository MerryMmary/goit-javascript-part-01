/*
Задача. Массив совпадений

Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет 
массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те 
аргументы, начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только
они есть в массиве первого аргумента.

*/
// Change code below this line
function findMatches(arr1, ...arg) {
  const matches = []; // Don't change this line

  // Change code above this line
    
    //console.log(arr1); // масив arr1
    //console.log(arg); // масив arg
    
    // if (arr1.length <= arg.length) {

        for (let i = 0; i < arg.length; i += 1) {
            if (arr1.includes(arg[i])) {
                matches.push(arg[i]);
            }
        }
   
    // } else {
    //     for (let i = 0; i < arr1.length; i += 1) {
    //         if (arg.includes(arr1[i])) {
    //             matches.push(arr1[i]);
    //         }
    //     }
    // }
    
  return matches;
}

console.log('33- findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)', findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log('33- findMatches([63, 11, 8, 29], 4, 7, 16)', findMatches([63, 11, 8, 29], 4, 7, 16));
console.log('33- findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)', findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
