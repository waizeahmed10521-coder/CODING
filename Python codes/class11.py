from turtle import *




# rectangle

pencolor("green")
fillcolor("green")
begin_fill()

for number in range(2):
    forward(200)
    left(90)
    forward(100)
    left(90)

end_fill()



# change position

penup()
goto(80, 20)
pendown()




# draw the circle

pencolor("red")
fillcolor("red")
begin_fill()

circle(30)

end_fill()



# now make the stand

# change the position
penup()
goto(0, 100)
pendown()


# change the direction for the stand
right(90)


# now, the stand

pencolor("black")
pensize(5)
forward(300)


# Your HW:
# Draw two flags:-
# 1. Japan
# 2. Bangladesh







done()