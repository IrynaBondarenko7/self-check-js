//1) Перетворити масив в бінарне число
// const arr = [0, 0, 1, 0];
// const parseArray = (arr) => {
//   return arr.reduce((acc, val) => {
//     return (acc << 1) | val;
//   });
// };
// console.log(parseArray(arr));

//2)перевірити наявність овець і повернути їх к-сть
// const arrayOfSheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];
// function countSheeps(arrayOfSheep) {
//   let allsheep = [];
//   for (let sheep of arrayOfSheep) {
//     if (sheep === true) {
//       allsheep.push(sheep);
//     }
//   }
//   return allsheep.length;
// }
// console.log(countSheeps(arrayOfSheep));

//3)аргумент перетворити в буль і повернути цей буль як рядок
// function booleanToString(b) {
//   const result = Boolean(b);
//   return String(result);
// }

// console.log(booleanToString(true));

//4)We need a function that can transform a number (integer) into a string.

// function numberToString(num) {
//   return String(num);
// }
// console.log(200);

//5)

// function basicOp(operation, value1, value2) {
//   // Code

//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// }
// console.log(basicOp("+", 4, 7));

// //or
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//   }
// }

//6) Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// function repeatStr(n, s) {
//   return `${s.repeat(n)}`;
// }

// console.log(repeatStr(3, "#"));

//or
// repeatStr = (n, s) => s.repeat(n);
