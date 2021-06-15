/*
Контекст вызова функции

Внутри функций есть зарезервированное ключевое слово this. Во время исполнения функции, в this 
записывается ссылка на объект, в контексте которого она была вызвана. Таким образом, в теле 
функции мы можем получить доступ к свойствам и методам этого объекта.

const bookShelf = {
  authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли']
bookShelf.addAuthor('Ли Танит');
console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли', 'Ли Танит']
Методы getAuthors и addAuthor это функции, которые вызываются в контексте объекта bookShelf. 
Во время их выполнения в this записывается ссылка на объект bookShelf и мы можем обратиться к 
его свойствам и методам.

Задание
Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения 
к свойствам и методам объекта.


*/
const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};

console.log("05- pizzaPalace.order('Аль Копчино') – ", pizzaPalace.order('Аль Копчино'));