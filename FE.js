// // function declaration
// (function(){
//     let a = 10
//     console.log(a) // 10
// })()

// console.log(a) // Uncaught ReferenceError: a is not defined

// // arrow function
// (() => {
//     let a = 10
//     console.log(a) // 10
// })()


// function declaration - это способ определения функции с помощью ключевого слова function где у нас есть имя 
// функции и она может быть вызвана до её объявления (поднимается)

// function sayHello() {
//     console.log('Hello');
// }

// sayHello();


// function expression - это способ определения функции с помощью функционального выражения где мы 
// присваиваем переменной функцию.
// sayHello(); // выдаёт ошибку, выражение не поднимается до объявления.
// const sayHello = function () { // анонимная function expression
//     console.log("Hello");
// }; // как любое выражение требует (требовало раньше) ; как любое выражение, сейчас считывается движком автоматически

// sayHello();

// // named function expression
// const greeting = function sayHello() {
//     console.log("Hello Mr. Smith");
// }

// greeting();


// Arrow function expression всегда являются анонимные если не присвоены другой переменной.
// не имеют собственного this, берут из внешнего scope.
// // не могут быть использованы как конструкторы (new)
// const arrowFunction = (a, b) => {
//     console.log(`${a} ${b}`);
// };

// arrowFunction('name', 'age');


// подход остаточного параметра + используем сепаратор
function concatString(separator, ...strings){
    return strings.join(separator)
}

console.log(concatString("_", "a", "b", "c", "wwww"))