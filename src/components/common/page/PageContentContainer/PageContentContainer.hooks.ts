import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { RootState, useAppSelector } from '@/store/store'

gsap.registerPlugin(useGSAP)

export const useOnMenuPageContentAnimation = () => {
  const mobileMenuOpen = useAppSelector((state: RootState) => state.mobileMenu.open) // updated
  const animating = useRef(false)
  const container = useRef(null)

  useGSAP(
    () => {
      if (animating.current) return

      gsap.fromTo(
        container.current,
        {
          opacity: mobileMenuOpen ? 1 : 0,
        },
        {
          opacity: mobileMenuOpen ? 0 : 1,
          duration: mobileMenuOpen ? 0.4 : 1,
          delay: mobileMenuOpen ? 0 : 0.7,
          onStart: () => {
            animating.current = true
          },
          onComplete: () => {
            animating.current = false
          },
        }
      )
    },
    { scope: container, dependencies: [mobileMenuOpen] }
  )
  return container
}
