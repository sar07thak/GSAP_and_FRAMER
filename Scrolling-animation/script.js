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