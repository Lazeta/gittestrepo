// 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
// - Гибкость типов: массив может содержать элементы различных типов что может быть гибким но влечь за собой трудности типизации. 
// - Ассоциативные массивы: в JS массивы могут использоваться как ассоциативные массивы что собственно должны делать объекты по своей идее. Индексы могут быть не только числами но и строками, это вызывает путаницу, ведь массив должен быть по своей задумке последовательностью значений.
// - Методы и свойства: массивы имеют свойства и методы как у объекта (push, pop, map, filter и другие), что делает их более сложными чем простые структуры данных (списки, стек).
// - Неявные преобразования: при выполнении операций с массивом может произойти преобразование типов что привести к не явным результатам.
// Относиться к структурам данных(списки, стек, очередь, ассоциативные массивы)

// ___________________________________
// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

// function logger() {
//     console.log(`I output only external context: ${this.item}`);
// }

// const obj = { item: "some value" };
// const boundLogger = logger.bind(obj)
// boundLogger(); // Выведет: I output only external context: some value
// logger.call(obj); // Выведет: I output only external context: some value
// logger.apply(obj); // Выведет: I output only external context: some value
// ___________________________________
// 3.1 this: 
// "use strict";

// const obj = {
//     a: 1,
//     e: (function () {
//         return () => {
//             console.log(this.a); 
//         };
//     })(),
// };


// obj.e(); // Выведет: undefined (стрелочная функция захватывает контекст внешней функции, где `this` не определен)
// // в строгом Выведет: TypeError: Cannot read properties of undefined (reading 'a')
// obj.e.call({ a: 2 }); // Выведет: undefined (по той же причине)
// в строгом режиме сюда даже не дойдёт или выведет TypeError с той же причиной
// ___________________________________
// 3.2 this:
// "use strict";
// const obj1 = {
//     child: {
//         i: 10,
//         b: () => console.log(this.i, this), // `this` ссылается на глобальный объект (или undefined в строгом режиме)
//         c() {
//             console.log(this.i, this); // `this` ссылается на `obj1.child`
//         },
//     }
// };

// obj1.child.b(); // Выведет: undefined {}
// // в use script Выведет: undefined {}
// obj1.child.c(); // Выведет: 10 { i: 10, b: [Function: b], c: [Function: c] }
// // в use strict Выведет: 10 { i: 10, b: [Function: b], c: [Function: c] }
// ___________________________________
// 3.3 this:

// "use strict";
// function foo() {
//     const x = 10;
//     return {
//         x: 20,
//         bar: () => {
//             console.log(this.x);
//         },
//         baz: function () {
//             console.log(this.x);
//         }
//     };
// }

// // const obj1 = foo();
// // obj1.bar(); // Выведет: undefined
// // // в use script Выведет: TypeError: Cannot read properties of undefined (reading 'x')
// // obj1.baz(); // Выведет: 20
// // в use script Выведет: TypeError: Cannot read properties of undefined (reading 'x')

// const obj2 = foo.call({ x: 30 });
 
// let y = obj2.bar; 
// let z = obj2.baz; 
// y(); // Выведет: 30 
// // в use script Выведет: 30
// z(); // Выведет: undefined
// // в use script Выведет: TypeError: Cannot read properties of undefined (reading 'x')
 
// obj2.bar(); // Выведет: 30
// // в use script Выведет: 30
// obj2.baz(); // Выведет: 20
// // в use script Выведет: 20

// __________________________________________
// 4.1 Массивы:

// - Создайте массив чисел и найдите его сумму разными способами.
// Способ 1: цикл for
// const numbers = [1, 2, 3, 4, 5, 6];
// let result = 0;
// for (let i = 0; i < numbers.length; i++) {
//   result += numbers[i]
// }
// console.log(result); // 21

// // Способ 2: Используя метод reduce
// console.log(numbers.reduce((acc, curr) => acc + curr, 0)) // 21

