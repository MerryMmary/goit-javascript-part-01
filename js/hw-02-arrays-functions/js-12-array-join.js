/*
Метод массива join()

join(delimeter) позволяет соединить элементы массива в строку. 


*/
function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
string = array.join(delimeter);


  // Change code above this line
  return string;
}

console.log('makeStringFromArray', makeStringFromArray([1 ,2 ,3 ,4,5], ' '));