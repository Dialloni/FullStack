import random

user_input = input("Enter a number: ")
def random_num():
 num = random.randint(0, 24)  # random number between 0 and 24
 return num
print(f"The random number is :" + str(random_num()))