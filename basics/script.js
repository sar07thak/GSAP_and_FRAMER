// gsap is a javascript library for animating html elements
// gsap.to() is a function that animates the html element
// gsap.from() is a function that animates the html element from its original position
// gsap.fromTo() is a function that animates the html element from its original position to its target position
// gsap.set() is a function that sets the html element to its target position
// gsap.to() is a function that animates the html element to its target position



// gsap.to("#box", {
//     y: 340, // move the box down by 340px in y axis
//     delay: 1, // delay the animation by 1 second
//     speed: 1, // speed of the animation
//     duration: 2, // duration of the animation
//     ease: "power1.inOut", // ease of the animation
//     rotation: 360, // rotate the box by 360 degrees
//     scale: 0.5, // scale the box by 0.5
//     backgroundColor: "gray",   // change the background color of the box to gray
//     borderRadius: "50%", // make the box a circle
// });



// gsap.to("#box2",{
//     rotation: 360, // rotate the box by 360 degrees
//     duration: 10, // duration of the animation
//     repeat: -1, // repeat the animation indefinitely
//     speed: 1, // speed of the animation
//     ease: "none", // ease of the animation
//     borderRadius: "50%", // make the box a circle
// })

// gsap.to("#box1",{
//     x:1450,
//     duration: 2,
//     delay: 1,
//     rotate:360,
//     borderRadius: "50%",
//     scale: 0.5,
//     yoyo: true,
//     repeat: -1,
// })
// gsap.from("#box2",{
//     x: 1450,
//     repeat: -1,
//     duration: 2,
//     delay: 1,
//     rotate:360,
//     borderRadius: "50%",
//     scale: 0.5,
//     yoyo: true,
// })

//  gsap.from("h1",{
//     y: 500,
//     yoyo: true,
//     color: "white",
//     opacity: 0,
//     duration: 2,
//     // speed: 1,
//     delay: 1,
//     stagger: 0.5, // stagger the animation by 0.5 seconds between each h1 element 
//  })

//  gsap.from("#box3",{
//     y:500,
//     duration: 2,
//     rotate:360,
//     scale: .3,
//     yoyo: true,
//     repeat: -1,
//     delay: 1,
//     speed: 10,
//     opacity: 0,
//     // borderRadius: "50%",
//  })

// navbar animation

var tl = gsap.timeline();

tl.from("#compName",{
    y:-20,
    duration: 1.5,
    delay: .5,
    opacity: 0,
    delay: 1,
    // ease: "power1.inOut",
}) 

tl.from("h4",{
    y:-20,
    duration: 1.1,
    // delay: .5,
    opacity: 0,
    stagger: 0.3,
    // ease: "power1.inOut",
}) 

// var tl2 = gsap.timeline();

// tl.from("#smile",{
//     x:-1500,
//     duration: 1,
//     delay: .5,
//     ease: "power1.inOut",
//     opacity: 0,
// })

// tl.from("#welcome",{
//     x:1500,
//     opacity: 0,
//     duration: 1,
//     delay: .5,
//     ease: "power1.inOut",
// })
// tl.from("#to",{
//     x:-1500,
//     opacity: 0,
//     duration: 1,
//     delay: .5,
//     ease: "power1.inOut",
// })
// tl.from("#website",{
//     x:1500,
//     opacity: 0,
//     duration: 1,
//     delay: .5,
//     ease: "power1.inOut",
// })

// tl.from("h1",{
//     y:100,
//     duration: 1,
//     delay: .5,
//     ease: "power1.inOut",
// })

tl.from("h1",{
    y:100,
    duration: 2,
    delay: .5,
    ease: "power1.inOut",
    opacity: 0,
    stagger: 0.5,
})

tl.from("#website span",{
    y:100,
    duration: 1,
    delay: .5,
    ease: "power1.inOut",
    opacity: 0,
    stagger: 0.5,
})