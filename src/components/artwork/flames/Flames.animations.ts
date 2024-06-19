import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const FLAMES_ANIMATION_PROPS = {
  repeat: -1,
  yoyo: true,
}

export const useFlamesAnimation = () => {
  const lightFlames = useRef(null)
  const mediumFlames = useRef(null)
  const darkFlames = useRef(null)
  const clonedBaseFlames = useRef(null)

  useGSAP(() => {
    if (lightFlames?.current && mediumFlames?.current && darkFlames?.current) {
      gsap.to(lightFlames.current, {
        ...FLAMES_ANIMATION_PROPS,
        duration: 0.1,
        opacity: 0.3,
      })
      gsap.to(mediumFlames.current, {
        ...FLAMES_ANIMATION_PROPS,
        duration: 0.2,
        delay: 0.4,
        opacity: 0.5,
        scaleX: 1.02,
      })
      gsap.to(darkFlames.current, {
        ...FLAMES_ANIMATION_PROPS,
        duration: 1,
        delay: 0.6,
        scaleX: 0.99,
        opacity: 0.6,
      })
      gsap.to(clonedBaseFlames.current, {
        ...FLAMES_ANIMATION_PROPS,
        duration: 0.1,
        opacity: 0.5,
        scale: 1.02,
      })
    }
  }, [lightFlames, mediumFlames, darkFlames, clonedBaseFlames])

  return {
    lightFlames,
    mediumFlames,
    darkFlames,
    clonedBaseFlames,
  }
}
