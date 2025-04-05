// Person class
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    display() {
        console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
}

// Employee class
class Employee extends Person {
    constructor(name, id, salary, post) {
        super(name, id); // Call the parent class constructor
        this.salary = salary;
        this.post = post;
    }

    display() {
        super.display(); // Call the parent class display method
        console.log(`Salary: ${this.salary}, Post: ${this.post}`);
    }
}

// Create a new Person object
const person = new Person("John Doe", 101);

// Create a new Employee object
const employee = new Employee("Jane Smith", 102, 50000, "Manager");

// Display information for both Person and Employee
person.display();
employee.display();