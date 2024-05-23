// =========================================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Репета модуль-3 занятие 1 Обьекты
// =========================================================================================
/** Теория Обьекты Репета
|============================
// Что такое обьект.
const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

console.log(playlist);
// _______________________________________________________
// Литерал объекта. как его отличить от других сущьностей.

const x = {};                   // 1) Присваиваем литерал обьекта в переменную.

const fn = function (myObject) {
  console.log(myObject);
};

fn({ a: 1, b: 2 });             // 2) Передаем аргумент в функцию. Это тоже литерал объекта.

const rtfm = function () {
  return { a: 5 };              // 3) Возврат из функции. Тщ же литарал обьекта.
};

console.log(rtfm());

|============================
*/
// _______________________________________________________
/** Вазов объекта и Доступ к свойствам объекта.
|============================
// Вазов объекта

const fn = function (myObject) {
  console.log(myObject);
};

fn({ a: 1, b: 2 });                // Вызов обьекта.

// Доступ к свойствам объекта.
// ---------------------------
// Обращение к свойству. 2-ва варианта (через точку и через ключ).

// 1й вариант через точку. // console.log(playlist.rating); // 5
// 2й вариант через ключь, ключ передаем как строку. // console.log(playlist['rating']); // 5

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

console.log(playlist);               // {name: 'Мой супер плейлист', rating: 5, tracks: Array(3), trackCount: 3}
console.log(playlist.rating);        // 5  // (1й вариант)
console.log(playlist['rating']);     // 5  // (2й вариант)

console.log(playlist.name);                // Мой супер плейлист
console.log(playlist['name']);             // Мой супер плейлист

console.log(playlist.trackCount);         // 3
console.log(playlist['trackCount']);      // 3

console.log(playlist.tracks);             // ['трек-1', 'трек-2', 'трек-3']
console.log(playlist['tracks']);          // ['трек-1', 'трек-2', 'трек-3']

// ---------------
// Случаи когда имя свойства хранится в переменной.
const propertyName = 'tracks';

console.log(playlist.propertyName); // undefined // Такое свойство не найдено.
console.log(playlist[propertyName]); // ['трек-1', 'трек-2', 'трек-3']
console.log(playlist['tracks']); // ['трек-1', 'трек-2', 'трек-3']
|============================
*/
// _______________________________________________________
/** Бывают случаи когда нам нужно создать объект в котором ключ динамический.
|============================

//  * Короткая запись свойств (сокращение)

const username = 'Mango';
const email = 'mango@mail.com';

// ------- Вариант обычное.

const signupData = {
  username: username,
  email: email,
};

// ------- Вариант сокращение.

// Если имя свойства должно называться также как имя переменной в которой лежит это значение, то можно сократить.Пример ниже.

const signupData = {
  username,
  email,
};

console.log(signupData);
|============================
*/
// _______________________________________________________
/** Вычисляемые свойства
|============================
//  * Вычисляемые свойства

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

// Запись в квадратных скобках [inputName] буквально говорит: иди найди переменную с таким именем и её значение используй как клуч.
const colorPickerData = {
  //   inputName: inputValue, // {inputName: 'tomato'}
  [inputName]: inputValue, // {color: 'tomato'}
};

console.log(colorPickerData);
|============================
*/
// _______________________________________________________
/** Добавление елементов в объект. Переопределение уже существующего свойства в объекте
|============================

// Добавление елементов в объект. 
// Переопределение уже существующего свойства в объекте

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

playlist.qwe = 5;       // Добавление свойства в объект.
playlist.rating = 10;   // Если свойство уже есть, то оно переопредилиться.

console.log(playlist);
|============================
*/
// _______________________________________________________
/** Ссылочный тип {} === {}
|============================
//  * Ссылочный тип {} === {}

// console.log({ a: 1 } === { a: 1 }); // Это условие всегда будет возвращать 'false', так как JavaScript сравнивает объекты по ссылке, а не по значению.

// console.log([] === []); // Это условие всегда будет возвращать 'false', так как JavaScript сравнивает объекты по ссылке, а не по значению.

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a); // true

a.hello = 100;
b.hello = 150;

console.log(a); // {x: 1, y: 2, hello: 150}
console.log(b); // {x: 1, y: 2, hello: 150}
|============================
*/
// _______________________________________________________
/** Массивы и функции это объекты
|============================
// * Массивы и функции это объекты

const a = [1, 2, 3];

a.hello = ':)';

console.log(a);                   // [1, 2, 3, hello: ':)']

const fn = function () {
  console.log('hello');
};

fn.hello = ';)';

console.dir(fn.hello);           // ;)
|============================
*/
// _______________________________________________________
/** Методы объекта и this при обращении к свойствам в методах
|============================
// * Методы объекта и this при обращении к свойствам в методах
//  *
//  * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
//  * - changeName
//  * - addTrack
//  * - updateRating
//  * - getTrackCount
// _______________________________________________________
// Функция внутри объекта-называется метод объекта.

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],

  getName(a) {                                 // Это современный вариант синтаксиса.
    console.log('Ага это getName :)', a);
  },

  getName: function () {                      // Это OldShool вариант синтаксиса.
    console.log('Ага это getName :)');
  },

};

playlist.getName(5);                         // Ага это getName :) 5 Это вызов метода объекта.

|============================
*/
// _______________________________________________________
/** Добавление, изменение, переименование эелементов в объекте.
|============================
// Добавление, изменение, переименование эелементов в объекте.

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  changeName(newName) {
    // console.log('this внутри changeName: ', this);
    this.name = newName;          // Меняем имя в объекте.('Мой супер плейлист' на 'Новое имя')
  },
  addTrack(track) {
    this.tracks.push(track);               // Добовляем новый трек.
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist.changeName('Новое имя');          // Меняем имя в объекте.

playlist.addTrack('новый трек 1');         // Добавляем новый трек.
playlist.addTrack('новый трек 2');

playlist.updateRating(4);                  // Добавляем новый рейтинг.

console.log(playlist.getTrackCount());

console.log(playlist);
|============================
*/
// _______________________________________________________
/** Перебор объекта.
|============================
// Перебор объекта.
// * Перебор через for...in и Object.keys|values|entries
// -------------------------------------------

// Перебор Object.keys Возвращает масив ключей.

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

const keys = Object.keys(feedback);                 // Получи масив ключей из объекта feedback

console.log(keys);                       // ['good', 'neutral', 'bad'] Возвращает масив ключей.

for (const key of keys) {
  console.log(key);                            // Получаем доступ к перебору ключей объекта.
  console.log(feedback[key]);                  // Получаем доступ к значениям свойств: 5  10  3

  totalFeedback += feedback[key];
}

console.log('totalFeedback: ', totalFeedback);      // totalFeedback:  18

// -------------------------------------------

// Перебор значений Object.values  Возвращает масив значений.

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

const values = Object.values(feedback);

console.log(values);                               // [5, 10, 3] // Возвращает масив значений.

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);     // totalFeedback:  18
|============================
*/
// _______________________________________________________
/** Работа с коллекцией (массивом объектов)
|============================
// * Работа с коллекцией (массивом объектов)

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);

for (const friend of friends) {
  console.log(friend);               // Перебор объектов, в масиве.
  
  console.log(friend.name);          // Перебор свойств обьектов, в масиве.

  console.log(friend.online);

  friend.newprop = 555;             // Добавляем новое свойство newprop с значением 555.
}
console.table(friends);
|============================
*/
// _______________________________________________________
/** Работем с коллекцией товаров в корзине:
|============================
// * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// // console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// // console.table(cart.getItems());

// cart.remove('🍎');
// // console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());

// // cart.increaseQuantity('🍎');
// // console.table(cart.getItems());

// // cart.decreaseQuantity('🍋');
// // cart.decreaseQuantity('🍋');
// // console.table(cart.getItems());

// // console.log('Total: ', cart.countTotalPrice());
|============================
*/
// _______________________________________________________
// =======================================================
// Решаем задачи Репета
// --------------------
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];
// ___________________________________________
/** Задача-1  * Ищем друга по имени
|============================
const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) {
      return 'НАШЛИ!!!';
    }
  }

  return 'НЕ НАШЛИ :(';
};
// --------------------------
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));
|============================
*/
// ------------
// ___________________________________________
/** Задача-2  * Получаем имена всех друзей
|============================
const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    // console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends));
|============================
*/
//
// ___________________________________________
/** Задача-3  * Получаем имена только друзей которые онлайн
|============================
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));
|============================
*/
//
// ___________________________________________
/** Задача-4  * Получаем имена только друзей которые офлайн
|============================
const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

console.log(getOfflineFriends(friends));
|============================
*/
//
// ___________________________________________
/** Задача-5 * создать 2 массива онлайн и офлайн?
|============================
// * создать 2 массива онлайн и офлайн?
// * если тру - в первый, если нет - во второй
// -------------------------------------------
const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
|============================
*/
//
// ___________________________________________
/** Задача-6 Как узнать сколько свойств в єтом обьекте?
|============================
const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100,
};
console.log(Object.keys(x).length); // 4
|============================
*/
//
// =========================================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Артем модуль-3 занятие 1 Обьекты
// ==================================
/** Теория Объекты Артем 
|============================
// Объект и доступ к свойствам(ключам) и значениям свойств объекта.
// _______________________________________________________
// Обращение к свойству(ключу) объекта.
// -------------------------------------------------------
// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//     'React Native': false,
//   },
// };

// console.log(user.languages.React_Native);
// console.log(user['languages']['React Native']);

// for (const key in user) {
//   console.log(user.key);                 // undefined (нет такого ключа)
//   console.log(key);       // name  age  languages  Получаем набор ключей на верхнем уровне.
//   console.log(user[key]);               // Получаем доступ к свойству и значению свойства.
// }
// _______________________________________________________
// Изменение значения свойства в объекте, добавление нового свойства, удаление свойства.
// -------------------------------------------------------
const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    'React Native': false,
  },
};

console.log(user); // {name: 'Artem', age: 28, languages: {…}}

// Переопределение
user.age = 29; // Переопределение в объекте значение 28 на 29 в свойстве age
console.log(user.age); // 29

user.age += 1; // Переопределение в объекте значение свойства age, добавляем еденицу.
console.log(user.age); // 30

// Добавление
user.sity = 'VN'; // Добавления нового свойства в объект.
console.log(user); // {name: 'Artem', age: 30, languages: {…}, sity: 'VN'}

// Удаление
delete user.sity; // Удаление свойство(ключ) из объекта.
console.log(user); // {name: 'Artem', age: 30, languages: {…}}

// _______________________________________________________
// Когда ключ это результат сложения значений переменных.
// -------------------------------------------------------
const test = 3;
const test2 = 45;
const value = 'start'
const value2 = 'End'

const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    'React Native': false,
  },
  // [value + value2] : 'some value',              // Так не делать лучше это не нормально.
  result: test + test2,                            // Так можно делать - это нормально.
};
console.log(user.result);   // 48 

// _______________________________________________________
// Заморозка объекта. (Запрет изменения объекта.) Новый метод.
// -------------------------------------------------------
const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    'React Native': false,
  },
};

Object.freeze(user); // Заморозка объекта, чтоб его не могли изменить. Разморозить невозможно.
user.asdfwesgfasdfasz = 'dasdgvsdfdafsed';
user.age = 100;
console.log(user);
// _______________________________________________________
// Переборы объектов.
// -------------------------------------------------------
// Что такое собственное и унаследованное свойство. И что такое собственный объект.

// * Собственный объект - Это когда объект мы прописали сами или откуда-то его получили.
// * Унаследованный объект - Это когда (на основе собственного обьекта пример: user) создается другой объект.

const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    'React Native': false,
  },
};

const user2 = Object.create(user); // Создаем новый объект на основе объекта user
console.log(user2); // {} Пустой обьект но с прототипом объекта user // [[Prototype]]: Object

user2.age = 33;
console.log(user2);

// Делаем проверку собственный ключ в объекте или унаследованный.

for (const key in user2) {
  // для проверки собственный ключ или унаследованный используем метод .hasOwnProperty(key)
  if (user2.hasOwnProperty(key)) {
    console.log('Own', user2[key]);
  } else {
    console.log('All', user2[key]);
  }
}
console.log('All', user2[key]);

// -------------------------------------------------------
// Просто узнаем есть ли вообще ключ в объекте или нет.

const user = {
  score: false,
};

// Вариант-1 (только собственный ключ покажет)
if (user.hasOwnProperty('score')) {
  console.log('yes');
} else {
  console.log('no');
}

// Вариант-2 (любой собственный или унаследованный ключ покажет)
if ('score' in user) {
  console.log('yes');
} else {
  console.log('no');
}
// _______________________________________________________
// this
// ------------

const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    ReactNative: false,
  },
  sayHello() {
    console.log(`My name ${this.name}`);
    // Если вызовет user то вернется My name Artem
    // Если вызовет user2 то вернется  My name Den
  },

};

const user2 = Object.create(user);           // Создаем унаследованный объект.
user2.name = 'Den';            // Создаем ключ name с значением 'Den' в унаследованном объекте.

console.log(user2);                          // {name: 'Den'}
console.log(user);          // {name: 'Artem', age: 28, languages: {…}, sayHello: ƒ, iKnow: ƒ}

user2.sayHello();
user.sayHello();

// _______________________________________________________
// Перебор обїектов.
// =================
// Методы объекта.
// -------------------------------------------------------
// Вариан 1 Перебор методом Object.keys() Всегда возвращает 100% собственные свойства(ключи).

const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    ReactNative: false,
  },
  sayHello() {
    console.log(`My name ${this.name}`);
  },
  iKnow() {
    // const keys = Object.keys(this);
    // console.log(keys);                // ['name', 'age', 'languages', 'sayHello', 'iKnow'];

    const keys = Object.keys(this.languages);          // Получаем весь масив ключей
    // console.log(keys);                // ['html', 'css', 'js', 'ReactNative'] Масив ключей.
    
    for (const key of keys) {                          // Перебираем масив ключей
      // console.log(this.languages[key]);   // Получаем все значение ключей объекта languages
      if (this.languages[key]) {
        // Ставим условие, если ключ true, то выполни тело if
        console.log(key);                   // js (Получили ключ который true)
      }
    }
};
user.iKnow(); 
// -------------------------------------------------------
// Вариан 2 Перебор через for in

const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    ReactNative: false,
  },
  sayHello() {
    console.log(`My name ${this.name}`);
  },
  iKnow() {
    for (const key in this.languages) {
      if (this.languages[key]) {
        console.log(key);                        // js
      }
    }
  },
};
user.iKnow(); 
// _______________________________________________________
// Метод Object.values() возвращает значения ключей.

const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    ReactNative: false,
  },
  sayHello() {
    console.log(`My name ${this.name}`);
  },
  iKnow() {
    const values = Object.values(this.languages);
    console.log(values);                                     // [false, false, true, false]
  },
};
user.iKnow();
// _______________________________________________________
// Метод Object.entries() возвращает [[свойство, значения] [свойство, значения]] масив масивов.

const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    ReactNative: false,
  },
  sayHello() {
    console.log(`My name ${this.name}`);
  },
  iKnow() {
    const entries = Object.entries(this.languages);
    console.log(entries); // [Array(2), Array(2), Array(2), Array(2)]
  },
};
user.iKnow();

|============================
*/
// =========================================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Олег модуль-3 занятие 1 Обьекты
// ==================================
/** Теория Объекты Олег
|============================
// Доступ до свойства (ключа) объекта.
const user = {
  email: 'some.email@gmail.com',
  password: '***',
  name: 'Sergiy',
  book: {
    name: 'H P',
  },
};

console.log(user.book.name); // H P
console.log(user.book); // {name: 'H P'}
console.log(user); //{email: 'some.email@gmail.com', password: '***', name: 'Sergiy', book: {…}}
// ___________________________________________
// Эти записи одинакоый результат дают (user.password;) (user['password'];)

user.password;
user['password'];

// В эту запись (user['password'];) можно вставить переменную. Пример ниже.
let field = 'password';

user[field];
// ___________________________________________
// Методы обьекта Object.keys(), Object.values(), Object.entries()

// * Object.keys() - Перебор свойств(ключей) объекта.
// * Object.values() - Перебор значений объекта.
// * Object.entries() - Масив в масиве.

const user1 = {
  email: 'some.email@gmail.com',
  password: '*****',
  name: 'Sergiy',
};

console.log(Object.keys(user1)); // ['email', 'password', 'name']
console.log(Object.values(user1)); // ['some.email@gmail.com', '*****', 'Sergiy']
console.log(Object.entries(user1)); // [Array(2), Array(2), Array(2)]
// ___________________________________________
// Функции в объекте и вызов их.
const user = {
  email: 'some.email@gmail.com',
  password: '*****',
  name: 'Sergiy',
  book: {
    name: 'H P',
  },

  getName() {
    return 'SOME NAME';
  },
};
user.getName();                    // Вызов функции
console.log(user.getName());       // SOME NAME
// ___________________________________________
// Масив объектов
const users = [
  {
    email: 'some.email@gmail.com',
    password: '*****',
  },
  {
    email: 'some2.email@gmail.com',
    password: '***awdwd**',
  },
  {
    email: 'some3.email@gmail.com',
    password: '**awdwd***',
  },
];
|============================
*/
// =========================================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// РЕШАЕМ ЗАДАЧИ Олег и Артем
// _______________________________________________________
// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
// * додає поле mood зі значенням 'happy'
// * замінює значення hobby на 'skydiving'
// * замінює значення premium на false
// * виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// -------------
/** Решение: Артем
|============================
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
// ----------------------
// * додає поле mood зі значенням 'happy'
user.mood = 'happy';
// ----------------------
// * замінює значення hobby на 'skydiving'
user.hobby = 'skydiving';
// ----------------------
// * замінює значення premium на false

// Вариант-1  замінює значення premium на false
user['premium'] = false;

// Вариант-2  замінює значення premium на false
const key = 'premium';
user[key] = false;

console.log(user);
// ----------------------
// * виводить вміст об'єкта user у форматі ключ:значення використовуючи

// Вариант-1 for of

const keys = Object.keys(user);
for (const key of keys) {
  console.log(user[key]);
}

// Вариант-2 for in

for (const key in user) {
  console.log(user[key]);
}
// ----------------------
// * Добавляем новый объект в объект user.

user.skils = {
  run: true,
};

console.log(user);

|============================
*/
// -------------
/** Решение: Олег
|============================
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
|============================
*/
// _______________________________________________________
// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390.
// Якщо об'єкт salaries порожній, то результат має бути 0.
// --------------
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// -------------
/** Решение: Артем, Олег, Репета
|============================
// Вариант-1 for in (Артем)

let sum = 0;
for (const key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// Вариант-2 for of (Репета) (Олег)

let total = 0;
for (const salar of Object.values(salaries)) {
  total += salar;
}
console.log(total);

// Вариант-3 for of (Артем)

let result = 0;
const values = Object.values(salaries);
for (const value of values) {
  result += value;
}
console.log(result);

|============================
*/
// _______________________________________________________
// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName),
// яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
// -------------
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Смарагд', price: 1000, quantity: 2 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Сапфір', price: 100, quantity: 15 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
// -------------
/** Решение: Артем 
|============================
const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Смарагд', price: 1000, quantity: 2 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Сапфір', price: 100, quantity: 15 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

// Вариант-1 Ранний возврат.

function calcTotalPrice(stones, stoneName) {
  let result = 0;
  Вариант - 1;
  for (const stone of stones) {
    if (stone.name === stoneName) {
      result += stone.price * stone.quantity;
      break;
    }
  }
  return result;
}

// Вариант-2 Ранний возврат.

function calcTotalPrice(stones, stoneName) {
  let result = 0;
  for (const stone of stones) {
    if (stone.name === stoneName) {
      result += stone.price * stone.quantity;
      return result;
    }
  }
}

// Вариант-3 Ранний возврат.

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
  return 'Empty';
}

console.log(calcTotalPrice(stones, 'Діамант'));

|============================
*/
// -------------
/** Решение: Олег 
|============================
// 1) Вариант-1 Когда у каждого камня одна цена.

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
  return 0;
}
const res = calcTotalPrice(stones, 'Діамант');
console.log(res);                                    // 8100
const res2 = calcTotalPrice(stones, 'qweqwe');
console.log(res2);                                   // 0
console.log(calcTotalPrice(stones, 'Смарагд'));      // 5200

// ---------------------------------------------------------

//  Вариант-2 Когда у одного камня две разных цены.

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Смарагд', price: 1000, quantity: 2 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Сапфір', price: 100, quantity: 15 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  const foundStones = [];

  for (const stone of stones) {
    if (stone.name === stoneName) {
      foundStones.push(stone);
    }
  }

  let sum = 0;

  for (const stone of foundStones) {
    sum += stone.price * stone.quantity;
  }
  return sum;
}

const res = calcTotalPrice(stones, 'Смарагд');
console.log(res);                                  // 7200
const res1 = calcTotalPrice(stones, 'Сапфір');
console.log(res1);                                 // 4300
console.log(calcTotalPrice(stones, 'Діамант'));    // 8100

|============================
*/
// _______________________________________________________
// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
// -------------
/** Задание задачи 
|============================
// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
//  * Каждая транзакция это объект со свойствами: id, type и amount
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  //  * Метод создает и возвращает объект транзакции.
  //  * Принимает сумму и тип транзакции.
  createTransaction(amount, type) {},
  //  * Метод отвечающий за добавление суммы к балансу.
  //  * Принимает сумму танзакции.
  //  * Вызывает createTransaction для создания объекта транзакции
  //  * после чего добавляет его в историю транзакций
  deposit(amount) {},
  //  * Метод отвечающий за снятие суммы с баланса.
  //  * Принимает сумму танзакции.
  //  * Вызывает createTransaction для создания объекта транзакции
  //  * после чего добавляет его в историю транзакций.
  //  * Если amount больше чем текущий баланс, выводи сообщение о том, 
  //  * что снятие такой суммы не возможно, недостаточно средств.
  withdraw(amount) {},
  //  * Метод возвращает текущий баланс
  getBalance() {},
  //  * Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {},
  // * Метод возвращает количество средств определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {},
};
|============================
*/
// -------------------------------------------------------
/** Моё решение
|============================
// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
//  * Каждая транзакция это объект со свойствами: id, type и amount
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  transactions: [{ id: 17, amount: 145, type: 'deposit' }], // Тест. getTransactionDetails(id)
  //  * Метод создает и возвращает объект транзакции.
  //  * Принимает сумму и тип транзакции.
  createTransaction(amount, type) {
    return {
      id: Math.random().toString(16).substring(2), // Вариант Олег
      // id: Date.now(), // Вариант Артем
      amount,
      type,
    };
  },
  // * Метод отвечающий за добавление суммы к балансу.
  // * Принимает сумму танзакции.
  // * Вызывает createTransaction для создания объекта транзакции
  // * после чего добавляет его в историю транзакций
  deposit(amount) {
    if (amount <= 0) {
      return 'ERROR';
    }
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(newTransaction);
  },
  //  * Метод отвечающий за снятие суммы с баланса.
  //  * Принимает сумму танзакции.
  //  * Вызывает createTransaction для создания объекта транзакции
  //  * после чего добавляет его в историю транзакций.
  //  * Если amount больше чем текущий баланс, выводи сообщение о том,
  //  * что снятие такой суммы не возможно, недостаточно средств.
  withdraw(amount) {
    if (amount > this.balance) {
      return 'недостаточно средств';
    }
    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(newTransaction);
  },
  //  * Метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },
  //  * Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'Emply';
  },
  // * Метод возвращает количество средств определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },
};

// console.log(account.createTransaction(1000, Transaction.DEPOSIT));

account.deposit(1000);
account.deposit(2000);
account.deposit(2000);
// console.log(account.deposit(-1000)); // ERROR

account.withdraw(3500);
account.withdraw(500);
// console.log(account.withdraw(5000)); // Недостаточно средств

console.log(account.balance);

console.log(account.getTransactionDetails(17));

console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account);
|============================
*/
// -------------------------------------------------------
/** Решение Артем 
|============================
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
Object.freeze(Transaction); // Замораживаем константы чтоб никто не мог их изменить.
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],
  transactions: [{ id: 17, amount: 145, type: 'deposit' }], // Для теста. * Метод шукає та повертає об'єкт транзакції по id

  //  * Метод створює та повертає об'єкт транзакції.
  //  * Приймає суму та тип транзакції.
  createTransaction(amount, type) {
    return {
      id: Date.now(), // Настоящее время в милисикундах
      amount,
      type,
    };
  },
  //  * Метод, що відповідає за додавання суми до балансу.
  //  * Приймає суму транзакції.
  //  * Викликає createTransaction для створення об'єкта транзакції
  //  * після чого додає його до історії транзакцій
  deposit(amount) {
    if (amount <= 0) {
      return 'Error';
    }
    const item = this.createTransaction(amount, Transaction.DEPOSIT);
    // console.log(item);
    this.balance += amount;
    this.transactions.push(item);
  },
  //  * Метод, що відповідає за зняття суми з балансу.
  //  * Приймає суму транзакції.
  //  * Викликає createTransaction для створення об'єкта транзакції
  //  * після чого додає його до історії транзакцій.
  //  *
  //  * Якщо amount більше ніж поточний баланс, виводь повідомлення
  //  * про те, що зняття такої суми не можливе, недостатньо коштів.
  withdraw(amount) {
    if (amount > this.balance || amount <= 0) {
      return 'недостатньо коштів';
    }
    const item = this.createTransaction(amount, Transaction.WITHDRAW);
    // console.log(item);
    this.transactions.push(item);
    this.balance -= amount;
  },
  //  * Метод повертає поточний баланс
  getBalance() {
    return this.balance;
  },
  //  * Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'Empty';
  },
  //  * Метод повертає кількість коштів
  //  * певного типу транзакції з усієї історії транзакцій
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },
};
// ---------------------------------------------------------
// console.log(account.createTransaction(1000, 'deposit'));

// console.log(account.deposit(1000));
account.deposit(1000); // Делаем вклад.
account.deposit(2000); // Делаем вклад.
account.deposit(2000); // Делаем вклад.

// console.log(account.withdraw(500));
account.withdraw(500); // Снимаем деньги.

// console.log(account.getBalance()); // Проверка баланса.

// console.log(account.getTransactionDetails(17)); // * Метод шукає та повертає об'єкт транзакції по id

console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account);
|============================
*/
// -------------------------------------------------------
/** Решение Олег решение 1-вое 
|============================
const OPERATION_TYPES = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW',
};

const account = {
  limit: 10000,
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transactions = {
      id: Math.random().toString(16).substring(2),
      type,
      amount,
    };
    return transactions;
  },

  deposit(amount) {
    const newTransaction = this.createTransaction(
      amount,
      OPERATION_TYPES.DEPOSIT
    );

    if (amount > this.limit) {
      console.error('LIMIT ERROR');
    } else {
      this.balance += amount;
      this.transactions.push(newTransaction);
    }
  },

  withdraw(amount) {
    const newTransaction = this.createTransaction(
      amount,
      OPERATION_TYPES.WITHDRAW
    );

    if (this.balance < amount) {
      console.error('NOT ENOUGHT MONEY');
    } else if (amount > this.limit) {
      console.error('LIMIT ERROR');
    } else {
      this.balance -= amount;
      this.transactions.push(newTransaction);
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let sum = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },
};

account.deposit(5000);
console.log(account.getBalance());
console.log(account.transactions);

account.withdraw(3500);
account.withdraw(500);
account.withdraw(250);
console.log(account.getBalance());
console.log(account.transactions);

console.log(account.getTransactionDetails(account.transactions[0].id));

console.log(account.getTransactionTotal(OPERATION_TYPES.WITHDRAW));
console.log(account.getTransactionTotal(OPERATION_TYPES.DEPOSIT));
|============================
*/
// -------------------------------------------------------
/** Решение: Олег решение 2 полное с дополнением 
|============================
// const OPERATION_TYPES = {
//   DEPOSIT: 'DEPOSIT',
//   WITHDRAW: 'WITHDRAW',
// };

// const account = {
//   limit: 10000,
//   balance: 0,
//   hideMoney: false,
//   transactions: [],

//   createTransaction(amount, type) {
//     const transactions = {
//       id: Math.random().toString(16).substring(2),
//       type,
//       amount,
//     };

//     return transactions;
//   },

//   deposit(amount) {
//     const newTransaction = this.createTransaction(
//       amount,
//       OPERATION_TYPES.DEPOSIT
//     );

//     if (amount > this.limit) {
//       console.error('LIMIT ERROR');
//     } else {
//       this.balance += amount;
//       this.transactions.push(newTransaction);
//     }
//   },

//   withdraw(amount) {
//     const newTransaction = this.createTransaction(
//       amount,
//       OPERATION_TYPES.WITHDRAW
//     );

//     if (this.balance < amount) {
//       console.error('NOT ENOUGHT MONEY');
//     } else if (amount > this.limit) {
//       console.error('LIMIT ERROR');
//     } else {
//       this.balance -= amount;
//       this.transactions.push(newTransaction);
//     }
//   },

//   getBalance() {
//     return this.hideMoney ? ':)' : this.balance;
//   },

//   toggleBalanceVisabillity() {
//     this.hideMoney = !this.hideMoney;
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//   },

//   getTransactionTotal(type) {
//     let sum = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }

//     return sum;
//   },
// };

// account.deposit(5000);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(3500);
// account.withdraw(500);
// account.withdraw(250);
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log(account.getTransactionDetails(account.transactions[0].id));

// console.log(account.getTransactionTotal(OPERATION_TYPES.DEPOSIT));

// console.log(account.getBalance());
// account.toggleBalanceVisabillity();
// console.log(account.getBalance());
// account.toggleBalanceVisabillity();
// console.log(account.getBalance());

|============================
*/
// _______________________________________________________
// =========================================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Репета модуль-3 занятие-6 Деструктуризація об'єктів
// =========================================================================================
/** /* Операция spread (распыление). 
|============================
//  * Операция spread (распыление)
//  * - Array.prototype.concat() и аналог через spread
// --------------------------------------------------------
// Метод .concat() сшивание масивов. Старый метод сшивания.
//
const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

console.log(numbers);                                        // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// --------------------------------------------------------
// Операция spread (распыление) Новый синтаксис.
//
const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

console.log(numbers);                                        // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];
console.log(numbers);                  // [1000, 1, 2, 3, 5000, 4, 5, 6, 7000, 7, 8, 9, 9000]

// -------------------------------------------------------
//  * Поиск самой маленькой или большой температуры (числа)
// -------------------------------------------------------
const temps = [18, 14, 12, 21, 17, 29, 24];

console.log(temps);                                     // [18, 14, 12, 21, 17, 29, 24]
console.log(Math.min(...temps));                        // 12
console.log(Math.max(...temps));                        // 29
console.log(Math.max(1, 4, 17, 5, 6));                  // 17

// -------------------------------------------------------
// Передача по ссылке сложных элементов и по значению простых элементов.
// -------------------------------------------------------
const a = [1, 2, 3];
const b = [...a];

console.log(a === b); // false // Они не равны-это разные масивы. В масив b распылили простые типы масива а.
console.log(a[0] === b[0]);                             // true

console.log('a: ', a);                                  // a:  [1, 2, 3]
console.log('b: ', b);                                  // b:  [1, 2, 3]

// -------------------------

const c = [{ x: 1 }, { y: 2 }, { z: 3 }];
const d = [...c];

console.log(c === d);                                    // false
console.log(c[0] === d[0]);                              // true

console.log('c: ', c);                                   // [{ x: 1 }, { y: 2 }, { z: 3 }];
console.log('d: ', d);                                   // [{ x: 1 }, { y: 2 }, { z: 3 }];

c[0].x = 1000;

console.log('c: ', c);                                   // [{ x: 1000 }, { y: 2 }, { z: 3 }];
console.log('d: ', d);                                   // [{ x: 1000 }, { y: 2 }, { z: 3 }];

// -------------------------------------------------------
//  * Сшиваем несколько массивов в один через concat() и spread
// -------------------------------------------------------
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// Вариант с помощью .concat()
// ---------------------------
const xx = lastWeekTemps.concat(currentTemps, nextWeekTemps);
console.log(xx);                                               // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Вариант с помощью spread
// ---------------------------
const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);                                         // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// --------------------------------------------------------
//  * Распыление объектов
//  * - Object.prototype.assign() и spread
// --------------------------------------------------------
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// Распыление объектов в новый объект. Пример как это делали раньше.
// -----------------------------
const c = Object.assign({}, a, b);
console.log(c);                                            // {x: 0, y: 2, z: 3}
// ----------
const w = {};
Object.assign(w, a, b);
console.log(w);                                           // {x: 0, y: 2, z: 3}
// ----------
const f = Object.assign({ name: 'Mango' }, a, b);
console.log(f);                                           // {name: 'Mango', x: 0, y: 2, z: 3}
// ----------

// Распыление объектов в новый объект. Пример Современный вариант.
// -----------------------------
const v = {
  ...a,
  ...b,
};
console.log(v);                                           // {x: 0, y: 2, z: 3}

const e = {
  name: 'Mango',
  ...a,
  ...b,
};
console.log(e);                                           // {name: 'Mango', x: 0, y: 2, z: 3}
// ----------
// Порядок распыления
// ------------------
// const c = {
//   ...a,
//   x: 10,
//   ...b,
//   y: 20,
// };
// console.log(c);
// ----------
// Пример
// ----------
// Базовые настройки темы.
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};
// Наши настройки которые хотим переопределить.
const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};
// Финальные настройки в которые вошли базовые и наши переопределенные.
const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings); // {theme: 'light', showNotifications: false, hideSidebar: true}

|============================
*/
// _______________________________________________________
/** Деструктуризация объекта.
|============================
//  * Деструктуризация объекта
//  * - Значения по умолчанию
//  * - Имя переменной отличное от имени свойства

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

const { rating, tracks } = playlist;       // Деструктуризация объекта playlist базовая форма.

console.log(rating);                       // 5
console.log(tracks);                       // ['трек-1', 'трек-2', 'трек-3']
console.log(rating, tracks);               // 5      // ['трек-1', 'трек-2', 'трек-3']

const { name, rating, tracks, trackCount } = playlist;   // Деструктуризация объекта playlist базовая форма.
console.log(name, rating, tracks, trackCount);

// ------------------------
// Если нужно присвоить какое-то значение по умолчанию которого нет в объекте.
// ------------------------
const { name, rating, tracks, trackCount, autor = 'user' } = playlist;
console.log(autor);                                      // 'user'

// ------------------------
// Меняем названия свойства на свое.
// ------------------------
const {
  rating,
  tracks,
  name,
  trackCount: numberOfTracks = 0,
  author = 'user',
} = playlist;

console.log(numberOfTracks);                             // 3

// ----------------------------
//  * Глубокая деструктуризация
// ----------------------------
const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, location, avatar, stats } = profile;
console.log(name, tag, location, avatar, stats);

const { followers, views, likes } = stats;
console.log(name, tag, location, avatar, followers, views, likes);

// -------------------
// Вариант-1 Глубокая деструктуризация (свойства stats)

const { avatar, name, tag, location, stats } = profile;
const { followers, views, likes } = stats;

console.log(name, tag, location, avatar, followers, views, likes);
// -------------------
// Вариант-2 Глубокая деструктуризация (свойства stats)

const {
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
} = profile;

console.log(name, tag, location, avatar, followers, views, likes);
|============================
*/
// _______________________________________________________
/** Деструктуризация массивов.
|============================
// * Деструктуризация массивов

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

console.log(red, green, blue);                                    // 255 100 80

// ------------------
// Рейтинг авторов. Нужно найти самый большой рейтинг автора.
const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

// --------------------------
// Самый простой способ.

const rating = Object.values(authors);
console.log(Math.max(...rating));                                 // 9

// --------------------------
// Другой вариант.

const entries = Object.entries(authors);
console.log(entries);                 // [['kiwi', 4], ['poly', 7], ['ajax', 9], ['mango', 6]]

// ---------------------------

// Уровень-1 вариант решения

for (const entry of entries) {
  const name = entry[0];
  const rating = entry[1];
  console.log(name, rating);
}
// ------------

// Уровень-2 вариант решения. Еще улудшаем (усовершенствуем) тоже самое

for (const entry of entries) {
  const [name, rating] = entry;
  console.log(name, rating);
}

// ------------

// Уровень-3 вариант решения. Еще улудшаем (усовершенствуем) тоже самое

for (const [name, rating] of entries) {
  console.log(name, rating);
}
// -----------------------------------------------

// Как бы это делали мы сейчас учась.

const keys = Object.keys(authors);
const arr = [];
for (const key of keys) {
  arr.push(authors[key]);
}
let max = arr[0];
for (const i of arr) {
  if (i > max) {
    max = i;
  }
}
console.log(max);                                      // 9

|============================
*/
// _______________________________________________________
/** Операция rest (сбор)
|============================

|============================
*/
// _______________________________________________________

//  * Операция rest (сбор)

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// const showProfileInfo = function (userProfile) {
//   const { name, tag, location, ...restProps } = userProfile;

//   // console.log(name, tag, location, avatar, followers, views, likes);
//   console.log(restProps);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);
