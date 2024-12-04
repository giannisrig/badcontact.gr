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
import { useAppDispatch, useAppSelector } from '@/store/store'
import { setIsMenuOpen } from '@/store/ui/actions'
import { selectIsMenuOpened } from '@/store/ui/selectors'

export const MenuButton = () => {
  const dispatch = useAppDispatch()
  const { onLoadImage } = useImageLoader()
  const isMenuOpened = useAppSelector(selectIsMenuOpened)
  const pointerEvents = isMenuOpened ? 'none' : 'all'
  const { menuIconRef, animateOnMouseOver, animateOnMouseLeave, animateOnClick } = useMenuButtonAnimations()

  const handleOnClick = () => {
    dispatch(setIsMenuOpen(true))
    animateOnClick()
    document.body.style.overflow = 'hidden'
  }

  return (
    <StyledMenuButton
      id={Element.MENU_BUTTON}
      ref={menuIconRef}
      onClick={handleOnClick}
      onMouseEnter={animateOnMouseOver}
      onMouseLeave={animateOnMouseLeave}
      $pointerEvents={pointerEvents}
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
      <StyledMenuText id={Element.MENU_ICON_TEXT} className='font-secondary'>
        Menu
      </StyledMenuText>
    </StyledMenuButton>
  )
}
