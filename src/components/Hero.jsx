import React, { useEffect } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { heroVideo,smallHeroVideo } from '../utils'
import { useState } from 'react'


const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth<760 ? smallHeroVideo : heroVideo)
  const handleVideoSrcSet=()=>{
    if(window.innerWidth<760){
      setVideoSrc(smallHeroVideo)
    }
    else{
      setVideoSrc(heroVideo)
    }
  }
  useEffect(()=>{
    window.addEventListener("resize",handleVideoSrcSet)
  },[])



  useGSAP(()=>{
    gsap.to("#hero",{
      opacity:1,
      delay:1.5,
      duration:1.5
    })
    gsap.to("#cta",{
      opacity:1,
      delay:1.5,
      duration:1.5,
      y:-50
    })
  },[])
  return (
    <section className='w-full bg-black relative nav-height'>
      <div className='h-5/6 flex-center flex-col'>
      <p id='hero' className='hero-title'>iPhone 15 Pro Max</p>
      <div className='md:w-10/12 w-9/12'>
      <video muted autoPlay playsInline={true} key={videoSrc}>
        <source src={videoSrc} type='video/mp4' />
      </video>
      </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='text-xl'>From ₹ 99,499 to ₹ 154,900</p>
      </div>
    </section>
  )
}

export default Hero
