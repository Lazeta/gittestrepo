// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]))
// // [ 11, 12, 22, 25, 34, 64, 90 ]

// function bubbleSort(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (result.includes(arr[j])) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       } else {
//         result.push(arr[j]);
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([16, 37, 2, 15, 17, 60, 16]));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(result.indexOf(arr[i]) === -1){
        result.push(arr[i]);
    }
  }

  return result;
}

console.log(bubbleSort([16, 37, 2, 15, 17, 60, 16]));
// [ 2, 15, 16, 17, 37, 60 ]