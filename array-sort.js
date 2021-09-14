const numbers = [4, 7, 1, 3, 9, 2, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ["kabli", "josim", "rajjak", "anwar", "deepjol", "badsha"];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reverseFriends = friends.reverse();
// console.log(reverseFriends);

const sortedReverseFriends = friends.sort().reverse();
console.log(sortedReverseFriends);

// number sorting fun
const bigNumbers = [66, 56, 91, 93, 9, 3, 54, 23, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
  return a - b;
});
console.log(sortedBigNumbers);
