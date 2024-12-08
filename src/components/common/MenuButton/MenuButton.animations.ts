import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { getElementId } from '@/utils/elements.utils'
import { EImage, Element } from '@/definitions/element'
import gsap from 'gsap'
import { useAppSelector } from '@/store/store'
import { selectIsMainContentScrollTriggered, selectIsMenuOpened } from '@/store/ui/selectors'

export const useMenuButtonAnimations = () => {
  const menuIconRef = useRef(null)
  const { contextSafe } = useGSAP()
  const isMainContentScrolled = useAppSelector(selectIsMainContentScrollTriggered)
  const isMenuOpened = useAppSelector(selectIsMenuOpened)

  useGSAP(() => {
    if (menuIconRef.current && !isMenuOpened) {
      gsap.to(menuIconRef.current, { opacity: 1 })
    }

    if (isMainContentScrolled && isMenuOpened) {
      gsap.to(getElementId(Element.LOGO), {
        scale: 1,
      })
    }

    if (isMainContentScrolled && !isMenuOpened) {
      gsap.to(getElementId(Element.LOGO), {
        scale: 1,
      })
    }
  }, [menuIconRef, isMenuOpened, isMainContentScrolled])

  const animateOnMouseOver = contextSafe(() => {
    if (menuIconRef.current && !isMenuOpened) {
      gsap
        .timeline({
          duration: 1,
        })
        .fromTo(getElementId(EImage.EIGHT_ICON), { rotation: 0 }, { rotation: 360 }, 0)
        .fromTo(getElementId(Element.MENU_ICON_OUTLINE), { scale: 1 }, { scale: 1.1 }, 0)
        .fromTo(getElementId(Element.MENU_ICON_FADER), { scale: 1 }, { scale: 1.6 }, 0)
        .fromTo(getElementId(Element.MENU_ICON_TEXT), { scale: 1, y: 0 }, { scale: 0.8, y: 5 }, 0)
        .to(menuIconRef.current, { y: 0 }, 0)
    }
  })

  const animateOnMouseLeave = contextSafe(() => {
    if (menuIconRef.current) {
      gsap
        .timeline({
          duration: 1,
        })
        .fromTo(getElementId(EImage.EIGHT_ICON), { rotation: 360 }, { rotation: 0 }, 0)
        .fromTo(getElementId(Element.MENU_ICON_OUTLINE), { scale: 1.1 }, { scale: 1 }, 0)
        .fromTo(getElementId(Element.MENU_ICON_FADER), { scale: 1.6 }, { scale: 1 }, 0)
        .fromTo(getElementId(Element.MENU_ICON_TEXT), { scale: 0.8, y: 5 }, { scale: 1, y: 0 }, 0)
        .to(menuIconRef.current, { y: isMainContentScrolled ? 25 : 0 }, 0)
    }
  })

  const animateOnClick = contextSafe(() => {
    if (menuIconRef.current) {
      gsap.to(menuIconRef.current, { opacity: 0 })
    }

    if (isMainContentScrolled) {
      gsap.to(getElementId(Element.LOGO), {
        scale: 1,
      })
    }
  })

  return {
    menuIconRef,
    animateOnMouseOver,
    animateOnMouseLeave,
    animateOnClick,
  }
}
