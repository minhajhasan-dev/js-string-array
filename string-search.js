const products = [
  "dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "yellow laptop with back camera",
  "Dell 1X59 lenovo commercial yoga laptop",
  "LG supernova laptop",
  "HTC low price Phone",
  "Dell purple color phone with Laptop",
];

const searching = "phone";

// indexOf
const output = [];
/* for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
} */
// console.log(output);
for (const product of products) {
  if (product.toLowerCase().includes(searching.toLowerCase())) {
    // output.push(product);
  }
}
// console.log(output);
// starts with
for (const product of products) {
  if (product.toLowerCase().startsWith(searching.toLowerCase())) {
    output.push(product);
  }
}
console.log(output);
