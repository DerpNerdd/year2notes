abstract class Vehicle{
    constructor(public brand: string) {}

    abstract startEngine(): void;

    displayEngine(): void {
        console.log(`${this.brand}`);
    }
}

class Car extends Vehicle {
    startEngine(): void {
        console.log(`${this.brand} car engine started.`);
    }
}

class Motorcycle extends Vehicle {
    startEngine(): void {
        console.log(`${this.brand} motorcycle engine started.`);
    }
}

const myMotorcycle = new Motorcycle("Harley-Davidson");
myMotorcycle.startEngine();
myMotorcycle.displayEngine();

const myCar = new Car("Toyota");
myCar.startEngine();
myCar.displayEngine();

