const numbers = [45, 65, 23, 98, 29];

for (let i = 0; i < numbers.length; i++) {
  //Onw Way of priniting numbers in an array
  let number = numbers[i];
  console.log(number);
}

for (let number of numbers) {
  console.log(number);
}

for (let [index, num] of numbers.entries()) {
  console.log(`Index of the number is ${index} and the number is ${num}`);
}

const products = [
  { id: 1, name: "Walton Phone", price: 19000 },
  { id: 2, name: "Xiaomi Phone", price: 29000 },
  { id: 3, name: "Mac Book Air", price: 109000 },
  { id: 4, name: "HP Z BOOK", price: 69000 },
  { id: 5, name: "Nokia Phone", price: 9000 },
  { id: 6, name: "Maxima", price: 20000 },
  { id: 7, name: "Symphony", price: 30000 },
  { id: 8, name: "Nothing phone", price: 50000 },
  { id: 9, name: "M1 cheap Pair Laptop", price: 20000000 },
];

for (let product of products) {
  console.log(`Price of the product is ${product.price}`);
}

function matchedProducts(products, search) {
  const matched = [];
  for (let product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const result = matchedProducts(products, "Phone");
console.log(result);
