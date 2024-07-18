import { useRef } from 'react'
import { useAppSelector } from '@/store/store'
import { selectIsMenuOpened } from '@/store/scene/selectors'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const useSocialLinksAnimations = () => {
  const socialLinksRef = useRef(null)
  const isMenuOpened = useAppSelector(selectIsMenuOpened)

  useGSAP(
    () => {
      if (socialLinksRef.current && isMenuOpened) {
        gsap
          .timeline({
            duration: 2,
            delay: 0.2,
          })
          .to(socialLinksRef.current, { opacity: 1 }, 0)
      } else {
        gsap.to(socialLinksRef.current, { opacity: 0 })
      }
    },
    {
      dependencies: [socialLinksRef, isMenuOpened],
      scope: socialLinksRef,
    }
  )

  return {
    socialLinksRef,
  }
}
