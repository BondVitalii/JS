// _________________________________________________________________________________________
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Репета модуль-3 занятие 1 Обьекты
// ==================================
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
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));
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
// ___________________________________________
/** Задача-6 Как узнать сколько свойств в єтом обьекте?
|============================
const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100,
};
console.log(Object.keys(x).length);
|============================
*/
// ___________________________________________

// _________________________________________________________________________________________
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
