const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
const positiveNumbers = numbers.filter(num => num > 0); 
const negativeNumbers = numbers.filter(num => num < 0);
const zeroNumbers = numbers.filter(num => num === 0);
for (let i = 0; i < positiveNumbers.length; i++) {
    console.log(positiveNumbers[i]+1);
}
for (let i = 0; i < negativeNumbers.length; i++) {
    console.log(negativeNumbers[i]+1);
}
for (let i = 0; i < zeroNumbers.length; i++) {
    console.log(zeroNumbers[i]+1);
}
console.log(`Positive numbers in massive: ${positiveNumbers.length}`);
console.log(`Negative numbers in massive: ${negativeNumbers.length}`);
console.log(`Zero numbers in massive: ${zeroNumbers.length}`);