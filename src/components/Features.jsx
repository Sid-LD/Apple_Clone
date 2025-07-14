import { useGSAP } from '@gsap/react'
import React from 'react'
import { animationWithGsap } from '../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../utils'
import { useRef } from 'react'
import gsap  from 'gsap'

const Features = () => {
    const videoRef=useRef()
    useGSAP(()=>{
         gsap.to("#exploreVideo",{
        scrollTrigger:{
            trigger:"exploreVideo",
            toggleActions:'play pause reverse start',
            start:'-10% bottom',//top of the trigger is 85% top of the view port
        },
        onComplete:()=>{
            videoRef.current.play()
        }
    })
        animationWithGsap('#features_title',{y:0, opacity:1,duration:2})
        animationWithGsap(".g_grow",
            {
                scale:1,
                opacity:1,
                ease:"power1"
            },
            {
                scrub:6
            }
        )
        animationWithGsap(".g_text",
            {
                y:0,
                opacity:1,
                duration:1.5,
                ease:"power1.inOut"
            }
        )

    },[])
  return (
    <section className='h-full w-full common-padding bg-zinc relative overflow-hidden'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full' >
                <h1 className='section-heading ' id='features_title'>
                    Explore the Full Story!
                </h1>

            </div>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
                <div className=' mt-32 mb-24 pl-24'>
                    <h2 className='text-5xl font-semibold lg:text-7xl'>
                        iPhone.
                    </h2>
                    <h2 className='text-5xl font-semibold lg:text-7xl' id='titanium'>
                        Forged in Titanium.
                    </h2>

                </div>
                <div className='flex-center flex-col sm:px-10'>
                    <div className='relative w-full h-[50vh] flex items-center'>
                        <video playsInline id='exploreVideo' className='w-full h-full object-cover object-center' preload='none' muted autoPlay ref={videoRef}>
                            <source src={exploreVideo} type='video/mp4'/>
                        </video>
                    </div>
                    <div className='flex flex-col w-full relative'>
                        <div className='feature-video-container'>
                            <div className='overflow-hidden h-[50vh] flex-1'> 
                                <img src={explore1Img} alt="titanium" className='feature-video g_grow' />
                            </div>
                            <div className='overflow-hidden h-[50vh] flex-1'> 
                                <img src={explore2Img} alt="titanium2" className='feature-video g_grow' />
                            </div>
                            {/* An element with flex-1 will expand to fill all available space, sharing it equally with any other flex-1 siblings. If it’s the only one, it takes all available space in the flex container. */}


                        </div>
                    </div>
                    <div className='feature-text-container'>
                        <div className='flex-1 flex-center'>
                            <p className='feature-text g_text'>
                                iPhone 15 Pro Max is 
                                <span className='text-white'> the first iPhone to feature an aerospace-grade titanium design </span>,
                                using the same alloy that spacecrafts use for mission in Mars and Saturn
                            </p>
                        </div>
                        <div className='flex-1 flex-center'>
                            <p className='feature-text g_text'>
                                Titanium has one of the best strength-to-weight ratio of any metal, making these our 
                                <span className='text-white'> lightest Pro Model ever </span>,
                                You will notice the difference the moment you pick one
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Features
//On enter(SCROLL IN),on leave(COME BACK), enter back(SCROLL DOWN), leave back(SCROLL UP)
//what will happen to this animation at 4 different distict places
//preload-none=>	Do not preload anything at all. The browser won’t download the video/audio file until the user actually hits play.
// object-fit: cover=>This makes the media fill the element’s content box while preserving its aspect ratio. The media may be clipped to fit.

// object-position: center=>This positions the object at the center of its container. (Default is also center, but you can explicitly set it or override others like object-left or object-right.)
