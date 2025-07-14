import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(()=>{
    gsap.to("#title",{
      opacity:1,
      y:0,
      delay:1,
      duration:1.5
    })
    gsap.to(".link",{
      opacity:1,
      y:0,
      delay:1,
      duration:1.5,
      stagger:0.4
    })
  },[])
  return (
    <div className='w-screen h-full overflow-hidden bg-zinc common-padding'>
      <div className='screen-max-width'>
        <div className=' w-full flex items-center justify-between'>
          <h1 id='title' className='section-heading'>Get the Highlights</h1>
          <div className='flex flex-wrap gap-5'>
            <p className='link'>Watch the Film <img src={watchImg} alt="watch" /></p>
            <p className='link'>Watch the Event <img src={rightImg} alt="watch" /></p>
          </div>

        </div>
        <VideoCarousel/>

      </div>
      
    </div>
  )
}

export default Highlights
