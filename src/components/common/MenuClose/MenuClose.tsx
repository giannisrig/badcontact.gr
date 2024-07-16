import Image from 'next/image'
import { Element } from '@/definitions/element'
import { StyledCircleOutline, StyledMenuFader } from '@/components/common/MenuButton/MenuButton.styles'
import { useAppDispatch } from '@/store/store'
import { setIsMenuOpen } from '@/store/scene/actions'
import { StyledCloseIcon, StyledMenuClose, StyledMenuCloseText } from '@/components/common/MenuClose/MenuClose.styles'
import { useMenuCloseAnimations } from '@/components/common/MenuClose/MenuClose.animations'

export const MenuClose = () => {
  const { menuCloseRef, animateOnMouseOver, animateOnMouseLeave } = useMenuCloseAnimations()
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    dispatch(setIsMenuOpen(false))
    document.body.style.overflow = 'auto'
  }

  return (
    <StyledMenuClose
      id={Element.MENU_CLOSE}
      ref={menuCloseRef}
      onClick={handleOnClick}
      onMouseEnter={animateOnMouseOver}
      onMouseLeave={animateOnMouseLeave}
    >
      <StyledCloseIcon className='icon'>
        <Image
          src={'/images/artwork/close.svg'}
          alt={'Menu Close'}
          title={'Menu Close'}
          width={130}
          height={130}
          quality={100}
        />
        <StyledCircleOutline />
        <StyledMenuFader />
      </StyledCloseIcon>
      <StyledMenuCloseText className='close-text font-secondary'>Close</StyledMenuCloseText>
    </StyledMenuClose>
  )
}
