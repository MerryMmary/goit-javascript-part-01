/*
Изменение имени переменной

При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. 
Сначала пишем имя свойства из которого хотим получить значение, после чего ставим двоеточие и 
пишем имя переменной в которую необходимо поместить значение этого свойств

const firstBook = {
  title: "Последнее королевство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Последнее королевство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смешного человека",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480


Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией 
деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - 
строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
*/
const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
};
// Change code below this line

    const { yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, icon:highIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",} = highTemperatures;
    // const highYesterday = highTemperatures.yesterday;
    // const highToday = highTemperatures.today;
    // const highTomorrow = highTemperatures.tomorrow;
    // const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

console.log('23- highTemperatures', highTemperatures);
console.log('23- meanTemperature', meanTemperature);
