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

//2)аргумент перетворити в буль і повернути цей буль як рядок
// function booleanToString(b) {
//   const result = Boolean(b);
//   return String(result);
// }

// console.log(booleanToString(true));
