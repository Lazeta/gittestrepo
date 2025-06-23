// "use strict";
// ________________________________________________________
// const str = "hello"
// str = 'H'
// console.log(str)

// // 7 примитивных (number, bigint, string, boolean, null, undefined, symbol) типов данных и 1 ссылочные типы данных представленных как объект
// console.log(typeof NaN) // 'number'
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object
// console.log(typeof Data) // function
// console.log(typeof new Object()) // object
// console.log(typeof new Function()) // function
// console.log(typeof Object()) // object

// функция что ничего 
// const a = [];
// const v = [1,2,3];
// v.forEach((current, i, arr) => {
//   // a[i] = (current * 2);
//   arr[2] = 6
// })
// console.log(v)

// const a = { a: 1, b: 'String', c: { d: "Hui" }};
// const b = { a: 1, b: 'String', c: { d: "Hui" }};

// const a = [1,2,3];
// a = [4,5,6];
// console.log(a)
// ________________________________________________________
// console.log(true + false); // 1
// console.log(12 / "6"); // 2
// console.log("number" + 15 + 3); // number153
// console.log(15 + 3 + "number"); // 18number
// console.log([1] > null); // true
// console.log("foo" + + "bar"); // fooNaN
// console.log('true' == true); // true 
// console.log(false == 'false'); // true
// console.log(null == ""); // true
// console.log(!!"false" == !!"true"); // true
// console.log(['x'] == 'x'); // true
// console.log([] + null + 1); // null1
// console.log(0 || "0" && {}); // {}
// console.log([1,2,3] == [1,2,3]); // false
// // ________________________________________________________
// console.log(foo)

// const foo = () => {}
// // ________________________________________________________
// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log( counter() ); // 1
// console.log( counter() ); // 2

// console.log( counter2() ); // 1
// console.log( counter2() ); // 2
// // ________________________________________________________
// function foo() {
//   console.log(this.bar);
// }

// var bar = "global";

// var obj1 = {
//   bar: "obj1",
//   foo: foo
// };

// var obj2 = {
//   bar: "obj2"
// };

// foo(); // undefined
// obj1.foo(); // "obj1"
// foo.call(obj2); // "obj2"
// new foo(); // undefined
// // ________________________________________________________
var p = Promise.resolve(4);

p
  .then((data) => {
    console.log(data);
    throw new Error('');
  })
  .catch((err) => {
    console.log('err');
    return 'ok';
  })
  .finally((data) => {
    console.log(data);
    return 1;
  })
  .then((data) => {
    console.log(data);
  });

// 4
// err
// undefined
// ok

// // ________________________________________________________
// console.log(1);

// Promise.resolve()
//   .then(() => console.log(2))
//   .then(() => console.log("promise 1"));

// setTimeout(() => {
//   console.log(3);
//   Promise.resolve().then(() => console.log("promise inside setTimeout"));
// }, 0);

// Promise.resolve()
//   .then(() => console.log("promise 2"))
//   .then(() => setTimeout(() => console.log(4), 0));

// console.log(5);

// 1
// 5
// 2
// promise 2
// promise 1
// 3
// promise inside setTimeout
// 4