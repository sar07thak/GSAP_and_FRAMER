var tl = gsap.timeline();

tl.from("#page1 #nav #left-options",{
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

tl.from("#page1 #nav #right-options div",{
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
})

tl.from("#smile",{
    x:-1400,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

tl.from("#welcome",{
    x:1400,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

tl.from("#to",{
    x:-1400,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})  

tl.from("#website",{
    x:1400,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})  

tl.from("#website span",{
    y:20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.5,
})



gsap.to("#page2 h1",{
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})