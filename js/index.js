//1) Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел,
//і обчислює загальну суму його елементів.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const item of order) {
//     total += item;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));  //138

//2) Напиши функцію, яка повертає найдовше слово в цьому рядку

// function findLongestWord(string) {
//   let word = string.split(" ");

//   let longesrword = word[0];
//   for (const item of word) {
//     if (item.length > longesrword.length) {
//       longesrword = item;
//     }
//   }
//   return longesrword;
// }
// console.log(findLongestWord("May the force be with you"));

//3) Функція має повертати масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17)); //[14, 15, 16, 17]

//4) Напиши функцію,яка повертає новий масив, в якому будуть тільки ті елементи масиву numbers,
//які більші за значення параметра value (число).

// function filterArray(numbers, value) {
//   let biggerNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       biggerNumbers.push(number);
//     }
//   }
//   return biggerNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

//Інший варіант

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

//5) Якщо фрукт присутній в масиві, то функція повертає true;

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("pear"));

//6) Напиши функцію,яка отримує два масиви довільної довжини в параметри array1 і array2,
//і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   let result = [];
//   for (let item of array1) {
//     if (array2.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]

//7) Напиши функцію, яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   let result = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// console.log(getEvenNumbers(2, 5)); //[2, 4]
// console.log(getEvenNumbers(3, 11)); //[4, 6, 8, 10]

//8)Напиши функцію, яка робить те саме, що і метод масиву масив.includes(значення) -
//перевіряє, чи присутнє в масиві array значення value,
//повертаючи true, якщо присутнє, і false в іншому випадку.
//не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//   for (let i = 0; i <= array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); //true
// console.log(includes([1, 2, 3, 4, 5], 17)); //false

// function getwinner(country) {
//   let message;

//   switch (country) {
//     case "Ukraine":
//       message = "Iryna pays for cinema";
//       break;
//     case "England":
//       message = "Adam pays for cinema";
//       break;

//     default:
//       message = "played a draw";
//   }

//   return message;
// }
// console.log(getwinner("England"));

// const win = {
//   ukraine: {
//     status: "winner",
//   },
//   england: {
//     status: "loser",
//   },
// };
// function getwinner(countries) {
//   const allcountry = Object.keys(win);
//   for (country of allcountry) {
//     if (winner.ukraine.status === winner) {
//       return "Iryna pays for cinema";
//     } else {
//       return "Adam pays for cinema";
//     }
//   }
// }
// console.log(win);
// console.log(getwinner([ukraine, england]));

//Objects
//1)

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   let salaryValue = Object.values(salaries);
//   for (let i of salaryValue) {
//     totalSalary += i;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//2) Робота з колекцією, масив об'єктів
//--Щоб отримати доступ до значень ключів, перебираємо масив і через крапку отримуємо доступ

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// console.table(colors);

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
//---------------------------------------------------------
//--Щоб по пошуку name функція повертала price

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.table(products);

// function getProductPrice(productName) {
//   for (let item of products) {
//     console.log(item);
//     let itemName = item.name;
//     if (itemName === productName) {
//       return item.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Engine"));

//3)  Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let result = [];

//   for (let item of products) {
//     if (propName === "name") {
//       result.push(item.name);
//     } else if (propName === "price") {
//       result.push(item.price);
//     } else if (propName === "quantity") {
//       result.push(item.quantity);
//     }
//   }
//   return result;
// }

// console.log(getAllPropValues("quantity")); //[4, 3, 7, 9]
// console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("price")); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); //[]

//4)Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let sum = 0;
//   for (let item of products) {
//     if (productName === item.name) {
//       sum = item.price * item.quantity;
//     }
//   }
//   return sum;
// }
// console.log(calculateTotalPrice("Radar")); //5200
// console.log(calculateTotalPrice("Droid")); //2800

// Деструктиризація
//1)
// function calculateMeanTemperature(forecast) {
//   const { today: {low:todayLow,high:todayHigh,},tomorrow:{low:tomorrowLow,high:tomorrowHigh}} = forecast,
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;

// }

//2) оператор spread-right side

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   let newTask = {
//     category: "General",
//     priority: "Normal",
//     ...data,
//     completed,
//   };
//   return newTask;
//   // Change code above this line
// }
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// ); //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// //{ category: "General", priority: "Low", text: "Choose shampoo", completed: false }

//3)The ... (rest) operation - left side
// повернути суму аргуметнів
// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(32, 6, 13, 19, 8)); //78
// console.log(add(74, 11, 62, 46, 12, 36)); //241

//4)
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51

//5)

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (const element of array) {
//     if (args.includes(element)) {
//       matches.push(element);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //[17, 89, 2]

//6)метод змінював назву книги з oldName на newName у властивості books

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],

//   updateBook(oldName, newName) {
//     let indexOld = this.books.indexOf(oldName);

//     this.books.splice(indexOld, 1, newName);
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.books);

//7) Корзина замовлень

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];

//       if (name === potionName) {
//         potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     let { potions } = this;
//     for (let potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.getPotions());
