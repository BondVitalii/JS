// :::::::::::::::||| Конспект модуль-3 Об'єкти. Операції rest та spread |||:::::::::::::::

/** spread: передача аргументів. Конспект. 
|============================
// spread: передача аргументів
// ===========================
// Операція ... (spread) дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень. Звичайно, існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки.

// Можна навести аналогію з ящиком яблук. Поставивши ящик на підлогу, не виймаючи з нього яблука, отримаємо аналог масиву значень. Якщо висипати яблука з ящика на підлогу, відбудеться розподіл - набір окремих значень.

// Відмінність лише одна - в JavaScript розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента. Після розподілу залишиться і ящик повний яблук, і копія кожного яблука на підлозі.

// Наприклад, метод Math.max(аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.
// --------------------------------
const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25
// --------------------------------
// Тобто запис Math.max(...[14, -4, 25, 8, 11]), після інтерпретації перетворюється у Math.max(14, -4, 25, 8, 11) - синтаксис ... повертає розпакований масив, тобто розподіляє його елементи у якості окремих аргументів.
//
// ===========================
// spread: створення нового масиву
// ===========================
// Операція ... (spread) дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий. Раніше для цього використовували методи slice() і concat(), але операція розподілу дозволяє зробити те саме у коротшій формі.
// --------------------------------
const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// --------------------------------
// В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити його точну копію. Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps - розподіляємо його в іншу колекцію. За такої умови, ящик temps не зміниться, в ньому все ще будуть яблука, а в новому ящику - їх точні копії.

// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий. Оригінальні ящики (масиви) не зміняться, а в новому будуть копії усіх їх яблук (елементів). Порядок розподілу важливий - він впливає на порядок елементів у новій колекції.
// --------------------------------
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]
//
// ===========================
// spread: створення нового об'єкта
// ===========================
// Операція ... (spread) дозволяє розподілити властивості довільної кількості об'єктів в один новий.
// --------------------------------
const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }
// --------------------------------
// Порядок розподілу має значення. Імена властивостей об'єкта - унікальні, тому властивості об'єкта, що розподіляється, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.
// --------------------------------
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
// --------------------------------
// Якби яблука в ящику мали наліпки з позначками, то в одному ящику не може бути двох яблук з однаковими позначками. Тому, пересипаючи другий ящик, усі яблука, позначки яких будуть збігатися з тими, що вже знаходяться у новому ящику, замінять існуючі.

// Під час розподілу можна додавати властивості у довільне місце. Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.
// --------------------------------
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
//
// ===========================
// rest: збирання всіх аргументів функції
// ===========================
// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію. Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині операції присвоювання, а збирання - коли ... знаходиться в її лівій частині.

// Повернемось до аналогії з яблуками. Якщо на підлозі лежать яблука і у нас є порожній ящик, то операція rest дозволить «зібрати» яблука в ящик. Водночас, оригінальні яблука залишаться на підлозі, а в ящику буде копія кожного яблука.

// Одна зі сфер застосування операції rest - це створення функцій, які можуть приймати будь-яку кількість аргументів.

// Як оголосити параметри функції таким чином,
// щоб можна було передати будь-яку кількість аргументів?
// --------------------------------
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
// --------------------------------
// Якщо прибрати увесь «синтаксичний шум» і подивитися на аргументи і параметри функції, то аргументи знаходяться у правій частині операції присвоювання, а параметри - у лівій, тому що значення аргументів присвоюються оголошеним параметрам. Отже, можна «зібрати» всі аргументи функції в один параметр, використовуючи операцію rest.
// --------------------------------
function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
// --------------------------------
// Ім'я параметра може бути довільним. Найчастіше його називають args, restArgs або otherArgs - скорочено від arguments.

// ===========================
// rest: збирання частини аргументів функції
// ===========================
// Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання».
// --------------------------------
function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
// --------------------------------
// Всі аргументи, для яких будуть оголошені параметри, передадуть їм свої значення, інші аргументи будуть поміщені в масив. Операція rest збирає решту усіх аргументів, а тому повинна бути останньою у підписі функції, інакше виникне помилка.
|============================
*/
// _______________________________________________________
/** Деструктуризація об'єктів. Конспект.
|============================
// Під час розробки програм дані приходять, як правило, у вигляді масивів і об'єктів, значення яких необхідно записати у локальні змінні. Для того, щоб робити це максимально просто, в сучасному стандарті існує синтаксис деструктуризованого присвоювання.

// Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? 'публічному' : 'закритому';
const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

console.log(book);                            // {title: 'The Last Kingdom', author: 'Bernard Cornwell', genres: Array(2), isPublic: true, rating: 8.38}

console.log(accessType);                     // публічному

console.log(message);                        // Книга The Last Kingdom автора Bernard Cornwell з рейтингом 8.38 знаходиться в публічному доступі.

Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні. Це робить код в місці їх використання менш «шумним».

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризуємо
const { title, author, isPublic, rating, coverImage } = book;
console.log(coverImage);                       // undefined

const accessType = isPublic ? 'публічному' : 'закритому';
const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

console.log(book);                             // {title: 'The Last Kingdom', author: 'Bernard Cornwell', genres: Array(2), isPublic: true, rating: 8.38}

console.log(accessType);                       // публічному

console.log(message);                          // Книга The Last Kingdom автора Bernard Cornwell з рейтингом 8.38 знаходиться в публічному доступі.

// Деструктуризація завжди знаходиться у лівій частині операції присвоєння. Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта. Якщо ім'я змінної та ім'я властивості збігаються, відбувається присвоювання, в іншому випадку, їй буде присвоєно undefined. Порядок оголошення змінних у фігурних дужках - неважливий.

// Значення за замовчуванням

// Для того, щоб уникнути присвоєння undefined під час деструктуризації неіснуючих властивостей об'єкта, можна задати змінним значення за замовчуванням, які будуть присвоєні лише у тому випадку, якщо об'єкт не містить властивості з таким ім'ям.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title);                                  // The Last Kingdom
console.log(author);                                 // Bernard Cornwell
console.log(coverImage);                             // https://via.placeholder.com/640/480

// ---------------------------------------------------------
// Зміна імені змінної
// ---------------------------------------------------------
// Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості. Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, після чого ставимо двокрапку і пишемо ім'я змінної, в яку необхідно помістити значення цієї властивості.

const firstBook = {
  title: 'The Last Kingdom',
  coverImage:
    'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
} = firstBook;

console.log(firstTitle);                                 // The Last Kingdom
console.log(firstCoverImage);                            // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// -----------------------------

const secondBook = {
  title: 'Сон смішної людини',
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
} = secondBook;

console.log(secondTitle);                              // Сон смішної людини
console.log(secondCoverImage);                        // https://via.placeholder.com/640/480

// Такий запис читається як «Створити змінну firstTitle, в яку помістити значення властивості title з об'єкта firstBook» тощо.

// ---------------------------------------------------------
// Деструктуризація в циклах
// ---------------------------------------------------------
// Перебираючи масив об'єктів циклом for...of, утворюються багаторазові звернення до властивостей об'єкта.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

// Для того, щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

// Якщо в об'єкті небагато властивостей, можна виконати деструктуризацію безпосередньо у місці оголошення змінної book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

// ---------------------------------------------------------
// Глибока деструктуризація
// ---------------------------------------------------------
// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
|============================
*/
// _______________________________________________________
/** Деструктуризація масивів. Конспект.
|============================
// Деструктуризація масивів.

// Деструктуризоване присвоювання можна використовувати і для масивів, але з деякими особливостями.

// Замість фігурних дужок {} використовуються квадратні [].
// Змінним, зазначеним у квадратних дужках [], будуть послідовно присвоюватися значення елементів масиву.

// Наприклад, є масив кольорів, з якого потрібно отримати значення кожної складової кольору в окремих змінних.

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// Після ключового слова const або let ставимо квадратні дужки, як і у випадку з оголошенням масиву. Всередині дужок, через кому, вказуємо імена змінних, в які будуть поміщені значення масиву.

// Внаслідок такого запису будуть створені 3 змінні, і в них будуть поміщені елементи в нумерованому порядку - від 0 і до кінця масиву.

// Під час деструктуризації масивів, значення змінної може присвоюватися після її оголошення. На практиці це рідко використовується.

const rgb = [200, 255, 100];
let red, green, blue;

[red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// Якщо змінних більше, ніж елементів масиву, їм буде присвоєно undefined, тому можна вказувати значення за замовчуванням.

const rgb = [200, 100, 255];

const [red, green, blue, alfa = 0.3] = rgb;

console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// Іноді з масиву необхідно деструктуризувати тільки перші N елементів, а інші зберегти в одну змінну у вигляді масиву. Деструктуруючи масив, можна розпакувати і присвоїти іншу частину елементів масиву змінної, використовуючи операцію ... (rest).

const rgb = [200, 255, 100];

const [red, ...colors] = rgb;

console.log(red); // "200"
console.log(colors); // [255, 100]

// Елементи можна пропускати. Припустимо, з масиву rgb необхідно взяти тільки останнє значення. На практиці ця можливість рідко використовується.

const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`); // "Blue: 255"
|============================
*/
// _______________________________________________________
/** Патерн «Об'єкт параметрів»  Конспект.
|============================
// Патерн «Об'єкт параметрів»
// Якщо функція приймає більше двох-трьох аргументів, дуже просто заплутатись, в якій послідовності і що передавати. В результаті виходить дуже неочевидний код в місці її виклику.

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Робимо щось з параметрами
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}
// ❌ Що таке 736? Що таке 10283? Що таке true?
doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// Патерн «Об'єкт параметрів» допомагає вирішити цю проблему, замінюючи набір параметрів всього одним об'єктом з іменованими властивостями.

function doStuffWithBook(book) {
  // Робимо щось з властивостями об'єкта
  console.log(book.title);
  console.log(book.numberOfPages);
  // І так далі
}

// У такому випадку, під час її виклику передаємо один об'єкт з необхідними властивостями.

// ✅ Все зрозуміло
doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

// Ще один плюс у тому, що можна деструктуризувати об'єкт в параметрі book. Це можна зробити в тілі функції.

function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}

// Або відразу в сигнатурі (підписі) функції - немає різниці.

function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  // І так далі
}
|============================
*/

