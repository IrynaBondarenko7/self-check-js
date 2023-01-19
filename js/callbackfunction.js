//4 module

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza(); //результат виконання функції makePizza
// const pointer = makePizza; //посилання на функцію makePizza

// console.log(result);

// console.log(pointer);

//2) Callback function

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// function twoSum(nums, target) {
//   for (let i = 0; i < 4; i += 1) {
//     if (nums[i] + nums[i] === target) {
//       console.log(i);
//     }
//   }
// }
// twoSum();
// console.log(twoSum([2, 7, 11, 15], 9));

//3)
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     for (let pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         return makePizza(pizzaName);
//       }
//     }
//     return onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// makePizza();
// onOrderError();
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// pizzaPalace.order("Vienna", makePizza, onOrderError);

//4)риймає два масиви довільної довжини в параметри,
//і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (number, index) {
//     console.log(number);
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]

//5) Чисті функції
// Повернути новий масив, якщо елемент-парне число, додати до нього вел'ю
// function changeEven(numbers, value) {
//   newArray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       element = element + value;
//     }
//     newArray.push(element);
//   });

//   return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
