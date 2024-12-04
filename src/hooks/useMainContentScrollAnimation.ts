import { useMainContentScrollTrigger } from '@/hooks/useMainContentScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { getElementId } from '@/utils/elements.utils'
import { Element } from '@/definitions/element'

export const useMainContentScrollAnimation = () => {
  const { mainContentScrollTrigger } = useMainContentScrollTrigger()

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: mainContentScrollTrigger,
    })

    tl.fromTo(
      getElementId(Element.EYE),
      {
        y: 0,
        scale: 1,
        opacity: 1,
      },
      {
        y: -40,
        scale: 0.8,
        opacity: 0.5,
      },
      0
    )
      .fromTo(
        getElementId(Element.FLAMES),
        {
          opacity: 1,
          scale: 1,
        },
        {
          opacity: 0,
          scale: 0.7,
        },
        0
      )
      .fromTo(
        getElementId(Element.LOGO),
        {
          scale: 1,
        },
        {
          scale: 0.6,
        },
        0
      )
      .fromTo(
        getElementId(Element.TERRAIN),
        {
          scale: 1,
          yPercent: 0,
          filter: 'brightness(1)',
        },
        {
          scale: 1.5,
          yPercent: 10,
          filter: 'brightness(0.3)',
        },
        0
      )
      .fromTo(
        getElementId(Element.MENU_BUTTON),
        {
          y: 0,
        },
        {
          y: 28,
        },
        0
      )
      .fromTo(
        getElementId(Element.CONTENT_FADER),
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
  })
}
