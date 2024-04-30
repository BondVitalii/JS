// _________________________________________________________________________________________
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Репета модуль-2 занятие 2 Функции
// ==================================
/** * Функции теория
|============================

//  * Функции
//  * - Функциональные выражения
//  * - Аргументы и параметры
//  * - Возврат значения

const add = function (x, y) {
  // console.log(x);
  // console.log(y);
  // console.log('Выполянется функция add');

  return x + y;
};

// Варианты вызова функции.
add(10, 15);
add(30, 50);
console.log(add(10, 15)); // Это не вызов функции. Это мы логируем результат работы функции.
console.log(add);         // Это логирование функции.

const r1 = add(5, 3);
console.log('r1: ', r1);

const r2 = add(10, 15);
console.log('r2: ', r2);

const r3 = add(30, 50);
console.log('r3: ', r3);

// --------------------------------------------
// Ключевое слово return

const fn = function (value) {
  console.log(1);
  console.log(2);

  if (value < 50) {
    return 'Меньше чем 50';
  }
  return 'Больше чем 50';
};

console.log('Результат функции: ', fn(10));

console.log('Результат функции: ', fn(1000));

// --------------------------------------------

* - Стек вызовов 
* - Stack trace и поиск ошибок

const fnA = function () {
  console.log('Выполняется функция A');
};

const fnB = function () {
  console.log('Выполняется функция B');
};

const fnC = function () {
  console.log('Выполняется функция C');
};

// console.log('Лог перед вызовом функции A');

fnA();

// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
fnC();
// console.log('Лог после вызова функции C');

// --------------------------------------------

* - Отлавливаем ошибки в функциях

const fnA = function () {
  console.log('Выполняется функция A');
  fnB();
};

const fnB = function () {
  console.log('Выполняется функция B');
  fnC();
};

const fnC = function () {
  console.log('Выполняется функция C');
  console.log(value);
};

// console.log('Лог перед вызовом функции A');

fnA();

|============================
*/
// ________________________________________________________________________________________
// Задача-2:
//  * Напиши функцию calculateTotalPrice(items)
//  * которая принимает массив цен (чисел) и возвращает их сумму
// ----------------------------
// const result = calculateTotalPrice([1, 2, 3]);
// console.log(`Общая сумма покупок ${result}`); // 6

// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600
// ----------------------------
/** С прошлого урока задача-1
|============================

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
  total += value;
}

console.log('Total: ', total);

|============================
*/
// ----------------------------
/** Решение:
|============================

const calculateTotalPrice = function (items) {
  console.log('items внутри функции: ', items);

  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

const r1 = calculateTotalPrice([1, 2, 3]);

console.log(`Общая сумма покупок ${r1}`); // 6
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600

|============================
*/
// ________________________________________________________________________________________
// Задача-3:
// * Напиши функцию logItems(items) для перебора и логирования массива
// Эта функция ничего назад не возвращает.
// ----------------------------
// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);
// ----------------------------
/** Решение:
|============================

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);

|============================
*/
// ________________________________________________________________________________________
// Задача-4:
//  * Напиши функцию findLogin(allLogins, login) для поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
// ----------------------------
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));
// ----------------------------
/** С прошлого урока задача-4
|============================

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

const loginToFind = 'aj4xth3m4n';

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден.`
  : `Пользователь ${loginToFind} не найден.`;

  console.log(message);

|============================
*/
// ----------------------------
/** Решение:
|============================

// Вариант-1 (тернарный оператор - правильный вариант)---

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};

// Вариант-2 (тернарный оператор - правильный вариант)---

const findLogin = function (allLogins, loginToFind) {
  const message = allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;

  return message;
};

// Вариант-3 (for of - правильный вариант)---------------

const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `Пользователь ${loginToFind} найден.`;
    }
  }

  return `Пользователь ${loginToFind} не найден.`;
};

// Вариант-4 (for of - как пример) ----------------------

const findLogin = function (allLogins, loginToFind) {
  let message = `Пользователь ${loginToFind} не найден.`;

  for (const login of allLogins) {
    if (login === loginToFind) {
      message = `Пользователь ${loginToFind} найден.`;
    }
  }
  return message;
};

// ---------------------------------------------
console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));

|============================
*/
// ________________________________________________________________________________________
// Задача-5:
//  * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
//  * при условии что числа уникальные (не повторяются).
// ----------------------------
// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
// ----------------------------
/** С прошлого урока задача-5
|============================

const numbers = [51, 18, 13, 24, 7, 85, 19];

let smallNumber = numbers[0];

for (const number of numbers) {
  if (number < smallNumber) {
    smallNumber = number;
  }
}

|============================
*/
// ----------------------------
/** Решение:
|============================

const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

|============================
*/
// ________________________________________________________________________________________
// Задача-6:
//  * Напиши функцию changeCase(string) которая заменяет регистр
//  * каждого символа в строке на противоположный.
//  * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
// ----------------------------
// console.log(changeCase('JavaScript')); // jAVAsCRIPT
// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX
// ----------------------------
/** С прошлого урока задача-7 :
|============================
const string = 'JavaScript';

const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
  const isInLowerCase = letter === letter.toLowerCase();
  invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
}
console.log(invertedString);
|============================
*/
// ----------------------------
/** Решение:
|============================
// Вариант-1 с тернарным оператором
// ________________________________

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

// Вариант-2 if else
// _________________________________

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    if (letter === letter.toLowerCase()) {
      invertedString += letter.toUpperCase();
    } else {
      invertedString += letter.toLowerCase();
    }
  }
  return invertedString;
};

// ---------------------------------------------
console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX

|============================
*/
// ________________________________________________________________________________________
// Задача-7:
//  * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
//  * Строка состоит только из букв и пробелов
// -----------------------------------------------------------
// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));
// ------------------------------------------------------------
/** С прошлого урока задача-8 :
|============================
const title = 'Top 10 benefits of React framework';

const normilizedTitle = title.toLowerCase();
const words = normilizedTitle.split(' ');
const slug = words.join('-');

// const slug = title.toLowerCase().split(' ').join('-'); //Вариант-2

console.log(slug);
|============================
*/
// ------------------------------------------------------------
/** Решение:
|============================

// Вариант-1 --------------------------------------
const slugify = function (string) {
  return string.toLowerCase().split(' ').join('-');
};

// Вариант-2 --------------------------------------
const slugify = function (string) {
  const normalizedString = string.toLowerCase();
  const words = normalizedString.split(' ');
  const slug = words.join('-');
  return slug;
};

// -----------------------------------------------------------
console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));

|============================
*/
// ________________________________________________________________________________________
// Задача:
// * Псевдомассив arguments и Array.from и ...
// =====================================
/** Псевдо масив и (операция ...rest)
|============================

//  Это метод Современный-------------------

const fn = function (a, b, c, ...args) {
  console.log(`${a} ${b} ${c}`);
  console.log(args);
};

fn('hello', 1, 2, 3);
fn('aloha', 1, 2, 3, 4, 5);
fn('hi', 1, 2, 3, 4, 5, 6, 7);
// ----------------------------


//  Это метод Old Shool -------------------

const fn = function () {
  console.log(arguments);

  const args = Array.from(arguments);

  console.log(args);
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

|============================
*/
// =====================================
// Задача-8:
//  * Напиши функцию add для сложения произвольного количества аргументов (чисел)
//  * - Операция ...rest (...args)
// ----------------------------
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));
// ----------------------------
/** Решение:
|============================

const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

|============================
*/
// ________________________________________________________________________________________
// Задача-9:
// * Напиши функцию filterNumbers(array [, number1, ...]) которая:
//  * - первым аргументом принимает массив чисел
//  * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
//  * - Функция должна вернуть новый массив, в котором будут только те аргументы,
//  * - начиная со второго, для которых есть аналог в оригинальном массиве.
// ----------------------------
// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
// ----------------------------
/** Решение:
|============================

const filterNumbers = function (array, ...args) {
  console.log('array: ', array);
  console.log('args: ', args);
  const uniqueElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqueElements.push(element);

      console.log(`${element} есть везде!`);
    }
  }

  return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

|============================
*/
//
// _________________________________________________________________________________________
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// Артем модуль-2 занятие 2 Функции
// =================================
/** Артем теория
|============================

// =====================
// Псевдомасив arguments
// =====================

// Через for --------------

// function add() {
//   let sum = 0;
//   console.log(arguments);

//   for (let i = 0; i < arguments.length; i += 1) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }

// add(1, 2, 3, 4, 5, 6);

// Через for of -----------

// function add() {
//   let sum = 0;
//   console.log(arguments);

//   for (const value of arguments) {
//     sum += value;
//   }
//   console.log(sum);
// }

// add(1, 2, 3, 4, 5, 6);

// ====================================
// Перевод псевдомасива в обычный масив
// ====================================

// Старый метод ------------------

// function add() {
//   let sum = 0;
//   const arr = Array.from(arguments);
//   console.log(arr);

//   for (const value of arguments) {
//     sum += value;
//   }
//   console.log(sum);
// }

// add(1, 2, 3, 4, 5, 6);

// Новый метод операция распыления ...(rest) -------------------

// function add() {
//   let sum = 0;
//   // const arr = Array.from(arguments); // По старому
//   const arr = [arguments]; // По новому

//   console.log(arguments);
//   console.log(arr);

//   for (const value of arguments) {
//     sum += value;
//   }
//   console.log(sum);
// }

// add(1, 2, 3, 4, 5, 6);

// ====================================
// return
// ====================================
// Для того чтоб функция что-то вернула нужен return ОБЯЗАТЕЛЬНО!
// Если в консоле при выполнении функции мы видем undefind, значит забыли поставить return;

// function add() {
//   let sum = 0;
//   const arr = [arguments]; // По новому

//   for (const value of arguments) {
//     sum += value;
//   }
//   return sum;
// }

// const response = add(1, 2, 3, 4, 5, 6);
// console.log(response);

// ------------------------------
// Патерн раннего возврата return
// ------------------------------

// function largeNumber() {
//   let sum = 0;

//   for (const value of arguments) {
//     sum += value;
//     if (sum > 10) {
//       return true;
//     }
//   }
//   return false;
// }

// const response = largeNumber(1, 2, 3);
// console.log(response); // false

// console.log(largeNumber(1, 2, 3, 4)); // false
// console.log(largeNumber(1, 2, 3, 4, 5, 6)); // true

// --------------------------------------------------------
// Пример когда в функции указываем параметры по умолчанию.
// --------------------------------------------------------

// В этом примере в функции в параметр val1 по умолчанию ставим 0,
// если при вызове функции не будет указан аргумент для val1,
// то значение 0 будет по умолчанию.
// В зависимости от типа данных на которые мы расчитываем,
//  * если масив то ставим пустой масив ([]),
//  * если строка то ставим пустую строку (''),
//  * если число то ставим (0),
//  * если щбьект то ставим пустой обьект ({}),

// function add(val, val1 = 0) {
//   // console.log('val', val);
//   // console.log('val1', val1);

//   return val + val1;
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 12));
// console.log(add(11));
// console.log(add(15));

// --------------------------------------------------------
// Области видимости.
// --------------------------------------------------------

// let a = 10;

// --------

// function foo() {
//   let a = 15;
//   a = 45;
//   console.log(a); // 45
// }
// foo();
// console.log(a); // 10

// --------

// function foo(a) {
//   a = 45;
// }
// foo(a);
// console.log(a); // 10

// --------

// function foo() {
//   a = 45;
// }
// foo(a);
// console.log(a); // 45

// --------

// const test = [1, 2, 3];

// function foo(arr) {
//   arr.splice(0, 1);
// }
// foo(test);
// console.log(test); // [2, 3]

// --------

// --------------------------------------------------------
// Стек вызовов
// --------------------------------------------------------

// function createString(name, year) {
//   // const result = add(year);
//   return `${name}: years ${add(year)}`;
// }
// console.log(createString('Mango', [1, 2, 3]));

// function add(arr) {
//   let sum = 0;
//   for (const num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// -------------------
// Переполнение стека
// -------------------
// function foo() {
//   boo();
// }
// foo();

// function boo() {
//   foo();
// }
// -------------------


|============================
*/
// -------------------------
//
// _________________________________________________________________________________________
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// =========================================================================================
// ЗАДАЧИ-ПРАКТИКА (Артем Рисич и Георг) модуль-2 занятие 2 Функции
// =========================================================================================
// _________________________________________________________________________________________
// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height)
// которая рассчитывает и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки.
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;
// ----------------------------
// const bmi = calcBMI('88,3', '1.75');
// ----------------------------
/** Решение: Артем + Георг + Мой вариант
|============================

// _______ Вариант Артем _______

  weight = Number(weight.replace(',', '.'));
  height = Number(height.replace(',', '.'));

  return Number((weight / Math.pow(height, 2)).toFixed(1));
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi);

// _______ Вариант Георг _______

const bmi = calcBMI('88,3', '1.75');

function calcBMI(weight, height) {
  const numWeight = parseFloat(weight.replace(',', '.'));
  const numHeight = parseFloat(height.replace(',', '.'));
  const bmi = numWeight / Math.pow(numHeight, 2);

  return parseFloat(bmi.toFixed(1));
}

console.log(bmi); // 28.8

// _______ Мой вариант _______

function calcBMI(weight, height) {
  const weightNum = parseFloat(weight.replace(',', '.'));
  const heightNum = parseFloat(height.replace(',', '.'));
  const bmi = weightNum / Math.pow(heightNum, 2);
  const response = Number(bmi.toFixed(1));

  return response;
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi);

|============================
*/
// ________________________________________________________________________________________
// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
// ----------------------------
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// ----------------------------
/** Решение: Артем + Георг + Другие варианты
|============================
// _______ Вариант Артем _______
// 1) Вариант if
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

// 2) Вариант тернарный оператор
function min(a, b) {
  return a < b ? a : b;
}
// _______ Вариант Георг _______
// 1) Вариант стрелочная функция
const min = (a, b) => {
  return a < b ? a : b;
};

// 2) Вариант Math.min()
function min(a, b) {
  return Math.min(a, b);
}
// _______ Вариант Другие if else _______
function min(a, b) {
  let min = 0;
  if (a < b) {
    min = a;
  } else {
    min = b;
  }
  return min;
}
// --------------------------
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1

|============================
*/
// ________________________________________________________________________________________
// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
// значения которых будут переданы в параметр dimensions в виде строки.
// Значения гарантированно разделены пробелом.
// ----------------------------
// console.log(getRectArea('8 11')); // 88
// ----------------------------
/** Решение: Артем + Георг + Другие варианты
|============================
// _______ Вариант Артем _______

1) Вариант --------------------------
function getRectArea(dimensions) {
  dimensions = dimensions.split(' ');
  const first = Number(dimensions[0]);
  const second = Number(dimensions[1]);

  return first * second;
}
2) Вариант --------------------------
function getRectArea(dimensions) {
  dimensions = dimensions.split(' ');

  return Number(dimensions[0]) * Number(dimensions[1]);
}

// _______ Вариант Георг _______
1) Вариант --------------------------
function getRectArea(dimensions) {
  const numbers = dimensions.split(' ');
  const a = Number(numbers[0]);
  const b = Number(numbers[1]);

  return a * b;
}
2) Вариант --------------------------
function getRectArea(dimensions) {
  const numbers = dimensions.split(' ');
  const a = numbers[0];
  const b = numbers[1];

  return Number(a) * Number(b);
}
3) Вариант  Через константу ----------
function getRectArea(dimensions) {
  const numbers = dimensions.split(' ');
  const [a, b] = numbers;

  return Number(a) * Number(b);
}
// _______ Вариант Другие _______

function getRectArea(dimensions) {
  const arr = dimensions.split(' ');
  const num1 = Number(arr[0]);
  const num2 = Number(arr[1]);
  const area = num1 * num2;

  return area;
}
// ______________________________

console.log(getRectArea('8 11'));

|============================
*/
// ________________________________________________________________________________________
// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение в формате < номер элемента > - <значение элемента>.
// Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango,
// а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {}
// ----------------------------
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ----------------------------
/** Решение: Артем + Георг
|============================

// _______ Вариант Артем _______

function logItems(items) {
  for (let i = 0, num = 1; i < items.length; i += 1, num += 1) {
    console.log(`${num} - ${items[i]}`);
  }
}

// _______ Вариант Георг _______

function logItems(items) {
  console.log('---------------------');
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1}: ${items[i]}`);
  }
}
// ---------------------------------------------
logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

|============================
*/
// ________________________________________________________________________________________
// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {}
// ----------------------------
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );
// ----------------------------
/** Решение: Артем + Георг
|============================

// _______ Вариант Георг _______

function printContactsInfo(names, phones) {
  const namesArr = names.split(',');
  const phonesArr = phones.split(',');

  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(`${namesArr[i]}: ${phonesArr[i]}`);
  }
}

// ----------------------------------------------
printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);

// _______ Вариант Артем _______

// 1) Вариант когда имена и телефоны совпадают по кол-ву

function printContactsInfo(names, phones) {
  names = names.split(',');
  phones = phones.split(',');
  for (let i = 0; i < names.length; i += 1) {
    console.log(`${names[i]} - ${phones[i]}`);
  }
}

// ----------------------------------------------
printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);

// ----------------------------------------------

// 2) Вариант когда имена и телефоны не совпадают по кол-ву

function printContactsInfo(names, phones) {
  names = names.split(',');
  phones = phones.split(',');
  for (let i = 0; i < names.length, i < phones.length; i += 1) {
    console.log(`${names[i]} - ${phones[i]}`);
  }
}
// ----------------------------------------------
printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377'
);
|============================
*/
// ________________________________________________________________________________________
// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
// ----------------------------
// function findLargestNumber(numbers) {}
// ----------------------------
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// ----------------------------
/** Решение: Артем + Георг
|============================

// _______ Вариант Георг _______

1) Вариант Math.max() --------------------------

function findLargestNumber(numbers) {
  return Math.max(...numbers);
}

2) Вариант for of ------------------------------

function findLargestNumber(numbers) {
  let max = numbers[0];

  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

3) Вариант for ---------------------------------

function findLargestNumber(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// _______ Другие варианты _______

function findLargestNumber(numbers) {
  const bigNum = Math.max(...numbers);
  return bigNum;
}

// -----------------------------------------
console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// -----------------------------------------

// _______ Вариант Артем _______

// Работа не с масивами а набором чисел. Используем ПСЕВДОМАСИВ!

1) Вариант псевдомасив по старому Array.from ----------

function findLargestNumber() {
  const arr = Array.from(arguments);
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

2) Вариант псевдомасив по новом операция ...rest ----------

function findLargestNumber(...numbers) {
  let maxNum = numbers[0];
  for (const num of numbers) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

3) Вариант псевдомасив по новом операция ...rest ----------

function findLargestNumber() {
  const arr = [...arguments];
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// ----------------------------
console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83
// ----------------------------

4) Вариант с масивом в середине аргументов. Пример рекурсивной функции ----------
function findLargestNumber() {
  let max;
  for (const num of arguments) {
    if (typeof num === 'number') {
      max = num;
      break;
    }
  }
  for (const num of arguments) {
    if (typeof num === 'number') {
      if (num > max) {
        max = num;
      }
    } else {
      max = findLargestNumber(...num);
    }
  }
  return max;
}
console.log(findLargestNumber([[1, 143], 5, 7], 6, 7, 8, 88, 123));

4.4 ) Вариант с масивом в середине аргументов. Пример рекурсивной функции ----------

function findLargestNumber() {
  // const arr = [...arguments];
  let max;

  for (const num of arguments) {
    if (typeof num === 'number') {
      max = num;
      break;
    }
  }

  for (const num of arguments) {
    if (typeof num === 'number') {
      if (num > max) {
        max = num;
      }
    } else {
      max = findLargestNumber(...num);
    }
  }
  return max;
}
// -------------------------------------------
console.log(
  findLargestNumber([[1, 143, [400, [900, 1100]]], 5, 7], 6, 7, 8, 88, 123)
);
|============================
*/
// ________________________________________________________________________________________
// Example 7 - Среднее значение
// Напишите функцию calAverage()
// которая принимает произвольное кол-во аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.
// ----------------------------
// function calAverage() {}
// ----------------------------
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ----------------------------
/** Решение: Артем + Георг
|============================

// _______ Вариант Артем _______

function calAverage() {
  let total = 0;

  for (const num of arguments) {
    total += num;
  }
  return total / arguments.length;
}

// _______ Вариант Георг _______

function calAverage() {
  let sum = 0;

  for (const number of arguments) {
    sum += number;
  }
  return sum / arguments.length;
}

// _______ Мой вариант _______

function calAverage(...args) {
  let result = 0;

  for (const arg of args) {
    result += arg;
  }
  return result / args.length;
}

// -------------------------------------------------
console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
|============================
*/
// ________________________________________________________________________________________
// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes)
// которая переведёт значение minutes(количество минут)
// в строку в формате часов и минут HH: MM.
// ----------------------------
// function formatTime(minutes) {}
// ----------------------------
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// ----------------------------
/** Изночальное решение
|============================
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {}

// ----------------------------
console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
|============================
*/
// ----------------------------
/** Решение: Артем + Георг
|============================
// _______ Вариант Артем _______

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

// _______ Вариант Георг _______

// Решение Георг с нуля ---------------------------

function formatTime(minutesInput) {
  const hours = Math.floor(minutesInput / 60);
  const minutes = minutesInput % 60;

  const formattedHours = String(hours).padStart(2, 0);
  const formattedMinutes = String(minutes).padStart(2, 0);

  return `${formattedHours}:${formattedMinutes}`;
}

// _______ Мой вариант _______
1) Вариант
function formatTime(minutesAll) {
  const hours = Math.floor(minutesAll / 60);
  const minutes = minutesAll % 60;

  const formattedHours = String(hours).padStart(2, 0);
  const formattedMinutes = String(minutes).padStart(2, 0);

  return `${formattedHours}:${formattedMinutes}`;
}
2) Вариант
function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const timeHours = String(hours).padStart(2, 0);
  const timeMinutes = String(minutes).padStart(2, 0);

  const time = `${timeHours}:${timeMinutes}`;
  return time;
}

// ------------------------------
console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"

|============================
*/
// ________________________________________________________________________________________
// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:
// * addCourse(name) - добавляет курс в конец коллекции
// * removeCourse(name) - удаляет курс из коллекции
// * updateCourse(oldName, newName) - изменяет имя на новое
// ----------------------------
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// ----------------------------
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'
// -------
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'
// -------
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ----------------------------
/** Решение мой вариант
|============================
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// =========================================================
// добавляет курс в конец коллекции
const addCourse = name => {
  return courses.push(name);
};
// ---------------
addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// =========================================================
// удаляет курс из коллекции
const removeCourse = name => {
  const index = courses.indexOf('React');
  courses.splice(3, 1);
};
// ---------------
removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// =========================================================
// изменяет имя на новое
const updateCourse = (oldName, newName) => {
  const index = courses.indexOf(oldName);
  courses.splice(index, 1, newName);
};
// ---------------
updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ----------------------------
|============================
*/
// ----------------------------
/** Решение: Артем
|============================
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// ----------------------------
// * addCourse(name) - добавляет курс в конец коллекции

function addCourse(course) {
  if (courses.includes(course)) {
    return `Вы уже имеете ${course} курс`;
  }
  courses.push(course);
}
// ------------
addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такой курс'

// ----------------------------
// * removeCourse(name) - удаляет курс из коллекции

// ------------
removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким имененем не найден'

// ----------------------------
// * updateCourse(oldName, newName) - изменяет имя на новое

// ------------
updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

|============================
*/
// ----------------------------
/** Решение: Георг
|============================

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// -----------------------------------------------
const addCourse = name => {
  if (courses.includes(name)) {
    console.log(`У вас уже есть курс ${name}`);
    return;
  }
  courses.push(name);
};
// -----------------------------------------------
const removeCourse = name => {
  if (!courses.includes(name)) {
    console.log(`Курс с именем ${name} не найден`);
    return;
  }
  const index = courses.indexOf(name);
  courses.splice(index, 1);
};
// -----------------------------------------------
const updateCourse = (oldName, newName) => {
  if (!courses.includes(oldName)) {
    console.log(`Курс с именем ${oldName} не найден`);
    return;
  }
  const index = courses.indexOf(oldName);
  courses.splice(index, 1, newName);
};
// -----------------------------------------------
addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такой курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким имененем не найден'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
|============================
*/
// ----------------------------
