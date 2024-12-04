import { EImage } from '@/definitions/element'

export interface SceneState {
  aspectRatio: number
  imagesLoaded: EImage[]
  isMainContentScrollTriggered: boolean
  isMenuOpened: boolean
}
