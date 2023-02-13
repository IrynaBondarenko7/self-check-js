// console.log("Mango" && 0);
// console.log(10 >= "Mango");
// console.log(Boolean([]));
// console.log(3 > 2 > 1);
// console.log("5" + 5);
// console.log("5" - true);
// console.log(Number.parseInt("p51.15px"));
// console.log(Number.parseFloat("p51.15px"));
// console.log("yogik" || "yogivika");
// console.log(0 || false);

// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const array = [3, 5, 14];
// const fn = function (num) {
//   return num === 10 ? "Вірно" : "Невірно";
//   // if (num === 10) {
//   //   return "Вірно";
//   // }
//   // return "Невірно";
//   // const copyNum = [...num];
//   // console.log(num === array);
//   // console.log(copyNum === array);
//   // console.log([] === []);
// };
// fn(5);
// console.log(fn(8));

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return;
//   }
//   return Math.min(...numbers);
//   // let minNumber = numbers[0];

//   // for (const number of numbers) {
//   //   if (number < minNumber) {
//   //     minNumber = number;
//   //   }
//   // }
//   // return minNumber;
// }
// console.log(findSmallerNumber(numbers));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       sum += arg;
//       count += 1;
//     }
//   }
//   return sum / count;
//   // console.log(arguments);
//   // console.log(numbers);
// }
// console.log(caclculateAverage(5, 10, "hello"));
// console.log(caclculateAverage(25, 15, 64));
// // ...args=5,10;
// // []=...args

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"

// const letMeSeeYourName = (callback) => {
//   const result = prompt("Введіть ваше ім'я");
//   callback(result);
// };
// const greet = (name) => {
//   console.log(`Привіт ${name}`);
// };

// letMeSeeYourName(greet);

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// const makeProduct = (name, price, callback) => {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };
//   callback(product);
// };
// const showProduct = (product) => {
//   console.log(product);
// };
// makeProduct("iphone", 5000, showProduct);

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr); //кожний рядок починається з нового рядка

// const countWords = (words) => {
//   return words.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {});
// };
// const result = countWords(["Apple", "Banana", "Banana", "Orange"]);
// console.log(result); // {Apple: 1, Banana: 2, Orange: 1}

// function updateRecords(records, id, prop, value) {
//   for (const key in records) {
//     let arrayTracs = [];
//     if (key == id) {
//       switch (prop) {
//         case "artist":
//           records[key][prop] = value;
//           //   console.log(records[key][prop]);
//           break;
//         case "tracks":
//           for (const key1 in records[key]) {
//             // console.log(records[key]);// object 2468
//             // console.log(records[key][prop]);
//             console.log(key1);
//             if (key1 === "tracks") {
//               const isTracs = records[key][prop];

//               isTracs.push(value);
//             } else if (key1 === "albumTitle") {
//             } else if (key1 === "artist") {
//             } else {
//               records[key][prop] = arrayTracs;
//               arrayTracs.push(value);
//             }
//           }
//           records[key][prop] = arrayTracs;
//           arrayTracs.push(value);
//           break;
//         case "albumTitle":
//           records[key][prop] = value;
//           break;
//       }
//     } else {
//     }
//     if (value === "") {
//       delete records[key][prop];
//     }
//   }

//   return records;
// }