// // Способ 3: Используя метод forEach
// let sum = 0;
// numbers.forEach((num) => sum += num)
// console.log(sum) // 21

// - Создайте массив строк и объедините их в одну строку разными способами.
// const strings = ["Hello", "world", "from", "JavaScript"];

// // Способ 1: Используя метод join
// const combined1 = strings.join(" ");
// console.log(`Объединение (join): ${combined1}`); // Вывод: "Hello world from JavaScript"

// // Способ 2: Используя метод reduce
// const combined2 = strings.reduce((acc, curr) => acc + " " + curr);
// console.log(`Объединение (reduce): ${combined2}`); // Вывод: "Hello world from JavaScript"

// // Способ 3: Используя цикл for
// let combined3 = "";
// for (let i = 0; i < strings.length; i++) {
//   combined3 += strings[i] + " ";
// }
// console.log(`Объединение (for): ${combined3}`); // Вывод: "Hello world from JavaScript"

// - Найдите максимальный и минимальный элементы в массиве чисел разными способами.
// const numbers2 = [1, 2, 30, 4, 5, 6, -3];

// // Способ 1: Используя Math.max и Math.min с оператором spread
// console.log(`Максимальное ${Math.max(...numbers2)}, и минимальное ${Math.min(...numbers2)}`);
// // Максимальное 30, и минимальное -3

// // Способ 2: Используя метод reduce
// const max = numbers2.reduce((acc, curr) => Math.max(acc, curr));
// const min = numbers2.reduce((acc, curr) => Math.min(acc, curr));
// console.log(`Максимальное ${max}, и минимальное ${min}`); // Максимальное 30, и минимальное -3

// // Способ 3: Используя цикл for
// function findMaxMin(numbers){
//   let max = numbers[0];
//   let min = numbers[0];
//   for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] > max) max = numbers[i];
//     if (numbers[i] < min) min = numbers[i];
//   }
//   console.log(`Максимальное ${max}, и минимальное ${min}`) // Максимальное 30, и минимальное -3
// }
// findMaxMin(numbers2)



// ___________________________________
// 4.2 Stack (стек):

// - Реализуйте стек с использованием массива.
class Stack {
    constructor() {
        this.items = [];
    }

    // Добавление элемента на вершину стека
    push(element) {
        this.items.push(element);
    }
    // Удаление элемента с вершины стека
    pop() {
        if (this.isEmpty()) {
            return null; // Или выбросить ошибку
        }
        return this.items.pop();
    }
    // Получение элемента с вершины стека без удаления
    peek() {
        if (this.isEmpty()) {
            return null; // Или выбросить ошибку
        }
        return this.items[this.items.length - 1];
    }
    // Проверка, пуст ли стек
    isEmpty() {
        return this.items.length === 0;
    }
    // Получение размера стека
    size() {
        return this.items.length;
    }
    // Очистка стека
    clear() {
        this.items = [];
    }
}

// Пример использования
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Вывод: 3
console.log(stack.pop());  // Вывод: 3
console.log(stack.size()); // Вывод: 2

// - Не обязательно. По желанию можно попробовать пообходить дерево через стек.
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Обход дерева в глубину (предварительный обход)
    traversePreOrder() {
        const stack = [];
        const result = [];
        let current = this.root;

        if (current) {
            stack.push(current);
        }

        while (stack.length > 0) {
            current = stack.pop();
            result.push(current.value);

            // Добавляем правый потомок в стек, чтобы сначала обработать левый
            if (current.right) {
                stack.push(current.right);
            }
            if (current.left) {
                stack.push(current.left);
            }
        }

        return result;
    }
}

// Пример использования
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log(tree.traversePreOrder()); // Вывод: [1, 2, 4, 5, 3]

// ___________________________________
// 4.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.

// ___________________________________
// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

// this binding:

// https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/ch1.md
// https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/ch2.md