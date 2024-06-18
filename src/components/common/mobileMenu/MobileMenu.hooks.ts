import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { RootState, useAppSelector } from '@/store/store'

gsap.registerPlugin(useGSAP)

export const useMenuAnimation = () => {
  const mobileMenuOpen = useAppSelector((state: RootState) => state.mobileMenu.open) // updated
  const animating = useRef(false)
  const container = useRef(null)

  useGSAP(
    () => {
      if (animating.current) return

      gsap.fromTo(
        container.current,
        {
          opacity: mobileMenuOpen ? 0 : 1,
          pointerEvents: mobileMenuOpen ? 'none' : 'all',
        },
        {
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'all' : 'none',
          duration: mobileMenuOpen ? 2 : 1,
          delay: mobileMenuOpen ? 0.5 : 0,
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
