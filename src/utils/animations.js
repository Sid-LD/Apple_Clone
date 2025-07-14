import gsap from "gsap"


import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const animationWithGsap=(target, animationProps, scrollProps)=>{
    gsap.to(target,{
        ...animationProps,
        scrollTrigger:{
            trigger:target,
            toggleActions:'restart reverse restart reverse',
            start:'top 85%',//top of the trigger is 85% top of the view port
            ...scrollProps
        }
    })
}

export const animateWithGsaptimeline=(timeline,rotationRef,rotationState,firstTarget,secondTarget,animationProps)=>{
    timeline.to(rotationRef.current.rotation,{
        y:rotationState,
        duration:1,
        ease:'power2inOut'
    })

    timeline.to(firstTarget,{
        ...animationProps,
        ease:'power2inOut'
    },
    '<'
)
    timeline.to(secondTarget,{
        ...animationProps,
        ease:'power2inOut'
    },
    '<'
)
}

//On enter(SCROLL IN),on leave(COME BACK), enter back(SCROLL DOWN), leave back(SCROLL UP)
//what will happen to this animation at 4 different distict places