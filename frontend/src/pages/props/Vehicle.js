export class Vehicle {
    constructor(initializer) {
        this.id = initializer.id;
        this.vehicleNumber = initializer.vehicleNumber;
        this.noOfSeats = initializer.noOfSeats;
        this.driver = initializer.driver;
    }

    getDriver(){
        return this.driver;
    }
}