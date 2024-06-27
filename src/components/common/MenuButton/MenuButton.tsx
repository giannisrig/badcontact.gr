'use client'

import Image from 'next/image'
import { EImage, Element } from '@/definitions/element'
import { useImageLoader } from '@/hooks/useImageLoader'
import {
  StyledCircleOutline,
  StyledMenuButton,
  StyledMenuFader,
  StyledMenuIcon,
  StyledMenuText,
} from '@/components/common/MenuButton/MenuButton.styles'
import { useMenuButtonAnimations } from '@/components/common/MenuButton/MenuButton.animations'

export const MenuButton = () => {
  const { onLoadImage } = useImageLoader()
  const { menuIconRef, animateOnMouseOver, animateOnMouseLeave } = useMenuButtonAnimations()

  return (
    <StyledMenuButton
      id={Element.MENU_BUTTON}
      ref={menuIconRef}
      onMouseEnter={animateOnMouseOver}
      onMouseLeave={animateOnMouseLeave}
    >
      <StyledMenuIcon>
        <Image
          id={EImage.EIGHT_ICON}
          src={'/images/artwork/eight.svg'}
          alt={'Eight Menu Icon'}
          width={130}
          height={130}
          quality={100}
          priority={true}
          onLoad={onLoadImage(EImage.EIGHT_ICON)}
        />
        <StyledCircleOutline id={Element.MENU_ICON_OUTLINE} />
        <StyledMenuFader id={Element.MENU_ICON_FADER} />
      </StyledMenuIcon>
      <StyledMenuText className='font-secondary'>Menu</StyledMenuText>
    </StyledMenuButton>
  )
}
