// !--------------||| Конспект модуль-4 занятие-1 callback-функции, Метод forEach, Стрелочные функции, Різновиди коду. |||--------------!

/** Колбек-функції (Конспект)
|============================
Функції не відрізняються від чисел, рядків або масивів - це просто спеціальний тип даних (об'єкт вищого порядку), значення, яке можна зберігати у змінній або передавати у якості аргументу в іншу функцію.

function greet(name) {
  return `Ласкаво просимо ${name}.`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet('Манго'));                                           // Ласкаво просимо Манго.

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet);                                                    // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// --------------------------------------------------------------------
У першому лозі ми викликаємо функцію greet за допомогою круглих дужок, і в консоль виводиться результат її виконання. У другому лозі передається посилання на функцію, а не результат виклику (відсутні круглі дужки), тому в консоль виводиться її тіло. Це означає, що функцію можна присвоїти у змінну або передати як аргумент іншої функції.

! Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

! Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.


// Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);

Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в параметр callback і викликана всередині функції registerGuest за допомогою круглих дужок. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// --------------------------------------------------------------------
Інлайн колбеки
// --------------------------------------------------------------------
Якщо колбек-функція - маленька, і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Така функція буде доступна тільки у якості значення параметра і більше ніде в коді.

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн функцію greet у якості колбека
registerGuest('Манго', function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify у якості колбека
registerGuest('Полі', function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});

// --------------------------------------------------------------------
 Декілька колбеків
// --------------------------------------------------------------------
Функція може приймати будь-яку кількість колбеків. Наприклад, уявімо, що ми пишемо логіку прийняття дзвінків для телефону. Програма повинна увімкнути автовідповідач, якщо абонент - недоступний, або з'єднати дзвінок в іншому випадку. Доступність абонента будемо імітувати генератором випадкового числа, щоб між різними викликами функції можна було отримати різні результати.

function processCall(recipient) {
  const isRecipientAvailable = Math.random() > 0.5;                           // Імітуємо доступність абонента випадковим числом

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);   // Логіка активації автовідповідача
  } else {
    console.log(`З'єднуємо з ${recipient}, очікуйте...`);                     // Логіка прийняття дзвінка
  }
}

processCall('Манго');

Проблема такого підходу полягає у тому, що функція processCall робить занадто багато і прив'язує перевірку доступності абонента до двох заздалегідь визначених дій. Що буде, якщо в майбутньому, замість автовідповідача, потрібно буде залишати голограму?

Ми могли б написати функцію таким чином, щоб вона повертала якесь значення, і потім за результатом її виконання, робити перевірки і виконувати потрібний код. Але перевірки не стосуються зовнішнього коду і будуть його засмічувати.

Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки onAvailable і onNotAvailable, і викликала їх за умовою.

function processCall(recipient, onAvailable, onNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;                          // Імітуємо доступність абонента випадковим числом

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }
  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);                           // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);         // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);          // Логіка запису голограми
}

processCall('Манго', takeCall, activateAnsweringMachine);
processCall('Полі', takeCall, leaveHoloMessage);

Колбеки застосовуються для обробки дій користувача на сторінці, на момент обробки запитів на сервер, виконання заздалегідь невідомих функцій тощо. У цьому і полягає їх суть - це функції, призначені для відкладеного виконання.

// --------------------------------------------------------------------
Абстрагування повторення
// --------------------------------------------------------------------
Абстракція - приховування деталей реалізації. Дозволяє думати про задачі на вищому (абстрактному) рівні. Функції - це хороший спосіб побудови абстракцій.
Наприклад, скрипт виконує якусь дію певну кількість разів. З цією метою можна написати цикл for.

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

Чи можемо ми абстрагувати «робити щось N разів» у якості функції? - так, напишемо функцію, яка викликає console.log() N разів.

function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);

Але що робити, якщо ми хочемо виконати щось, крім логування чисел? Оскільки «робити щось» можна уявити функцією, а функції - це просто значення, ми можемо передати дію як аргумент.

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log('Logging value: ', value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаємо printValue як callback-функцію
repeat(3, printValue);
// 0
// 1
// 2

// Передаємо prettyPrint як callback-функцію
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
|============================
*/
// ==========================================================================================
/** Метод forEach
|============================
Метод forEach
Метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією даних.

массив.forEach(function callback(element, index, array) {
  // Тіло колбек-функції
});

Поелементо перебирає масив.
Викликає колбек-функцію для кожного елемента масиву.
Нічого не повертає.
Аргументи колбек-функції - це значення поточного елемента element, його індекс index і власне вихідний масив array. Можна оголошувати тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.

const numbers = [5, 10, 15, 20];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Індекс ${i}, значення ${numbers[i]}`);
}

// Метод перебирання forEach
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Індекс 0, значення 5  
// Індекс 1, значення 10  
// Індекс 2, значення 15  
// Індекс 3, значення 20 

Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, - це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
|============================
*/
// ==========================================================================================
/** Стрілочні функції
|============================
// -----------------------------------------
Стрілочні функції
// -----------------------------------------
Стрілочні функції мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек.

Усі стрілки створюються як функціональний вираз, і якщо функція - не анонімна, її необхідно присвоювати змінній.

// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

Ключове слово function не використовується, замість цього відразу зазначається оголошення параметрів, після нього - символ => і тіло функції.

Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками дорівнює = і стрілкою =>.

const add = (a, b, c) => {
  return a + b + c;
};

Якщо параметр один, його можна оголошувати без круглих дужок.

const add = a => {
  return a + 5;
};

Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

const greet = () => {
  console.log("Привіт!");
};

// -----------------------------------------
Неявне повернення
// -----------------------------------------
У стрілочної функції після символу => знаходиться її тіло. Існує два варіанти: з фігурними дужками і без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return). Такий синтаксис використовується у разі, якщо в тілі функції потрібно виконати ще якісь інструкції, крім повернення значення.

const add = (a, b, c) => a + b + c;

Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається, але доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, крім повернення значення.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;

// -----------------------------------------
Псевдомасив arguments
// -----------------------------------------
У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

// -----------------------------------------
Стрілочні функції як колбеки
// -----------------------------------------
Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо, якщо не потрібне тіло функції.

const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});

Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання. Це варто робити, якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);
|============================
*/
// ==========================================================================================
/** Різновиди коду
|============================
Різновиди коду
// -----------------------------------------
Імперативне програмування
// -----------------------------------------
Описує процес обчислення у вигляді заданої послідовності інструкцій, що змінюють стан програми. Опис того, як щось виконується.

Імперативний стиль програмування - це такий стиль, що надає машині набір детальних інструкцій для виконання задачі. Наприклад, цикл for, який надає точні вказівки для ітерації по індексам масиву.

Можна провести аналогію з рецептом приготування страви. Рецепт - це набір покрокових інструкцій для отримання бажаного результату.

// -----------------------------------------
Декларативне програмування
// -----------------------------------------
Описує те, що ми хочемо отримати у підсумку, а не спосіб це зробити. Порядок виконання і спосіб досягнення - неважливі.

Коли ми пишемо HTML-код, то декларативно, за допомогою тегів та атрибутів, описуємо те, що хочемо отримати у підсумку. Браузер читає цей код і сам виконує всі необхідні операції для створення HTML-елементів і розміщення їх на сторінці.

Можна провести аналогію з меню ресторану. Це декларативний набір страв, які можна замовити, подробиці приготування і подачі яких приховані.

food menu
Декларативний опис задачі наочніше і легше формулюється. Ми кажемо, що хочемо зробити, викликаючи метод або функцію. Її реалізація, найімовірніше, використовує імперативний код, але він прихований всередині і не ускладнює розуміння основного коду.

// -----------------------------------------
Імперативний vs декларативний
// -----------------------------------------
Розглянемо різницю підходів на прикладі базової операції фільтрації колекції. Напишемо код перебирання і фільтрації масиву чисел за певним критерієм.

// Імперативний підхід
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 3) {
    filteredNumbers.push(numbers[i]);
  }
}

console.log(filteredNumbers); // [4, 5]

Метод filter() приховує в собі логіку перебирання колекції і викликає callback-функцію, яку ми йому передаємо для кожного елемента, повертаючи масив елементів, що відповідають критерію.

// Декларативний підхід
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(value => value > 3);
console.log(filteredNumbers); // [4, 5]
|============================
*/

