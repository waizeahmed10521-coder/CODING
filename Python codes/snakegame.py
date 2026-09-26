import turtle
import time
import random




screen = turtle.Screen()
screen.title("Snake Game")
screen.bgcolor("lightgreen")
screen.setup(600, 500)



# snake setup
# head
head = turtle.Turtle()
head.shape("square")
head.color("navy")
head.penup()
head.goto(0, 0)
head.direction = "stop"


# body setup

body = []


# food setup
food = turtle.Turtle()
food.shape("circle")
food.color("red")
food.penup()
food.goto(-100, 50)



# control functions

def go_up():
    head.direction = "up"


def go_down():
    head.direction = "down"


def go_right():
    head.direction = "right"


def go_left():
    head.direction = "left"




# function to move the head

def move_head():
    if head.direction == "up":
        y = head.ycor()
        head.sety(y+20)
    
    if head.direction == "down":
        y = head.ycor()
        head.sety(y-20)
    
    if head.direction == "right":
        x = head.xcor()
        head.setx(x+20)
    
    if head.direction == "left":
        x = head.xcor()
        head.setx(x-20)





# keyboard listening
screen.listen()
screen.onkeypress(go_up,  "Up")
screen.onkeypress(go_down, "Down")
screen.onkeypress(go_right,  "Right")
screen.onkeypress(go_left,  "Left")




# main game loop

game = "on"

while game == "on":
    screen.update()
    
    # game over rules
    x = head.xcor()
    y = head.ycor()
    
    if x > 290  or  x < -290  or  y > 240  or y < -240:
        time.sleep(1)
        head.goto(0, 0)
        head.direction = "stop"
        # hide all the body segments
        for item in body:
            item.goto(1000, 1000)
        # clear the body list
        body.clear()
    
    
    
    # eat the food
    if head.distance(food) < 20:
        # he ate the food
        # move the food in a random position
        x = random.randint(-280, 280)
        y = random.randint(-230, 230) 
        food.goto(x, y)
        # make a new body segment and add it to the body list
        new_body = turtle.Turtle()
        new_body.shape("square")                
        new_body.color("gray")
        new_body.penup()
        
        body.append(new_body)
        
    
    
    # move the body in reverse direction
    length = len(body)
    last_position = length - 1
    
    for p in range(last_position,  0,  -1):
        x = body[p-1].xcor()
        y = body[p-1].ycor()
        
        body[p].goto(x, y)
    
    
    
    # move the 0th body to the position of head
    if len(body) > 0:
        x = head.xcor()
        y = head.ycor()
        body[0].goto(x, y)
    
    
    # finally move the head
    move_head()
    
    




