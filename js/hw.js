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
