export class Driver {
    id;
    firstName;
    lastName;
    gender;
    age;
    tagNumber;
    phoneNumber;
    address;

    constructor(initializer) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.firstName) this.firstName = initializer.firstName;
        if (initializer.lastName) this.lastName = initializer.lastName;
        if (initializer.gender) this.gender = initializer.gender;
        if (initializer.age) this.age = initializer.age;
        if (initializer.tagNumber) this.tagNumber = initializer.tagNumber;
        if (initializer.phoneNumber) this.phoneNumber = initializer.phoneNumber;
        if (initializer.address) this.address = initializer.address;
    }
}