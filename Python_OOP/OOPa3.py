class Person:
    def __init__(self, name, id_number):
        self.name = name
        self.id_number = id_number

    def display(self):
        print(f"Name: {self.name}")
        print(f"ID Number: {self.id_number}")


class Employee(Person):
    def __init__(self, name, id_number, salary, post):
        super().__init__(name, id_number)  # Call the constructor of the parent class
        self.salary = salary
        self.post = post

    def display(self):
        super().display()  # Call the display method of the parent class
        print(f"Salary: {self.salary}")
        print(f"Post: {self.post}")


# Create a Person object
person = Person(name="John Doe", id_number="12345")

# Create an Employee object
employee = Employee(name="Jane Smith", id_number="67890", salary=75000, post="Manager")

# Display information for the Person object
print("Person Information:")
person.display()

# Display information for the Employee object
print("\nEmployee Information:")
employee.display()