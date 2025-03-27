// function greeting(name) {
//     console.log(`Hello ${name}! How are you?`);
// }

// greeting('John');

// function addOddNumbers(a, b) {
//     if (a % 2 !== 0 || b % 2 !== 0) {
//         return a + b;
//     }
// }

// addOddNumbers(2, 3);

// Function Declarations
// function name() {
//     // body
// }

// function calculateAndLogNumber(a, b) {
//     let x = 5;
//     x += 100;
//     x /= 5;
//     // console.log(x)
//     return x;
// }


// function calculateNumber(initialValue) {
//     let x = initialValue;
//     x += 100;
//     x /= 5;
//     return x;
// }


// function calculateCircleArea(radius){ // radius - это параметр функции
//     return 3.14 * radius ** 2; // ** - возведение в степень; 3.14 - константа числа π; и сразу возвращаем результат выполнения инструкций функции.
// }


// function createHTMLElement(tag = 'button', text = 'Кнопка', id) { // по умолчанию если аргументы были не переданы, то функция создаст кнопку
//     const element = document.createElement(tag);
//     if (id) element.id = id;
//     if (text) element.innerText = text;

//     // return element.textContent = 'Hello, textContent';
//     return element;
// }


// const result = calculateNumber(1000);
// const result1 = calculateNumber(25235);
// console.log(result);
// console.log(result1);
// console.log(calculateCircleArea(5)); // 5 - это аргумент функции (т.е. значение параметра, что мы передали в функцию)
// const newElement = createHTMLElement('h1', 'просто текст', 'header1'); // принимает три аргумента.
// const newElement = createHTMLElement('h1', 'просто текст'); // если мы не указали id аргумент или получаем null то у нас не будет ошибки и id останется просто undefined
// const newElement = createHTMLElement('h1', 'просто текст', 'header1', 5, 'word'); // принимает более трех аргументов, но выводит только первые три.
// console.log(createHTMLElement('h1', 'header1', 'просто текст'));
// const newElement = createHTMLElement(); // вызываем без аргумента и получаем кнопку.
// console.log(newElement);
// document.body.append(newElement);


// function createHTMLElement(tag = 'button', text = 'Кнопка', id) {
//     const element = document.createElement(tag);
//     if (id) element.id = id;
//     if (text) element.innerText = text;
//     return element;
// }

// function logArgsToConsole() {
//     // console.log(arguments); // arguments - это псевдомассив, который хранит все аргументы в виде массива, которые мы передали в функцию вызова.
//     if(!arguments.length) {
//         console.log('Нет аргументов');
//         return // возвращает undefined
//     }
//     for(let argument of arguments) {
//         console.log(argument);
//     }
//     console.log('Больше аргументов нет');
// }

// // logArgsToConsole(1, 2, 3, 4, 7, 90);
// logArgsToConsole(); // Нет аргументов, поэтому возвращает undefined и сообщение о том, 
// // что аргументов нет и наша функция завершит работу с помощью return

// greeting('Name')
// function greeting(name) {
//     console.log(`Hello ${name}! How are you?`);
// }
// функция вызывается за счёт всплытия - с Function Declaration мы можем вызывать функцию из любого места в рамках области видимости в которой она была объявлена.


// _____________________________________________________________
// Function Expressions

// const sayHello = function () {
//     console.log('Hello');
// }

// sayHello(); // наш вызов функции работает не как функция, а как вызов переменной. Мы не можем вызвать её до создания в отличие от Function Declaration.
// мы не можем получить доступ к переменной до того как она была инициализирована.

// const calculateNumber = function (a, b) {
    //     let x = 6;
    //     x += 100;
    //     x /= 2;
    //     console.log(x);
    // }