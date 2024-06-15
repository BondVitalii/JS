// :::::::::::::::||| Репета модуль-4 занятие 1 Callback function  |||:::::::::::::::

/** Callback function, Инлайн колбэки. Репета 
|============================
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 
const fnA = function (message, callback) {
  console.log(message);                                     // qweqwe

  console.log(callback);                                   // Этот лог вернет колбек функцию.
  callback(100);                                           // Вызов колбек функции.
};

const fnB = function (number) {
  console.log('Это лог при вызове fnB', number);           // Это лог при вызове fnB 100
};

fnA('qweqwe', fnB);

// ------------------------------------------------------

// * функция doMath(a, b, callback)

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);                         // 5
};

const add = function (x, y) {
  return x + y;
};

doMath(2, 3, add);                             // вызов doMath с аргументами для колбэк функции add

// ------------------------------------------------------

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);                         // // вызов add вернет 5. // вызов sub вернет 2.
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add);                           // вызов doMath с аргументами для колбэк функции add
doMath(10, 8, sub);                          // вызов doMath с аргументами для колбэк функции sub

// ------------------------------------------------------

// Инлайн функции. (Встроеная функия - одноразовая - анонимная).

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result); // // вызов add вернет 5. // вызов sub вернет 2.
};
// Инлайн функция.
doMath(2, 3, function (x, y) {
  return x + y;
});
// Инлайн функция.
doMath(10, 8, function (x, y) {
  return x - y;
});

// ------------------------------------------------------

// * Отложенный вызов: регистрация событий. Пример на кнопке.

// html код кнопки.---------------
// <button class="js-button">
//   Это кнопка
//   <span role="image" aria-label="Иконка волшебника">🧙‍♂️</span>
// </button>;

const buttonRef = document.querySelector('.js-button'); // Получаем ссылку на эту кнопку.

// Вариант-1 -------------------------------
const handleBtnClick = function () {
  console.log('Клик по кнопке ' + Date.now());
};
buttonRef.addEventListener('click', handleBtnClick); // Добавляем слушателя событий.

// Если этот 'click' совпадает с тем событием event что сейчас произошло, она берет и вызывает callback() функцию (handleBtnClick);
// function addEventListener(eventType, callback) {
//   if (eventType == event) {
//     callback();
//   }
// }

// Вариант-2 (с анонимной функцией) -------
buttonRef.addEventListener('click', function () {
  console.log('Клик по кнопке ' + Date.now());
});

// ------------------------------------------------------

|============================
*/
// * Отложенный вызов: геолокация.
