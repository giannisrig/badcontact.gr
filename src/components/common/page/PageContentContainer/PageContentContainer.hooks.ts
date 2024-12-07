import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useAppSelector } from '@/store/store'
import { selectIsMenuOpened } from '@/store/ui/selectors'

gsap.registerPlugin(useGSAP)

export const useOnMenuPageContentAnimation = () => {
  const isMenuOpened = useAppSelector(selectIsMenuOpened) // updated
  const animating = useRef(false)
  const container = useRef(null)

  useGSAP(
    () => {
      if (animating.current) return

      gsap.fromTo(
        container.current,
        {
          opacity: isMenuOpened ? 1 : 0,
        },
        {
          opacity: isMenuOpened ? 0 : 1,
          duration: isMenuOpened ? 0.4 : 1,
          delay: isMenuOpened ? 0 : 0.5,
          onStart: () => {
            animating.current = true
          },
          onComplete: () => {
            animating.current = false
          },
        }
      )
    },
    { scope: container, dependencies: [isMenuOpened] }
  )
  return container
}
