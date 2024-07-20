import { useRef } from 'react'
import { useAppSelector } from '@/store/store'
import { selectIsMenuOpened } from '@/store/ui/selectors'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const useMenuTextAnimations = () => {
  const menuTextRef = useRef(null)
  const isMenuOpened = useAppSelector(selectIsMenuOpened)

  useGSAP(
    () => {
      if (menuTextRef.current && isMenuOpened) {
        gsap
          .timeline({
            duration: 2,
            delay: 0.2,
          })
          .to(menuTextRef.current, { opacity: 1 }, 0)
      } else {
        gsap.to(menuTextRef.current, { opacity: 0 })
      }
    },
    {
      dependencies: [menuTextRef, isMenuOpened],
      scope: menuTextRef,
    }
  )

  return {
    menuTextRef,
  }
}
