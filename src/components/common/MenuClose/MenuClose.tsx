import Image from 'next/image'
import { Element } from '@/definitions/element'
import { StyledCircleOutline, StyledMenuFader } from '@/components/common/MenuButton/MenuButton.styles'
import { useAppDispatch } from '@/store/store'
import { setIsMenuOpen } from '@/store/scene/actions'
import { StyledCloseIcon, StyledMenuClose, StyledMenuCloseText } from '@/components/common/MenuClose/MenuClose.styles'

export const MenuClose = () => {
  const dispatch = useAppDispatch()

  const handleOnClick = () => {
    dispatch(setIsMenuOpen(false))
    document.body.style.overflow = 'auto'
  }

  return (
    <StyledMenuClose id={Element.MENU_CLOSE} onClick={handleOnClick}>
      <StyledCloseIcon>
        <Image src={'/images/artwork/close.svg'} alt={'Eight Menu Icon'} width={130} height={130} quality={100} />
        <StyledCircleOutline />
        <StyledMenuFader />
      </StyledCloseIcon>
      <StyledMenuCloseText className='font-secondary'>Close</StyledMenuCloseText>
    </StyledMenuClose>
  )
}