// !--------------||| Репета модуль-4 занятие-1 callback-функции, замыкания, стрелочные функции. |||--------------!

/** Callback function, инлайн колбэки. (файл 01-callback Репета ) 
|============================
Callback-функции. файл https://github.com/luxplanjay/js-22/blob/04-1-колбек-функции/js/01-callbacks.js

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
// Пример работы Callback-функциями.
// ------------------------------------------------------

// Пример работы Callback-функции -1:

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

// Пример работы Callback-функции-2:

// * Отложенный вызов: геолокация.



const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);

// ------------------------------------------------------

// Пример работы Callback-функции -3: (видео модуль-4-занятие-1 35:44)

//  * Отложенный вызов: интервалы 

const callback = function () {
  console.log('Через 2 секунды внутри колбека в таймауте');
};

console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
console.log('В коде после таймаута');

// ------------------------------------------------------

// Пример работы Callback-функции -4: (видео модуль-4-занят.-1 40:40)

//  * Отложенный вызов: http-запрос  
//  * - API URL: https://pokeapi.co/api/v2/pokemon

const onRequestSuccess = function (response) {
  console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
  console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

// ------------------------------------------------------

// Пример: (видео модуль-4-занят.-1 46:42)

//  * Фильтр

// Функция фильтр, для фильтрации масивов. По условию фильтрует масив.

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};
// Логика проверки.
// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

// ------------------------

// Пример: (видео 57:32)

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    // console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
|============================
*/
// ==========================================================================================
/** Замыкания. (файл 02-closures Репета) 
|============================
// Замыкания. (видео 1:04:20) файл 02-closures (https://github.com/luxplanjay/js-22/blob/04-1-колбек-функции/js/02-closures.js)

//  * Функция результатом своей работы может возвращать другую функцию.
//  *
//  * Возвращаемая функция во время вызова будет иметь доступ
//  * ко всем локальным переменным (области видимости)
//  * родительской функции (той из которой её вернули),
//  * это называется «замыкание».

const fnA = function (parameter) {
  const innerVariable = 'значение внутренней переменной функции fnA';

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log('Это вызов innerFunction');
  };

  return innerFunction;
};

const fnB = fnA(555);

fnB();

console.log(fnB);

// -------------------------------------------

// Пример-1 работы ЗАМЫКАНИЯ! (видео 1:12:40)

//  * Поварёнок

const makeDish = function (sheffName, dish) {
  console.log(`${sheffName} готовит ${dish}`);
};

makeDish('Mango', 'пирожок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'чай');

makeDish('Poly', 'котлеты');
makeDish('Poly', 'супик');
makeDish('Poly', 'кофе');

const makeSheff = function (name) {
  const innverVar = 555;
  const message = 'hello';

  const makeDish = function (dish) {
    console.log(message);
    console.log(innverVar);
    console.log(`${name} готовит ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff('Mango');

// console.dir(mango);

mango('котлеты');
mango('пирожок');

const poly = makeSheff('Poly');

// console.dir(poly);

poly('чай');
poly('омлет');

// console.dir(mango);

// -------------------------------------------

// Пример-2 работы ЗАМЫКАНИЯ! (видео 1:23:10)

//  * Округлятор 🤷‍♂️

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint); // 3
const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// ----- Пример без замыкания. -----

const rounder = function (number, places) {
  return Number(number.toFixed(places));
};

console.log(rounder(3.4567, 2));
console.log(rounder(3.4567, 3));
console.log(rounder(5.1234, 2));
console.log(rounder(3.4567, 3));

// ----- Пример этот-же, но с замыканием. -----

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

console.log(rounder2(3.4567));
console.log(rounder2(5.4512312312367));
console.log(rounder3(3.4567));
console.log(rounder2(5.1234));
console.log(rounder3(3.4567));
console.log(rounder3(10.67667));

// --------------------------------

// Пример-3 работы ЗАМЫКАНИЯ! (видео 1:30:55)

//  * Приватные данные и функции - скрытие реализации, интерфейс.

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
    raise(amount) {
      if (amount > 1000) {
        return 'Ты офигел?';
      }

      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Текущая зарпалата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());

// --------------------------------

const myLibFactory = function () {
    let value = 0;

    const add = function (num) {
        value += num;
    };

    return {
        add: add,
        getValue() {
            return value;
        },
    };
};

const myLib = myLibFactory();

console.dir(myLib.getValue);

console.log(myLib);
console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue());

|============================
*/
// ==========================================================================================
/** Стрелочные функции. В видео с Callback-функции. (видео м-4-з-1 / 1:47:05) (файл 03-arrow-fns Репета) https://github.com/luxplanjay/js-18/tree/07-1-arrow-fns/js
|============================
Стрелочные функции. файл 03-arrow-fns Репета (видео м-4-з-1 / 1:47:05) https://github.com/luxplanjay/js-18/tree/07-1-arrow-fns/js

 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта

// ----------------------------------------------------------------------------
* Если параметров 2 и больше, то скобки параметров должны быть.

const add = (a, b, c) => {
};

* Если параметр всего 1 то, то скобки параметров можно пропустить.

const add = a => {
};

* Если параметров вообще нет, то тогда обязательны пустые скобки параметров.

const add = () => {
};

// ---------------------

* Если у стрелочной функции в теле выполняется больше чем одна инструкция. 
* То тогда необходимо после стрелки ставить обычное тело функции { } и какой-то retur. Это называется "Явный возврат".

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

* Если же у стрелочной функции в теле выполняется всего одна инструкция возврата или одно значение какого-то выражения. 
* То тогда можно после стрелки поставить результат того выражения которое мі хотим вернуть, без тела функции { }. Это называется "Не явный возврат".

Это -------
const addArrow = (a, b, c) => {
    return a + b + c;
};

Заменяем на это -------
const add = (a, b, c) => a + b + c;

// ---------------------

// Что касается аргументов (arguments).

* Обычная функция.

const add = function (a, b, c) {
  console.log(arguments);
  return a + b + c;
};

* У стрелочнной функции нет локальной переменной arguments. Поэтому аргументы собираем через операцию ... rest.

const add = (...args) => {
  console.log(args);
  return a + b + c;
};

// ---------------------

* Обычная функция. Возврат обьекта.

const fnA = function () {
  return {
    a: 5,
  };
};
console.log(fnA());

*  Переписываем на стрелочную функцию. Возврат обьекта с явным возвратом.
const arrowFnA = () => {
  return {
    arrowA: 5,
  };
};
console.log(arrowFnA());

*  Переписываем на стрелочную функцию. Возврат обьекта с не явным возвратом.
const arrowFnA = () => ({ arrowA: 5 });

console.log(arrowFnA());

// ----------------------------------------------------------------------------

// Пример без стрелочной функции.

const add = function (a, b, c) {
  console.log(a, b, c);
  return a + b + c;
};
console.log(add(5, 10, 15));

// Переписываем это-же, но с стрелочной функцией.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
console.log(add(5, 10, 15));

// ----------------------------------------------------------------------------
// Пример замены обычной функции на стрелочную 1:59:18

// Обычная. ----------------
const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);

// Стрелочная. ----------------
const onGetPositionSuccess = position => {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = error => {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);
// ----------------------------------------------------------------------------

// Пример-2 замены обычной функции на стрелочную

// Обычная. Вариант-1  -----------------------------------

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

// Стрелочная. Вариант-2 -----------------------------------

const filter = (array, test) => {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = value => value >= 3;

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = value => value <= 4;

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

// Стрелочная. Вариант-3 стрелочная инлайн функция-----------------------------------

const filter = (array, test) => {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log(r3);
|============================
*/
// ==========================================================================================
/** Стрелочные функции. Отдельное видео. (видео Cтрелочные функции Репета). файл https://github.com/luxplanjay/js-18/blob/07-1-arrow-fns/js/02-context.js)
|============================
// ----------------------------------------------------------
Синтаксис стрелочных функций.
// ----------------------------------------------------------
* Если параметров много. Базовый вариант. 

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

* Если параметр один, то без скобок параметров.

const logMessage = message => {
  console.log(message);
};
console.log(logMessage('Привет'));

* Если параметров нетб то ставим пустые скобки параметров.

const greet = () => {
  console.log('Привет');
};
greet();

// ----------------------------------------------------------
Явный (explicit) и Неявный (implicit) возврат (return).
// ----------------------------------------------------------
* Явный возврат. Это значит есть тело функции и в этом теле функции указан return и что возвращать.

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

* Неявный возврат. Это если у стрелочной функции в теле выполняется всего одна инструкция возврата или одно значение какого - то выражения. 
* То тогда можно после стрелки поставить результат того выражения которое мы хотим вернуть, без тела функции { }. Это называется "Не явный возврат".

const add = (a, b) => a + b;

console.log(add(2, 3));

// ----------------------------------------------------------
Псевдо масив arguments.
// ----------------------------------------------------------
* У стрелок нету этой внутренней переменной arguments.

const add = () => {
  console.log(arguments);
};
add(2, 3, 4, 5, 6, 7); // Будет ошибка (ReferenceError: arguments is not defined)

* В этом случае используем операцию ...rest.
const add2 = (...args) => {
  console.log(args);
};
add2(2, 3, 4, 5, 6, 7); // Будет ошибка (ReferenceError: arguments is not defined)

// ----------------------------------------------------------
 * Контекст стрелки
 * Контекст внутри стрелки определяется местом ее объявления, а не вызова, и ссылается на контекст родительской функции.
// ----------------------------------------------------------

// ❌ Стрелочные функции не в блоке кода, а в глобальной области видимости всегда будут  undefined.

* Стелочная функция и this. (видео 10:10 / файл 02-context.js)

const showThis = () => {
  console.log('this in showThis: ', this);
};

showThis(); // this in showThis: window

const user = { name: 'Mango' };
user.showContext = showThis;

user.showContext(); // this in showThis: window

// ----------------------------------------------------------
Разница вызовов обычной функции и стрелочной функции внутри метода объекта.  (видео 12:34 / файл 02-context.js)
// ----------------------------------------------------------
const user = {
  fullName: 'Mango',
  showName() {
    console.log('this: ', this);
    console.log('this.fullName: ', this.fullName);

    // ❌ Обычная функция inner выдаст undefined потому что она объявлена(вызвана) внутри метода(функции showName) без какого либа объекта к которому она привязана.
    
    const inner = function () {
      console.log('this in inner: ', this);
    };                        

    // ✅ Стрелочная функция inner, ей не важно как ты её вызвал, она объявлена(вызвана) внутри метода(функции showName), который вызывается в контексте обьекта user и значит этот inner(стрелочная функция) тоже получит контекст этого метода(функции showName).
    
    const inner = () => {
      console.log('this in inner: ', this);
    };

    // ❌ Вызов обычной функции inner без объявления объекта. Она выдаст undefined.
    // ✅ Вызов стрелочной функции inner без объявления объекта(нормально). 

    inner();    // Вызов функции inner без привязки к кокому-то либо объекту.
  },
};

user.showName();

// ----------------------------------------------------------
// ❌ Ограничения. ❌
// ----------------------------------------------------------
* ❌ 💩 Стрелки как методы объекта.
// ----------------------------------------------------------
// Никогда не используйте стрелки как метод объекта.  (видео 15:15 / файл 02-context.js)

// ✅ Обычный метод объекта.
const user = {
  fullName: 'Mango',
  showName: function () {
    console.log('this: ', this);                         // this:  {fullName: 'Mango', showName: ƒ}
    console.log('this.fullName: ', this.fullName);       // this.fullName:  Mango
  },
};
user.showName(); // ✅

// ❌ 💩 Ниже код, никогда так не делайте! Не используйте стрелки как метод объекта. 
* Стрелки никогда не бывают методами объекта.
* Почему внутри этой стрелки будет undefined - Потому что это функция обьявлена в объекте, а объект (не блок кода) он находится в глобальной области видимости, и поэтому стрелка в глобальной области видимости находится тоже и навсегда запомнила undefined.

const user = {
  fullName: 'Mango',
  showName: () => {
    console.log('this: ', this);                         // ❌ this:  undefined
    console.log('this.fullName: ', this.fullName);       // ❌ TypeError: Cannot read properties of undefined (reading 'fullName')
  },
};
user.showName(); // 💩

// ----------------------------------------------------------
*  ❌ 💩 Стрелки не могут быть функциями конструкторами.
// ----------------------------------------------------------

const User = name => {
  this.name = name;
};

console.log(new User('Mango')); // ❌ TypeError: User is not a constructor

// ----------------------------------------------------------
*  Еще один более сложный пример со вложенными объектами. 
*  Почему нельзя использовать стрелки как метод объекта. (видео 23:50 / файл 02-context.js)
// ----------------------------------------------------------
* еще разок стрелка как метод обьекта.

// ✅ Вариант с обычной функцией.
const objA = {
  x: 5,
  showX() {
    console.log('this в objA.showX: ', this);              // this в objA.showX:  {x: 5, showX: ƒ}
    console.log(this.x);                                   // 5

    const objB = {
      y: 10,
      showThis() {
        console.log('this в objB.showThis: ', this);      // this в objB.showThis:  {y: 10, showThis: ƒ}
      },
    };

    objB.showThis();
  },
};

objA.showX();

// ❌ Вариант с стрелочной функцией.
const objA = {
  x: 5,
  showX() {
    console.log('this в objA.showX: ', this);                 // this в objA.showX:  {x: 5, showX: ƒ}
    console.log(this.x);                                      // 5

    const objB = {
      y: 10,
      // 💩
      showThis: () => {
        console.log('this в objB.showThis: ', this);         // this в objB.showThis:  {x: 5, showX: ƒ}  Это все еще ссылка на objA. ❌
      },
    };

    objB.showThis();
  },
};

objA.showX();

// =======================================================
refactoring (видео Cтрелочные функции Репета) (видео 27:50) (файл 03-refactoring.js) https://github.com/luxplanjay/js-18/blob/07-1-arrow-fns/js/03-refactoring.js
// =======================================================
* Цепочки вызовов - chaining
// -------------------------
const numbers = [1, 5, 2, 4, 3];

// Было.----- 
const greaterThenTwo = numbers.filter(function (num) {
  return num > 2;
});

// Стало.
const greaterThenTwo = numbers.filter(num => num > 2);

console.log(greaterThenTwo); // [5, 4, 3]

// -------------------------

// Было.-----
const multByTwo = greaterThenTwo.map(function(num) {
  return num * 3;
});

// Стало.
const multByTwo = greaterThenTwo.map(num => num * 3);
console.log(multByTwo);

// -------------------------

// Было.-----
const sorted = multByTwo.sort(function(a, b) {
  return a - b;
});

// Стало.
const sorted = multByTwo.sort((a, b) => a - b);
console.log(sorted);

// -------------------------

// Было.-----
const res = numbers
  .filter(function(num) {
    return num > 2;
  })
  .map(function(num) {
    return num * 3;
  })
  .sort(function(a, b) {
    return a - b;
  });

// Стало.
const res = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

console.log(res);

// ------------------------------------------------------
* Сортируем тех кто онлайн по рангу
// ------------------------------------------------------

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

// Было.-----
const onlineAndSorted = players
  .filter(function (player) {
    return player.isOnline;
  })
  .sort(function (prevPlayer, nextPlayer) {
    return prevPlayer.rank - nextPlayer.rank;
  });

// Стало.
const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

console.table(onlineAndSorted);

// ==============================================================================
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// ------------------------------------------------------
* Увеличиваем кол-во поинтов каждого игрока

// Было.-----
const upatedPlayers = players.map(function (player) {
  return {
    ...player,
    points: player.points + player.points * 0.1,
  };
});

// Стало. Вариант-1 явный возврат.
const upatedPlayers = players.map(player => {
  return {
    ...player,
    points: player.points + player.points * 0.1,
  };
});

// Стало. Вариант-2 явный возврат с скобками () выражения.
const upatedPlayers = players.map(player => ({
  ...player,
  points: player.points + player.points * 0.1,
}));

console.table(upatedPlayers);

// ------------------------------------------------------
* Увеличиваем кол-во часов игрока по id

const playerIdToUpdate = 'player-3';

// Было.-----
const updatedPlayers = players.map(function(player) {
  if (player.id === playerIdToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }

  return player;
});

// Стало. Вариант-1 явный возврат.
const updatedPlayers = players.map(player => {
  if (player.id === playerIdToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }

  return player;
});

// Стало. Вариант-2 явный возврат с тернарником.
const updatedPlayers = players.map(player => {
  return player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player;
});

// Стало. Вариант-3 неявный возврат с тернарником.
const updatedPlayers = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player
);

console.table(updatedPlayers);

|============================
*/
// ==========================================================================================

