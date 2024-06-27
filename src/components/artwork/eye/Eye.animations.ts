import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { eyeFlamesScrollTrigger } from '@/constants/animations/scrollTriggers'
import { getElementId } from '@/utils/elements.utils'
import { Element } from '@/definitions/element'

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
      )
        .fromTo(
          getElementId(Element.LOGO),
          {
            scale: 1,
          },
          {
            scale: 0.6,
          },
          0
        )
        .fromTo(
          getElementId(Element.TERRAIN),
          {
            scale: 1,
            yPercent: 0,
            filter: 'brightness(1)',
          },
          {
            scale: 1.5,
            yPercent: 10,
            filter: 'brightness(0.3)',
          },
          0
        )
        .fromTo(
          getElementId(Element.CONTENT_FADER),
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
    }
  }, [eye])

  return {
    eye,
  }
}
