export class Vehicle {
    id;
    vehicleNumber;
    noOfSeats;

    constructor(initializer) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.vehicleNumber) this.vehicleNumber = initializer.vehicleNumber;
        if (initializer.noOfSeats) this.noOfSeats = initializer.noOfSeats;
    }
}