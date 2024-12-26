import React from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const App = () => {

  
  const handlemove = (e) => {
     gsap.to('.box',{
      x:e.clientX,
      y:e.clientY,
      duration:0.5,
      ease:"back.out(2)",
     })
  }
 
  return (
    <>
    <div className="box"></div>
    <section className="main" onMouseMove={handlemove}>
    </section>
    </>
  )
}
