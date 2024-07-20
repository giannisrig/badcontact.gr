import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useViewport } from '@/hooks/useViewport'

export const useMenuLinkAnimations = () => {
  const menuLinkRef = useRef(null)
  const { contextSafe } = useGSAP(undefined, {
    scope: menuLinkRef,
  })

  const animateOnMouseOver = contextSafe(() => {
    if (menuLinkRef.current) {
      gsap
        .timeline({
          duration: 1,
        })
        .to('.link-circle', { scale: 1.8 }, 0)
        .to('.link-title', { color: '#FAB5A7', y: 20 }, 0)
        .to('img', { opacity: 1, scale: 1 }, 0)
    }
  })

  const animateOnMouseLeave = contextSafe(() => {
    if (menuLinkRef.current) {
      gsap
        .timeline({
          duration: 1,
        })
        .fromTo('.link-circle', { scale: 1.8 }, { scale: 1 }, 0)
        .fromTo('.link-title', { color: '#FAB5A7', y: 20 }, { color: '#fff', y: 0 }, 0)
        .to('img', { opacity: 0, scale: 0 }, 0)
    }
  })

  return {
    menuLinkRef,
    animateOnMouseOver,
    animateOnMouseLeave,
  }
}
