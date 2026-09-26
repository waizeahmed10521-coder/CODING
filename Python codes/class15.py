# Make a system for traffic fines

# take a speed variable
# if the speed is above 100 km/h, the fine is 2000 BDT
# if the speed is above 80 km/h the fine is 1500 BDT
# if the speed is above 70 km/h the fine is 1000 BDT
# if the speed is above 60 km/h the fine is 500 BDT

# Otherwise, no fine


speed = 65

if speed >= 100:
    print("Bad luck!! 2000 Taka fine")

elif speed >= 80:
    print("1500 Taka fine")

elif speed >= 70:
    print("1000 Taka fine")
    
elif speed >= 60:
    print("500 Taka fine")

else:
    print("No fine, drive safely!")






# Make a system for giving discounts in an online bookshop

# if the order amount is above 2000 BDT, give 20% discount
# if the order amount is between 1500 and 2000, give 15% discount
# if the order amount is between 1000 and 1500, give 10% discount
# if the order amount is above 500 give 5% discount
# Otherwise, no discount


order = 1300



if order > 2000:
    print("You get 20% discount")

elif  order >= 1500  and  order <= 2000:
    print("You get 15% discount")

elif order >= 1000  and  order < 1500:
    print("You get 10% discount")

elif order >= 500:
    print("You get 5% discount")

else:
    print("No discount available")







# Homework: 

# Make a system for riding a roller coaster based on age

# if age is above 20, you can ride alone
# if age is between 15 and 20, you can also ride alone
# if age is between 10 and 15, you can ride with your parent
# Otherwise, you cannot ride

