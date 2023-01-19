//1) every
//У змінній eachElementInFirstIsEven був результат перевірки  на парність.
// eachElementInFirstIsOdd - на непарність.
// eachElementInSecondIsEven був результат  secondArray на парність.
// eachElementInSecondIsOdd був результат  secondArray -на непарність.
// eachElementInThirdIsEven був результат  thirdArray - на парність.
// eachElementInThirdIsOdd був результат thirdArray - на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every((number) => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((number) => number % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(
//   (number) => number % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   (number) => number % 2 !== 0
// );

// const eachElementInThirdIsEven = thirdArray.every((number) => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((number) => number % 2 !== 0);

//2) some
//У  anyElementInFirstIsEven був результат - парних елементів в масиві firstArray.
//У  anyElementInFirstIsOdd був результат - непарних елементів в масиві firstArray.
//У  anyElementInSecondIsEven був результат - парних елементів в масиві secondArray.
//У  anyElementInSecondIsOdd був результат - непарних елементів в масиві secondArray.
//У  anyElementInThirdIsEven був результат - парних елементів в масиві thirdArray.
//У  anyElementInThirdIsOdd був результат - непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some((number) => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((number) => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((number) => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((number) => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((number) => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((number) => number % 2 === 0);

//3)щоб вона перевіряла наявність активних користувачів (властивість isActive)
//і повертала true або false.

// const isAnyUserActive = users => users.some(user=> user.isActive===true);
