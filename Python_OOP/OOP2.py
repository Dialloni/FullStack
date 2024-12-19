class Boxer:
    def __init__(self, size, strength, win, loss):
        self.size = size
        self.strength = strength
        self.win = win
        self.loss = loss

# Create instances of Boxer
boxer2 = Boxer(size=10, strength=8, win=10, loss=2)
boxer3 = Boxer(size=20, strength=18, win=10, loss=4)
boxer4 = Boxer(size=30, strength=28, win=10, loss=6)

# List of boxers
boxers = [boxer2, boxer3, boxer4]

# Determine the best boxer based on properties
best_boxer = max(boxers, key=lambda boxer: boxer.strength)

# Prompt the user to choose a boxer
userinput = int(input("Enter the boxer to bet on (1, 2, or 3): "))

# Validate user input
if userinput < 1 or userinput > 3:
    print("Invalid input")
else:
    chosen_boxer = boxers[userinput - 1]

    # Check if the chosen boxer is the best boxer
    if chosen_boxer == best_boxer:
        print("You have chosen the best boxer")
    else:
        print("You have chosen the wrong boxer")