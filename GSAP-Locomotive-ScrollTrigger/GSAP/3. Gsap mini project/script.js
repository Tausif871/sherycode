


// gsap from uses because we are set to final to initail position.


// we nat to make the element come one by one , how to do it?

// ---- stagger makes the element to load one by one , and 1 is time in sec .


var tl = gsap.timeline()

tl.from("#nav h3",{
  y:-50.,
  opacity:0,
  delay:0.4,
  duration:0.7,
  stagger:0.4
})



tl.from("#main h1",{
  x:-500,
  opacity:0,
  duration:0.8,
  stagger:0.4
})

tl.from("img",{
  x:100,
  rotate:50,
  opacity:0,
  duration:0.4,
  stagger:0.5
})