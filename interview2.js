"use strict";
// ________________________________________________________
const str = "hello"

str[0] = 'H'

console.log(str) //Hello
// ________________________________________________________
console.log(true + false); // 1
console.log(12 / "6"); // 2
console.log("number" + 15 + 3); // number153
console.log(15 + 3 + "number"); // 18number
console.log([1] > null); // true
console.log("foo" + + "bar"); // foobar
console.log('true' == true); // true
console.log(false == 'false'); // false
console.log(null == ""); // true
console.log(!!"false" == !!"true"); // true
console.log(['x'] == 'x'); // true
console.log([] + null + 1); // SyntaxError
console.log(0 || "0" && {}); // {}
console.log([1,2,3] == [1,2,3]); // true
// ________________________________________________________
console.log(foo)

const foo = () => {}
// ________________________________________________________
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 1
console.log( counter() ); // 2

console.log( counter2() ); // 1
console.log( counter2() ); // 2
// ________________________________________________________
function foo() {
  console.log(this.bar);
}

var bar = "global";

var obj1 = {
  bar: "obj1",
  foo: foo
};

var obj2 = {
  bar: "obj2"
};

foo(); // undefined
obj1.foo(); // "obj1"
foo.call(obj2); // "obj2"
new foo(); // undefined
// ________________________________________________________
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

// ________________________________________________________
console.log(1); // 1

Promise.resolve()
  .then(() => console.log(2)) // 3
  .then(() => console.log("promise 1")); // 5

setTimeout(() => {
  console.log(3); // 6
  Promise.resolve().then(() => console.log("promise inside setTimeout")); // 7
}, 0);

Promise.resolve()
  .then(() => console.log("promise 2")) // 4
  .then(() => setTimeout(() => console.log(4), 0)); // 8

console.log(5); // 2
// Синхронные операции выполняются первыми 1\2




// Теория к повторению и изучению:
// HTTP/1 , HTTP/2, HTTP/3 в чём разница , особенности.
