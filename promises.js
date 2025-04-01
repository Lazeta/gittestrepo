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


const myPromise = () => {
    return new Promise((resolve, reject) => {
        // async operation
        setTimeout(() => {
          resolve("Result");
        }, 1000);
        const data = { id: 1, name: "John" }; // Имитация данных
        const success = true; // поменять на false для reject
      
        if (success) {
          resolve(data);
        } else {
          reject("operation was unsuccessful");
        }
      });
}

const promise = myPromise();

promise
  .then((result) => {
    console.log(result); // Result: 'operation was successful';
    // }, error => {
    //     console.log(error);
  })
  .catch((error) => {
    console.log(error); // Result: 'operation was unsuccessful';
  });

  


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John" }; // Имитация данных
      const success = true; // Поменяйте на false для теста отклонения

      if (success) {
        resolve(data); // Успех
      } else {
        reject("Ошибка загрузки данных!"); // Неудача
      }
    }, 2000); // Операция завершится через 2 секунды
  });
}

fetchData()
  .then((data) => {
    console.log("Данные получены:", data); // Вывод: "Данные получены: { id: 1, name: 'John' }"
  })
  .catch((error) => {
    console.error(error); // Вывод ошибки, если операция не удалась
  });