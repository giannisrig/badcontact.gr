import { StyledHeader } from '@/components/common/Header/Header.styles'
import { MenuText } from '@/components/common/Header/components/MenuText/MenuText'
import { SocialLinks } from '@/components/common/Header/components/SocialLinks/SocialLinks'
import { Menu } from '@/components/common/Header/components/Menu/Menu'
import React from 'react'
import { useAppSelector } from '@/store/store'
import { selectIsMenuOpened } from '@/store/scene/selectors'

export const Header = () => {
  const isMenuOpened = useAppSelector(selectIsMenuOpened)
  const pointerEvents = !isMenuOpened ? 'none' : 'all'
  return (
    <StyledHeader $pointerEvents={pointerEvents}>
      <MenuText />
      <SocialLinks />
      <Menu />
    </StyledHeader>
  )
}
