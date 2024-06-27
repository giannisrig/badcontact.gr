import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { getElementId } from '@/utils/elements.utils'
import { EImage, Element } from '@/definitions/element'
import gsap from 'gsap'
import { eyeFlamesScrollTrigger } from '@/constants/animations/scrollTriggers'

export const useMenuButtonAnimations = () => {
  const menuIconRef = useRef(null)
  const { contextSafe } = useGSAP({ scope: menuIconRef })
  useGSAP(() => {
    if (menuIconRef?.current) {
      const tl = gsap.timeline({
        scrollTrigger: eyeFlamesScrollTrigger,
      })

      tl.fromTo(
        menuIconRef?.current,
        {
          y: 0,
        },
        {
          y: 25,
        },
        0
      )
    }
  }, [menuIconRef])

  const animateOnMouseOver = contextSafe(() => {
    gsap
      .timeline({
        duration: 1,
      })
      .fromTo(getElementId(EImage.EIGHT_ICON), { rotation: 0 }, { rotation: 360 }, 0)
      .fromTo(getElementId(Element.MENU_ICON_OUTLINE), { scale: 1 }, { scale: 1.1 }, 0)
      .fromTo(getElementId(Element.MENU_ICON_FADER), { scale: 1 }, { scale: 1.6 }, 0)
      .fromTo('h5', { scale: 1, y: 0 }, { scale: 0.8, y: 5 }, 0)
  })

  const animateOnMouseLeave = contextSafe(() => {
    gsap
      .timeline({
        duration: 1,
      })
      .fromTo(getElementId(EImage.EIGHT_ICON), { rotation: 360 }, { rotation: 0 }, 0)
      .fromTo(getElementId(Element.MENU_ICON_OUTLINE), { scale: 1.1 }, { scale: 1 }, 0)
      .fromTo(getElementId(Element.MENU_ICON_FADER), { scale: 1.6 }, { scale: 1 }, 0)
      .fromTo('h5', { scale: 0.8, y: 5 }, { scale: 1, y: 0 }, 0)
  })

  return {
    menuIconRef,
    animateOnMouseOver,
    animateOnMouseLeave,
  }
}
