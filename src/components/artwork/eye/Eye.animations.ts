import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { eyeFlamesScrollTrigger } from '@/constants/animations/scrollTriggers'

export const useEyeAnimations = () => {
  const eye = useRef(null)

  useGSAP(() => {
    if (eye?.current) {
      const tl = gsap.timeline({
        scrollTrigger: eyeFlamesScrollTrigger,
      })

      tl.fromTo(
        eye?.current,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          // duration: 1,
          // ease: 'power3.out',
        },
        {
          y: -40,
          scale: 0.8,
          opacity: 0.5,
        },
        0
      ).fromTo(
        '#logo',
        {
          scale: 1,
        },
        {
          scale: 0.6,
        },
        0
      )
    }
  }, [eye])

  return {
    eye,
  }
}