// !--------------||| Олег модуль-4 занятие-1 callback-функции, Метод forEach, Стрелочные функции, Різновиди коду. |||--------------!

/** callback-функции.
|============================

function callMe(callback) {
  if (true) {
    callback();
  }
}

callMe(function () {
  console.log('HELLO-1');
});
callMe(function () {
  console.log('HELLO-2');
});
callMe(function () {
  console.log('HELLO-3');
});
callMe(function () {
  console.log('HELLO-4');
});

// -------------------------------------------------------------

function validateValue(value, onSuccess, onError) {
  if (value !== null && value !== undefined && value !== '') {
    onSuccess('HELLO');
  } else {
    onError('GOOD BYE', value);
  }
}

// Вызов с обычной функцией callback
validateValue(
  100,
  function () {
    console.log('Number is correct');
  },
  function () {
    console.log('Number is incorrect');
  }
);

// Вызов с стрелочной функцией callback
validateValue(
  null,
  message => console.log(message, 'Number is correct'),
  (message, second) => console.log(message, second, 'Is incorrect')
);

// Вызов с обычной функцией callback
validateValue(
  '',
  function () {
    console.log('String is correct');
  },
  function () {
    console.log('String is incorrect');
  }
);

// -------------------------------------------------------------

// ---------- Функція вищого порядку синтаксис (Варіант-1)
function validateValue(value, onSuccess, onError) {
  if (value !== null && value !== undefined && value !== '') {
    onSuccess('HELLO');
  } else {
    onError('GOOD BYE', value);
  }
}
// ---------- Функція вищого порядку синтаксис (Варіант-2) Она же
function validateValue(value, onSuccess, onError) {
  if (value !== null && value !== undefined && value !== '') onSuccess('HELLO');
  else onError('GOOD BYE', value);
}

// ---------- Вызов с обычной функцией callback
validateValue(
  100,
  function () {
    console.log('Number is correct');
  },
  function () {
    console.log('Number is incorrect');
  }
);
// ---------- Вызов с обычной функцией callback
validateValue(
  '',
  function () {
    console.log('String is correct');
  },
  function () {
    console.log('String is incorrect');
  }
);

// ---------- Вызов с стрелочной функцией callback (Вариант-1)
validateValue(
  100,
  () => console.log('Number is correct'),
  () => console.log('Number is incorrect')
);

// ---------- Вызов с стрелочной функцией callback  (Вариант-2)
validateValue(
  null,
  message => console.log(message, 'Number is correct'),
  (message, second) => console.log(message, second, 'Is incorrect')
);
|============================
*/
// ==========================================================================================
/** Метод forEach (видео 26:55)
|============================
const arr = [1, 2, 3];

// ---------- Обычный for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log('______');

// ---------- for of
for (const number of arr) {
  console.log(number);
}
console.log('______');

// ---------- forEach

// Пример-1
// arr.forEach(number => console.log(number));

// Пример-2
const customForEach = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
};

const b = () => 'HELLO';
const a = callback => {};

a(b);

customForEach(arr, number => console.log(number, 'HELLO'));
|============================
*/

