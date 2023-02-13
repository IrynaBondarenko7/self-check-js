// task 1 Record Collection

//const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

//перший варіант

// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (
//     prop === "tracks" &&
//     records[id].hasOwnProperty("tracks") === false
//   ) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

//  другий варіант

// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (
//     prop === "tracks" &&
//     value !== "" &&
//     records[id].hasOwnProperty("tracks") === false
//   ) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(
//tracks should have the string Take a Chance on Me as the last and only element.
// console.log(updateRecords(recordCollection, 2548, "artist", "")); //artist should not be set
// console.log(
//   updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// ); //tracks should have the string Addicted to Love as the last element.
// console.log(updateRecords(recordCollection, 2468, "tracks", "Free")); //tracks should have the string 1999 as the first element.
//pdateRecords(recordCollection, 2468, "tracks", "Free"), //tracks tracks should not be set

// console.log(
//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// );

// console.log(
//   updateRecords(recordCollection, 1245, "tracks", "Take a Chance on Me")
// );

// console.log(updateRecords(recordCollection, 2548, "tracks", ""));

// task 2
// const myArray = [];

// // Only change code below this line
// let i = 0;
// while (i < 6) {
//   myArray.unshift(i);
//   i += 1;
// }
// console.log(myArray);

//task 3 Iterate Through an Array with a For Loop

// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i += 1) {
//   total += myArr[i];
// }
// console.log(total);

//task 4 Nesting For Loops

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr[i].length; j += 1) {
//       product *= arr[i][j];
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );
