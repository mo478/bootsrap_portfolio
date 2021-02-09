var dreamCar = {
    make: "Oldsmobile",
    model: "old",
    color: "green",
    year: 1234,
    bodyStyle: "Luxury Car",
    price: 4500
};
document.getElementById("pricetag")
    .innerHTML = dreamCar.price;

document.getElementById("modelyear")
    .innerHTML = dreamCar.year;
(1234)

document.getElementById("body")
    .style.backgroundColor = dreamCar.color;

document.getElementById("body")
    .innerHTML = dreamCar.make + "wheels" + dreamCar.model;