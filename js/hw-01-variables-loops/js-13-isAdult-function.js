/*
Функция isAdult объявляет один параметр age (возраст), значение которого будет 
задаваться во время её вызова. Присвой переменной passed выражение проверки 
возраста пользователя на совершеннолетие. 
Человек считается совершеннолетним в возрасте 18 лет и старше.
*/

function isAdult(age) {
  // Change code below this line
  const passed = (age >= 18);

  // Change code above this line
  return passed;
}

console.log('isAdult?', 16);