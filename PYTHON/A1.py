first_name = "Abubakar"
last_name = "Diallo"
print("My full name is", first_name, last_name)

print("-----------------------------------------------")
# Create a user name. Your user name must contain letters and numbers ONLY

user_name = "AbubakarDiallo123"

# Check if the user name is valid
if user_name.isalnum():
    print("The user name is valid.")
else:
    print("The user name is invalid. It must contain only letters and numbers.")

print("The number of 'a' in the user name is", user_name.count("a"))