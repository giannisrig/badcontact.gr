import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const SPARKLES_ANIMATION_PROPS = {
  repeat: -1,
  duration: 0.35,
  scaleX: 1.1,
  opacity: 0.3,
  // repeatDelay: 0.2,
  // yoyo: true,
}

export const useSparklesAnimation = () => {
  const sparklesBase = useRef(null)
  const sparkles1 = useRef(null)
  const sparkles2 = useRef(null)
  const sparkles3 = useRef(null)
  const sparkles4 = useRef(null)

  useGSAP(() => {
    if (sparkles1?.current && sparkles2?.current && sparkles3?.current && sparkles4?.current) {
      gsap.to(sparklesBase.current, {
        ...SPARKLES_ANIMATION_PROPS,
        scaleX: 1,
        scaleY: 1.05,
        opacity: 0.8,
        yoyo: true,
      })
      gsap.to(sparkles1.current, {
        ...SPARKLES_ANIMATION_PROPS,
      })
      gsap.to(sparkles2.current, {
        ...SPARKLES_ANIMATION_PROPS,
      })
      gsap.to(sparkles3.current, {
        ...SPARKLES_ANIMATION_PROPS,
        delay: 0.1,
      })
      gsap.to(sparkles4.current, {
        ...SPARKLES_ANIMATION_PROPS,
        delay: 0.2,
      })
    }
  }, [sparkles1, sparkles2, sparkles3, sparkles4])

  return {
    sparklesBase,
    sparkles1,
    sparkles2,
    sparkles3,
    sparkles4,
  }
}
