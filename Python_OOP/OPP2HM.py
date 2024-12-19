class Boxer:
    def __init__(self, height, strength, win, loss):
        self.height = height
        self.strength = strength
        self.win = win
        self.loss = loss

    def printStats(self):
        print("Height: ", self.height)
        print("Strength: ", self.strength)
        print("Win: ", self.win)
        print("Loss: ", self.loss)
        print("--------------------------------------------")
             
boxer1 = Boxer(10, 8, 10, 2)
boxer2 = Boxer(20, 18, 10, 4)
boxer3 = Boxer(30, 28, 10, 6)

print("Boxer 1")
boxer1.printStats()

print("Boxer 2")
boxer2.printStats()

print("Boxer 3")
boxer3.printStats()

userinput = int(input("Enter the boxer to bet on (1, 2, or 3): "))

boxer1_total = (boxer1.height + boxer1.strength)*boxer1.win/(boxer1.loss+1) 
boxer2_total = (boxer2.height + boxer2.strength)*boxer2.win/(boxer2.loss+1)
boxer3_total = (boxer3.height + boxer3.strength)*boxer3.win/(boxer3.loss+1)

winning_boxer = 0

if (boxer1_total > boxer2_total):
    winning_boxer = 1
else:
    winning_boxer = 2

if(userinput == winning_boxer):
    print("You have chosen the best boxer")
else:
    print("You have chosen the wrong boxer")