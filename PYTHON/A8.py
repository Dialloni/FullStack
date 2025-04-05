# Part 1: Formula Calculation
x = int(input("Enter the value of x: "))
y = int(input("Enter the value of y: "))

# Calculate the result
result = 3 * x + 5 * y

# Output the result
print(f"The calculated result is {result}.")

print("----------------------------------------")

# Part 2: Pay Calculator
hours_worked = float(input("Enter the total hours worked: "))
hourly_rate = float(input("Enter the hourly pay rate: "))

# Calculate regular pay
if hours_worked <= 40:
    regular_pay = hours_worked * hourly_rate
    print(f"Regular pay: {regular_pay}")
else:
    # Calculate regular pay and overtime pay
    regular_pay = 40 * hourly_rate
    overtime_hours = hours_worked - 40
    overtime_pay = overtime_hours * (1.5 * hourly_rate)
    total_pay = regular_pay + overtime_pay

    # Output the results
    print(f"Regular pay: {regular_pay}")
    print(f"Overtime pay: {overtime_pay}")
    print(f"Total pay: {total_pay}")