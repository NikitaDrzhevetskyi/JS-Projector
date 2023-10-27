"use strict";

class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  getInfo() {
    return `This ${this.brand} Vehicle was produce in ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(brand, year, cost, model) {
    super(brand, year);
    this.cost = cost;
    this.model = model;
  }
  getCarInfo() {
    return `${this.brand} ${this.model} was released in ${this.year} and costs ${this.cost}$`;
  }
}
class Bicycle extends Vehicle {
  constructor(brand, year, type) {
    super(brand, year);
    this.type = type;
  }
  getBicycleInfo() {
    return `The ${this.brand} bicycle was released in ${this.year} and designed for ${this.type}`;
  }
}
let vehicle1 = new Vehicle("BMW", 2020);
console.log(vehicle1);
console.log(vehicle1.getInfo());
let car1 = new Car("Skoda", 2021, 32000, "Suberb");
console.log(car1);
console.log(car1.getCarInfo());
let bicycle1 = new Bicycle("Artos", 2021, "mountain biking");
console.log(bicycle1);
console.log(bicycle1.getBicycleInfo());
