/*
Изменение значения свойства

После того, как объект создан, значение его свойств можно изменить. Для этого необходимо 
обратиться к ним по имени, например, «через точку», и присвоить новое значение.
*/
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.price =5000;
apartment.rating =4.7;
apartment.owner.name='Henry Sibola';
apartment.tags.push("trusted");

console.log('06- apartment', apartment);