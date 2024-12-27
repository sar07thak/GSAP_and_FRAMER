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

tl.to("#page1 .left-container h1",{
    x: 100,
    // opacity: 0,
    duration: 2,
    delay: 0.5,
    stagger: 0.2,
})

gsap.to("#page1 .left-container h1",{
    scrollTrigger: {
        trigger: "#page1 .left-container",
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top 70%", // Keep this to allow visibility
        scrub: 1, // Reduced scrub value for smoother animation
        // pin: true,
    },
    y: 60, // Set to 0 to keep it in view
    duration: 2,
    delay: 1,
    opacity: 0, // Ensure opacity starts at 1
    ease: "power4.inOut",   
    stagger: 0.6,
})

gsap.from("#page1 .right-container .ball",{
    y: 200,
    duration: 1.5,
    opacity: 0,
    scale: .8,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
})


window.addEventListener("wheel",(e)=>{
    e.preventDefault();
    console.log(e.deltaY);
    if(e.deltaY > 0){
        gsap.to(".marque",{
            transform: "translateX(-200%)",
            ease: "none",
            duration: 4,
            repeat: -1,
        })
        gsap.to(".marque img",{
            rotate: "90deg",
           
        })
    }
    else{
        gsap.to(".marque",{
            transform: "translateX(0%)",
            duration: 4,
            ease: "none",
            repeat: -1,
        })
        gsap.to(".marque img",{
            rotate: "0deg",
            
        })
    }
})