const person = {
    firstName: "Chester",   
    lastName: "Bennington",
    age: 41
};
person.email = "LP@gmail.com";
delete person.age;  
console.log(person);