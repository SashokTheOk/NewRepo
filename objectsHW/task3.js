const car1 = {
    brand: "Honda",
    model: "NSX",
    year: 1990,
}
const car2 = {
    brand: "Opel",
    model: "Kadett",
    Ownner: "Richard",
}
const car3 = {...car1, ...car2};
console.log(car3); // { brand: 'Opel', model: 'Kadett', year: 1990, Ownner: Richard }