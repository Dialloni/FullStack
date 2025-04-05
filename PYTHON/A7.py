def calculate_total_cost(quantity):
    price_per_unit = 99
    
    # Determine discount percentage
    if 10 <= quantity <= 19:
        discount = 0.20
    elif 20 <= quantity <= 49:
        discount = 0.30
    elif 50 <= quantity <= 99:
        discount = 0.40
    elif quantity >= 100:
        discount = 0.50
    else:
        discount = 0.0
    
    # Calculate total cost
    total_cost = quantity * price_per_unit * (1 - discount)
    return round(total_cost, 2)

# Get user input
quantity = int(input("Enter the number of units sold: "))

# Calculate and display the total cost
total_cost = calculate_total_cost(quantity)
print(f"Total cost: ${total_cost}")
