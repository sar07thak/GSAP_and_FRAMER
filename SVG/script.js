var initialPath = 'M 10 150 Q 500 150 990 150';

var finalPath = 'M 10 150 Q 500 150 990 150';


document.querySelector("#string").addEventListener("mousemove",(dets)=>{
    // console.log(dets.clientX , dets.clientY);
    path = `M 10 150 Q ${dets.x} ${dets.y} 990 150`; 
    gsap.to("svg path",{
        attr:{ d:path },
        duration: 0.2,
        ease: "power1.Out"
    })
})


document.querySelector("#string").addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{ d:finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
}) 
