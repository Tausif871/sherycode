

gsap.from("#page1 #circle",{
  scale:0,
  delay:1,
  durartion:2,
  rotate:720
})
gsap.from("#page2 #circle",{
  scale:0,
  durartion:2,
  rotate:720,
  scrollTrigger:"#page2 #circle"   // normal method scrollTrigger
})
gsap.from("#page3 #circle",{
  scale:0,
  durartion:2,
  rotate:720,
  scrollTrigger:{     // advance method of scroll trigger 
    trigger: "#page3 #circle",
    scroller: "body",
    markers:true,
    start:"top 60%",
    scrub:5
  }
})





