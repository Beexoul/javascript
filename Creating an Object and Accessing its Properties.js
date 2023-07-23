//Creating an Object and Accessing its Properties

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["Reading", "Gardening", "Painting"],
  sayHello: function() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
  }
};

console.log("First Name:", person.firstName);
console.log("Age:", person.age);
console.log("City:", person.address.city);
console.log("Hobbies:", person.hobbies);
person.sayHello();
