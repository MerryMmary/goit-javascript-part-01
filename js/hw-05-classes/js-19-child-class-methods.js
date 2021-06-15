/*
Методы дочернего класса

В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.

// Представим что выше есть объявление класса User

class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'
writer.addPost('post-1');
console.log(writer.posts); // ['post-1']


Задание

Добавь классу Admin следующие свойства и методы.

Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. 
Значение по умолчанию это пустой массив.
Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять 
значение параметра email в массив хранящийся в свойстве blacklistedEmails.
Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять 
наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать 
true или false.
После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той 
последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

*/
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

    accessLevel;
    blacklistedEmails;

  constructor({ email, accessLevel, blacklistedEmails}) {
    super(email);
      this.accessLevel = accessLevel;
      this.blacklistedEmails = [];
    }

  blacklist(email) {
    this.blacklistedEmails.push(email);
    }
    
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
   }  
    


  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log('19- mango.email', mango.email); // mango@mail.com
console.log('19- mango.accessLevel', mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log('19- mango.blacklistedEmails ', mango.blacklistedEmails); // 'poly@mail.com'
console.log('19- mango.isBlacklisted("mango@mail.com")', mango.isBlacklisted('mango@mail.com')); //  false
console.log('19- mango.isBlacklisted("poly@mail.com")', mango.isBlacklisted('poly@mail.com')); // true 