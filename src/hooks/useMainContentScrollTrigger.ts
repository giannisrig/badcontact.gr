import { getElementId } from '@/utils/elements.utils'
import { Element } from '@/definitions/element'
import { consoleLogger } from '@/helpers/consoleLogger'
import { ELog } from '@/definitions/logger'
import { useAppDispatch } from '@/store/store'
import { setIsMainContentScrollTriggered } from '@/store/ui/actions'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useMainContentScrollTrigger = () => {
  const dispatch = useAppDispatch()

  const mainContentScrollTrigger = {
    trigger: getElementId(Element.EYE_FLAMES_SPACER),
    start: 'center 10%',
    end: 'bottom 20%',
    scrub: 1,
    onEnter: () => {
      dispatch(setIsMainContentScrollTriggered(true))
      consoleLogger.log(ELog.ANIMATION, `onEnter: Eye Flames Scroll Trigger `)
    },
    onLeave: () => {
      dispatch(setIsMainContentScrollTriggered(true))
      consoleLogger.log(ELog.ANIMATION, `onLeave: Eye Flames Scroll Trigger `)
    },
    onEnterBack: () => {
      dispatch(setIsMainContentScrollTriggered(false))
      consoleLogger.log(ELog.ANIMATION, `onEnterBack: Eye Flames Scroll Trigger `)
    },
    onLeaveBack: () => {
      dispatch(setIsMainContentScrollTriggered(false))
      consoleLogger.log(ELog.ANIMATION, `onLeaveBack: Eye Flames Scroll Trigger `)
    },
    // markers: true,
  }

  return {
    mainContentScrollTrigger,
  }
}
