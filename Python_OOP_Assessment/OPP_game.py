import random

#Create a base Human class with five attributes: name, strength, intelligence, dexterity, and health. Give a default value of 3 for strength, intelligence, and dexterity. Health should have a default value of 100.
class Human:
    def __init__(self, name, strength=3, intelligence=3, dexterity=3, health=100):
        self.name = name
        self.strength = strength
        self.intelligence = intelligence
        self.dexterity = dexterity
        self.health = health

#Now add a new method called attack
    def attack(self, other):
        damage = 5 * self.strength
        other.health -= damage
        print(f"{self.name} attacks {other.name} for {damage} damage! {other.name} now has {other.health} health.")
#Create a class for a Ninja
class Ninja(Human):
    def __init__(self, name, strength=3, intelligence=3, dexterity=175, health=100):
        super().__init__(name, strength, intelligence, dexterity, health)

    def steal(self, other):
        self.attack(other)
        self.health += 10
        print(f"{self.name} steals and increases health by 10! {self.name} now has {self.health} health.")

#Ninja should have a method called get_away
    def get_away(self):
        self.health -= 15
        print(f"{self.name} gets away and loses 15 health! {self.name} now has {self.health} health.")

#Create a class for a Wizard
class Wizard(Human):
    def __init__(self, name, strength=3, intelligence=25, dexterity=3, health=50):
        super().__init__(name, strength, intelligence, dexterity, health)

#Wizard should have a method called heal
    def heal(self):
        self.health += 10 * self.intelligence
        print(f"{self.name} heals for {10 * self.intelligence} health! {self.name} now has {self.health} health.")

#Wizard should have a method called fireball
    def fireball(self, other):
        damage = random.randint(20, 50)
        other.health -= damage
        print(f"{self.name} casts fireball on {other.name} for {damage} damage! {other.name} now has {other.health} health.")

#Create a class for a Samurai
class Samurai(Human):
    def __init__(self, name, strength=3, intelligence=3, dexterity=3, health=200):
        super().__init__(name, strength, intelligence, dexterity, health)

#Samurai should have a method called death_blow
    def death_blow(self, other):
        if other.health < 50:
            other.health = 0
            print(f"{self.name} performs death blow on {other.name}! {other.name} now has {other.health} health.")
        else:
            self.attack(other)

#Samurai should have a method called meditate
    def meditate(self):
        self.health = 200
        print(f"{self.name} meditates and restores health to full! {self.name} now has {self.health} health.")

# When an object is constructed from this class it should have the ability to pass a name
ninja1 = Ninja(name="Maverick")
wizard1 = Wizard(name="Diallo")
samurai1 = Samurai(name="Abshir")

# Example actions
wizard1.heal()
wizard1.fireball(samurai1)
print("-------------------------------------------------------------------")
samurai1.attack(wizard1)
print("-------------------------------------------------------------------")
ninja1.steal(wizard1)
ninja1.get_away()
print("-------------------------------------------------------------------")
samurai1.death_blow(wizard1)
samurai1.meditate()