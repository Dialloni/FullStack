// Car class
class Car {
    constructor(topSpeed) {
        this.topSpeed = topSpeed; // Top speed property
        this.location = 0; // Location property starts at 0
    }

    printTopSpeed() {
        console.log(`Top Speed: ${this.topSpeed} mph`);
    }

    drive() {
        this.location += 10; // Increase location by 10 miles
        console.log(`Driving... Current location: ${this.location} miles`);
    }

    stop() {
        console.log(`Car stopped. Final location: ${this.location} miles`);
    }
}

// Create a car object
const myCar = new Car(150); // Top speed is 150 mph

// Print the car's top speed
myCar.printTopSpeed();

// Drive the car multiple times
myCar.drive();
myCar.drive();
myCar.drive();

// Stop the car and print the final location
myCar.stop();