// ---------- ЗАДАЧИ: ----------

/** Example 1 - Коллбек функції
|============================
// Example 1 - Коллбек функції
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id
// та викликає коллбек передаючи йому створений об'єкт.

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
|============================
*/
// ---------------------------------------
/** Решение-Example 1 - Коллбек функції
|============================
// ---------- Вариант-1
function createProduct(obj, callback) {
  const newObj = {
    ...obj,
    id: Math.random,
  };
  callback(newObj);
}

// ---------- Вариант-2
const createProduct = (obj, callback) => {
  return callback({ ...obj, id: Math.random() });
};

// ---------- Вариант-3
const createProduct = (obj, callback) =>
  callback({ ...obj, id: Math.random() });
  
// ---------- Вариант-4
const createProduct = (obj, callback) =>
  callback({ ...obj, id: Math.random() });

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// Коллбек функції
const logProduct = product => console.log(product);
const logTotalPrice = product => console.log(product.price * product.quantity);

// Вызов
createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
|============================
*/
// ==========================================================================================
/** Example 2 - Коллбек функції (Видео 1:00:00)
|============================
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), 
// де перший параметр це сума операції, а другий та третій - коллбеки.
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

const TRANSACTION_LIMIT = 1000;

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
|============================
*/
// ---------------------------------------
/** Решение-Example 2 - Коллбек функції
|============================
const TRANSACTION_LIMIT = 1000;

const account = {
  balance: 1000,

  withdraw(amount, onSuccess, onError) {
    // ---------- Вариант-1 синтаксис
    if (amount <= 0) onError('Amount is less than zero');
    else if (amount > TRANSACTION_LIMIT) onError('Amount is more than limit');
    else if (amount > this.balance) onError('Amount is more than balance');
    else {
      this.balance -= amount;
      onSuccess('Withdraw is good! Balance: ' + this.balance);
    }
    // ---------- Вариант-2 синтаксис
    // if (amount <= 0) {
    //   onError('Amount is less than zero');
    // } else if (amount > TRANSACTION_LIMIT) {
    //   onError('Amount is more than limit');
    // } else if (amount > this.balance) {
    //   onError('Amount is more than balance');
    // } else {
    //   this.balance -= amount;
    //   onSuccess('Withdraw is good! Balance: ' + this.balance);
    // }
  },

  deposit(amount, onSuccess, onError) {
    if (amount <= 0) onError('Amount is less than zero');
    else if (amount > TRANSACTION_LIMIT) onError('Amount is more than limit');
    else {
      this.balance += amount;
      onSuccess('Deposit is good! Balance: ' + this.balance);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

// account.withdraw(-2000, handleSuccess, handleError);
// account.withdraw(1500, handleSuccess, handleError);
// account.withdraw(500, handleSuccess, handleError);
// account.withdraw(1000, handleSuccess, handleError);

// account.deposit(10000, handleSuccess, handleError);
// account.deposit(-10000, handleSuccess, handleError);
// account.deposit(500, handleSuccess, handleError);
// -----
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
|============================
*/
// ==========================================================================================
/** Example 3 - Коллбек функції
|============================
Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. 
// Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);
|============================
*/
// ---------------------------------------
/** Решение-Example 3 - Коллбек функції
|============================

// ----------Вариант-1 Стрелочная функция синтаксис.
// const each = (arr, callback) => {
//   const result = [];
// };

// ----------Вариант-2 Обычная функция синтаксис.
function each(arr, callback) {
  const result = [];

  // -----Вариант-1 с for обычным.
  for (let i = 0; i < arr.length; i += 1) {
    const res = callback(arr[i]);
    result.push(res);
  }
  
  // -----Вариант-2 с forEach
  arr.forEach(function (number) {
    const res = callback(number);
    result.push(res);
  });

  // -----Вариант-3 с forEach
  arr.forEach(number => result.push(callback(number)));
  return result;
}

// ------ Вызов.
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
|============================
*/
// ==========================================================================================
/** Example 4 - Стрілочні функції
|============================
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

function createProduct(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
|============================
*/
// ---------------------------------------
/** Решение-Example 4 - Стрілочні функції
|============================
const createProduct = (partialProduct, callback) => {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
};

const logProduct = product => console.log(product);

const logTotalPrice = product => console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
|============================
*/
// ==========================================================================================
/** Example 5 - Стрілочні функції
|============================
// Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
|============================
*/
// ---------------------------------------
/** Решение-Example 5 - Стрілочні функції
|============================
const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

const handleSuccess = message => console.log(`✅ Success! ${message}`);

const handleError = message => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
|============================
*/
// ==========================================================================================
/** Example 6 - Інлайн стрілочні функції
|============================
// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);
|============================
*/
// ---------------------------------------
/** Решение-Example 6 - Інлайн стрілочні функції
|============================
const each = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
};

console.log(each([64, 49, 36, 25, 16], value => value * 2));
console.log(each([64, 49, 36, 25, 16], value => value - 10));
console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
|============================
*/
// ==========================================================================================
/** Example 7 - Метод forEach
|============================
// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
|============================
*/
// ---------------------------------------
/** Решение-Example 7 - Інлайн стрілочні функції
|============================
// ----------Вариант-1
const logItems = items => {
  console.log(items);

  items.forEach((number, index) => console.log(`${index + 1} - ${number}`));
};

// ----------Вариант-2
const logItems = (items = []) => {
  console.log(items);

  items.forEach((item, i) => {
    console.log(`${i + 1} - ${item}`);
  });
};

// Вызов
logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
|============================
*/
// ==========================================================================================
/** Example 8 - Метод forEach
|============================
// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
|============================
*/
// ---------------------------------------
/** Решение-Example 8 - Метод forEach
|============================
function printContactsInfo({ names = '', phones = '' }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((item, i) => {
    console.log(`${item}: ${phoneList[i]}`);
  });
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
|============================
*/
// ==========================================================================================
/** Example 9 - Метод forEach
|============================
// Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function calсulateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
|============================
*/
// ---------------------------------------
/** Решение-Example 9 - Метод forEach
|============================
const calсulateAverage = (...args) => {
  let total = 0;

  args.forEach(item => (total += item));

  return total / args.length;
};

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
|============================
*/
// ==========================================================================================

// !--------------||| Завдання-Артем / Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach |||--------------!

/** 
|============================

|============================
*/
// ---------------------------------------
/**
|============================

|============================
*/
// ==========================================================================================
/** Теория
|============================
// Пример из кахута.

function foo(callback) {
  callback(10);
  // в callback передается undefind из функции logger, поэтому будет ОШИБКА!
}

function logger(value) {
  console.log(value); // 5 // undefind
}

foo(logger(5));

// ------------------------------------------------------------------------

|============================
*/
// ==========================================================================================
