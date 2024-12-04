import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { getElementId } from '@/utils/elements.utils'
import { Element } from '@/definitions/element'
import gsap from 'gsap'
import { useAppSelector } from '@/store/store'
import { selectIsMenuOpened } from '@/store/ui/selectors'

export const useMenuAnimations = () => {
  const menuRef = useRef(null)
  const isMenuOpened = useAppSelector(selectIsMenuOpened)

  useGSAP(
    () => {
      if (menuRef.current && isMenuOpened) {
        gsap
          .timeline({
            duration: 1,
          })
          .to(menuRef.current, { opacity: 1 }, 0)
          .fromTo('.circle-point', { scale: 0 }, { scale: 1, stagger: 0.1 }, 0)
          .fromTo(getElementId(Element.MENU_LIST_IMAGE), { scale: 0 }, { scale: 1 }, 0)

        gsap.to(getElementId(Element.MENU_LIST_IMAGE), { rotation: '360', ease: 'none', duration: 40, repeat: -1 })
      } else {
        gsap.to(menuRef.current, { opacity: 0 })
        gsap.to(getElementId(Element.MENU_LIST_IMAGE), { rotation: '0', duration: 1 })
        gsap.to('.circle-point', { scale: 0 })
      }
    },
    {
      dependencies: [menuRef, isMenuOpened],
      scope: menuRef,
    }
  )

  return {
    menuRef,
  }
}
