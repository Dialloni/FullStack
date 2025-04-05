class Boxer:
    def __init__(self, height, strength, wins, losses):
        self.height = height
        self.strength = strength
        self.wins = wins
        self.losses = losses

    def display_stats(self):
        print(f"Height: {self.height} inches")
        print(f"Strength: {self.strength}")
        print(f"Wins: {self.wins}")
        print(f"Losses: {self.losses}")

# Create two Boxer objects
boxer1 = Boxer(height=72, strength=85, wins=20, losses=5)
boxer2 = Boxer(height=75, strength=90, wins=25, losses=3)

# Display stats for both boxers
print("Boxer 1 Stats:")
boxer1.display_stats()
print("\nBoxer 2 Stats:")
boxer2.display_stats()

# Determine the best boxer based on properties
best_boxer = max([boxer1, boxer2], key=lambda b: (b.height, b.strength, b.wins, -b.losses))

# Prompt the user to choose a boxer to bet on
user_input = int(input("\nChoose a boxer to bet on (1 or 2): "))

# Validate user input
if user_input not in [1, 2]:
    print("Invalid choice. Please choose either 1 or 2.")
else:
    chosen_boxer = boxer1 if user_input == 1 else boxer2

    # Check if the chosen boxer is the best boxer
    if chosen_boxer == best_boxer:
        print("Congratulations! You chose the best boxer. You win your bet!")
    else:
        print("Sorry, you chose the wrong boxer. You lose your bet.")