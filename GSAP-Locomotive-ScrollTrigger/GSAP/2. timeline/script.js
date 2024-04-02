// advance level learn timeline -


// gsap.timeline() - use to give the timeline to all elements which we want to move together.


var time = gsap.timeline()


time.to("#box1",{
  x : 1200,
  rotate : 360,
  backgroundColor : "crimson",
  scale : 0.5,
  duration : 2,
  delay : 1
})
time.to("#box2",{
  x : 1200,
  rotate : 360,
  backgroundColor : "grey",
  scale : 0.5,
  duration : 2,
  delay : 1
})
time.to("#box3",{
  x : 1200,
  rotate : 360,
  backgroundColor : "blue",
  scale : 0.5,
  duration : 2,
  delay : 1
})