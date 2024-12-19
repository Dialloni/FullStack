# Prompt the user for a number between 1 and 3 (1=Rock, 2=Paper, or 3=Scissors)
import random

while True:
 user_input = int(input("Enter a number between 1-3: "))

 if user_input == 1:
   print("You chose Rock")
 elif user_input == 2:
   print("You chose Paper")
 elif user_input == 3:
    print("You chose Scissors")
 else:
  print("Invalid input. Please enter a number between 1-3")


# Generate a random number between 1 and 3
 random_num = random.randint(1, 3)
 
# Print the computer's choice and user's choice
 if random_num == 1:
    print("The computer chose Rock")
 elif random_num == 2:
    print("The computer chose Paper")
 elif random_num == 3:
    print("The computer chose Scissors")

    if user_input == random_num:
        print("It's a tie!")
    elif (user_input == 1 and random_num == 3) or (user_input == 2 and random_num == 1) or (user_input == 3 and random_num == 2):
     print("You win!")
    else:
      print("You lose!")