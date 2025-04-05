class Car:
    def __init__(self, top_speed):
        self.top_speed = top_speed
        self.location = 0  # Location starts at 0

    def print_top_speed(self):
        print(f"The car's top speed is {self.top_speed} mph.")

    def drive(self):
        self.location += 10  # Increase location by 10 miles
        print(f"The car drove 10 miles. Current location: {self.location} miles.")

    def stop(self):
        print(f"The car stopped. Total distance driven: {self.location} miles.")

# Create a car object
my_car = Car(top_speed=120)

# Print the car's top speed
my_car.print_top_speed()

# Simulate a short road trip
my_car.drive()
my_car.drive()
my_car.drive()
my_car.stop()