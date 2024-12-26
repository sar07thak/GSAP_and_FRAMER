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

// gsap.to("#page1",{
//     scrollTrigger : {
//         trigger: "#page1 #hero",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top 60%",
//     }
// })

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

var cursor = document.querySelector("#cursor");

var body = document.querySelector("body");


body.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out(2)",
    })
})

var box = document.querySelector("#page3 #container #box");     

box.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:1.8,
        duration:0.5,
        ease:"back.out(2)",
    })
})

box.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:.7,
        duration:0.5,
        ease:"back.out(2)",
    })
})

// gsap.to(box,{
//     y:100,
//     scrollTrigger:{
//         trigger:"#page3",
//         scroller: "body",
//         markers: true,
// })
