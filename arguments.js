function addNumbers(num1, num2) {
  // console.log(arguments);
  let result = 0;
  for (const num of arguments) {
    result = result + num;
  }
  // const result = num1 + num2;
  return result;
}
const sum = addNumbers(5, 2, 1);
// console.log(sum);

function getFullName(firstName, lastName) {
  let fullName = "";
  for (const part of arguments) {
    fullName = fullName + " " + part;
  }
  return fullName;
}
const name = getFullName("Omuk", "songket", "bin", "Hanif", "Songket");
console.log(name);
