import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getElementId } from '@/utils/elements.utils'
import { Element } from '@/definitions/element'

gsap.registerPlugin(ScrollTrigger)

export const eyeFlamesScrollTrigger = {
  trigger: getElementId(Element.EYE_FLAMES_SPACER),
  start: 'center 15%',
  end: 'bottom 25%',
  scrub: 1,
  markers: true,
}
