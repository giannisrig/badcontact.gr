import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const useMenuCloseAnimations = () => {
  const menuCloseRef = useRef(null)
  const { contextSafe } = useGSAP(undefined, {
    scope: menuCloseRef,
  })

  const animateOnMouseOver = contextSafe(() => {
    if (menuCloseRef.current) {
      gsap
        .timeline({
          duration: 1,
        })
        .to('.icon', { scale: 0.85 }, 0)
        .to('.close-text', { color: '#FAB5A7', y: -5 }, 0)
    }
  })

  const animateOnMouseLeave = contextSafe(() => {
    if (menuCloseRef.current) {
      gsap
        .timeline({
          duration: 1,
        })
        .to('.icon', { scale: 1 }, 0)
        .to('.close-text', { color: '#fff', y: 0 }, 0)
    }
  })

  return {
    menuCloseRef,
    animateOnMouseOver,
    animateOnMouseLeave,
  }
}