// :::::::::::::::||| Репета модуль-3 занятие 1 Обьекты |||:::::::::::::::

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
/** Перебор объекта. for...in и Object.keys|values|entries
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
// - Масив объектов items[], в нем лежат товары (объекты) в виде { name: '🍎', price: 50 }.
//  * - items: []
// - Метод getItems() возвращает свойства items
//  * - getItems()
// - Метод add() добавляет объект(карточку{ name: '🍎', price: 50 }) в масив объектов items.
//  * - add(product)
// - Метод remove() удаляет объект по свойству name из масива items.
//  * - remove(productName)
// - Метод clear() полностью очищает корзину товаров.
//  * - clear()
// - Метод countTotalPrice() возвращает общую цену товаров в корзине.
//  * - countTotalPrice()
// - Метод increaseQuantity() увеличить кол-во(quantity) на 1 если продукт уже есть в корзине.
//  * - increaseQuantity(productName)
// - Метод decreaseQuantity() уменьшить кол-во(quantity) на 1 если продукта есть в корзине.
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
// ==================================
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

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());
|============================
*/

// :::::::::::::::||| Задачи Репета |||:::::::::::::::

/** Задача-1  * Ищем друга по имени
|============================
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

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
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

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
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

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
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

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
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

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
console.log(Object.keys(x).length); // 4
|============================
*/

