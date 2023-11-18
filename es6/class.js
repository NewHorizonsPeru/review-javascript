/*function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.printFullname = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

const person = new Person("Jhon", "Perez");
person.printFullname();*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  printFullName() {
    console.log(`${this.firstName}, ${this.lastName}.`);
  }
}

console.log(typeof Person);

const person = new Person("Jhon", "Perez");
person.printFullName();
