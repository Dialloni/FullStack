import random

# Prompt the user for a value between 1 and 6
user_input = int(input("Enter a number between 1-6: "))

if user_input < 1 or user_input > 6:
    print("Invalid input. Please enter a number between 1 and 6.")
    exit()

tries = 0

while True:
    random_num = random.randint(1, 6)
    tries += 1
    if random_num == user_input:
        print("You have successfully rolled {}!".format(user_input))
        print("It took you {} tries.".format(tries))
        break