import Image from 'next/image'
import { Element } from '@/definitions/element'
import { appConfig } from '@/constants/config'

export const MenuImage = () => (
  <Image
    id={Element.MENU_LIST_IMAGE}
    src={`${appConfig.assets.artworkImagesUrl}/EightBallMenu.svg`}
    alt={'Eightball Menu Icon'}
    width={130}
    height={130}
    quality={100}
  />
)
