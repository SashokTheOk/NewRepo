const users = [
    { name: 'Jonathan', age: 54 },
    { name: 'Paul ', age: 82 },
    { name: 'Ozzy ', age: 76 }
]
for (const { name, age } of users) {
    console.log(`Name: ${name}, Age: ${age}`);
}