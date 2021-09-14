const numbers = [3, 23, 43, 5, 29, 34, 56, 21, 45, 88];
// slice
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// splice
const numberSpliced = numbers.splice(4, 2);
// console.log(numberSpliced);
// console.log(numbers);

const numberSpliced2 = numbers.splice(4, 3, 99, 111, 999, 444);
console.log(numberSpliced2);
console.log(numbers);
