import React from 'react'
import {chipImg, frameImg, frameVideo} from "../utils"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { animationWithGsap } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);
const HowItWorks = () => {4
    const videoRef=useRef()

    useGSAP(()=>{
        gsap.from("#chip",{
            scrollTrigger:{
                trigger:"#chip",
                start:"20% bottom"
            },
            opacity:0,
            scale:2.5,
            duration:2,
            ease:"power2.inOut"
        })
        animationWithGsap(".g_fadeIn",{y:0, opacity:1,duration:1,ease:"power2.inOut",scale:1})
    },[])
  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id='chip' className='flex-center w-full my-20'>
                <img src={chipImg} alt="chip"  width={180} height={180} />
            </div>
            <div className='flex flex-col items-center m-8'>
                <h2 className='hiw-title'>
                    A17 Pro Max 
                    </h2>
                    <br />
                <h2 className='hiw-title'>A MONSTER Win for gaming</h2>

                <p className='hiw-subtitle'>
                    It's here, The biggest redesign in the HISTORY of App GPU.
                </p>
            </div>

            <div className='mt-10 md:mt-20 mb-14'>
                <div className='relative h-full flex-center'>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt="frame" className='bg-transparent relative z-10' />

                    </div>
                    <div className='hiw-video'>
                        <video playsInline  className='pointer-events-none' preload='none' muted autoPlay ref={videoRef} >
                            <source src={frameVideo}  type='video/mp4'/>
                        </video>
                    </div>
                </div>
                <p className='text-gray-200 mt-5 text-center font-semibold text-lg'>
                    Honkai : Star Rail
                </p>

                 <div className='hiw-text-container translate-y-6'>
                        <div className='flex-1 flex justify-center flex-col'>
                            <p className='hiw-text g_fadeIn'>
                                A17 Pro is an entirely new class of iPhone chip that delivers our
                                <span className='text-white'> best graphic by far </span>,
                                 unlocking next‑level gaming performance and stunning visual detail in every frame.
                            </p>
                        </div>
                        <div className='flex-1 flex  flex-col g_fadeIn  '>
                            <p className='hiw-text '>New</p>
                            <p className='hiw-bigtext'>Pro class GPU</p>
                            <p className='hiw-text '>with 6 cores </p>

                        </div>
                        
                    </div>

                


                
            </div>

        </div>

    </section>
  )
}

export default HowItWorks
