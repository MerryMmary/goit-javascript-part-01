/*
Метод hasOwnProperty()

Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. 
Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет 
в объекте dog - это несобственное свойство из объекта animal.


*/
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
  }
  // Change code above this line
}


console.log('11- keys', keys);
console.log('11- values', values);