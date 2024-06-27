import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const BG_IRIS_ANIMATION_PROPS = {
  repeat: -1,
  duration: 4,
  scale: 1.15,
  opacity: 0.3,
  repeatDelay: 5,
  yoyo: true,
}

export const useBgIrisAnimation = () => {
  const bgIris = useRef(null)

  useGSAP(() => {
    if (bgIris?.current) {
      gsap.to(bgIris.current, BG_IRIS_ANIMATION_PROPS)
    }
  }, [bgIris])

  return {
    bgIris,
  }
}
