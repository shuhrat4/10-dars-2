// 1

// function son(arr, n) {
//         if (n === 1) {
//         return arr[0];
//     }
//     const num = son(arr, n - 1);
//     return arr[n - 1] > num ? arr[n - 1] : num;
// }
// const arr = [5, 3, 8, 6, 2];
// const num2 = son(arr, arr.length);
// console.log("Eng katta qiymat:", num2);

// 2

// const arr1 = [5, 6, true, null, 8];
// const arr2 = [0, 2, 5, false, 6];
// const num = [...arr1, ...arr2];
// const sum = num.reduce((acc, val) => {
//     return typeof val === 'number' ? acc + val : acc;
// }, 0);
// console.log("Arraylarning raqamli elementlari yig'indisi:", sum);


// 3

// function num(arr) {
//       if (arr.length === 0) {
//         return [];
//     }
//     const minValue = Math.min(...arr);
//     const indices = arr.reduce((acc, val, index) => {
//         if (val === minValue) {
//             acc.push(index);
//         }
//         return acc;
//     }, []);

//     return indices;
// }

// const array = [5, 1, 8, 1, 3, 1, 7];
// const sum = num(array);
// console.log("Eng kichik sonning indekslari:", sum);


// 5

// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 32, 55, 67, 11, 32];
// let num = [...arr1, ...arr2];
// num.sort((a, b) => a - b);
// console.log("Tartiblangan array:", num);

// 6

// let carsArr = [
//     {
//         name: 'lasetti',
//         price: 9000
//     },
//     {
//         name: 'damas',
//         price: 7800
//     },
//     {
//         name: 'cobalt',
//         price: 12500
//     },
//     {
//         name: 'Gentra',
//         price: 14000
//     },
//     {
//         name: 'onix',
//         price: 17000
//     }
// ];
// let Name = carsArr.slice().sort((a, b) => {
//     return a.name.localeCompare(b.name);
// });
// let Price = carsArr.slice().sort((a, b) => {
//     return a.price - b.price;
// });
// console.log("Name bo'yicha tartiblangan ro'yxat:");
// console.log(Name);

// console.log("Price bo'yicha tartiblangan ro'yxat:");
// console.log(Price);

// 7

// let arr = ['salom', 'rahmat'];
// let word1 = 'dunyo';
// let word2 = 'barcha';
// arr.splice(1, 0, word1, word2);
// arr.forEach((word, index) => {
//     console.log(`Index ${index}: ${word}`);
// });

// 8

// function sun(inputString) {
//     let num = inputString.split('').reverse().join('');
//     let number = Number(num);
//     if (number > 9) {
//         console.log(`Teskari aylantirilgan ko'p honali raqam: ${number}`);
//         return number;
//     } else {
//         console.log("Teskari aylantirilgan raqam ko'p honali emas.");
//         return null;
//     }
// }
// sun("12345"); 
// sun("543");   
// sun("5");     
