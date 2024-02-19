export class Driver {
    id;
    pickUpLocation;
    destination;
    typeofJourney;
    timeOfDeparture;

    constructor(initializer) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.pickUpLocation) this.pickUpLocation = initializer.pickUpLocation;
        if (initializer.destination) this.destination = initializer.destination;
        if (initializer.typeofJourney) this.typeofJourney = initializer.typeofJourney;
        if (initializer.timeOfDeparture) this.timeOfDeparture = initializer.timeOfDeparture;
    }
}