function animateText(){ 
  var h1 = document.querySelector("h1");
  
  console.log(h1);
  
  var selectedText = h1.textContent ;
  console.log(selectedText);
  
  var arr = selectedText.split("");
  var sum = "";

  const mid = Math.floor(arr.length/2);
  console.log(mid);
  arr.forEach((value,index)=>{
    console.log(value,index);
    if( index < mid){
      sum += `<span class="left">${value}</span>`
    }else{
      sum += `<span class="right">${value}</span>`
    }   
  })
  console.log(sum);
  h1.innerHTML = sum ;
}

animateText();

// var tl = gsap.timeline();

gsap.from("h1 .left",{
  y: 35,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  ease: "back.inOut",
  stagger: 0.15,
})

gsap.from("h1 .right",{
  y: 35,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  ease: "back.inOut",
  stagger: -0.15,
})


