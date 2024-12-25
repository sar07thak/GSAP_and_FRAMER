var main = document.querySelector(".main")
var cursor = document.querySelector("#cursor")
var box1 = document.querySelector("#box1")

main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor , {
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out(2)",
        
    })
})

box1.addEventListener("mouseenter",()=>{
    gsap.to(cursor , {
        scale:1.5,
        duration:0.5,
        ease:"back.out(2)",
    })
})

box1.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:.8,
        duration:0.5,
        ease:"back.out(2)",
    })
})