def count_ones(binary):
    count = 0
    for i in binary:
        if i == '1':
            count += 1
    return count
print(count_ones("1010101")) # 4

print("-----------------------------------------------------------")

def replace_ones_two(binary):
    new_binary = ""
    for char in binary:
        if  char == "1":
            new_binary += "2"
        else:
            new_binary += char
    return new_binary
print(replace_ones_two("1010101")) # "2020202"
