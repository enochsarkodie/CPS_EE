export class Journey {
    id;
    pickUpLocation;
    destination;
    typeOfJourney;
    timeOfDeparture;

    constructor(initializer) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.pickUpLocation) this.pickUpLocation = initializer.pickUpLocation;
        if (initializer.destination) this.destination = initializer.destination;
        if (initializer.typeOfJourney) this.typeOfJourney = initializer.typeOfJourney;
        if (initializer.timeOfDeparture) this.timeOfDeparture = initializer.timeOfDeparture;
    }
}