// :::::::::::::::||| Артем-Олег Модуль-3 занятие 1 Обьекты |||:::::::::::::::

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
// ___________________________________________
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

// :::::::::::::::||| Задачи Олег и Артем |||:::::::::::::::

/** Example 1 - Основи об'єктів
|============================
// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
// * додає поле mood зі значенням 'happy'
// * замінює значення hobby на 'skydiving'
// * замінює значення premium на false
// * виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
|============================
*/
// ----------------------------
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
// ----------------------------
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
/** Example 2 - метод Object.values()
|============================
// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390.
// Якщо об'єкт salaries порожній, то результат має бути 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
|============================
*/
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
/** Example 3 - Масив об'єктів
|============================
// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName),
// яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
// -------------
const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Смарагд', price: 1000, quantity: 2 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Сапфір', price: 100, quantity: 15 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];
|============================
*/
// ----------------------------
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
// ----------------------------
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
/** Example 4 - Комплексні завдання (задание задачи).
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
// ----------------------------
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
// ----------------------------
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
// ----------------------------
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
// ----------------------------
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

// :::::::::::::::||| Репета модуль-3 занятие-6 Деструктуризація об'єктів |||:::::::::::::::

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

// Это операция rest, когда ты с начала забираешь кокую-то часть свойств в локальные переменные пример(name, tag, location), а все остальное что не деструктуризировал забираешь в в переменную restProps.

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps); //В эту переменную войдет все что мы не деструктуризировали из profile
// console.log(profile);
|============================
*/
// _______________________________________________________
/** Паттерн «Обьект настроек»
|============================
//  * Паттерн «Обьект настроек»
//  * - деструктуризация параметра-обьекта в подписи функции
//  * - rest при деструктуризации в подписи

// Вариант-1 Деструктуризация объекта может быть в теле функции (пример ниже).
// ---------------------------------------------
const showProfileInfo = function (userProfile) {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userProfile;

  console.log(name, tag, location, avatar, followers, views, likes);
};

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

showProfileInfo(profile);

// Вариант-2 Деструктуризация объекта может быть проведена в подписи функции (пример ниже).
// ---------------------------------------------
const showProfileInfo = function ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  console.log(name, tag, location, avatar, followers, views, likes);
};

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

showProfileInfo(profile);

// Вариант-3 Деструктуризация объекта может быть проведена в подписи функции (пример ниже).
// ---------------------------------------------
const showProfileInfo = function ({ name, tag, location, avatar, stats }) {
  console.log(name, tag, location, avatar, stats);
};

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

showProfileInfo(profile);

// Вариант-4 Деструктуризация объекта в теле функции с применением ...rest (пример ниже).
// ---------------------------------------------
const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps } = userProfile;
  // console.log(name, tag, location, avatar, followers, views, likes);
  console.log(restProps);
};

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

showProfileInfo(profile);

|============================
*/
// _______________________________________________________
/** Пример деструктуризации на карточке
|============================
const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://i.pravatar.cc/100?img=1',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makeProfileMarkup = function (userProfile) {
  const {
    avatar = 'https://i.pravatar.cc/400?img=6',
    name,
    tag,
    location = 'Planet Earth',
    stats: { followers, views, likes },
  } = userProfile;

  return `<div>
    <img src="${avatar}" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
      <li>Followers: ${followers}</li>
      <li>Views: ${views}</li>
      <li>Likes: ${likes}</li>
    </ul>
  </div>`;
};

const markup = makeProfileMarkup(profile);

console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup);
|============================
*/
// _______________________________________________________
/** (ЗАДАЧА) Работем с коллекцией товаров в корзине: 
|============================
// * Работем с коллекцией товаров в корзине:
// - Масив объектов items[], в нем лежат товары (объекты) в виде { name: '🍎', price: 50 }.
//  * - items: []
// - Метод getItems() возвращает свойства items
//  * - getItems()
// - Метод add() добавляет объект(карточку{ name: '🍎', price: 50 }) в масив объектов items.
//  * - add(product)
// - Метод remove() удаляет объект по свойству name из масива items.
//  * - remove(productName)
// - Метод clear() полностью очищает корзину товаров.
//  * - clear()
// - Метод countTotalPrice() возвращает общую цену товаров в корзине.
//  * - countTotalPrice()
// - Метод increaseQuantity() увеличить кол-во(quantity) на 1 если продукт уже есть в корзине.
//  * - increaseQuantity(productName)
// - Метод decreaseQuantity() уменьшить кол-во(quantity) на 1 если продукта есть в корзине.
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
// ==================================
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

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());
|============================
*/
// --------------------------
/** (РЕШЕНИЕ-1 Мой вариант) Работем с коллекцией товаров в корзине:(с quantity одного товара).
|============================
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    // for (let i = 0; i < this.items.length; i += 1) {
    //   if (productName === this.items[i].name) {
    //     this.items.splice(i, 1);
    //   }
    // }
    // const { items } = this;
    // for (let i = 0; i < items.length; i += 1) {
    //   if (productName === items[i].name) {
    //     items.splice(i, 1);
    //   }
    // }
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        console.log(
          'В корзине есть такой продукт, добавляем + 1',
          this.items[i].name
        );
        this.items[i].quantity += 1;
        return;
      }
    }
    console.log('В корзине нет такого продукта', productName);
  },
  decreaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        console.log(
          'В корзине есть такой продукт, добавляем + 1',
          this.items[i].name
        );
        this.items[i].quantity -= 1;
        return;
      }
    }
    console.log('В корзине нет такого продукта', productName);
  },
};

// console.table(cart.getItems());
console.log(cart.getItems()); // []

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍎');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.clear();
// console.table(cart.getItems());
// console.log(cart.getItems());

cart.increaseQuantity('🍇');
cart.increaseQuantity('🍎');
cart.increaseQuantity('🍋');

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
|============================
*/
// --------------------------
/** (РЕШЕНИЕ-2) Работем с коллекцией товаров в корзине: (без quantity - кол-во одного товара).
|============================
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    // for (let i = 0; i < this.items.length; i += 1) {
    //   if (productName === this.items[i].name) {
    //     this.items.splice(i, 1);
    //   }
    // }
    // const { items } = this;
    // for (let i = 0; i < items.length; i += 1) {
    //   if (productName === items[i].name) {
    //     items.splice(i, 1);
    //   }
    // }
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  },
  increaseQuantity(productName) {
    
  },
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());
console.log(cart.getItems()); // []

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
|============================
*/
// --------------------------
/** (РЕШЕНИЕ-3) Работем с коллекцией товаров в корзине: (Решение по видео) 
|============================
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }

const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    // console.table(this.items);
    for (const item of this.items) {
      if (item.name === product.name) {
        // console.log('Такой продукт уже есть', product.name);
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },

  remove(productName) {
    // ------------------------------------
    // Вар.-1 без локальной переменной item.
    // ------------------------------------
    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        // console.log('Нашли такой продукт', productName);
        this.items.splice(i, 1);
      }
    }
    // ------------------------------------
    // Вар.-2 с создаением локальной переменной item.
    // ------------------------------------
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (productName === item.name) {
        // console.log('Нашли такой продукт', productName);
        this.items.splice(i, 1);
      }
    }
    // ------------------------------------
    // Вар.-3 с деструктуризацией переменной.
    // ------------------------------------
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = this.items[i];
      if (productName === name) {
        // console.log('Нашли такой продукт', productName);
        items.splice(i, 1);
      }
    }
  },

  clear() {
    this.items = [];
  },
  countTotalPrice() {
    // ------------------------------------
    // Вар.-1 без деструктуризации.
    // ------------------------------------
    let sum = 0;
    for (const item of this.items) {
      sum += item.price * item.quantity;
    }
    return sum;
    // ------------------------------------
    // Вар.-2 с деструктуризацией.
    // ------------------------------------
    const { items } = this;
    let total = 0;
    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

// cart.remove('🍋');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
|============================
*/
// --------------------------
/** (РЕШЕНИЕ Репета с репозитория) Работем с коллекцией товаров в корзине: 
|============================
//  * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)

//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
// ==================================
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      if (productName === item.name) {
        console.log('нашли такой продукт ', productName);
        console.log('индекс: ', i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('🍇');
console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

|============================
*/

