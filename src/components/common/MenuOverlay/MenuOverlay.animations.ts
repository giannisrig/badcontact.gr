import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useAppSelector } from '@/store/store'
import { selectIsMenuOpened } from '@/store/ui/selectors'

export const useMenuOverlayAnimations = () => {
  const menuOverlayRef = useRef(null)
  const isMenuOpened = useAppSelector(selectIsMenuOpened)

  useGSAP(() => {
    if (menuOverlayRef.current) {
      gsap.to(menuOverlayRef.current, { opacity: isMenuOpened ? 1 : 0 })
    }
  }, [menuOverlayRef, isMenuOpened])

  return { menuOverlayRef }
}
