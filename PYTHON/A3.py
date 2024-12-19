#Print the sum of all the numbers from 1-15
total = 0
for i in range(1,16):
    total += i
    #print(i)
print("The sum of all the numbers from 1-15 is: ", total) 

print("-----------------------------------------------------------")
# Use a for loop to count from 1-100. For every number that is odd print “FIZZ” or every number that is even print “BUZZ

for i in range(1, 101):
    if i% 2 != 0:
        print("FIZZ")  # prints FIZZ for odd numbers
    else:
        print("BUZZ") # prints BUZZ for even numbers

print("-----------------------------------------------------------")
# Create a list variable with 5 numbers and find the minimum, maximum and average of all those numbers. Then print them out.  
      
variable = [1, 2, 3, 4, 5]
print("The minimum number is: ", min(variable))
print ("The maximum number is: ", max(variable))
print("The average of the numbers is: ", sum(variable)/len(variable)) # the sum of nums is 15 and the length of the list is 5. 15/5 = 3
