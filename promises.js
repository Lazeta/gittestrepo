// const promises = new Promise(function (resolve, reject) {
//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };
//   // Эмуляция асинхронной операции, например, запроса к серверу
//   setTimeout(() => {
//     // Условие успешного выполнения операции
//     if (backendData.status === "working") {
//       resolve(backendData);
//     }
//     // Условие отклонённого выполнения операции
//     reject("Error");
//   });
// }).then((data) => {});


// const myPromise = () => {
//     return new Promise((resolve, reject) => {
//         // async operation
//         setTimeout(() => {
//           resolve("Result");
//         }, 1000);
//         const data = { id: 1, name: "John" }; // Имитация данных
//         const success = true; // поменять на false для reject
      
//         if (success) {
//           resolve(data);
//         } else {
//           reject("operation was unsuccessful");
//         }
//       });
// }

// const promise = myPromise();

// promise
//   .then((result) => {
//     console.log(result); // Result: 'operation was successful';
//     // }, error => {
//     //     console.log(error);
//   })
//   .catch((error) => {
//     console.log(error); // Result: 'operation was unsuccessful';
//   });

  


// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { id: 1, name: "John" }; // Имитация данных
//       const success = true; // Поменяйте на false для теста отклонения

//       if (success) {
//         resolve(data); // Успех
//       } else {
//         reject("Ошибка загрузки данных!"); // Неудача
//       }
//     }, 2000); // Операция завершится через 2 секунды
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log("Данные получены:", data); // Вывод: "Данные получены: { id: 1, name: 'John' }"
//   })
//   .catch((error) => {
//     console.error(error); // Вывод ошибки, если операция не удалась
//   });




// console.log('111');

// setTimeout(() => console.log('222'), 0);

// Promise.resolve(console.log('333'))
//   .then((val) => console.log(val));

// console.log('444');

// Promise.resolve('555')
//   .then((val) => console.log(val));

// // 111 444 333 555 222
// // 111 333 444 undefined 555 222




// Promise.all(promises) - ожидает выполнения всех промисов и возвращает массив с результатами. Если хоть один промис отклонён, то возвращается отклонённый результат промиса с указанием причины отклонения.
// если промис вернул ошибку, то результаты остальных промисов будут игнорироваться.
// Promise.allSettled(promises) - ждёт пока все промисы завершатся и возвращает их результат в виде массива с объектами, у каждого объекта два свойства:
// status - 'fulfilled' или 'rejected',
// value - результат промиса или reason - ошибка, если промис отклонён.
// Promise.race(promises) - ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.
// Promise.any(promises) - ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. 
// Если все переданные промисы отклонены, то наши объекты ошибок доступны в свойстве errors объекта AggregateError.
// Promise.resolve(value) - возвращает успешно выполнившийся промис с результатом value.
// Promise.reject(error) - возвращает отклоненный промис с ошибкой error.




// Promise.resolve(1)
// .then(() => {console.log(2)}) // 2)
// .then(console.log(3)) // 1)
// .then(() => {console.log(4)}) // 3)

// 3 | 2 | 4




// Promise.reject('a') // создается отклоненный промис с причиной 'a'
//     .then(p => p + '1', p => p + '2') // так как промис отклоненный то возвращает вторую часть промиса где у нас лежит catch внутри than (если по старому синтаксису) p => p + '2'
//     .catch(p => p + 'b') // не будет вызван так как прошлый обработчик не завершился успешно
//     .catch(p => p + 'c') // так как предыдущий catch не выполняется, то и этот не будет выполнен.
//     .then(p => p + 'd1') // мы переходим к этому then так как прошлый then вернул нам 'a2'
//     .then('d2') // будет проигнорирован потому что мы передали просто строку не являющуюся функцией
//     .then(p => p + 'd3') // переходим к этому then добавляя к a2d1 + d3
//     .finally(p => p + 'e') // директива finally не изменяет результат промиса, поэтому просто идём дальше
//     .then(p => console.log(p)) // выводим в консоль результат промиса и всех then a2d1d3 
// // a2d1d3




// Promise.resolve() // возвращаем успешно выполненный промис
//     .then(() => {console.log('a1')}) // в очередь микротасок попадает первым
//     .then(() => {console.log('a2')}) // вновь первый после выполненой предыдущей таски
//     .then(() => {console.log('a3')}) // вновь первый после выполненой предыдущей таски

// Promise.resolve() // возвращаем успешно выполненный промис
//     .then(() => {console.log('b1')}) // в очередь микротасок попадает вторым 
//     .then(() => {console.log('b2')}) // вновь вторым после выполнения предыдущей таски
//     .then(() => {console.log('b3')}) // вновь вторым после выполнения предыдущей таски
// a1 b1 a2 b2 a3 b3




function job() {
    return new Promise(function(resolve, reject) {
        reject();
        console.log('3');
    })
}

console.log('1');
let promise = job(); // получаем переменную с ссылкой на на функцию job возвращающая новый промис который отклонен
console.log('2')

promise
    .then(function() {
        console.log('Success 1');
    })
    .then(function() {
        console.log('Success 2');
    })
    .then(function() {
        console.log('Success 3');
    })
    .catch(function() {
        console.log('Error 1');
    })
    .then(function() {
        console.log('Success 4');
    })