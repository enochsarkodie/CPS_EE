export class User{
    id;
    firstName;
    lastName;
    gender;
    age;
    employeeNumber;
    phoneNumber
    department;
    address;

    constructor(initializer) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.firstName) this.firstName = initializer.firstName;
        if (initializer.lastName) this.lastName = initializer.lastName;
        if (initializer.gender) this.gender = initializer.gender;
        if (initializer.age) this.age = initializer.age;
        if (initializer.employeeNumber) this.employeeNumber = initializer.employeeNumber;
        if (initializer.phoneNumber) this.phoneNumber = initializer.phoneNumber;
        if (initializer.department) this.department = initializer.department;
        if (initializer.address) this.address = initializer.address;
        
    }
}