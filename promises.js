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