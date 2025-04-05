import random

class BigCat:
    def __init__(self):
        self.speed = 5
        self.strength = 5
        self.intelligence = 5
        self.health = 5
        self.durability = 5

    def display_stats(self):
        print(f"Speed: {self.speed}, Strength: {self.strength}, Intelligence: {self.intelligence}, Health: {self.health}, Durability: {self.durability}")


class Lion(BigCat):
    def __init__(self):
        super().__init__()
        self.strength = 50
        self.health = 50

    def king(self, big_cat):
        if isinstance(big_cat, Cheetah):
            if random.random() < 0.6:  # 60% chance to leave unscathed
                print("The Cheetah escaped unscathed!")
                return
        big_cat.speed = 0
        big_cat.strength = 0
        big_cat.intelligence = 0
        big_cat.health = 0
        big_cat.durability = 0
        print("The Lion has depleted all attributes of its opponent!")


class Leopard(BigCat):
    def __init__(self):
        super().__init__()
        self.strength = 30
        self.intelligence = 30
        self.health = 30

    def attack(self, big_cat):
        if isinstance(big_cat, Lion):
            print("The Leopard attacks the Lion!")
            big_cat.king(self)
        elif isinstance(big_cat, Cheetah):
            if random.random() < 0.6:  # 60% chance to leave unscathed
                print("The Cheetah escaped unscathed!")
                return
        else:
            big_cat.health -= 15
            print("The Leopard has attacked and reduced the opponent's health by 15 points!")


class Cheetah(BigCat):
    def __init__(self):
        super().__init__()
        self.speed = 75
        self.strength = 25
        self.intelligence = 25
        self.health = 25
        self.durability = 25

    def run(self, big_cat):
        if isinstance(big_cat, Leopard):
            print("The Cheetah encounters a Leopard and tries to run!")
            big_cat.attack(self)
        elif isinstance(big_cat, Lion):
            print("The Cheetah encounters a Lion and tries to run!")
            big_cat.king(self)
        if self.health > 0:
            self.health -= 20
            print("The Cheetah loses 20 health points while running away!")


# Game Simulation
def game():
    lion = Lion()
    leopard = Leopard()
    cheetah = Cheetah()

    print("Initial Stats:")
    print("\nLion:")
    lion.display_stats()
    print("\nLeopard:")
    leopard.display_stats()
    print("\nCheetah:")
    cheetah.display_stats()

    print("\n--- Game Begins ---\n")

    # Lion attacks Leopard
    print("Lion attacks Leopard!")
    lion.king(leopard)
    print("\nLeopard's Stats After Attack:")
    leopard.display_stats()

    # Leopard attacks Cheetah
    print("\nLeopard attacks Cheetah!")
    leopard.attack(cheetah)
    print("\nCheetah's Stats After Attack:")
    cheetah.display_stats()

    # Cheetah runs from Lion
    print("\nCheetah runs from Lion!")
    cheetah.run(lion)
    print("\nCheetah's Stats After Running:")
    cheetah.display_stats()

    # Determine the winner
    print("\n--- Game Over ---")
    if lion.health > 0 and lion.health >= leopard.health and lion.health >= cheetah.health:
        print("The Lion is the winner!")
    elif leopard.health > 0 and leopard.health >= lion.health and leopard.health >= cheetah.health:
        print("The Leopard is the winner!")
    elif cheetah.health > 0 and cheetah.health >= lion.health and cheetah.health >= leopard.health:
        print("The Cheetah is the winner!")
    else:
        print("No one survived. It's a draw!")


# Run the game
game()