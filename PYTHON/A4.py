import random

#Create a python guessing game using the input() function.

random_num = random.randint(1, 10)
print(random_num)

while True:
    guess_num=int(input("Guess a number between 1-10: "))

    if guess_num == random_num:
        print("You guessed correctly!")
        break
    elif guess_num > random_num:
        print("The number is too big, guess again!")

    elif guess_num < random_num:
        print("The number is too small, guess again!")


 