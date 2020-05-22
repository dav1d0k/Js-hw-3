let car1 = {
    name: "audi",
    color: "white",
    model: "A4",
    year: 2019,
    hp: 190,
    price: 20000
}
let car2  ={
    name: "ford",
    color: "black",
    model: "b8",
    year: 2020,
    hp: 190,
    price: 30000
}
let car3  = {
    name: "toyota",
    color: "blue",
    model: "c8",
    year: 2015,
    hp: 190,
    price: 40000
}

let cars = [];

cars.push(car1);
cars.push(car2);
cars.push(car3);


function aPrice () {
    console.log(`Average price of cars is ${(car1.price + car2.price + car3.price) / cars.length}$`);
}
aPrice();

let prices = [];

prices.push(car1.price);
prices.push(car2.price);
prices.push(car3.price);

function minElementInArray (array) {
    if (array.length == 0) {
        return undefined;
    }

    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let maxElement = minElementInArray(prices);

console.log(`Most expencive cars price is ${maxElement}$`);
