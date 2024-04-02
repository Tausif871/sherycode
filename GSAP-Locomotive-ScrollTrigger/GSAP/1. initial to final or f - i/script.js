

// GSAP – A wildly robust JavaScript animation library built for professionals.

// gsap is an animationb library, [ GSAP - GreenSock Animation Platform ] Greensock company creates gsap , to use gsap use cdn link .

// gsap is used for moving animations.


// there are 2 types of animations in js - 1st - initial to final  , 2nd - final to initial . 

// gsap.to("elemenmtName", {})  -- it used for initial to final stage.

gsap.to("#box", {
  x:1000,
  rotate : 360,
  backgroundColor : "blue",
  duration : 2,
  delay : 1

})


// gsap.from() - it is used for final to initial stage .


gsap.from("#box1",{
  x:1000,
  rotate:360,
  backgroundColor:"green",
  duration:2,
  delay:1
})