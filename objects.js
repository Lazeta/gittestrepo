// create object
// литеральная нотация
// const book = {
//     title: 'book title',
//     author: 'Baskovski',
//     year: 2005,
// }

// через конструктор Object
const book = new Object();
book.title = 'book title';
book.author = 'Baskovski';
book.year = 2005;

// через классы (ES6)
class Book {
    constructor(name, author, year) {
        this.title = name;
        this.author =  author;
        this.year = year;
    }
}
const newBook = new Book('book title', 'Baskovski', 2005);


// получаем доступ к свойствам объекта
user.name;
user['age'] // 30

// добавляем свойства к объекту
user.city = 'Minsk';

// изменяем свойства у объекта
user.age = 31;

// удаляем свойства у объекта
delete user.age;

// проверка существования свойства 
user.hasOwnProperty('name') // true
'name' in user; //true


// методы объектов
Object.keys(obj) // - возвращает массив ключей
Object.values(obj) // - возвращает массив значений
Object.entries(obj) // - возвращает массив пар [ключ, значение]
Object.assign(target, ...sources) // - копирует свойства:
const defaults = { theme: 'dark', fontSize: 15 };
const settings = Object.assign({}, defaults, { fontSize: 16 });
Object.freeze(obj) // - замораживает изменения объекта.
Object.seal(obj) // - замораживает добавление и удаление свойств.
const obj = Object.create(proto); // - создает новый объект с прототипом proto 


const clone = Object.assign({}, obj);
const clone2 = { ...obj };

// глубокое копирование
const deepClone3 = JSON.parse(JSON.stringify(obj))
const deppClone4 = structuredClone(obj);

// проблема ссылочного копирования
const original = { a: {b: 1} };
const copy = { ...original} // копируем с помощью spread оператора
copy.a.b = 2; // изменяем значение в исходном объекте
console.log(original.a.b); // выводит 2