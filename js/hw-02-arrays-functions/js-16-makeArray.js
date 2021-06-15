/*
Задача: композиция массивов

Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива 
со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит 
максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию 
массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
*/
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    let newArray = firstArray.concat(secondArray);
    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    }
    return newArray;
}
// if (newArray.length>maxLength) {
//     for (let i = 0; i < maxLength; i += 1) {
//         let shorterArray = [];            shorterArray[i] = newArray[i];
//   }
//     return shorterArray;
// }

    // Change code above this line
 // }

console.log('16- makeArray(firstArray, secondArray, maxLength)', makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));