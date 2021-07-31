var ball = {

x: 10,
y: 10,
r: 5,
speed: 0,
color: "blue",

}

function setup () {

}

function draw () {

  background ("white")
  circle(ball.x, ball.y, ball.r)
  ball.speed = 2
  ball.x=ball.x+ball.speed

}