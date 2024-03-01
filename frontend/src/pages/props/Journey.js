export class Journey {
    
    constructor(initializer){
        this.id = initializer.id;
        this.pickUpLocation = initializer.pickUpLocation;
        this.destination = initializer.destination;
        this.typeOfJourney = initializer.typeOfJourney;
        this.dateOfDeparture = initializer.dateOfDeparture;
        this.timeOfDeparture = initializer.timeOfDeparture;
        this.passengers = initializer.passengers;
        this.vehicle = initializer.vehicle;
        this.numOfPassengers = this.passengers.length;
        }

        getListOfPassenger(){
            return this.passengers;
        }

        getNumberOfPassenger(){
            return this.numOfPassengers
        }

        addPassgenger(passenger){
            if((this.vehicle.noOfSeats) === (this.getNumberOfPassenger())){
                return -1;
            }
            this.passengers.push(passenger);
        }

    
    }