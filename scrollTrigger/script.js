gsap.from("#page1 #box",{
    scale: 0,
    duratation : 2 ,
    delay: 1.2,
    borderRadius: "50%",
    rotation: 360,

    // opacity: 0,
    // ease: "power1.inOut",

})

gsap.from("#page2 #box",{
    scale: 0,
    duration : 2 ,
    delay: 1,
    rotation: 720,
    // scrollTrigger:"#page2 #box", // this is for basic scrollTrigger
    scrollTrigger:{ // this is for advanced scrollTrigger
        trigger : "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub:1,
        pin: true,
    }
})
