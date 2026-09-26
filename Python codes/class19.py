

# SET
# Characteristics
    # Doesn't allow duplicates
    # Doesn't have any order/serial
    # add/remove allowed



books = {"english", "english", "religion", "science", "math"}

print(books)

# add new book
books.add("bgs")

print(books)

# remove any
books.remove("english")

print(books)





# Take a list, but it has some duplicates
# Your task is to remove the duplicates from the list


roll_numbers = [1, 2, 3,3, 4, 5, 5, 5, 6]

print(roll_numbers)

rolls_set = set(roll_numbers)

print(rolls_set)

rolls_list = list(rolls_set)

print(rolls_list)



# *HW 1:*

# Make a set of some days name (example: sunday, monday, tuesday, etc)
# Then add another day to the set
# Then remove a day from the set

# *HW 2:*

#  Take this list and remove duplicates from this list
#  friends = ["omar", "ahmed", "omar", "omar", "sayed"]