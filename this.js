// 'use strict';

// 1 В глобальном контексте (вне функций) 'this' ссылается на глобальный объект (window в браузере).
// console.log(this) // Window | {} или global

// 2 В методе объекта 'this' ссылается на объект, в контексте которого был вызван метод:
// const obj = {
//     name: "Obj",
//     method: function(){
//         console.log(this.name)
//     }
// }
// obj.method(); // Obj | Obj

// 3 В обычной функции this ссылается на глобальный объект (или undefined в строгом режиме). Это может привести к ошибкам, если контекст не контролируется явно.
// function showThis() {
//     console.log(this);
// }
// showThis(); // Window || undefined | global || undefined

// 4 В классах this ссылается на экземпляр класса, созданный с помощью ключевого слова new. Это позволяет работать с состоянием объекта через this.
// class myClass {
//     constructor(value) {
//         this.value = value;
//     }
//     showValue() {
//         console.log(this.value);
//     }
// }
// const instance = new myClass(10);
// instance.showValue(); // 10

// 5 Стрелочные функции не имеют собственного this и наследуют его из родительского контекста, в котором они были созданы. Это делает их особенно полезными в обработчиках событий и колбэках.
// const obj = {
//     value: 20,
//     method: function(){
//         const arrowFunction = () => {
//             console.log(this.value)
//         };
//         arrowFunction()
//     }
// }
// obj.method(); // 20

// 6 Можно явно контролировать значения this с помощью методов .call(), .apply() и .bind().
// .call(thisArg, arg1, arg2, ...): Вызывает функцию с указанным значением this и аргументами.
// .apply(thisArg, [argsArray]): Аналогично .call(), но принимает массив аргументов.
// .bind(thisArg): Создает новую функцию с фиксированным значением this.
// function show() {  
//   console.log(this.name);
// }
// const obj = { name: 'test2' };
// show.call(obj); // test2
// show.apply(obj); // test2
// const boundShow = show.bind(obj);
// boundShow(); // test2

// 7 Ошибки с this часто возникают, если контекст теряется, например, при передаче метода объекта как колбэка или в обработчиках событий.
// const obj = {
//   value: 42,
//   method: function() {
//     setTimeout(function() {
//       console.log(this.value); // undefined (потерянный контекст)
//     }, 100);
//   }
// };
// obj.method();

// 8 исправим потерю контекста с помощью bind()
// const obj = {
//   value: 42,
//   method: function() {
//     setTimeout((function() {
//       console.log(this.value); // 42
//     }).bind(this), 100) 
//   }
// };
// obj.method();

// 9 исправим с помощью стрелочной функции
// const obj = {
//   value: 42,
//   method: function() {
//     setTimeout(() => {
//       console.log(this.value); // 42
//     }, 100) 
//   }
// };
// obj.method();