// :::::::::::::::||| Олег модуль-3 занятие-6 Деструктуризація об'єктів |||:::::::::::::::

/** Что такое Date.now() ? и new Date() ?
|============================
// Что такое Date.now() ? 
// Date.now(); - Возвращает число секунд с 1970 года.

// Что такое new Date() ? 
// new Date(); - Возвращает число, месяц, текущее время. // Tue Jun 04 2024 15:01:47 GMT+0300 (Восточная Европа, летнее время)
|============================
*/

// :::::::::::::::||| Артем модуль-3 занятие-6 Деструктуризація об'єктів |||:::::::::::::::

/** Что такое Date.now() ? и new Date() ?
|============================
// Что такое Date.now() ? 
// Date.now(); - Возвращает число секунд с 1970 года.

// Что такое new Date() ? 
// new Date(); - Возвращает число, месяц, текущее время. // Tue Jun 04 2024 15:01:47 GMT+0300 (Восточная Европа, летнее время)
|============================
*/
// ___________________________________
/** Деструктуризация обьектов.
|============================
// -----------------------------------------------
// Деструктуризация объектов.
// -----------------------------------------------
const user = {
  name: 'Test',
  age: 11,
  skills: {
    html: true,
    css: true,
    js: false,
  },
};

const { age, name } = user;

console.log(age); // 11
console.log(name); // Test


// -----------------------------------------------
// Изменение имени свойства при деструктуризации.
// -----------------------------------------------
//  Например если название переменной где-то уже дублируется. На примере name.

const user = {
  name: 'Test',
  age: 11,
  skills: {
    html: true,
    css: true,
    js: false,
  },
};

const name = 'value';

// const { age, name } = user; // Ошибка. Невозможно повторно объявить переменную "name".

const { age, name: userName } = user; // Переименовываем name на новое название userName.
console.log(age); // 11
console.log(name); // value
console.log(userName); // Test

// -----------------------------------------------
// Глубокая диструктуризация. (Вложеная диструктуризация).
// -----------------------------------------------
// Если нам нужно что-то достать не только из первой глубины

const user = {
  name: 'Test',
  age: 11,
  skills: {
    html: true,
    css: true,
    js: false,
  },
};

// const {
//   name,
//   skills: { js },
// } = user;

// console.log(js); // false

// -------------------------------------
// Независимо от того какой степени вложеность, у нас есть возможность изменить название.

const {
  name,
  skills: { js: userJS, html },
} = user;

console.log(userJS, html); // false true

// -------------------------------------
// Бывают такие случаи когда не только две вложености, а например в обьекте skills еще есть какойто объект.

const user = {
  name: 'Test',
  age: 11,
  skills: {
    html: true,
    css: true,
    js: false,
    cars: {
      audi: 'A6',
      bmw: 'x5',
    },
  },
};

const {
  name,
  skills: {
    cars: { audi },
  },
} = user;

console.log(audi); // A6

// -------------------------------------
// диструктуризация нескольких вложеностей в глубину.

const user = {
  name: 'Test',
  age: 11,
  skills: {
    html: true,
    css: true,
    js: false,
    cars: {
      audi: 'A6',
      bmw: 'x5',
    },
  },
};

const {
  name,
  skills: {
    js,
    html,
    css: sass,
    cars: { audi },
  },
} = user;

console.log(js); // false
console.log(html); // true
console.log(sass); // true
console.log(audi); // A6
|============================
*/
// -----------------------------------
/** Деструктуризация масивов.
|============================
// -----------------------------------------------
// Деструктуризация масива.
// -----------------------------------------------
// Без деструктуризации масива.

const arr = [1, 2, 3];

const first = arr[0];
const second = arr[1];
const third = arr[2];

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3


// С деструктуризацией масивов.
// --------------------------
// При деструктуризации масива обязательно придерживаемся порядка.

const arr = [1, 2, 3];
const [first, second, third, four] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(four); // undefined -- такого элемента не существует.

// ------------------------

// Один лайв хак Old Shool вариант.
// Возможно нам переменная first никогда не понадобится. Для этого что-бы не создавать дополнительную переменную мы можем название заменить на ( _ ) для того чтоб не было возможности до него обратиться.

const arr = [1, 2, 3];
const [_, second, third, four] = arr;

console.log(second); // 2
console.log(third); // 3



// Деструктуризация масива объектов в объекте.
// При деструктуризации масива обязательно придерживаемся порядка.

const user = {
  name: 'Test',
  age: 11,
  skills: {
    html: true,
    css: true,
    js: false,
    cars: {
      audi: 'A6',
      bmw: 'x5',
    },
  },
  languages: [{ html: true }, { css: false }],
};

const {
  languages: [html, css],
} = user;

console.log(html); // {html: true}
console.log(css); // {css: false}

// -----------------------------------

const {
  languages: [skillHtml, css],
} = user;
const { html } = skillHtml;

console.log(html); // true
console.log(css); // {css: false}

// -----------------------------------

// Рассмотрим следующий вариант, когда мы должны деструктуризировать значения из масива, но мы его например убираем.

const user = {
  name: 'Test',
  age: 11,
  skills: {
    html: true,
    css: true,
    js: false,
    cars: {
      audi: 'A6',
      bmw: 'x5',
    },
  },
  languages: [{ html: true }, { css: false }],
};

for (const language of user.languages) {
  console.log(language); // {html: true} // {css: false}
}

// -----------------------------------

const users = [
  {
    name: 'User1',
    language: 'html',
  },
  {
    name: 'User2',
    language: 'css',
  },
  {
    name: 'User3',
    language: 'js',
  },
];

for (const { name, language } of users) {
  console.log(name, language);
}

// ------------------------------------------
// Глубокая деструктуризация. Например мы хотим взять имя каждого юзера и вывести какая у него машина.

const users = [
  {
    name: 'User1',
    language: 'html',
    car: {
      audi: 'A6',
    },
  },
  {
    name: 'User2',
    language: 'css',
    car: {
      audi: 'A8',
    },
  },
  {
    name: 'User3',
    language: 'js',
    car: {
      audi: 'A7',
    },
  },
];

for (const { name, car: { audi }, } of users) {
  console.log(name, audi); // User1 A6 // User2 A8 // User3 A7
}
// -----------------------------------
// Замена имени ключа в глубокой деструктуризации.
const users = [
  {
    name: 'User1',
    language: 'html',
    car: {
      audi: 'A6',
      bmw: 'X5',
      nissan: 'Rogue',
    },
  },
  {
    name: 'User2',
    language: 'css',
    car: {
      audi: 'A8',
      bmw: 'X6',
      nissan: 'Xtrail',
    },
  },
  {
    name: 'User3',
    language: 'js',
    car: {
      audi: 'A7',
    },
  },
];

for (const {
  name,
  car: { audi: car },
} of users) {
  console.log(car); // User1 A6 // User2 A8 // User3 A7
|============================
*/
// -----------------------------------
/** Дефолтное значение при деструктуризации.
|============================
// -----------------------------------
// Дефолтное значение при деструктуризации.
// -----------------------------------
// Если такого значения нет, то будет undefined
// Мы можем указать дефолтное значение в деструктуризации для того чтоб если такого значения не будет то получим значение указаное по дефолту.
const users = [
  {
    name: 'User1',
    language: 'html',
    car: {
      audi: 'A6',
      bmw: 'X5',
      nissan: 'Rogue',
    },
  },
  {
    name: 'User2',
    language: 'css',
    car: {
      audi: 'A8',
      bmw: 'X6',
      nissan: 'Xtrail',
    },
  },
  {
    name: 'User3',
    language: 'js',
    car: {
      audi: 'A7',
    },
  },
];

for (const {
  name,
  car: { audi, bmw = 'None', nissan }, // Указываем дефолтное значение для bmw
} of users) {
  console.log(name, bmw); // User1 X5   // User2 X6   // User3 None
  console.log(name, nissan); // User1 Rogue   // User2 Xtrail   // User3 undefined

|============================
*/
// -----------------------------------
/** Деструктуризация при вызове функции.
|============================
// -----------------------------------
// Деструктуризация при вызове функции.
// -----------------------------------
// Деструктуризия по дефолту в функции. Пример bmw и name. Если у когото нет машины будет 'None' Если не будет name то получим No name
function foo({ name = 'No name', car: { bmw = 'None' } = {} }) {
  console.log(name, bmw);
}

foo({
  name: 'User1',
  language: 'html',
  car: {
    audi: 'A6',
    bmw: 'X5',
    nissan: 'Rogue',
  },
});
foo({
  language: 'html',
  name: 'User1',
});

// Деструктуризия если мы не передаем аргументы при вызове функции. По дефолту ставим пустой объект.
function foo({ name, car: { bmw = 'None' } = {} } = {}) {
  console.log(name, bmw);
}
foo();
|============================
*/
// _______________________________________________________
/** Операции rest и spread (синтаксический сахар)
|============================
// -----------------------------------
// Операции spread
// -----------------------------------
// Операция spread - это когда мы что-то берем и распыляем.
const arr = [12, 22, 3, 14, 45, 16, 57];
const min = Math.min(...arr);
console.log(min); // 3

// С помощью spread очень удобно создавать копию масива.

// Без операции spread
const arr1 = [12, 22, 3, 14, 45, 16, 57];
const arr2 = arr1;
console.log(arr2 === arr1); // true эти масивы идентичные, копируется по ссылке.
// С операции spread
const arr3 = [...arr1]; // Операции spread
console.log(arr3 === arr1); // false эти масивы не равны, создается новый масив и в него копируются элементы.

// -----------------------------------
// Операции rest
// -----------------------------------
const arrX = [12, 22, 3, 14, 45, 16, 57];

const [first, second, ...props] = arrX; // Операции rest
console.log(first); // 12
console.log(second); // 22
console.log('props', props); // props [3, 14, 45, 16, 57]

for (let i = 0; i < props.length; i += 1) {
  props[i] *= first;
}
console.log(props); // [36, 168, 540, 192, 684]

// -----------------------------------
// Операции rest и spread при использовании в функциях.
// -----------------------------------
// rest
// -------------
function foo(first, second, ...args) {
  console.log(first); // 1
  console.log(second); // 2
  console.log(args); // [1, 2, 3, 4, 5, 6]
}

foo(1, 2, 3, 4, 5, 6);

// spread
// -------------
const arrX = [12, 22, 3, 14, 45, 16, 57];

function foo(first, second) {
  console.log(first, second); // 12 22
}
foo(...arrX);

// spread и rest
// -------------
const arrY = [12, 22, 3, 14, 45, 16, 57];

function foo2(first, second, ...rest) {
  console.log(first, second, rest); // 12 22  [3, 14, 45, 16, 57]
  console.log(arguments); //  [12, 22, 3, 14, 45, 16, 57, arguments передает все параметры
}
foo2(...arrY);
|============================
*/

