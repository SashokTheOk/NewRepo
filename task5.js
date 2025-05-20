const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];
const union = new Set([...firstArray, ...secondArray]);
const unionArray = [...union];
console.log(unionArray); // Set(10) {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}