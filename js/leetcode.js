// Задача з Leetcode
//якщо сума двух елементів масиву=target, то повернути масив індексів цих чисел.

// function includes(array, value) {
//   let newArray = [];
//   for (let i = 0; i <= array.length; i += 1) {
//     console.log(i);

//     if (array[i] + array[i + 1] === value) {
//       newArray.push(i, i + 1);
//     }
//   }
//   return newArray;
//   //return newArray.push(array[i]);
// }

// console.log(includes([2, 7, 11, 15], 9)); //[0, 1]
// console.log(includes([3, 2, 4], 6)); //[1,2]
// console.log(includes([3, 3], 6)); //[0, 1]

// var twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length; i += 1) {
//     for (let j = i + 1; j <= nums.length; j += 1) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
// console.log(twoSum([3, 2, 4], 6)); //[1,2]