// :::::::::::::::||| ЗАВДАННЯ модуль-3 занятие-6 Деструктуризація об'єктів |||:::::::::::::::

/** Задача: Example 1 - Деструктуризація. Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
|============================
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  }),
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  }),
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  }),
);
|============================
*/

// JS Doc /** */ -------------
// /**
//  * Розраховуємо індекс маси тіла людини.
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */

/** -- Решение: Артем - Example 1 - Деструктуризація.
|============================
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  })
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  })
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  })
);
|============================
*/
// -----------------------------------
/** -- Решение: Олег - Example 1 - Деструктуризація.
|============================ 
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
// ------------------
// Решение: Вариант-1 
// ------------------
function calcBMI(params) {
  const { weight, height } = params;
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  })
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  })
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  })
);
// ------------------
// Решение: Вариант-2 
// ------------------
function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );
|============================
*/
// ===========================================================================================
/** Задача: Example 2 - Деструктуризация. Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.
|============================
// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

function printContactsInfo(names, phones) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// Было
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Ожидается
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
|============================
*/

// JS Doc /** */ -------------
// /**
//  *
//  * @param {Object} obj
//  */

/** -- Решение: Артем - Example 2 - Деструктуризація.
|============================
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

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
// -----------------------------------
/** -- Решение: Олег - Example 2 - Деструктуризація.
|============================
// ------------------
// Решение: Вариант-1 
// ------------------
function printContactsInfo(parametrs) {
  const { names, phones } = parametrs;

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
// ------------------
// Решение: Вариант-2 
// ------------------
function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");

  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
// });
|============================
*/
// ===========================================================================================
/** Задача: Example 3 - Глубокая деструктуризация. Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.
|============================
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

function getBotReport(companyName, repairBots, defenceBots) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Было
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Ожидается
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  }),
); // "Cyberdyne Systems has 200 bots in stock"
|============================
*/
// -----------------------------------
/** -- Решение: Артем - Example 3 - Глибока деструктуризація.
|============================
// Глубокая деструктуризация. Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

function getBotReport({ companyName, repairBots, defenceBots }) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Було
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    repairBots: 150,
    defenceBots: 50,
  })
);
|============================
*/
// -----------------------------------
/** -- Решение: Олег - Example 3 - Глибока деструктуризація 
|============================
// ------------------
// Решение: Вариант-1 
// ------------------
function getBotReport(params) {
  const {
    companyName,
    bots: { repair, defence },
  } = params;
  return `${companyName} has ${repair + defence} bots in stock`;
}

console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"
// ------------------
// Решение: Вариант-2
// ------------------
function getBotReport({ companyName, bots: { repair, defence } }) {
  return `${companyName} has ${repair + defence} bots in stock`;
}

console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"
|============================
*/
// ===========================================================================================
/** Артем- Example 4 - Деструктуризація. Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.
|============================
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

function getStockReport({ companyName, stock }) {
  // let total = repairBots + defenceBots;
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"
|============================
*/
// -----------------------------------
/** -- Решение: Артем - Example 4 - Деструктуризация.
|============================
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// Вариант-1 Если ключи разные.
function getStockReport({ companyName, stock }) {
  // let total = repairBots + defenceBots;
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"

// Вариант-2 Если ключи одинаковые.
function getStockReport({ companyName, stock: { repairBots, defenceBots } }) {
  let total = repairBots + defenceBots;

  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"
|============================
*/
// -----------------------------------
/** Олег - Задача: Example 4 - Деструктуризация. Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName и stock и выводила репорт о количестве товаров на складе любой компании.
|============================
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName и stock и выводила репорт о количестве товаров на складе любой компании.

function getStockReport({ companyName, stock: { repairBots, defenceBots } }) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"

|============================
*/
// -----------------------------------
/** -- Решение: Олег - Example 4 - Деструктуризация.
|============================
function getStockReport({ companyName, stock }) {
  let total = 0;

  // Вариант-1 -------
  for (const value of Object.values(stock)) {
    total += value;
  }

  // Вариант-2 -------
  // for (const key in stock) {
  //   if (stock.hasOwnProperty(key)) {
  //     total += stock[key];
  //   }
  // }

  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"
|============================
*/
// ===========================================================================================
/** Артем - Example 5 - Операція spread. Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.
|============================
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

function createContact(partialContact) {
  return {};
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

// Функція генерування id.
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
|============================
*/
// -----------------------------------
/** -- Решение: Артем - Example 5 - Операція spread
|============================
// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

function createContact(partialContact) {
    return {
        id: generateId(),
        createdAt: new Date(),
        list :"default",
        ...partialContact,
    }
}

console.log(
    createContact({
        name: 'Mango',
        email: 'mango@mail.com',
        list: 'friends',
    }),
);
console.log(
    createContact({
        name: 'Poly',
        email: 'poly@hotmail.com',
    }),
);

// Функція генерування id.
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
|============================
*/
// -----------------------------------
/** Олег - Задача: Example 5 - Операция spread. Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.
|============================
// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.

function createContact(partialContact) {
  const newContact = partialContact;
  return newContact;
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

// Функція генерування id.
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
|============================
*/
// -----------------------------------
/** -- Решение: Олег - Example 5 - Операция spread 
|============================
function createContact(partialContact) {

  // ----- Вариант-1 с деструктуризацией. ----------
  return {
    list: 'default',
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(), // Возвращает число секунд с 1970 года.
  };

  // ----- Вариант-2 с деструктуризацией. ----------
  // const newContact = { list: 'default', ...partialContact, id: generateId(), createdAt: Date.now() };
  // return newContact;

  // ----- Вариант-3 без деструктуризации. ----------
  // const newContact = { list: 'default', ...partialContact };
  // newContact.id = generateId();
  // newContact.createdAt = Date.now(); // Возвращает число секунд с 1970 года.
  // return newContact;
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

// Функція генерування id.
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Что такое Date.now() ? 
//  // Date.now(); - Возвращает число секунд с 1970 года.
// Что такое new Date() ? 
// new Date(); - Возвращает число, месяц, текущее время. // Tue Jun 04 2024 15:01:47 GMT+0300 (Восточная Европа, летнее время)
|============================
*/
// ===========================================================================================
/** Задача: Example 6 - Операция rest. Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.
|============================
// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

function transformUsername(user) {}

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
|============================
*/
// -----------------------------------
/** -- Решение: Артем - Example 5 - Операция spread
|============================
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

function transformUsername({ firstName, lastName, ...props }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...props,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);
console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
|============================
*/
// -----------------------------------
/** -- Решение: Олег - Example 6 - Операция rest.
|============================
// ------------------
// Решение: Вариант-1 
// ------------------
// Решение
function transformUsername({ firstName, lastName, ...otherProps }) {
  ----- Вариант-1 -----
  return {
    fullName: `${firstName} ${lastName}`,
    ...otherProps,
  };
  ----- Вариант-2 -----
  return {
    fullName: firstName + ' ' + lastName,
    ...otherProps,
  };
}

console.log(
  transformId({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  }),
);

console.log(
  transformId({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  }),
);
// ------------------------
// Решение: Вариант-2-Олег 
// ------------------------
// function transformUsername({
//   firstName = "Default",
//   lastName = "",
//   ...newUser
// }) {
//   return {
//     fullName: firstName + " " + lastName,
//     createdAt: Date.now(),
//     ...newUser,
//     updatedAt: Date.now(),
//   };
// }

// const user = transformUsername({
//   id: 1,
//   firstName: "Jacob",
//   lastName: "Mercer",
//   email: "j.mercer@mail.com",
//   friendCount: 40,
// });

// console.log(user);

// console.log(transformUsername(user));

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );
|============================
*/
// ===========================================================================================
