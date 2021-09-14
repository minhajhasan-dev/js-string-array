const anthem = "Amar Sonar Bangla Ami Tomai Valobasi";

// split
const words = anthem.split(" ");
const withoutA = anthem.split("a");
// console.log(withoutA);
// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 7);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

// concat
const first = "amader";
const second = "City";
// const fullString = first + second;
const fullString = first.concat(second).concat("abcd").concat("Riya Riya Riya");
// console.log(fullString);

//

const words2 = ["alaim", "badhon", "cameron", "david"];
const allJoined = words2.join("-");
console.log(allJoined);
